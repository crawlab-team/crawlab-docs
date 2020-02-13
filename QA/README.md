## Q&A

#### 为何我访问 http://localhost:8080 提示访问不了？

假如您是Docker部署的，请检查一下您是否用了Docker Machine，这样的话您需要输入地址 http://192.168.99.100:8080 才行。

另外，请确保您用了`-p 8080:8080`来映射端口，并检查宿主机是否开放了8080端口。

#### 我可以看到登录页面了，但为何我点击登陆的时候按钮一直转圈圈，或者提示检查用户名密码？

如果您是用的最新版本 `v0.4.4` 且为 Docker 部署，您应该有很小的概率出现这个问题，因为在这个版本中，我们去除了 `CRAWLAB_API_ADDRESS` 这个麻烦的环境变量，默认改为用 8080 端口来获取 API 数据，只是需要在 URL Path 前面加一个 `/api` 前缀。这意味着，所有请求，不管是前端还是后端，都是走 8080 端口（当然，您可以自己设置为其他端口）。

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

建议您用 `Kubernetes`（简称 K8S）来管理 Crawlab 多个节点。详情可以阅读 [这篇文章](https://mp.weixin.qq.com/s?__biz=MzA4NTI3MDczMQ==&mid=2648421495&idx=1&sn=8856af6e7ea1e9947d1c27a76aefe509&chksm=87f59dd3b08214c538f4d48f20df2923aec0ff05d053a68bec2e73fbf9886096f741197aa39a&mpshare=1&scene=1&srcid=1206PH2f5pPMib1nlf253oP2&sharer_sharetime=1575632058514&sharer_shareid=94a92f1041e202e68ae357b6530fc68c&exportkey=AjblMAl05lrn18vSvHIJ4fM%3D&pass_ticket=bGg98lGunZfkTqL19G6rj3F4jyGo%2BPyr9K7KQAflR8fYhw9LNyOThOUYNxbspGyV#rd)

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
