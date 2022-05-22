## 多节点部署

很多企业或个人爬虫管理用户都有在多个节点上跑爬虫任务的需求，也就是在分布式节点上管理爬虫。例如一个企业有多台服务器，需要在这些服务器集群上运行、监控、操作他们的爬虫，并集中统一查看和管理，这种应用场景就非常适合天生支持分布式管理的爬虫管理平台 Crawlab。要让各个节点运行的 Crawlab 服务协同工作在同一个网络，**只需要让这些服务连接到 MongoDB 和 Redis 数据库，而不需要暴露自己的 IP 和 端口**。

下图是一个多节点部署的示意图，展示了 Crawlab 分布式集群是如何工作的。

![](http://static-docs.crawlab.cn/multi-node-deployment.png)

每一个 Crawlab 服务（天蓝色大 C 图标）都在一台服务器上，而处于中心位置的 MongoDB 和 Redis 数据库作为它们的通信媒介，连接着主节点（Master）和各个工作节点（Worker）。目前来说主节点只能有一个。这样的一个 Crawlab 分布式节点网络，形成一个多节点的集群，可以让爬虫在任意个节点上运行；运行的数据（例如系统信息）可以通过 Redis 传输回主节点，再呈现给前端界面；主节点也可以通过 Redis 对工作节点 “发号施令”；而 MongoDB 也储存着各个节点的相关信息，供前端界面使用。本小节着重讲 Crawlab 的多节点部署，而不会讲 Crawlab 分布式原理，如果需要了解更多，请参考 [原理章节](../Architecture/README.md)。

### 1. 准备工作：部署 MongoDB 和 Redis

在生产环境中多节点部署，我们推荐将 MongoDB 和 Redis 分开部署，也就是说数据库将单独成为一个服务，而不与 Crawlab 服务耦合在一起。

在 [快速开始](../QuickStart/README.md) 和 [Docker 部署](Docker.md) 中，我们都用了 Docker Compose 来启动 Crawlab 和数据库服务。这样其实是将 MongoDB、Redis 跟 Crawlab 服务耦合在了一起。当然这样做也没有太大问题，但生产环境中我们并不推荐。

在启动 MongoDB 和 Redis 过程中，**需要将其端口暴露给其他 Crawlab 节点**。在生产环境中我们强烈推荐设置密码。

本小节不会具体介绍部署 MongoDB 和 Redis 的步骤，不过我们推荐用 Docker 部署，这样更简单。部署教程请参考下列文档。

- [MongoDB 官方安装文档](https://docs.mongodb.com/manual/installation)
- [MongoDB Dockerhub 主页](https://hub.docker.com/_/mongo)
- [Redis 官方安装文档](https://redis.io/download)
- [Redis Dockerhub 主页](https://hub.docker.com/_/redis)

### 2. 部署主节点

不管您是用 [Docker 部署](Docker.md)、[直接部署](Direct.md) 还是 [Kubernetes](Kubernetes.md)，您都需要首先部署一个主节点。

**Docker**

如何通过直接部署来启动一个 Crawlab 节点请参考 [Docker 部署章节](Docker.md)。主节点的启动只需要注明一个环境变量，`CRAWLAB_SERVER_MASTER` 为 `Y`。同时，需要在 `environment` 中配置 MongoDB 和 Redis 的连接信息。具体配置请参考 [配置章节](../Config/README.md)。

**直接部署**

如何通过直接部署来启动一个 Crawlab 节点请参考 [直接部署章节](Direct.md)。要注意的是，在 `./backend/conf/config.yml` 里需要将 `server.master` 对应的值设置为 `Y`。同时，需要在 `mongo.*` 和 `redis.*` 下配置 MongoDB 和 Redis 的连接信息。具体配置请参考 [配置章节](../Config/README.md)。

**Kubernetes**

Kubernetes 的主节点部署请参考 [Kubernetes 部署章节](Kubernetes.md)。主节点的启动只需要注明一个环境变量，`CRAWLAB_SERVER_MASTER` 为 `Y`。

### 3. 部署工作节点

您需要在另一台或多台服务器上部署工作节点。总的来说不难，但需要注意的是您能在这些服务器上顺利连接到之前部署的 MongoDB 和 Redis（请确保 MongoDB 和 Redis 端口暴露出来）。

**Docker**

如何通过直接部署来启动一个 Crawlab 节点请参考 [Docker 部署章节](Docker.md)。工作节点的启动只需要注明一个环境变量，`CRAWLAB_SERVER_MASTER` 为 `N`。同时，需要在 `environment` 中配置 MongoDB 和 Redis 的连接信息，请保证您连接的数据库和主节点连接的是同一个数据库。具体配置请参考 [配置章节](../Config/README.md)。

**直接部署**

如何通过直接部署来启动一个 Crawlab 节点请参考 [直接部署章节](Direct.md)。要注意的是，在 `./backend/conf/config.yml` 里需要将 `server.master` 对应的值设置为 `N`。同时，需要在 `mongo.*` 和 `redis.*` 下配置 MongoDB 和 Redis 的连接信息，请保证您连接的数据库和主节点连接的是同一个数据库。具体配置请参考 [配置章节](../Config/README.md)。

**Kubernetes**

对于 Kubernetes 来说，部署工作节点非常简单，只需要在 K8S 主节点上运行以下代码。

```bash
kubectl apply -f https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-worker.yaml
```

如果您想定制化一部分部署信息，例如设置工作节点的个数（Replicas），您可以将 `yaml` 文件下载下来，存为 `crawlab-worker.yaml`，并加以修改，然后运行 `kubectl apply -f crawlab-worker.yaml`。具体内容请参考 [Kubernetes 部署章节](Kubernetes.md)。

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

### 5. 其他问题

**5.1 时间漂移问题**

有时候您可能会发现工作节点启动一段时间之后就异常退出了。而您检查了数据库配置以及主节点是否已启动，均未发现异常。这时，有很大可能是因为工作节点与主节点的时间不同步导致的。这时您需要根据节点心跳信息的 `update_ts_unix` 来查看工作节点的时间戳与主节点的时间戳是否一致（相差 60 秒以内）。

如果有较大差异，这属于**时间漂移问题**。这时您需要对每一台服务器做时间同步。可以利用 `ntp` 这个模块来解决时间同步的问题。请到 [ntp 官网](http://www.ntp.org.cn/) 或其他网上资料来安装、配置 `ntp`。

