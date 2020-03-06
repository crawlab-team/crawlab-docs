## Q&A

#### 为何我访问 http://localhost:8080 提示访问不了？

假如您是Docker部署的，请检查一下您是否用了Docker Machine，这样的话您需要输入地址 http://192.168.99.100:8080 才行。

另外，请确保您用了`-p 8080:8080`来映射端口，并检查宿主机是否开放了8080端口。

#### 我可以看到登录页面了，但为何我点击登陆的时候按钮一直转圈圈，或者提示检查用户名密码？

如果您是用的 `v0.4.4+` 且为 Docker 部署，您应该有很小的概率出现这个问题，因为在这个版本中，我们去除了 `CRAWLAB_API_ADDRESS` 这个麻烦的环境变量，默认改为用 8080 端口来获取 API 数据，只是需要在 URL Path 前面加一个 `/api` 前缀。这意味着，所有请求，不管是前端还是后端，都是走 8080 端口（当然，您可以自己设置为其他端口）。

如果您遇到了转圈圈或提示错误的问题，请保证您已经升级到了最新版本。

如果还是有问题，请查看后端是否出现了问题。如果是 Docker，请用 `docker logs <container_name>` 来查看日志，然后看看是否是其他问题。

如果是直接部署或源码部署，请在 `./frontend/.env.production` 这个文件中，将 `VUE_APP_BASE_URL` 设置为您的 API 地址。请不要修改 `./backend/conf/config.yml` 中的 `api.address` 这个变量，不会起作用。

#### 我执行了爬虫，但是在Crawlab上看不到结果

强烈建议您先阅读了 [爬虫集成章节](../Integration/README.md)。

简单来说，Crawlab目前只支持MongoDB，而且您需要保证存放的数据与Crawlab的数据库一致，另外您需要在传给MongoDB时加上`task_id`，并设置为Crawlab传过来的环境变量`CRAWLAB_TASK_ID`，您需要存放的collection名字为同样是传过来的`CRAWLAB_COLLECTION`。

考虑到这样做的复杂性，我们开发了 `Crawlab SDK`，可以帮助您简化这个流程。请参考 [SDK章节](../SDK/README.md) 和 [集成章节](../Integration/README.md) 来使用 SDK。

#### 为何启动Crawlab时，后台日志显示`no reachable servers`？

这是因为您没有连上MongoDB，请确保您的`CRAWLAB_MONGO_HOST`是否设置对。如果为Docker Compose，可以将其设置为`mongo`。

#### 在爬虫程序中打印中文会报错

有不少朋友反映这个问题了，可能是跟Docker镜像有关。建议您暂时不打印中文，等待我们fix这个问题。

#### 我的爬虫有一些第三方的依赖，怎么办？

其实很多人遇到这个问题，例如需要安装 `BeautifulSoup`、`pymysql` 等等。

解决办法有 3 个：

1. **界面安装（推荐）**：在界面上安装相关依赖，请参考 [节点依赖安装](../Node/Installation.md)；
2. **爬虫方式**：上传一个特殊爬虫，将 `pip`、`npm` 等安装命令写在一个脚本中，然后执行这个脚本，或者直接将安装命令写在“执行命令”中；
3. **构建新镜像**：基于 `tikazyq/crawlab` 镜像（`FROM tikazyq/crawlab`），将需要安装第三方依赖的命令写在构建文件 `Dockerfile` 中，例如 `RUN pip install bs4 pymysql`，然后打包成新镜像，再用新镜像生成容器运行。

#### 我有多台服务器，打算将 Crawlab 部署在上面可以吗？

建议您用 `Kubernetes`（简称 K8S）来管理 Crawlab 多个节点。详情可以阅读 [Kubernetes 安装章节](../Installation/Kubernetes.md)。

由于 Crawlab 默认是用 `MAC` 地址来作为节点的唯一标识，因此如果您用 `docker-compose` 在多台服务器上管理容器，可能会出现 `MAC` 地址相同而导致无法显示所有节点的情况。因此，您需要设置 `CRAWLAB_SERVER_REGISTER_TYPE` 为 `ip`，然后 `CRAWLAB_SERVER_REGISTER_IP` 为各节点的唯一标识就可以了。

⚠️注意：这里的 `ip` 并不是真正的 IP 地址，而是唯一标识符，只是开发的时候图方便就采用 IP 了。真正的名字应该叫 `id`，后面我们会做调整，避免混淆。

#### 我有一些运行很长时间的爬虫任务（长任务），会导致后面的任务一直处于“待定”状态，我该怎么办？

任务一直出现“待定”状态是因为 Crawlab 单节点的执行器 `Executor` 被占满了，其数量由 `CRAWLAB_TASK_WORKERS` 决定，默认是 4 个。如果您的机器性能足够，例如 32 核，而您需要跑很多长任务，例如 100 个任务，您可以将 `CRAWLAB_TASK_WORKERS` 设置为大于等于 100。

#### 我更新了爬虫文件，但为何隔一段时间就变回去了？

这是因为，我们暂时只支持以上传 zip 文件的方式更改爬虫，所有上传的文件都会被同步到 `MongoDB GridFS`，保证爬虫代码一致性。

