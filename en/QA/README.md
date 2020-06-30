## Q&A

#### Why can't I visit http://localhost:8080: 8080?

If you deploy Crawlab with docker, please check whether you use Docker Machine, in this case, you need to enter the address http://192.168.99.100:8080.

In addition, please make sure that you use '-p 8080:8080' to map ports, and check whether the host computer has opened port 8080.

#### I can see the login page, but why is the button always loading when I click login, or prompt to check the user name and password?

If you are using the environment of 'v0.4.4+' and using docker to deploy, you should have a very small probability of meeting this issue, because in this version, we have removed the troublesome environment variable 'CRAWLAB_API_ADDRESS'. By default, we use port 8080 to get API data, but we need to add '/api' prefix to the URL path. This means that all requests, both front end and back end, go through port 8080 (of course, you can set it to other ports by yourself).

If you have problems with continuous loading or prompting errors, make sure you have upgraded to the latest version.

If there is still a problem, check to see if there is a problem with the back end. If Docker is used, please use 'docker logs <container_name>' to view the logs, then check if there are other problems.

If it is a direct deployment or a source code deployment, please set the 'VUE_APP_BASE_URL' to your API address in the file './frontend/.env.production'. Please do not modify the variable 'api.address' in './backend/conf/config.yml', it will not work.

#### I executed the spider, but I couldn't see the result on Crawlab

It is highly recommended that you read the [reptile integration chapter](../Integration/README.md) first.

In short, Crawlab only supports MongoDB at present, and you need to ensure that the stored data is consistent with the database of Crawlab. In addition, you need to add 'task_id' when transferring the data to MongoDB, and set it to the environment variable 'CRAWLAB_TASK_ID' passed by Crawlab, and the name of the collection you need to store is also the 'CRAWLAB_COLLECTION' passed.

Considering the complexity of this, we have developed the 'Crawlab SDK', which can help you simplify this process. Please refer to the [SDK chapter](../SDK/README.md) and [integration chapter](../Integration/README.md) to use the SDK.

#### Why does the background log display 'no reachable servers' when Crawlab is started?

This is because you are not connected to MongoDB, please make sure that your 'CRAWLAB_MONGO_HOST' is set correctly. If it is docker compose, you can set it to 'mongo'.

#### Error will be reported when printing Chinese in spider

Many friends have reported this problem, which may be related to Docker image. It is recommended that you do not print Chinese temporarily, and wait for us to fix this problem.

#### My spider has some third-party dependence. What should I do?

In fact, many people encounter this problem, such as when they need to install 'BeautifulSoup', 'pymysql', etc

There are 3 solutions:

1. **Interface installation (recommended)**：Please refer to [node dependency installation](../Node/Installation.md) for relevant dependencies on the interface;
2. **Spider mode**：Upload a special spider, write 'pip', 'npm' and other installation commands in a script, and then execute the script, or directly write the installation command in 'execute command';
3. **Build a new image**：Based on 'tikazyq/crawlab' Image('FROM tikazyq/crawlab'), write the command that needs to install the third-party dependency in the build file 'Dockerfile', for example 'RUN pip install bs4 pymysql', and package it into a new image, then use the new image to generate a container to run.

#### I have multiple servers, is it OK to deploy Crawlab on them?

It is recommended that you use 'Kubernetes' (K8S for short) to manage multiple Crawlab nodes. For details, Please refer to [kubernetes installation chapter](../Installation/Kubernetes.md).

Because Crawlab uses 'MAC' address as the unique identification of nodes by default, if you use 'docker-compose' to manage containers on multiple servers, there may be situations where 'MAC' addresses are the same, resulting in the failure to display all nodes. Therefore, you need to set 'CRAWLAB_SERVER_REGISTER_TYPE' as 'IP', and 'CRAWLAB_SERVER_REGISTER_IP' as the unique identification of each node.

⚠️Note: the "ip" here is not the real IP address, but the unique identifier. It is only convenient to use IP when developing. The real name should be 'ip'. We will adjust it later to avoid confusion.

#### Why do I run several tasks at the same time, and the next tasks are always in the pending state?

The task has been in the "pending" state because the "Executor" of a single node of Crawlab is full. The number of executors is determined by 'CRAWLAB_TASK_WORKERS'. The default number is 4. If your machine has good performance, such as 32-core, and you need to run many tasks, such as 100 tasks, you can set 'CRAWLAB_TASK_WORKERS' to be greater than or equal to 100.

If the environment is deployed with docker, execute the following command.

```bash
docker-compose down && docker-compose up -d
```

#### I updated the spider file, but why did it change back after some time?

This is because we only support uploading zip files to change the spider temporarily. All uploaded files will be synchronized to 'MongoDB GridFS' to ensure the consistency of the spider code.

We have joined the file management system, including file addition, file modification, file deletion, file rename, while ensuring code consistency.

#### I found that the scheduled task was executed twice. What should I do?

The big reason is that you use the old version of Cron format (6 elements) to run in the new version. This may trigger twice so run the scheduled task twice. If this happens, update the old version of Cron format to the new version (5 elements).

