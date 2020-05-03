## Crawler Deployment

As previously described in chapter [deploy crawler](../Spider/Deploy.md)(../Spider/Deploy.md), the crawler is deployed on the work node automatically. The following diagram shows the architecture of crawlab crawler deployment.

![](https://crawlab.oss-cn-hangzhou.aliyuncs.com/v0.3.0/node-deployment.png)

As shown in the figure above, the life cycle of the whole automatic deployment of crawlers is as follows (the source code is in 'services/spider.go#InitSpiderService'):

1. The master node will get the crawler information from the crawler directory every 5 seconds, and then update it to the database (this process does not involve file upload);
2. The master node obtains all the crawler information from the database every 60 seconds, then packages the crawler into a zip file and uploads it to MongoDB GridFS, and writes the file ID to the 'file_id' field in the 'spiders' table of MongoDB;
3. The master node publishes a message ('file.upload' event, including file ID) to the work node by Redis's 'PubSub', and informs the work node to obtain the crawler file;
4. The work node receives the message to get the crawler file, obtains the zip file from MongoDB GridFS, decompresses it and stores it locally.

All crawlers will be deployed on the work node periodically in this way.

### MongoDB GridFS

GridFS is the file system where MongoDB stores large files (more than 16MB). Crawlab uses GridFS as an intermediate medium for crawler file storage, which enables the work node to acquire actively and deploy locally. This bypasses other traditional transport methods, such as RPC, message queue, HTTP, which require more complex and cumbersome configuration and processing.

Crawlab saves files on GridFS and generates two collections, they are 'files.files' and 'files.fs', the former stores the meta information of documents and the latter stores the contents of documents, the 'file_id' in spiders refers to the '_id' of 'files.files'.

Reference resources: https://docs.mongodb.com/manual/core/gridfs/