我们已经加入文件管理系统，包括文件添加、文件修改、文件删除、文件重命名，同时又保证代码一致性。

#### 我发现定时任务执行了两次，怎么办？

很大的原因，您是用了旧版本的定时任务 Cron 格式（6 个元素）放在新版本里运行。这样可能会触发两次运行两次定时任务。如果出现了这样的情况，请将旧版的 Cron 格式更新为新版（5 个元素）。

#### 我从老版本升级到了 v0.4.4，出现无法启动的情况，怎么办？

这是因为 Crawlab 在升级到 v0.4.4 中没有对老版本做兼容，导致定时任务缺少字段，启动报错。

临时解决方案如下：
1. 进入 MongoDB 数据库；
2. 执行命令 `db.schedules.update({user_id:{$exists:false}}, {$set:{user_id:ObjectId('000000000000000000000000')}}, {multi: true})`，此时启动 Crawlab，应该能进入；
3. 导航到“定时任务“，重新创建定时任务（当然也可以不重新创建，只是这样就收不到消息通知）。

#### 我在一个 Scrapy 爬虫下有多个爬虫，我需要在 Crawlab 创建多个爬虫项目么？

不需要。

Crawlab 支持用参数的方式来支持多爬虫的项目。操作方法如下：
1. 将爬虫的 **执行命令** 设置为 `scrapy crawl`；
2. 每次执行的时候，将 **参数** 设置为 `spider_name`，也就是您爬虫的参数。

例如，您有一个爬虫项目，结构如下。

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

如果您想运行 spider1，您应该在命令行中执行 `scrapy crawl spider1`，spider2 为 `scrapy crawl spider2`。这样您其实可以抽象出一个参数为 spider_name，也就是爬虫名称。Crawlab 每次运行爬虫的时候会将 **执行命令** 与 **参数** 组合成一个命令。因此，在这个例子中，您只需要将 **执行命令** 设置为 `scrapy crawl`，**参数** 设置为 `spider1` 或 `spider2` 就可以了。

更多信息，请阅读 [自定义爬虫](../Spider/CustomizedSpider.md) 这个章节。

#### 为何我拉取最新镜像后添加爬虫出现错误？

很大概率是因为您的静态文件没有更新，您需要清除一下浏览器缓存，然后刷新页面，这样就可以解决。

#### 我是直接部署的，为何我安装了 Python 3.6 界面上还是显示没有安装呢？

Crawlab 是根据 `/usr/local/bin/python` 和 `/usr/local/bin/pip` 来确定环境的，因此您需要将对应的 `python` 和 `pip` 执行文件添加软链到 `/usr/local/bin` 上。

具体操作命令如下：

```bash
ln -s <python_path> /usr/local/bin/python
ln -s <pip_path> /usr/local/bin/pip
```

#### 我的是 Java 爬虫，如何用 Crawlab 运行呢？

Crawlab 支持任何语言的爬虫，只要您安装了相应的环境。

对于 Java 爬虫来说，首先您需要安装 Java 环境。如果您是 Docker 安装的话，您需要进入到容器里安装。

```bash
docker exec -it <container_name>
```

然后在容器中运行下面的命令。

```bash
apt-get install -y default-jdk
ln -s /usr/bin/java /usr/local/bin/java
```

这个会安装 Java 10，如果您需要其他的 Java 版本，请用相应的命令。

接下来，您可以选择将 jar 包上传到爬虫，执行命令输入 `/usr/local/bin/java -jar <jar_path>`，然后就可以运行爬虫了。

#### 我拉取镜像等待了很长时间也拉不下来，怎么办？

Crawlab 默认是用 Dockerhub 上的镜像，由于是在国外，您可能拉取会存在一些网络问题。您可以使用国内的阿里云镜像源。具体操作如下。

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab:latest
docker tag registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab:latest tikazyq/crawlab:latest
docker rmi registry.cn-hangzhou.aliyuncs.com/crawlab-team/crawlab:latest
```

#### 我打算用 Crawlab 做爬虫集群管理，有什么安全问题？

如果您希望在公网里访问 Crawlab 界面，您需要注意几个问题：

1. 主节点的前端页面和 API 尽量用 HTTPS；
2. 工作节点不要暴露在公网；
3. MongoDB 和 Redis 数据库尽量在内网，必须开启授权验证
4. MongoDB 和 Redis 需要让所有节点能访问到。

在部署集群之前，建议您先阅读 [原理-整体架构章节](../Architecture/Architecture.md)。

#### 我想把爬虫抓取到的数据存到 MySQL 或 MongoDB 以外的数据库上，有什么办法？

Crawlab 默认是将要求将结果数据存到 MongoDB 里，不过也支持将结果数据存到其他数据库，例如 MySQL、Postgres、MS SQL 等等。我们推荐的做法是双写，也就是同时将数据写入 MongoDB 和其他数据库，这样能保证您既能再 Crawlab 界面上看到结果数据，又能保证您将数据存到您理想的数据库中。保存到 MongoDB 非常简单，可以参照 [爬虫集成章节](../Integration/README.md)。

当然，我们目前正在开发对其他数据库类型的支持，以帮助到更多需要储存到其他数据库类型的用户。这样就不需要双写了。请关注后续开发。