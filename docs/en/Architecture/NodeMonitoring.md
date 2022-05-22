## Node Monitoring

The node monitoring of Crawlab is completed by Redis. The schematic diagram is shown below.

![](https://crawlab.oss-cn-hangzhou.aliyuncs.com/v0.3.0/node-monitoring.png)

The work node will update the heartbeat information in Redis continuously. Using 'HSET nodes <node_id> \<msg\>', the heartbeat information '\<msg\>' includes the MAC address, IP address and current timestamp of the node.

The master node periodically obtains the heartbeat information of the work node in redis. If there is a work node whose time stamp is 60 seconds ago, the node is considered to be offline, the information of the node will be deleted in redis, and it will be set to "offline" in mongodb; if the time stamp is within the past 60 seconds, the information of the node will be retained, and it will be set to "online" in mongodb.