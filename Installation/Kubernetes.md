## Kubernetes 部署

[Kubernetes（K8S）](https://www.kubernetes.org.cn/) 是非常强大的容器编排工具，可以管理大型集群、微服务、分布式应用等等，是生产环境多节点部署中非常合适的选择。

而 Crawlab 作为分布式爬虫管理平台，同样也支持 Kubernetes 部署。Kubernetes 部署适合比较大型的分布式应用，但如果您有几台机器，也是可以实践的，Kubernetes 将降低您管理分布式应用的成本。

如果对 Kubernetes 还不了解，可以在 [Kubernetes 中文社区入门课程](https://www.kubernetes.org.cn/course) 中学习相关知识；如果您已经了解 Docker，可以参考另外一个比较不错的免费资源，[《从Docker到Kubernetes进阶》](https://www.qikqiak.com/k8s-book/)；同时也推荐掘金的 [《Kubernetes 从上手到实践》](https://juejin.im/book/5b9b2dc86fb9a05d0f16c8ac) 掘金小册（付费）学习快速入门 K8S 集群的知识；如果想深入了解 K8S 的原理，建议学习极客时间上张磊的 [《深入剖析Kubernetes》](https://time.geekbang.org/column/intro/116)。注意，由于 Kubernetes 发展很快，可能很多教程的 K8S 版本已经有些老了，有些命令在新版本不生效，因此为了保证您使用的命令和配置是最新的版本，请开发者参考 [Kubernetes 官方文档](https://kubernetes.io/zh/docs/home/)。

本小节将详细介绍如何在一个 Kubernetes 集群上搭建 Crawlab 多节点应用。首先我们假设您有多台服务器，操作系统均为 Ubuntu 16.04。

**推荐人群**: 

- 需要在生产环境中实践多节点部署 Crawlab 的开发者
- 需要部署大规模爬虫应用（例如分布式爬虫）的开发者
- 了解 Docker、Kubernetes 或希望学习相关知识的开发者

**推荐配置**:

- Docker: 18.03+
- Kubernetes: 1.17.3+

### 1. 节点安装配置

如果您已经有一个工作的 K8S 集群，您可以略过本节，直接跳到 **2. 配置 Crawlab**。

#### 1.1 安装 Docker

我们在 [Docker 安装部署](./Docker.md) 中已经详细讲述了如何安装 Docker，请参考该小节的安装教程在每一台机器上安装 Docker。

⚠️注意：您需要在每一台机器上安装 Docker。

#### 1.2 安装 Kubernetes

安装 Kubernetes 的过程比较繁琐，建议您耐心操作。我们首先将在主节点上安装和配置 Kubernetes，主节点名称叫 master。

##### 1.2.1 拉取 Kubernetes 基础镜像

如果您有比较好的网络环境（例如在国外），可以考虑忽略这一步。

这一步是将 Kubernetes 需要的基础镜像拉取下来，然而国内网速比较糟糕，我们需要用国内的阿里云的镜像。

生成一个名叫 `pull_k8s.sh` 的 shell 文件，输入以下内容。

```bash
#!/bin/bash
KUBE_VERSION=v1.17.3
KUBE_PAUSE_VERSION=3.1
ETCD_VERSION=3.4.3-0
DNS_VERSION=1.6.5
username=registry.cn-hangzhou.aliyuncs.com/google_containers

images=(kube-proxy:${KUBE_VERSION}
kube-scheduler:${KUBE_VERSION}
kube-controller-manager:${KUBE_VERSION}
kube-apiserver:${KUBE_VERSION}
pause:${KUBE_PAUSE_VERSION}
etcd:${ETCD_VERSION}
coredns:${DNS_VERSION}
)

for image in ${images[@]}
do
    docker pull ${username}/${image}
    docker tag ${username}/${image} k8s.gcr.io/${image}
    docker rmi ${username}/${image}
done
```

然后在 shell 中执行以下命令。

```bash
# 改变 pull_k8s.sh 为可执行文件
chmod +x pull_k8s.sh

# 运行 pull_k8s.sh
./pull_k8s.sh
```

稍等一会儿，K8S 的基础镜像就拉取下来。接下来就可以准备启动 K8S 服务了。

##### 1.2.2 获取 Kubernetes 执行文件

```bash
# 获取 Kubernetes Server 安装文件
wget -q https://dl.k8s.io/v1.17.3/kubernetes-server-linux-amd64.tar.gz

# 解压缩安装文件
tar -zxf kubernetes-server-linux-amd64.tar.gz

# 拷贝执行文件
cp kubernetes/server/bin/kube{adm,ctl,let} /usr/bin/
```

##### 1.2.3 安装 CNI 执行文件

下载并解压 CNI（Container Network Interface）插件的可执行文件。

```bash
wget https://github.com/containernetworking/plugins/releases/download/v0.8.5/cni-plugins-linux-amd64-v0.8.5.tgz
mkdir /opt/cni/bin -p
tar -xf cni-plugins-linux-amd64-v0.8.5.tgz -C /opt/cni/bin
```

##### 1.2.4 配置 kubelet

执行以下命令来配置 kubelet 和 kubeadm

```bash
# 配置 kubelet.service
cat <<'EOF' > /etc/systemd/system/kubelet.service
[Unit]
Description=kubelet: The Kubernetes Agent
Documentation=http://kubernetes.io/docs/

[Service]
ExecStart=/usr/bin/kubelet
Restart=always
StartLimitInterval=0
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# 配置 kubeadm.service
cat <<'EOF' > /etc/systemd/system/kubelet.service.d/kubeadm.conf
[Service]
Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"
Environment="KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"
EnvironmentFile=-/var/lib/kubelet/kubeadm-flags.env
EnvironmentFile=-/etc/default/kubelet
ExecStart=
ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
EOF

# 启动 kubelet
systemctl enable kubelet
```

##### 1.2.5 初始化主节点 Kubernetes 服务

请在 root 权限下进行下列操作。

```bash
# 初始化主节点
kubeadm init --pod-network-cidr=10.244.0.0/16
```

这里的 `--pod-network-cidr` 参数是为了适配 `flannel` ，一个网络解决方案。如果对 `flannel` 不熟悉的可以网上自行搜索。

执行完上述操作之后，您在命令行中看到一串输出，类似如下内容。

```bash
...

You can now join any number of machines by running the following on each node
as root:

  kubeadm join 192.168.0.1:6443 --token t14kzc.vjurhx5k98dpzqdc --discovery-token-ca-cert-hash sha256:d64f7ce1af9f9c0c73d2d737fd0095456ad98a2816cb5527d55f984c8aa8a762
```

最后那一串 `kubeadm join x.x.x.x:6443 --token xxxx --discovery-token-ca-cert-hash sha256:xxxx...` 就是加入从节点的命令，您需要在从节点上执行这个命令。

##### 1.2.6 配置容器网络

现在可以来配置网络了，我们采用 `flannel`。

执行以下命令来加入 `flannel`。

```bash
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

##### 1.2.7 验证节点状态

节点初始化完毕后，在命令行中输入以下命令查看节点状态。

```bash
kubectl get nodes
```

您将会看到类似如下输出。

```bash
NAME      STATUS     ROLES     AGE       VERSION
master    Ready   	 master    5m       v1.17.3
```

状态 `STATUS` 为 `Ready` 表示节点已经成功初始化了。如果状态为 `NotReady`，表示节点初始化时遇到了问题，需要排查异常。这时可以通过以下命令来查看日志。

```bash
journalctl -f -u kubelet.service
```

##### 1.2.8 加入工作节点

现在的任务就是将剩余的服务器或节点加入到当前的 Kubernetes 集群来了。

在运行 `kubeadm join` 加入一个工作节点之前，您需要在这个工作节点上执行 1.2.1-4 的步骤，这些都是安装和配置 K8S 服务的基础依赖，需要执行一下。

执行完毕之后，我们来运行 `kubeadm join` 命令。在 1.2.5 中初始化后获取的输出还记得么， `kubeadm join x.x.x.x:6443 --token xxxx --discovery-token-ca-cert-hash sha256:xxxx...` 。复制粘贴这段命令，将其在 shell 中运行。等一会儿，您就可以看到输出提示已经加入成功了。这时，我们验证一下，输入以下命令。

```bash
kubectl get nodes
```

得到的输出类似如下。

```bash
NAME      STATUS    ROLES     AGE       VERSION
master    Ready     master    10m       v1.17.3
worker1   Ready     <none>    1m        v1.17.3
```

我们看到，名叫 `worker1` 的工作节点已经成功加入进来了，并为 `Ready` 状态。

⚠️注意：如果您关闭了了在之前启动主节点后需要复制粘贴的 `kubeadm join` 命令，您可以通过 [这篇文章](https://www.cnblogs.com/lehuoxiong/p/9908357.html) 来加入工作节点。

### 2. 配置部署 Crawlab

K8S是通过 yaml 文件来配置应用的。下面我们将介绍如何配置 yaml 文件来配置 Crawlab 应用。同样的，我们将配置主节点（Master）和工作节点（Node）。这里介绍两种部署方式：首先我们将用一个快速配置的例子来部署 Crawlab 应用，这个只是预览体验用，不推荐应用在生产环境中；第二种是生产环境部署，相对来说更安全稳定。

#### 2.1 快速部署

这里只是让您快速体验 K8S 部署 Crawlab 集群，不建议在生产中使用。在主节点（或主服务器）中执行以下命令。

```bash
# 生成 MongoDB PV（Persistent Volume）
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/mongo-pv.yaml

# 启动 MongoDB
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/mongo.yaml

# 启动 Redis
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/redis.yaml

# 启动 Crawlab 主节点
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-master.yaml

# 启动 Crawlab 工作节点集群
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-worker.yaml
```

启动好上述服务之后，等待一段时间让 `Pod` 启动起来。执行 `kubectl get pods -n crawlab` 查看 `Pod` 状态。对 `Pod` 不了解的开发者可以参考一下 [官方文档](https://kubernetes.io/zh/docs/home/)。

然后，我们打开浏览器，在地址栏输入 `http://<master_node_ip>:30088` 就可以看到 Crawlab 的登录界面。

#### 2.2 生产环境部署

在 K8S 上做持久化是一个比较繁琐的事情，因此我们建议您先通过 Docker 或直接安装或云储存服务的方式来搭建 MongoDB 和 Redis 数据库。这里我们假设您已经有可用的 MongoDB 和 Redis 数据库。

##### 2.2.1 部署主节点

首先复制一份 `crawlab-master.yaml` 到本地。

```bash
wget https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-master.yaml
```

这个文件的内容如下。

```yaml
apiVersion: v1
kind: Service
metadata:
  name: crawlab
  namespace: crawlab-develop
spec:
  ports:
  - port: 8080
    targetPort: 8080
    nodePort: 30088
  selector:
    app: crawlab-master
  type: NodePort
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: crawlab-master
  namespace: crawlab-develop
spec:
  serviceName: crawlab-master
  selector:
    matchLabels:
      app: crawlab-master
  template:
    metadata:
      labels:
        app: crawlab-master
    spec:
      containers:
      - image: tikazyq/crawlab:develop
        imagePullPolicy: Always
        name: crawlab
        env:
        - name: CRAWLAB_SERVER_MASTER
          value: "Y"
        - name: CRAWLAB_MONGO_HOST
          value: "mongo"
        - name: CRAWLAB_REDIS_ADDRESS
          value: "redis"
        - name: CRAWLAB_SERVER_REGISTER_TYPE
          value: "hostname"
        ports:
        - containerPort: 8080
          name: crawlab
```

这里需要做的是稍微修改一下上述的容器环境变量，将数据库配置更改为实际的数据库地址。Crawlab 的详细配置请参考 [配置章节](../Config/README.md)。

然后执行下列命令使配置生效。

```bash
kubectl apply -f crawlab-master.yaml
```

##### 2.2.2 部署工作节点

复制一份 `crawlab-worker.yaml` 到本地。

```bash
wget https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-worker.yaml
```

用编辑器打开 `crawlab-worker.yaml`。

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: crawlab-worker
  namespace: crawlab-develop
spec:
  serviceName: crawlab-worker
  replicas: 2
  selector:
    matchLabels:
      app: crawlab-worker
  template:
    metadata:
      labels:
        app: crawlab-worker
    spec:
      containers:
      - image: tikazyq/crawlab:develop
        imagePullPolicy: Always
        name: crawlab
        env:
        - name: CRAWLAB_SERVER_MASTER
          value: "N"
        - name: CRAWLAB_MONGO_HOST
          value: "mongo"
        - name: CRAWLAB_REDIS_ADDRESS
          value: "redis"
        - name: CRAWLAB_SERVER_REGISTER_TYPE
          value: "hostname"
```

需要做的就是设置 `spec.replicas` 来确定启动多少个工作节点。然后就是配置 Crawlab，详细配置请参考 [配置章节](../Config/README.md)。

然后执行下列命令使配置生效。

```bash
kubectl apply -f crawlab-worker.yaml
```

##### 2.2.3 验证部署

执行以下命令来查看 `Pod` 部署情况。

```bash
kubectl get pods -n crawlab
```

输出结果如下。

```bash
NAME                              READY   STATUS    RESTARTS   AGE
crawlab-master-6f8688cfdd-cc8b6   1/1     Running   0          10m
crawlab-worker-6cc6f476f4-bjrbr   1/1     Running   0          7m
crawlab-worker-6cc6f476f4-t9shl   1/1     Running   0          7m
crawlab-worker-6cc6f476f4-w8mc8   1/1     Running   0          7m
crawlab-worker-6cc6f476f4-sg5px   1/1     Running   0          7m
```

这时打开浏览器，在地址栏输入 `http://<master_node_ip>:30088` 就可以看到 Crawlab 的登录界面。

### 3. 下一步

请参考 [爬虫章节](../Spider/README.md) 来详细了解如何使用 Crawlab。