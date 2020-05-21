## Kubernetes deployment

[Kubernetes（K8S）](https://www.kubernetes.org.cn/) It is a very powerful container orchestration tool, which can manage large clusters, micro services, distributed applications and so on. It is a very suitable choice in multi node deployment of production environment.

Crawlab also supports kubernetes deployment as a distributed spider management platform. Kubernetes deployment is suitable for large-scale distributed applications, it can also be practiced if you have several machines, kubernetes will reduce the cost of managing distributed applications.

If you don't know Kubernetes, you can learn relevant knowledge in the [kubernetes Chinese community introduction course](https://www.kubernetes.org.cn/course); if you already know Docker, you can refer to another good free resource, [advanced from docker to kubernetes](https://www.qikqiak.com/k8s-book/); and also recommend the gold digger's [kubernetes From start to practice](https://juejin.im/book/5b9b2dc86fb9a05d0f16c8ac) learn the knowledge of quick start K8S cluster from the gold digger (paid); if you want to understand the principle of K8S in depth, it is suggested to learn Zhang Lei's [in depth analysis of kubernetes] (https://time.geekbang.org/column/intro/116) in Geek time. Note that due to the rapid development of kubernetes, the K8S version of many tutorials may be old, and some commands will not take effect in the new version. Therefore, to ensure that the commands and configurations you use are the latest version, please refer to the official kubernetes document (https://kubernetes.io/zh/docs/home/).

This section will detail how to build Crawlab multi node application on a Kubernetes cluster. First of all, let's assume that you have multiple servers and the operating systems are all Ubuntu 16.04.

**Recommended Users**: 

- Developers who need to implement multi node deployment of Crawlab in production environment
- Developers who need to deploy large scale spider applications, such as distributed spiders
- Developers who know Docker, Kubernetes or want to learn relevant knowledge

**Recommended Configuration**:

- Docker: 18.03+
- Kubernetes: 1.17.3+

### 1. Node installation configuration

If you already have a working K8S cluster, you can skip this section and skip to  **2. Config Crawlab**。

#### 1.1 Install Docker

We have described how to install Docker in detail in [docker installation deployment](./Docker.md). Please refer to the installation tutorial in this section to install Docker on each machine.

⚠️Note: you need to install Docker on each machine.

#### 1.2 Install Kubernetes

The process of install Kubernetes is tedious. We suggest you operate patiently. We will first install and configure Kubernetes on the master node, which is called master.

##### 1.2.1 Pull Kubernetes basic image

If you have a good network environment (for example, the network environment is abroad), you can consider ignoring this step.

This step is to pull down the basic image needed by Kubernetes. However, the domestic network speed is relatively poor. We need to use the domestic Alibaba cloud image.

Generate a shell file named 'pull_k8s.sh'. Enter the following.

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

Then execute the following command in the shell.

```bash
# Change pull_k8s.sh to executable
chmod +x pull_k8s.sh

# execute pull_k8s.sh
./pull_k8s.sh
```

After a while, the basic image of K8S will be pulled down. Next, you are ready to start the K8S service.

##### 1.2.2 Get Kubernetes execution file

```bash
# Get Kubernetes Server installation file
wget -q https://dl.k8s.io/v1.17.3/kubernetes-server-linux-amd64.tar.gz

# Extract the installation file
tar -zxf kubernetes-server-linux-amd64.tar.gz

# Copy execution file
cp kubernetes/server/bin/kube{adm,ctl,let} /usr/bin/
```

##### 1.2.3 Install CNI executive file

Download and extract the executable of the CNI (container network interface) plug-in.

```bash
wget https://github.com/containernetworking/plugins/releases/download/v0.8.5/cni-plugins-linux-amd64-v0.8.5.tgz
mkdir /opt/cni/bin -p
tar -xf cni-plugins-linux-amd64-v0.8.5.tgz -C /opt/cni/bin
```

##### 1.2.4 Configure kubelet

Run the following command to configure kubelet and kubeadm

```bash
# configure kubelet.service
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

# configure kubeadm.service
cat <<'EOF' > /etc/systemd/system/kubelet.service.d/kubeadm.conf
[Service]
Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"
Environment="KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"
EnvironmentFile=-/var/lib/kubelet/kubeadm-flags.env
EnvironmentFile=-/etc/default/kubelet
ExecStart=
ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
EOF

# start kubelet
systemctl enable kubelet
```

##### 1.2.5 Initializing the master kubernetes service

Do the following with root privileges.

```bash
# Initialize master node
kubeadm init --pod-network-cidr=10.244.0.0/16
```

The parameter '--pod-network-cidr' here is to adapt to 'flannel', this is a network solution. If you are not familiar with 'flannel', you can search it online.

After performing the above operations, you can see a string of output in the command line, similar to the following.

```bash
...

You can now join any number of machines by running the following on each node
as root:

  kubeadm join 192.168.0.1:6443 --token t14kzc.vjurhx5k98dpzqdc --discovery-token-ca-cert-hash sha256:d64f7ce1af9f9c0c73d2d737fd0095456ad98a2816cb5527d55f984c8aa8a762
```

The last string of 'kubeadm join x.x.x.x:6443 --token xxxx --discovery-token-ca-cert-hash sha256:xxxx...' is the command to join the slave node. You need to execute this command on the slave node.

##### 1.2.6 Configure container network

Now you can configure the network. We use `flannel`.

Execute the following command to add 'flannel'.

```bash
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

##### 1.2.7 Verify node status

After node initialization, enter the following command on the command line to view node status.

```bash
kubectl get nodes
```

You will see output similar to the following.

```bash
NAME      STATUS     ROLES     AGE       VERSION
master    Ready   	 master    5m       v1.17.3
```

If 'STATUS' is 'Ready', the node has been initialized successfully. If the status is 'NotReady', it indicates that there is some problem during node initialization, which needs troubleshooting. At this time, you can view the log through the following command.

```bash
journalctl -f -u kubelet.service
```

##### 1.2.8 Join work node

The task now is to add the remaining servers or nodes to the current Kubernetes cluster.

Before running 'kubeadm join' to join a work node, you need to perform the steps of 1.2.1-4 on this work node. These are the basic dependencies for installing and configuring K8S services, which need to be executed.

After execution, run the 'kubeadm join' command. Remember the output obtained after initialization in 1.2.5, 'kubeadm join x.x.x.x:6443 --token xxxx --discovery-token-ca-cert-hash sha256:xxxx...'. Copy and paste the command and run it in the shell. After a while, you can see that the output prompt is added successfully. At this point, we can verify and enter the following command.

```bash
kubectl get nodes
```

The output is similar to the following.

```bash
NAME      STATUS    ROLES     AGE       VERSION
master    Ready     master    10m       v1.17.3
worker1   Ready     <none>    1m        v1.17.3
```

We can see that the work node named 'worker1' has been added successfully and it is in the 'Ready' state.

⚠️Note: if you stop the 'kubeadm join' command that needs to be copied and pasted after starting the master node, you can join the work node by [this article] (https://www.cnblogs.com/lehuoxiong/p/9908357.html).

### 2. Configure and deploy Crawlab

K8S configures applications by yaml files. Next, we will introduce how to configure yaml file to configure Crawlab application. Similarly, we will configure the master node and the work node. Here are two deployment methods: first, we will use a quick configuration example to deploy Crawlab application, which is only for preview experience and not recommended to be used in the production environment; second, the production environment deployment, which is relatively more secure and stable.

#### 2.1 Rapid deployment

This is just a quick experience of K8S deployment Crawlab cluster, not recommended for production. Execute the following command on the primary node (or primary server).

```bash
# Generate MongoDB PV（Persistent Volume）
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/mongo-pv.yaml

# Start MongoDB
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/mongo.yaml

# Start Redis
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/redis.yaml

# Start Crawlab master node
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-master.yaml

# Start Crawlab work node cluster
kubectl apply https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-worker.yaml
```

After starting the above services, wait for a period of time for the 'Pod' to start. Execute 'kubectl get pods -n crawlab' to view the 'pod' status. For developers who don't know about 'pod', please refer to [official documents](https://kubernetes.io/zh/docs/home/).

Then, we can open the browser and enter 'http://<master_node_ip>:30088' to see the crawlab login interface.

#### 2.2 Production environment deployment

It's a tedious task to do persistence on K8S, so we suggest you build MongoDB and Redis databases by Docker or direct installation or cloud storage service. Here we assume that you already have MongoDB and Redis databases available.

##### 2.2.1 Deploy master node

First, copy a 'crawlab-master.yaml' file to local.

```bash
wget https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-master.yaml
```

The contents of this file are as follows.

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

What we need to do here is to slightly modify the container environment variables mentioned above to change the database configuration to the actual database address. For detailed configuration of Crawlab, please refer to [configuration section](../Config/README.md).

Then execute the following command for the configuration to take effect.

```bash
kubectl apply -f crawlab-master.yaml
```

##### 2.2.2 Deploy work node

Copy a 'crawlab-worker.yaml' file to local.

```bash
wget https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-worker.yaml
```

open `crawlab-worker.yaml`。

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

All you need to do is set 'spec.replicas' to determine how many work nodes to start. Then configure crawlab. For detailed configuration, please refer to [configuration section](../Config/README.md).

Then execute the following command for the configuration to take effect.

```bash
kubectl apply -f crawlab-worker.yaml
```

##### 2.2.3 Validate deployment

Execute the following command to view the deployment of 'pod'.

```bash
kubectl get pods -n crawlab
```

The output is as follows.

```bash
NAME                              READY   STATUS    RESTARTS   AGE
crawlab-master-6f8688cfdd-cc8b6   1/1     Running   0          10m
crawlab-worker-6cc6f476f4-bjrbr   1/1     Running   0          7m
crawlab-worker-6cc6f476f4-t9shl   1/1     Running   0          7m
crawlab-worker-6cc6f476f4-w8mc8   1/1     Running   0          7m
crawlab-worker-6cc6f476f4-sg5px   1/1     Running   0          7m
```

At this time, open the browser and enter 'http://<master_node_ip>:30088' to see the Crawlab login interface.

### 3. Next step

Please refer to the [spider section](../Spider/README.md) for details on how to use Crawlab.