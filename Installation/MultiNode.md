## 多节点部署

很多企业或个人爬虫管理用户都有在多个节点上跑爬虫任务的需求，也就是在分布式节点上管理爬虫。例如一个企业有多台服务器，需要在这些服务器集群上运行、监控、操作他们的爬虫，并集中统一查看和管理，这种应用场景就非常适合天生支持分布式管理的爬虫管理平台 Crawlab。要让各个节点运行的 Crawlab 服务协同工作在同一个网络，**只需要让这些服务连接到 MongoDB 和 Redis 数据库，而不需要暴露自己的 IP 和 端口**。

下图是一个多节点部署的示意图，展示了 Crawlab 分布式集群是如何工作的。

![](http://static-docs.crawlab.cn/multi-node-deployment.png)

每一个 Crawlab 服务（天蓝色大 C 图标）都在一台服务器上，而处于中心位置的 MongoDB 和 Redis 数据库作为它们的通信媒介，连接着主节点（Master）和各个工作节点（Worker）。目前来说主节点只能有一个。这样的一个 Crawlab 分布式节点网络，形成一个多节点的集群，可以让爬虫在任意个节点上运行；运行的数据（例如日志）可以通过 Redis 传输回主节点，再呈现给前端界面；主节点也可以通过 Redis 对工作节点 “发号施令”；而 MongoDB 也储存着各个节点的相关信息，供前端界面使用。本小节着重讲 Crawlab 的多节点部署，而不会讲 Crawlab 分布式原理，如果需要了解更多，请参考 [原理章节](../Architecture/README.md)。

### 1. 准备工作：部署 MongoDB 和 Redis

TODO：待补充

### 2. 部署主节点

不管您是用 [Docker 部署](./Docker.md)、[直接部署](./Direct.md) 还是 [Kubernetes](./Kubernetes.md)，您都需要首先部署一个主节点。

对于 Docker 和 Kubernetes 来说，主节点的启动只需要注明一个环境变量，`CRAWLAB_SERVER_MASTER` 为 `Y`，表示这个节点是主节点；对于直接部署来说，需要在 `./backend/conf/config.yml` 里将 `server.master` 对应的值设置为 `Y`。

启动之前，您还需要设置 MongoDB 和 Redis 的连接信息。同样的，Docker 和 Kubernetes 部署需要通过环境变量的方式数据库连接信息；直接部署需要在 `./backend/conf/config.yml` 中做相应配置。您可以参考 [配置章节](../Config/README.md) 了解更多信息。

然后启动节点，打开浏览器输入相应的 URL，登录，导航到节点页面，您就可以看到主节点已经启动了。

### 3. 部署工作节点

TODO：待补充

### 4. 节点心跳信息

每个节点都会在 Redis 中储存心跳信息来保持在线状态。

如何知道节点已经启动了呢？一个办法是在 Crawlab 界面的节点页面上查看，另一个更为准确的办法是在 Redis 中查看。方法是执行 `HKEYS nodes` 命令。然后根据列出来的 `key`，执行 `HGET nodes <key>` 来查看心跳信息。心跳信息类似如下内容：

```json
{
  "key": "hostname",
  "mac": "ac:de:48:00:11:22",
  "ip": "192.168.0.2",
  "hostname": "hostname",
  "master": true,
  "update_ts": "2020-03-08T22:44:20.035637+09:00",
  "update_ts_unix": 1583675060
}
```

这里是用了 `hostname` 作为节点 `key`，也就是唯一识别符，当然也可以指定 `mac` 或 `ip` 来作为唯一识别符。

⚠️注意：在 Docker 多节点部署中，我们不推荐使用 `mac`，因为这可能不是唯一的；相反我们更推荐使用 `ip` 或 `hostname`。在 Kubernetes 部署中，推荐使用 `hostname` 来作为唯一识别符。

我们可以注意一下 `update_ts` 和 `update_ts_unix` 这两个字段，它们表示心跳信息更新的时间。如果这个时间与当前时间差距 60 秒以上，则表示该节点已经处于离线状态；反之，如果差距 60 秒以内，则是在线状态。

### 5. 时区问题

TODO：待补充