#### I have upgraded from the old version to v0.4.4, and can't start it. What should I do?

This is because Crawlab is not compatible with the old version in the upgrade to v0.4.4, which leads to the lack of fields in the timing task and the startup error.

The interim solution is as follows:
1. Enter MongoDB database;
2. Execute the command 'db.schedules.update({user_id:{$exists:false}}, {$set:{user_id:ObjectId('000000000000000000000000')}}, {multi: true})', and start Crawlab at this time, which should be accessible;
3. Navigate to "scheduled tasks" and recreate the scheduled tasks (you may not recreate them, but you will not receive message notifications).

#### I have multiple spiders under a Scrapy spider. Do I need to create multiple spider projects in Crawlab?

No need to create multiple spiders.

Crawlab supports multi spider projects with parameters. The operation method is as follows:
1. Set the **execution command** of the spider to 'scrapy crawl';
2. Set the **parameter** of your spider to 'spider_name' every time you execute it.

For example, you have a spider project with the following structure.

```bash
.
├── example
│   ├── __init__.py
│   ├── items.py
│   ├── middlewares.py
│   ├── pipelines.py
│   ├── settings.py
│   └── spiders
│       ├── __init__.py
│       ├── spider1.py  # name = 'spider1'
│       └── spider2.py  # name = 'spider2'
└── scrapy.cfg
```

If you want to run spider1, you should execute 'scrapy crawl spider1' on the command line. If you want to run spider2, execute the command 'scrapy crawl spider2' on the command line. In this way, you can abstract a parameter as spider_name actually, which is the spider name. Crawlab will combine **execute command** and **parameter** into a command every time it runs the spider. Therefore, in this example, you only need to set **execute command** to 'scrapy crawl' and **parameter** to 'spider1' or 'spider2'.

For more information, read the chapter of [custom spider](../Spider/CustomizedSpider.md).

#### Why do I have an error adding spiders after pulling the latest image?

Most likely, because your static files are not updated, you need to clear the browser cache, and then refresh the page, which can be solved.

#### I deploy it directly. Why do I install Python 3.6 and the interface still shows that it is not installed?

Crawlab determines the environment according to '/usr/local/bin/python' and '/usr/local/bin/pip'. Therefore, you need to add the corresponding 'python' and 'pip' execution files to '/usr/local/bin'.

The specific operation commands are as follows:

```bash
ln -s <python_path> /usr/local/bin/python
ln -s <pip_path> /usr/local/bin/pip
```

#### I use Java spider environment, how to run it with Crawlab?

Crawlab supports spiders in any language, as long as you have the appropriate environment installed.

For a Java spider, first you need to install the Java environment. If you are using the docker installation environment, you need to enter the container to install it.

```bash
docker exec -it <container_name>
```

Then run the following command in the container.

```bash
apt-get install -y default-jdk
ln -s /usr/bin/java /usr/local/bin/java
```

This will install Java 10. If you need another java version, please use the corresponding command.

Next, you can choose to upload the jar package to the spider and execute the command '/usr/local/bin/java -jar <jar_path>', then you can run the spider.

#### I've been pulling the image for a long time and I can't pull it down. What should I do?

Crawlab uses the image on Dockerhub by default. Because it is abroad, you may have some network problems when pulling. You can use the domestic alicloud image source. The specific operation is as follows.

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab:latest
docker tag registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab:latest tikazyq/crawlab:latest
docker rmi registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab:latest
```

#### I'm going to use Crawlab for spider cluster management. What's the security problem?

If you want to access the crawlab interface on the public network, you need to pay attention to several issues:

1. Try to use HTTPS as the front page API of the master node;
2. Do not expose the work node to the public network;
3. MongoDB and Redis databases are deployed on the intranet, and authorization verification must be enabled;
4. Mongodb and Redis need to be accessible to all nodes.

Before deploying a cluster, it is recommended that you read the chapter [principles - overall architecture](../Architecture/Architecture.md).

#### I want to save the spider data to a database other than MySQL or MongoDB. What's the way?

Crawlab requires to store the result data in MongoDB by default, but it also supports to store the result data in other databases, such as MySQL、Postgres、MS SQL, etc. The recommended practice is double write, that is, write data to MongoDB and other databases at the same time, so that you can not only see the result data on the Crawlab interface, but also save the data to your ideal database. Saving data to MongoDB is very simple. You can refer to [reptile integration chapter](../Integration/README.md).

Of course, we are currently developing support for other database types to help more users who need to store to other database types. So there's no need for double writing. Please pay attention to the development of Crawlab.

#### Import the Scrapy project, click the spider scrapy tab to return the error message, and you can't see the settings, spiders, items, pipelines and other information. How to solve it?

Crawlab supports Scrapy through the tools of Scrapy CLI and Crawlab CLI, and it will read py file data at runtime, so it must be ensured that all dependencies in the file have been installed. For example, your spider project depends on pymysql, you must install pymysql dependency on the master node to see the information of scrapy.

To install third-party dependencies, refer to the [node dependency installation chapter](../Node/Installation.md) chapter.
