## RPC（Remote Procedure Call）

In fact, RPC can be regarded as a kind of node communication. You can find in [node communication chapter](NodeCommunication.md) that we use PubSub of Redis for node communication. This design mode of message publish/subscribe is an effective way to realize node communication, but it has two problems:

1. PubSub's data is real-time and it will be lost with redis downtime;
2. Developing a communication service based on PubSub requires the use of 'goroutine' and 'channel', which increases the development difficulty and reduces the maintainability.

The second problem is more difficult. If we want to add more functions, we need to write a lot of asynchronous code, which will increase the coupling between system modules, resulting in poor scalability, and it is difficult to read the code. Therefore, in order to solve this problem, we adopt the RPC service based on Redis delay message queue. The figure below is a schematic diagram of the RPC implementation.

![](http://static-docs.crawlab.cn/rpc-architecture.png)

Each node has a client(Client) and a server(Server). The client is used to send messages to the target node(Target Node) and receive the returned messages. The server is used to receive, process and return messages to the client of the source node(Source Node).

The whole RPC communication process is as follows:

1. The client of the source node pushes the message to Redis's 'nodes:<node_id>' by 'LPUSH', and executes 'BRPOP nodes:<node_id>:<msg_id>' to block and listen to the message queue;
2. The server of the target node has been listening for 'nodes:<node_id>' by 'BRPOP'. After receiving the message, the corresponding program will be executed by the 'Method' field in the message;
3. After the target node finishes executing the corresponding program, the server pushes the message to Redis's 'nodes:<node_id>:<msg_id>' by 'LPUSH';
4. Since the client of the source node has been listening to the message queue of 'nodes:<node_id>:<msg_id>', when the server of the target node pushes the message to the queue, the client of the source node will receive the returned message immediately and do subsequent processing.

In this way, the communication process of the whole node is completed by Redis. The advantage is that you do not need to expose the IP address and port of HTTP, you only need to know the node ID to complete RPC communication.

这样设计后的 RPC 代码比较容易理解和维护。每次需要扩展新的通信类别时，只需要继承 `rpc.Service` 类，实现 `ClientHandle`（客户端处理方法）和 `ServerHandle`（服务端处理方法）方法就可以了。
RPC code designed in this way is easy to understand and maintain. When you want to extend a new communication class, you only need to inherit the 'rpc.Service' class and implement the 'ClientHandle'(for Client) and 'ServerHandle'(for Server) methods.

