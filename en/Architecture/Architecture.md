## Overall Structure

The architecture of Crawlab includes a master node(Master Node) and multiple worker nodes(Worker Node), as well as Redis and MongoDB databases responsible for communication and data storage.

![](https://crawlab.oss-cn-hangzhou.aliyuncs.com/v0.3.0/architecture.png)

The front end application requests data from the master node, which performs task dispatch and deployment through MongoDB and Redis, after receiving the task, the worker node starts to execute the crawler task and stores the task results in MongoDB. Compared with the previous version of Celery before 'v0.3.0', the architecture is simplified. Unnecessary node monitoring module Flower is removed, and node monitoring is mainly completed by Redis.

### Master Node

The master node is the core of the whole Crawlab architecture and belongs to the central control system of Crawlab.

The master node is mainly responsible for the following functions:
1. Crawler task scheduling
2. Work node management and communication
3. Crawler deployment
4. Front end and API services
5. Perform tasks (you can treat the master node as a work node)

The master node is responsible for communicating with the front end application and sending the crawler task to the work node by Redis. At the same time, the master node synchronizes (deploys) the crawler to the work node by Redis and MongoDB's GridFS.

### Worker Node

The main function of the work node is to perform the crawler task, store and retrieve data and logs, and communicate with the master node by Redis's 'PubSub'. By increasing the number of work nodes, Crawlab can achieve horizontal expansion and different crawler tasks can be assigned to different nodes.

### MongoDB

MongoDB is the operation database of Crawlab, which stores the data of nodes, crawlers, tasks, timing tasks, etc. in addition, the GridFS file storage method is the intermediate medium for the master node to store crawler files and synchronize them to the work node.

### Redis

Redis is a very popular Key-Value database, which mainly realizes the function of data communication between nodes in Crawlab. For example, a node will store its information in the 'nodes' Hash list of Redis by 'HSET'. The master node will judge the online node according to the Hash list.

### Front End

The front end is a single page application based on [Vue-Element-Admin](https://github.com/PanJiaChen/vue-element-admin) . Many Element-UI controls are reused to support the corresponding presentation.
