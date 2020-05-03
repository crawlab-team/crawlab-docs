## Docker Installation and deployment

This should be the most convenient and time-saving way to deploy the application. In the latest version update [v0.4.0](https://github.com/tikazyq/crawlab/releases/tag/v0.4.0), we released the Golang version and supported Docker deployment. Next, I will show you how to use Docker to deploy Crawlab step by step.

For developers who don't know about docker, please refer to this article ([It is 9102 now, please learn about Docker](https://juejin.im/post/5c2c69cee51d450d9707236e)) for further understanding. If you are a developer who already knows Docker, you can skip section 1. If you are a developer who knows Docker and Docker compose, you can skip sections 1 and 2 and read the "install and start Crawlab" section directly.

**Recommended Users**: 

- Developers who want to experience Crawlab quickly
- Developers who are familiar with or willing to learn about Docker

**Recommended Configuration**:

- Docker: 18.03+
- Docker-Compose: 1.24+

### 1. Install Docker

Docker installation is not complicated. For developers with good English skills, please refer to [official documents](https://docs.docker.com/) for installation. Two installation methods are described below.

#### 1.1 Windows & Mac

Users of windows and Mac can download Docker Desktop to complete Docker installation.

Download address: https://www.docker.com/products/docker-desktop

Click the button below and follow the steps on the official website to complete the download and installation.

![](http://static-docs.crawlab.cn/get-docker-desktop.png)

#### Linux

For Linux users, please refer to the link in the following table to install Docker.

| operating system  		| documents                                                     |
| :----------------------- 	| :------------------------------------------------------- |
| Ubuntu            		| https://docs.docker.com/install/linux/docker-ce/ubuntu   |
| Debian            		| https://docs.docker.com/install/linux/docker-ce/debian   |
| CentOS            		| https://docs.docker.com/install/linux/docker-ce/centos   |
| Fedora            		| https://docs.docker.com/install/linux/docker-ce/fedora   |
| Other Linux distributions | https://docs.docker.com/install/linux/docker-ce/binaries |

### 1.2 Download Image

We have built the image of Crawlab on [docker hub](https://hub.docker.com/r/tikazyq/crawlab). Developers only need to pull it down for use. We need to configure the image source before pull image. Because we are in China, the speed of using the original image source is very slow, so we will use the DockerHub accelerator in China. If you are a Mac or Linux user, please create the file '/etc/docker/daemon.json', where you can enter the following.

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

In this way, the speed of pull image is much faster than that of no change of image source.

Execute the following command to download the image of Crawlab. The image size is about a few hundred megabytes, so it takes a few minutes to download.

```bash
docker pull tikazyq/crawlab:latest
```

#### 1.3 Docker common commands

Learn this article for common commands for docker.

https://blog.csdn.net/u013378306/article/details/86668313

### 2. Install Docker-Compose

For convenience, we use the 'docker-compose' method to deploy docker. 'docker-compose' is a cluster management mode. You can use the 'yaml' file named 'docker-compose.yml' to define the containers that need to be started, which can be a single or (usually) multiple.

Installing 'docker-compose' is relatively simple. When 'pip' is installed (Python 3), execute the following command.

```bash
pip install docker-compose
```

After installing 'docker-compose', please run 'docker-compose ps' to test whether the installation is normal. The normal display should be as follows.

```bash
Name   Command   State   Ports
------------------------------
--------------------------------
```

There is no Docker container running. It is an empty list. If a container is running, you can see its corresponding information.

### 3. Install and start Crawlab

Crawlab's 'docker-compose.yml' is defined as follows.

```yaml
version: '3.3'
services:
  master: 
    image: tikazyq/crawlab:latest
    container_name: master
    environment:
      # CRAWLAB_API_ADDRESS: "https://<your_api_ip>:<your_api_port>"  # backend API address. Applicable to HTTPS or source code deployment
      CRAWLAB_SERVER_MASTER: "Y"  # whether to be master node, Y for the master node and N for the working node
      CRAWLAB_MONGO_HOST: "mongo"  # MongoDB host address. In the docker compose network, directly refer to the service name
      # CRAWLAB_MONGO_PORT: "27017"  # MongoDB port 
      # CRAWLAB_MONGO_DB: "crawlab_test"  # MongoDB database 
      # CRAWLAB_MONGO_USERNAME: "username"  # MongoDB username
      # CRAWLAB_MONGO_PASSWORD: "password"  # MongoDB password 
      # CRAWLAB_MONGO_AUTHSOURCE: "admin"  # MongoDB auth source 
      CRAWLAB_REDIS_ADDRESS: "redis"  # Redis host address Redis address. In the docker compose network, directly refer to the service name
      # CRAWLAB_REDIS_PORT: "6379"  # Redis port 
      # CRAWLAB_REDIS_DATABASE: "1"  # Redis database 
      # CRAWLAB_REDIS_PASSWORD: "password"  # Redis password 
      # CRAWLAB_LOG_LEVEL: "info"  # log level. info by default
      # CRAWLAB_LOG_ISDELETEPERIODICALLY: "N"  # whether to periodically delete log files. Do not delete log by default
      # CRAWLAB_LOG_DELETEFREQUENCY: "@hourly"  # frequency of deleting log files. Default is hourly
      # CRAWLAB_SERVER_REGISTER_TYPE: "mac"  # node register type. Default to MAC address or IP (to prevent MAC address conflict)
      # CRAWLAB_SERVER_REGISTER_IP: "127.0.0.1"  # node register ip. Unique identification number of the node, only valid when CRAWLAB_SERVER_REGISTER_TYPE is "IP"
      # CRAWLAB_TASK_WORKERS: 8  # number of task executors(number of parallel tasks)
      # CRAWLAB_RPC_WORKERS: 16  # number of RPC workers RPC 
      # CRAWLAB_SERVER_LANG_NODE: "Y"  # whether to pre-install Node.js 
      # CRAWLAB_SERVER_LANG_JAVA: "Y"  # whether to pre-install Java 
      # CRAWLAB_SETTING_ALLOWREGISTER: "N"  # whether to allow user registration 
      # CRAWLAB_SETTING_ENABLETUTORIAL: "N"  # whether to enable tutorial 
      # CRAWLAB_NOTIFICATION_MAIL_SERVER: smtp.exmaple.com  # STMP server address STMP 
      # CRAWLAB_NOTIFICATION_MAIL_PORT: 465  # STMP server port STMP 
      # CRAWLAB_NOTIFICATION_MAIL_SENDEREMAIL: admin@exmaple.com  # sender email 
      # CRAWLAB_NOTIFICATION_MAIL_SENDERIDENTITY: admin@exmaple.com  # sender ID 
      # CRAWLAB_NOTIFICATION_MAIL_SMTP_USER: username  # SMTP username 
      # CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD: password  # SMTP password 
    ports:    
      - "8080:8080" # frontend port mapping 
    depends_on:
      - mongo
      - redis
    # volumes:
    #   - "/var/crawlab/log:/var/logs/crawlab" # log persistent 
  worker:
    image: tikazyq/crawlab:latest
    container_name: worker
    environment:
      CRAWLAB_SERVER_MASTER: "N"
      CRAWLAB_MONGO_HOST: "mongo"
      CRAWLAB_REDIS_ADDRESS: "redis"
    depends_on:
      - mongo
      - redis
    # environment:
    #   MONGO_INITDB_ROOT_USERNAME: username
    #   MONGO_INITDB_ROOT_PASSWORD: password
    # volumes:
    #   - "/var/crawlab/log:/var/logs/crawlab" # log persistent 
  mongo:
    image: mongo:latest
    restart: always
    # volumes:
    #   - "/opt/crawlab/mongo/data/db:/data/db"  # make data persistent 
    # ports:
    #   - "27017:27017"  # expose port to host machine
  redis:
    image: redis:latest
    restart: always
    # command: redis-server --requirepass "password" # set redis password 
    # volumes:
    #   - "/opt/crawlab/redis/data:/data"  # make data persistent 
    # ports:
    #   - "6379:6379"  # expose port to host machine
  # splash:  # use Splash to run spiders on dynamic pages
  #   image: scrapinghub/splash
  #   container_name: splash
  #   ports:
  #     - "8050:8050"
```

First, the 'master' node and the 'worker' node are defined, which are the master node and work node of Crawlab. The 'master' and 'worker' depend on the 'mongo' and 'redis' containers, so the 'mongo' and 'redis' containers will be started at the same time before they are started. In this way, the 'mongo' and 'redis' services do not need to be configured separately, and the time of environment configuration is saved.

We set the address of Redis and MongoDB by the 'CRAWLAB_REDIS_ADDRESS' and 'CRAWLAB_MONGO_HOST' parameters respectively. 'CRAWLAB_SERVER_MASTER' is set to 'Y', which means the master node is started (the default value of this parameter is 'N', which means the work node is started). 'CRAWLAB_API_ADDRESS' is the API address of the frontend, please set it to the address where the public network can access the master node, and '8000' is the API port. For details of environment variable configuration, please refer to [configuration section](../Config/), you can configure it according to your own requirements.

⚠️**Note**: In the production environment, it is strongly recommended that you persist the database, otherwise, once your Docker container is shut down and restarted unexpectedly, your data will be lost. The method of database persistence is to uncomment the code about persistence in the above 'docker-compose.yml' template. Persistent data includes MongoDB database, Redis database and log.

After installing 'docker-compose' and defining 'docker-compose.yml', Crawlab can be started only by running the following command.

```bash
docker-compose up -d
```

Similarly, enter "http://localhost:8080" in the browser to see the interface.

### 4. Update/restart Crawlab

We will update the new change build to the new image when Crawlab has an update. The latest image names are 'tikazyq/crawlab:latest'. The image name of a specified version number is 'tikazyq/crawlab:<version>', for example, 'tikazyq/crawlab:0.4.7' is the image corresponding to version v0.4.7.

If you need to update the latest version of the image, just execute the following code.

```bash
# Close and delete Docker container
docker-compose down

# Pull the latest image
docker pull tikazyq/crawlab:latest

# Start Docker container
docker-compose up -d
```

### 5. Next step

Please refer to the [crawler section](../Spider/README.md) for details of how to use Crawlab.

