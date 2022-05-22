## 专业版部署

**⚠️注意：**

**1. 该功能为 [Crawlab 专业版](https://www.crawlab.cn/purchase-pro) 专属功能，如需体验此功能，请访问 [演示网站](https://demo.crawlab.cn)**

**2. 专业版是通过 Docker 安装的，强烈推荐您用 Linux 操作系统**

Crawlab 专业版（Crawlab Pro）是 Crawlab 的商业版本，在稳定性与功能上较社区版更有优势，非常适合企业级爬虫管理。

下面将详细介绍如何部署 Crawlab 专业版。

#### 1. 获取阿里云 RAM 账号

我们的 Crawlab 专业版 Docker 镜像是通过[阿里云容器镜像服务](https://www.aliyun.com/product/acr)来授权并分发给专业版用户的。因此，为了获取专业版 Docker 镜像，我们需要通过 [RAM 账号](https://www.aliyun.com/product/ram) 授权。

Crawlab 开发组咨询顾问会在第一时间将阿里云 RAM 账号通过微信客户交流群发给您。

然后，您需要设置容器镜像服务的密码，也就是 `docker login` 的密码。

1. 导航到 https://signin.aliyun.com
2. 用之前获取的 RAM 账号密码登录
3. 导航至 “容器镜像服务”；
4. 这时，阿里云要求输入阿里云 Docker Registry 密码，请输入您自己定义的密码，这将是 `docker login` 时的密码。

#### 2. 部署并启动专业版

请在目标服务器上执行以下步骤拉取专业版镜像。注意：您需要在每一台待部署服务器上拉取专业版镜像。

1. 如果目标服务器没有 Docker，那您需要参考 [Docker 部署文档](https://docs.crawlab.cn/zh/Installation/Docker.html) 并按照相应的操作系统（Ubuntu / CentOS）的步骤安装 Docker，以及 Docker Compose；
2. 执行 `docker pull registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab-pro` 拉取专业版 Docker 镜像
3. 在主节点服务器上创建 `/root/crawlab-pro-docker` 文件夹，并在其中按照生产环境可用的标准编写 `docker-compose.yml` 文件（参照 “4. docker-compose.yml 配置“ 主节点）：
   - 只编写主节点服务
   - 如果需要 MongoDB 和 Redis，必须要设置密码，并将端口暴露出来，同时需要持久化数据（特别是 MongoDB，必须持久化）
   - 如果客户需要外网连接，需要开放主节点的端口（默认 8080）、MongoDB 端口（默认 27017）、Redis 端口（默认 6379）
7. 在 `/root/crawlab-pro-docker` 中，执行 `docker-compose up -d` 启动 Crawlab 服务（如果需要，以及 MongoDB 和 Redis）
8. 在 `/root/crawlab-pro-docker` 中，执行 `docker-compose logs` 查看服务是否正常运行
9. 如果日志中遇到报错信息导致无法启动 Crawlab 服务，则排查问题并加以解决，重新执行 `docker-compose up -d` 再次启动服务
10. 如果启动成功，在浏览器中访问 Crawlab 专业版 Web 地址（ `http://<主节点IP>:<主节点端口，默认8080>`），并用初始账号密码 `admin/admin` 登录， 检查是否能成功登录

#### 3. 添加工作节点

添加工作节点相对比较简单，步骤如下：

1. 在目标工作节点服务器上重复 "2. 部署并启动专业版" 中 的步骤 1-2，安装 Docker 并拉取 Docker 镜像；
2. 在工作节点服务器上创建 `/root/crawlab-pro-docker` 文件夹，并在其中按照生产环境可用的标准编写 `docker-compose.yml` 文件（参照 “4. docker-compose.yml 配置“ 工作节点）：
   - 更改 `CRAWLAB_SERVER_MASTER` 为 `N`
   - 配置 MongoDB 和 Redis 连接信息，包括账号密码
3. 重复 "2. 部署并启动专业版" 中的步骤 4-7
4. 如果服务启动成功，则访问 Crawlab 专业版 Web 地址，检查该工作节点是否存在

#### 4. docker-compose.yml 配置

我们是通过 `docker-compoe.yml` 来配置各个节点的 Docker 容器的。

我们假设有 1 个主节点和 1 个工作节点，它们的 IP 地址分别为 `192.168.0.1` 和 `192.168.0.2`。

下面分别是主节点和工作节点的配置参考。

##### 主节点 docker-compose.yml（附带 MongoDB 和 Redis）

```yaml
version: '3.3'
services:
  master:
    image: registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab-pro:latest
    container_name: crawlab_pro_master
    environment:
      CRAWLAB_SERVER_MASTER: "Y"  # whether to be master node 是否为主节点，主节点为 Y，工作节点为 N
      CRAWLAB_MONGO_HOST: "mongo"  # MongoDB host address MongoDB 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_MONGO_PORT: "27017"  # MongoDB port MongoDB 的端口
      CRAWLAB_MONGO_DB: "crawlab_pro"  # MongoDB database MongoDB 的数据库
      CRAWLAB_MONGO_USERNAME: "mongousername"  # MongoDB username MongoDB 的用户名
      CRAWLAB_MONGO_PASSWORD: "mongopassword"  # MongoDB password MongoDB 的密码
      CRAWLAB_MONGO_AUTHSOURCE: "admin"  # MongoDB auth source MongoDB 的验证源
      CRAWLAB_REDIS_ADDRESS: "redis"  # Redis host address Redis 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_REDIS_PORT: "6379"  # Redis port Redis 的端口
      CRAWLAB_REDIS_DATABASE: "1"  # Redis database Redis 的数据库
      CRAWLAB_REDIS_PASSWORD: "redispassword"  # Redis password Redis 的密码
      CRAWLAB_TASK_WORKERS: 16  # number of task executors 任务执行器个数（并行执行任务数）
      CRAWLAB_SERVER_REGISTER_TYPE: "ip"  # node register type 节点注册方式. 默认为 mac 地址，也可设置为 ip（防止 mac 地址冲突）
      CRAWLAB_SERVER_REGISTER_IP: "192.168.0.1"  # node register ip 节点注册IP. 节点唯一识别号，只有当 CRAWLAB_SERVER_REGISTER_TYPE 为 "ip" 时才生效
      # CRAWLAB_SERVER_LANG_NODE: "Y"  # whether to pre-install Node.js 预安装 Node.js 语言环境
      # CRAWLAB_SERVER_LANG_JAVA: "Y"  # whether to pre-install Java 预安装 Java 语言环境
      # CRAWLAB_SERVER_LANG_DOTNET: "Y"  # whether to pre-install .Net core 预安装 .Net Core 语言环境
      # CRAWLAB_SERVER_LANG_PHP: "Y"  # whether to pre-install PHP 预安装 PHP 语言环境
      # CRAWLAB_SETTING_ALLOWREGISTER: "N"  # whether to allow user registration 是否允许用户注册
      # CRAWLAB_SETTING_ENABLETUTORIAL: "N"  # whether to enable tutorial 是否启用教程
      # CRAWLAB_SETTING_RUNONMASTER: "N"  # whether to run on master node 是否在主节点上运行任务
      # CRAWLAB_SETTING_DEMOSPIDERS: "Y"  # whether to init demo spiders 是否使用Demo爬虫
      # CRAWLAB_SETTING_DEMO: "Y"  # whether to init demo spiders 是否使用Demo爬虫
      # CRAWLAB_SETTING_CHECKSCRAPY: "Y"  # whether to automatically check if the spider is scrapy 是否自动检测爬虫为scrapy
      # CRAWLAB_NOTIFICATION_MAIL_SERVER: smtp.exmaple.com  # STMP server address STMP 服务器地址
      # CRAWLAB_NOTIFICATION_MAIL_PORT: 465  # STMP server port STMP 服务器端口
      # CRAWLAB_NOTIFICATION_MAIL_SENDEREMAIL: admin@exmaple.com  # sender email 发送者邮箱
      # CRAWLAB_NOTIFICATION_MAIL_SENDERIDENTITY: admin@exmaple.com  # sender ID 发送者 ID
      # CRAWLAB_NOTIFICATION_MAIL_SMTP_USER: username  # SMTP username SMTP 用户名
      # CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD: password  # SMTP password SMTP 密码
    ports:
      - "8080:8080" # frontend port mapping 前端端口映射
    depends_on:
      - mongo
      - redis
  mongo:
    image: mongo:latest
    container_name: crawlab_pro_mongo
    restart: always
    volumes:
      - "/opt/crawlab-pro/mongo/data/db:/data/db"  # make data persistent 持久化
    environment:
      MONGO_INITDB_ROOT_USERNAME: "mongousername"
      MONGO_INITDB_ROOT_PASSWORD: "mongopassword"
    ports:
      - "27017:27017"  # expose port to host machine 暴露接口到宿主机
  redis:
    image: redis:latest
    container_name: crawlab_pro_redis
    restart: always
    command: redis-server --requirepass "redispassword" # set redis password 设置 Redis 密码
    volumes:
      - "/opt/crawlab-pro/redis/data:/data"  # make data persistent 持久化
    ports:
      - "6379:6379"  # expose port to host machine 暴露接口到宿主机
```

`192.168.0.1` 这里是主节点服务器的 IP 地址，可以是内网也可以是外网，取决于主节点服务器是否能被其他工作节点服务器所访问。

如果您已经有部署好的 MongoDB 数据库和 Redis 数据库，您可以这样编写。这里假设 MongoDB 的 IP 地址为 `192.168.0.3`，Redis 的 IP 地址为 `192.168.0.4`。

##### 主节点 docker-compose.yml（独立部署的 MongoDB 和 Redis）

```yaml
version: '3.3'
services:
  master:
    image: registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab-pro:latest
    container_name: crawlab_pro_master
    environment:
      CRAWLAB_SERVER_MASTER: "Y"  # whether to be master node 是否为主节点，主节点为 Y，工作节点为 N
      CRAWLAB_MONGO_HOST: "192.168.0.3"  # MongoDB host address MongoDB 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_MONGO_PORT: "27017"  # MongoDB port MongoDB 的端口
      CRAWLAB_MONGO_DB: "crawlab_pro"  # MongoDB database MongoDB 的数据库
      CRAWLAB_MONGO_USERNAME: "mongousername"  # MongoDB username MongoDB 的用户名
      CRAWLAB_MONGO_PASSWORD: "mongopassword"  # MongoDB password MongoDB 的密码
      CRAWLAB_MONGO_AUTHSOURCE: "admin"  # MongoDB auth source MongoDB 的验证源
      CRAWLAB_REDIS_ADDRESS: "192.168.0.4"  # Redis host address Redis 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_REDIS_PORT: "6379"  # Redis port Redis 的端口
      CRAWLAB_REDIS_DATABASE: "1"  # Redis database Redis 的数据库
      CRAWLAB_REDIS_PASSWORD: "redispassword"  # Redis password Redis 的密码
      CRAWLAB_TASK_WORKERS: 16  # number of task executors 任务执行器个数（并行执行任务数）
      CRAWLAB_SERVER_REGISTER_TYPE: "ip"  # node register type 节点注册方式. 默认为 mac 地址，也可设置为 ip（防止 mac 地址冲突）
      CRAWLAB_SERVER_REGISTER_IP: "192.168.0.1"  # node register ip 节点注册IP. 节点唯一识别号，只有当 CRAWLAB_SERVER_REGISTER_TYPE 为 "ip" 时才生效
      # CRAWLAB_SERVER_LANG_NODE: "Y"  # whether to pre-install Node.js 预安装 Node.js 语言环境
      # CRAWLAB_SERVER_LANG_JAVA: "Y"  # whether to pre-install Java 预安装 Java 语言环境
      # CRAWLAB_SERVER_LANG_DOTNET: "Y"  # whether to pre-install .Net core 预安装 .Net Core 语言环境
      # CRAWLAB_SERVER_LANG_PHP: "Y"  # whether to pre-install PHP 预安装 PHP 语言环境
      # CRAWLAB_SETTING_ALLOWREGISTER: "N"  # whether to allow user registration 是否允许用户注册
      # CRAWLAB_SETTING_ENABLETUTORIAL: "N"  # whether to enable tutorial 是否启用教程
      # CRAWLAB_SETTING_RUNONMASTER: "N"  # whether to run on master node 是否在主节点上运行任务
      # CRAWLAB_SETTING_DEMOSPIDERS: "Y"  # whether to init demo spiders 是否使用Demo爬虫
      # CRAWLAB_SETTING_DEMO: "Y"  # whether to init demo spiders 是否使用Demo爬虫
      # CRAWLAB_SETTING_CHECKSCRAPY: "Y"  # whether to automatically check if the spider is scrapy 是否自动检测爬虫为scrapy
      # CRAWLAB_NOTIFICATION_MAIL_SERVER: smtp.exmaple.com  # STMP server address STMP 服务器地址
      # CRAWLAB_NOTIFICATION_MAIL_PORT: 465  # STMP server port STMP 服务器端口
      # CRAWLAB_NOTIFICATION_MAIL_SENDEREMAIL: admin@exmaple.com  # sender email 发送者邮箱
      # CRAWLAB_NOTIFICATION_MAIL_SENDERIDENTITY: admin@exmaple.com  # sender ID 发送者 ID
      # CRAWLAB_NOTIFICATION_MAIL_SMTP_USER: username  # SMTP username SMTP 用户名
      # CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD: password  # SMTP password SMTP 密码
    ports:
      - "8080:8080" # frontend port mapping 前端端口映射
```

##### 工作节点 docker-compose.yml

```yaml
version: '3.3'
services:
  worker:
    image: registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab-pro:latest
    container_name: crawlab_pro_worker
    environment:
      CRAWLAB_SERVER_MASTER: "N"  # whether to be master node 是否为主节点，主节点为 Y，工作节点为 N
      CRAWLAB_MONGO_HOST: "192.168.0.3"  # MongoDB host address MongoDB 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_MONGO_PORT: "27017"  # MongoDB port MongoDB 的端口
      CRAWLAB_MONGO_DB: "crawlab_pro"  # MongoDB database MongoDB 的数据库
      CRAWLAB_MONGO_USERNAME: "mongousername"  # MongoDB username MongoDB 的用户名
      CRAWLAB_MONGO_PASSWORD: "mongopassword"  # MongoDB password MongoDB 的密码
      CRAWLAB_MONGO_AUTHSOURCE: "admin"  # MongoDB auth source MongoDB 的验证源
      CRAWLAB_REDIS_ADDRESS: "192.168.0.4"  # Redis host address Redis 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_REDIS_PORT: "6379"  # Redis port Redis 的端口
      CRAWLAB_REDIS_DATABASE: "1"  # Redis database Redis 的数据库
      CRAWLAB_REDIS_PASSWORD: "redispassword"  # Redis password Redis 的密码
      CRAWLAB_TASK_WORKERS: 16  # number of task executors 任务执行器个数（并行执行任务数）
      CRAWLAB_SERVER_REGISTER_TYPE: "ip"  # node register type 节点注册方式. 默认为 mac 地址，也可设置为 ip（防止 mac 地址冲突）
      CRAWLAB_SERVER_REGISTER_IP: "192.168.0.2"  # node register ip 节点注册IP. 节点唯一识别号，只有当 CRAWLAB_SERVER_REGISTER_TYPE 为 "ip" 时才生效
```

这里假设是独立部署的 MongoDB（192.168.0.3）和 Redis（192.168.0.4）。如果 MongoDB 和 Redis 是与主节点写在一个 `docker-compose.yml` 文件里，则它们的连接都需要指向主节点的 IP 地址，也就是 `192.168.0.1`。

#### 5. Kubernetes 部署

当您需要部署的节点数量大于 5 时，管理节点的成本成指数型上升。这时我们需要集群编排工具来管理节点。现在比较主流也比较强大的工具为 Kubernetes，简称为 K8S。

用 K8S 部署 Crawlab 专业版的绝大部分内容可以参考 [Kubernetes 部署](https://docs.crawlab.cn/zh/Installation/Kubernetes.html)。不过稍微有一些不同：

- 需要提前在每台待部署服务器上拉取专业版 Docker 镜像
- 镜像名称要设置为 `registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab-pro:latest`
- 需要在 `yaml` 文件中将 `imagePullPolicy` 设置为 `Never`，防止 K8S 集群自动拉取镜像

**您可以在微信客户交流群中向咨询顾问了解更多信息**

