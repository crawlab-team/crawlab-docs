## Multi node deployment

Many enterprise or personal spider management users need to run spider tasks on multiple nodes, means manage spiders on distributed nodes. For example, an enterprise has multiple servers, which need to run, monitor and operate their spiders on these server clusters, view and manage them centrally and uniformly. This kind of application scenario is very suitable to use Crawlab, a spider management platform that naturally supports distributed management. In order for the Crawlab services running by each node to work together in the same network, **these services only need to connect to MongoDB and Redis databases, without exposing their own IP and ports **.

The figure below is a schematic diagram of a multi node deployment, showing how the Crawlab distributed cluster works.

![](http://static-docs.crawlab.cn/multi-node-deployment.png)

Each Crawlab service (sky blue large C icon) is on a server, and the MongoDB and Redis databases in the center are used as their communication media, connecting the master node and each worker node. Currently, there can only be one master node. Such a Crawlab distributed node network forms a multi node cluster, which enables the spider to run on any node; the running data (such as system information) can be transmitted back to the master node by Redis, then presented to the front end interface; the master node can also "give orders" to the work node by Redis, and MongoDB also stores the relevant information of each node for the front end interface. This section focuses on the multi node deployment of Crawlab, rather than the distributed principle of Crawlab. If you need to know more, please refer to the [principle chapter](../Architecture/README.md).

### 1. Preparation: deploy MongoDB and Redis

For multi node deployment in the production environment, we recommend that MongoDB and Redis be deployed separately, that is to say, the database will be a single service instead of being coupled with Crawlab service.

In [quick start](../QuickStart/README.md) and [docker deployment](Docker.md), we use Docker Compose to start Crawlab and database services. In fact, MongoDB, Redis and Crawlab services are coupled together. Of course, this is not a big problem, but we do not recommend it in the production environment.

In the process of starting MongoDB and Redis, **you need to expose its ports to other crawlab nodes**. We strongly recommend setting passwords in production environments.

This section will not specifically describe the steps of deploying MongoDB and Redis, but we recommend using Docker for deployment, which is simpler. Please refer to the following documents for the deployment tutorial.

- [MongoDB official installation documents](https://docs.mongodb.com/manual/installation)
- [MongoDB Dockerhub homepage](https://hub.docker.com/_/mongo)
- [Redis official installation documents](https://redis.io/download)
- [Redis Dockerhub homepage](https://hub.docker.com/_/redis)

### 2. Deploy master node

Whether you use [Docker deployment](Docker.md), [direct deployment](Direct.md) or [Kubernetes](Kubernetes.md), you need to deploy a master node first.

**Docker**

Please refer to [docker deployment chapter](Docker.md) for how to start a Crawlab node by direct deployment. Only one environment variable needs to be specified for the starting of the master node, and the 'CRAWLAB_SERVER_MASTER' is 'Y'. At the same time, you need to configure the connection information of MongoDB and Redis in the 'environment'. Please refer to [configuration section](../Config/README.md) for specific configuration.

**Direct deployment**

Please refer to the [direct deployment section](Direct.md) to learn how to start a Crawlab node by direct deployment. Note that 'server.master' should be set to 'Y' in './backend/conf/config.yml'. At the same time, you need to configure the connection information between MongoDB and Redis under 'mongo.*' and 'redis.*'. Please refer to [configuration section](../Config/README.md) for specific configuration.

**Kubernetes**

For master node deployment of Kubernetes, please refer to [kubernetes deployment chapter](Kubernetes.md). Only one environment variable needs to be specified for the starting of the master node, and the 'CRAWLAB_SERVER_MASTER' is 'Y'.

### 3. Deploy work node

You need to deploy a work node on another server or servers. In general, it is not difficult, but it should be noted that you can connect to MongoDB and Redis deployed before on these servers (please ensure that MongoDB and Redis ports are exposed).

**Docker**

Please refer to [docker deployment chapter](Docker.md) for how to start a Crawlab node by direct deployment. Only one environment variable needs to be specified for the starting of the work node, and the 'CRAWLAB_SERVER_MASTER' is 'N'. At the same time, you need to configure the connection information of MongoDB and Redis in the 'environment'. Please ensure that the database you are connected to and the master node are connected to the same database. Please refer to [configuration section](../Config/README.md) for specific configuration.

**Direct deployment**

Please refer to the [direct deployment section](Direct.md) to learn how to start a Crawlab node by direct deployment. Note that 'server.master' should be set to 'N' in './backend/conf/config.yml'. At the same time, you need to configure the connection information between MongoDB and Redis under 'mongo.*' and 'redis.*'. Please ensure that the database you are connected to and the master node are connected to the same database. Please refer to [configuration section](../Config/README.md) for specific configuration.

**Kubernetes**

For Kubernetes, deploying the worker node is very simple, and you only need to run the following code on the K8S master node.

```bash
kubectl apply -f https://raw.githubusercontent.com/crawlab-team/crawlab/master/k8s/crawlab-worker.yaml
```

If you want to customize some deployment information, such as setting the number of work nodes (replicas), you can download the 'yaml' file, save it as 'crawlab-worker.yaml' and modify it, and then run 'kubectl apply -f crawlab-worker.yaml'. Please refer to [kubernetes deployment chapter](Kubernetes.md) for details.

### 4. Node heartbeat information

Each node stores heartbeat information in Redis to keep online.

How to know that the node has started? One way is to view it on the node page of Crawlab interface, and the other is to view it in Redis. The method is to execute the 'HKEYS nodes' command. Then according to the listed 'key', execute 'HGET nodes <key>' to view the heartbeat information. The heartbeat information is similar to the following:

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

Here we use 'hostname' as the node 'key', that is the only identifier. Of course, we can also specify 'mac' or 'ip' as the only identifier.

⚠️Note: in Docker multi node deployment, we do not recommend using 'mac', because this may not be the only one; instead, we recommend using 'ip' or 'hostname'. In the Kubernetes deployment, it is recommended to use 'hostname' as the unique flag.

We can pay attention to the two fields 'update_ts' and 'update_ts_unix'. They represent the time when the heartbeat information is updated. If the time difference is more than 60 seconds from the current time, it means that the node is offline; otherwise, if the time difference is less than 60 seconds, it is online.

### 5. Other questions

**5.1 Time drift problem**

Sometimes you may find that the work node exits abnormally after a period of time. However, you have checked the database configuration and whether the master node has been started, and no exception has been found. At this time, it is likely that the time between the work node and the master node is not synchronized. At this time, you need to check whether the timestamp of the work node is consistent with that of the master node according to the 'update_ts_unix' of the node's heartbeat information (within 60 seconds).

If there is a big difference, it belongs to ** time drift problem **. At this time, you need to do time synchronization for each server. You can use the 'ntp' module to solve the problem of time synchronization. Please go to [NTP official website](http://www.ntp.org.cn/) or other online materials to install and configure 'ntp'.
