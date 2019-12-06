## Q&A

#### 1. 为何我访问 http://localhost:8080 提示访问不了？

假如您是Docker部署的，请检查一下您是否用了Docker Machine，这样的话您需要输入地址 http://192.168.99.100:8080 才行。

另外，请确保您用了`-p 8080:8080`来映射端口，并检查宿主机是否开放了8080端口。

#### 2. 我可以看到登录页面了，但为何我点击登陆的时候按钮一直转圈圈，或者提示检查用户名密码？

绝大多数情况下，您可能是没有正确配置`CRAWLAB_API_ADDRESS`这个环境变量。这个变量是告诉前端应该通过哪个地址来请求API数据的，因此需要将它设置为宿主机的IP地址＋端口，例如 `http://192.168.0.1:8000`。接着，重启容器，在浏览器中输入宿主机IP＋端口，就可以顺利登陆了。

请注意，8080是前端端口，8000是后端端口，您在浏览器中只需要输入前端的地址就可以了，要注意区分。

另外，在 `v0.3.5` 版本中，我们为了解决 https 的问题，要求在 `CRAWLAB_API_ADDRESS` 中注明 `http` 或者 `https`，所以您的 `CRAWLAB_API_ADDRESS` 应该为 `http://<your_ip>:<your_api_port>`，例如 `http://localhost:8000`。

#### 3. 我执行了爬虫，但是在Crawlab上看不到结果

强烈建议您先阅读了[与Scrapy集成](https://tikazyq.github.io/crawlab-docs/Examples/ScrapyIntegration.html)。

简单来说，Crawlab目前只支持MongoDB，而且您需要保证存放的数据与Crawlab的数据库一致，另外您需要在传给MongoDB时加上`task_id`，并设置为Crawlab传过来的环境变量`CRAWLAB_TASK_ID`，您需要存放的collection名字为同样是传过来的`CRAWLAB_COLLECTION`。

#### 4. 为何启动Crawlab时，后台日志显示`no reachable servers`？

这是因为您没有连上MongoDB，请确保您的`CRAWLAB_MONGO_HOST`是否设置对。如果为Docker Compose，可以将其设置为`mongo`。

#### 5. 在爬虫程序中打印中文会报错

有不少朋友反映这个问题了，可能是跟Docker镜像有关。建议您暂时不打印中文，等待我们fix这个问题。

#### 6. 我的爬虫有一些第三方的依赖，怎么办？

其实很多人遇到这个问题，例如需要安装 `BeautifulSoup`、`pymysql` 等等。

解决办法有两个：

1. 爬虫方式：上传一个特殊爬虫，将 `pip`、`npm` 等安装命令写在一个脚本中，然后执行这个脚本，或者直接将安装命令写在“执行命令”中；
2. 构建新镜像：基于 `tikazyq/crawlab` 镜像（`FROM tikazyq/crawlab`），将需要安装第三方依赖的命令写在构建文件 `Dockerfile` 中，例如 `RUN pip install bs4 pymysql`，然后打包成新镜像，再用新镜像生成容器运行。

不过，开发组现在也在研发更简单的安装第三方依赖的方法，敬请期待后续开发。

#### 7. Demo 网站报 502 Bad Gateway 错误

这个很正常，因为 Demo 版本的 Crawlab 是暂时没有任何权限限制的，因此任何人都可以上传任何代码而不受到监控。Demo 网站长期会遭到注入 `xmrig-notls` 的挖矿病毒，导致内存 CPU 占满最终服务崩溃。因此，我们在加入保护措施之前，不会轻易启动 Demo 网站。敬请谅解。

#### 8. 我有多台服务器，打算将 Crawlab 部署在上面可以吗？

建议您用 `Kubernetes`（简称 K8S）来管理 Crawlab 多个节点。详情可以阅读 [这篇文章](https://mp.weixin.qq.com/s?__biz=MzA4NTI3MDczMQ==&mid=2648421495&idx=1&sn=8856af6e7ea1e9947d1c27a76aefe509&chksm=87f59dd3b08214c538f4d48f20df2923aec0ff05d053a68bec2e73fbf9886096f741197aa39a&mpshare=1&scene=1&srcid=1206PH2f5pPMib1nlf253oP2&sharer_sharetime=1575632058514&sharer_shareid=94a92f1041e202e68ae357b6530fc68c&exportkey=AjblMAl05lrn18vSvHIJ4fM%3D&pass_ticket=bGg98lGunZfkTqL19G6rj3F4jyGo%2BPyr9K7KQAflR8fYhw9LNyOThOUYNxbspGyV#rd)

由于 Crawlab 默认是用 `MAC` 地址来作为节点的唯一标识，因此如果您用 `docker-compose` 在多台服务器上管理容器，可能会出现 `MAC` 地址相同而导致无法显示所有节点的情况。因此，您需要设置 `CRAWLAB_SERVER_REGISTER_TYPE` 为 `ip`，然后 `CRAWLAB_SERVER_REGISTER_IP` 为各节点的唯一标识就可以了。

⚠️注意：这里的 `ip` 并不是真正的 IP 地址，而是唯一标识符，只是开发的时候图方便就采用 IP 了。真正的名字应该叫 `id`，后面我们会做调整，避免混淆。

#### 9. 我有一些运行很长时间的爬虫任务（长任务），会导致后面的任务一直处于“待定”状态，我该怎么办？

任务一直出现“待定”状态是因为 Crawlab 单节点的执行器 `Executor` 被占满了，其数量由 `CRAWLAB_TASK_WORKERS` 决定，默认是 4 个。如果您的机器性能足够，例如 32 核，而您需要跑很多长任务，例如 100 个任务，您可以将 `CRAWLAB_TASK_WORKERS` 设置为大于等于 100。

#### 10. 我更新了爬虫文件，但为何隔一段时间就变回去了？

这是因为，我们暂时只支持以上传 zip 文件的方式更改爬虫，所有上传的文件都会被同步到 `MongoDB GridFS`，保证爬虫代码一致性。

后续我们会加入文件管理系统，包括文件添加、文件修改、文件删除、文件重命名，同时又保证代码一致性。

#### 11. 定时任务为何有 6 位？

目前 Crawlab 的定时任务暂时为 `秒 分 时 天 月 星期`，跟 Linux 的稍微有点不同，多了一个秒。后续我们会将秒取消，让其与 Linux 一致。