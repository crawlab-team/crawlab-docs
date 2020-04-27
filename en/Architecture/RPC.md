## RPC（Remote Procedure Call）

其实 RPC 可以算作节点通信的一种。您可以在 [节点通信章节](./NodeCommunication.md) 中发现我们用到了 Redis 的 PubSub 来做节点通信。这种消息订阅-发布设计模式是一种有效的实现节点通信的方式，但是它有两个问题：

1. PubSub 的数据是即时的，会随着 Redis 宕机而丢失；
2. 写基于 PubSub 的通信服务会要求用到 `goroutine` 和 `channel`，这加大了开发难度，降低了可维护性。

其中，第二个问题是比较棘手的。如果我们希望加入更多的功能，需要写大量的异步代码，这会加大系统模块间的耦合度，造成扩展性很差，而且代码阅读起来很痛苦。因此，为了解决这个问题，我们采用了基于 Redis 延迟消息队列的 RPC 服务。下图是该 RPC 实现的示意图。

![](http://static-docs.crawlab.cn/rpc-architecture.png)

每一个节点都有一个客户端（Client）和服务端（Server）。客户端用于发送消息到目标节点（Target Node）并接收其返回的消息，服务端用于接收、处理源节点（Source Node）的消息并返回消息给源节点的客户端。

整个 RPC 通信的流程如下：

1. 源节点的客户端通过 `LPUSH` 将消息推送到 Redis 的 `nodes:<node_id>` 中，并执行 `BRPOP nodes:<node_id>:<msg_id>` 阻塞并监听这个消息队列；
2. 目标节点的服务端通过 `BRPOP` 一直在监听 `nodes:<node_id>`，收到消息后，通过消息中的 `Method` 字段执行对应的程序；
3. 目标节点执行完毕后，服务端通过 `LPUSH` 将消息推送到 Redis 的 `nodes:<node_id>:<msg_id>` 中；
4. 由于源节点客户端一直在监听 `nodes:<node_id>:<msg_id>` 这个消息队列，当目标节点服务端推送消息到这个队列后，源节点客户端将立即收到返回的消息，再做后续处理。

这样，整个节点的通信流程就通过 Redis 完成了。这样做的好处在于不用暴露 HTTP 的 IP 地址和端口，只需要知道节点 ID 即可完成 RPC 通信。

这样设计后的 RPC 代码比较容易理解和维护。每次需要扩展新的通信类别时，只需要继承 `rpc.Service` 类，实现 `ClientHandle`（客户端处理方法）和 `ServerHandle`（服务端处理方法）方法就可以了。

