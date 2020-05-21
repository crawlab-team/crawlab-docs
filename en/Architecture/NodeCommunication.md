## Node Communication

⚠️Note: PubSub based node communication will be changed to RPC communication which is more convenient for development and maintenance.

The communication here mainly refers to the instant communication between nodes, means there is no significant delay ([spider deployment](./SpiderDeployment.md) and [task execution](./TaskExecution.md) are completed through rotation training, so they are not in this column).

Communication is mainly completed by Redis. The following is the schematic diagram of node communication.

![](http://static-docs.crawlab.cn/node-communication.png)

Each node will communicate through Redis's 'PubSub' function.

'PubSub' is a publish/subscribe mode simply. The Subscriber will subscribe to a channel on Redis, and any other node can publish messages on the channel as Publisher.

In Crawlab, the master node subscribes to the 'nodes:master' channel, if other nodes need to send messages to the master node, they only need to publish messages to the 'nodes:master'. In the same way, each work node will subscribe to its own channel, 'nodes:<node_id>' ('node_id' is the node ID in MongoDB, which is MongoDB ObjectId). If you need to send messages to the work node, you only need to publish messages to this channel.

The simple process of a network request is as follows:
1. The client(front end application) sends the request to the master node(API);
2. The master node publishes messages to the corresponding work nodes through the 'PubSub' '<nodes:<node_id>' channel of Redis;
3. After receiving the message, the work node performs some operations and publishes the corresponding message to the master node through the channel '<nodes:master>';
4. The master node receives the message and returns it to the client.

Not all node communications are bidirectional, that is to say, the master node will only communicate with the work node unilaterally, and the work node will not return a response to the master node, which is called one-way communication. The following are the communication types of Crawlab.

Operation name | Communication category
--- | ---
Get log | Bidirectional communication
Get system information | Bidirectional communication
Cancel task | Unidirectional communication
Notify the work node to get the spider file from GridFS | Unidirectional communication

### 'chan' and 'goroutine'

If you are reading the Crawlab source code, you will find that there are a lot of 'chan' syntax in node communication, which is a concurrent feature of Golang.

'chan' is a channel, which is divided into unbuffered and buffered channels in Golang. We use unbuffered channels to block the cooperation process. Only when 'chan' receives a signal ('chan <- "some signal"'), the block will be released, and the cooperation will proceed to the next step. If it is bidirectional communication in the request response mode , the master node will generate an unbuffered channel to block the request after receiving the request. After receiving the message from the work node, assign a value to the unbuffered channel and release the block, then return the response to the client.

The 'go' command will open a 'goroutine'(association) to complete the concurrency. With 'chan', the association can suspend using the unbuffered channel and wait for the signal to perform the next operation. Task cancellation is realized by 'go' + 'chan'. Interested readers can refer to [source code](https://github.com/tikazyq/crawlab/blob/master/backend/services/task.go#L136).

### Redis's PubSub

This is an implementation of the publish/subscribe message mode of Redis. Its usage is very simple:
1. Subscribers use 'SUBSCRIBE channel1 channel2 ...' to subscribe to one or more channels;
2. Publishers use 'PUBLISH channelx message' to publish messages to subscribers of the channel.

Redis's 'PubSub' can be used as a broadcast mode, that is one publisher corresponds to multiple subscribers. In Crawlab, we only have one subscriber corresponding to one publisher (master node - > work node: 'nodes:<node_id>') or one subscriber corresponding to multiple publishers (work node - > master node: 'nodes:<master>'). This is to facilitate bidirectional communication.

Reference resources：https://redis.io/topics/pubsub
