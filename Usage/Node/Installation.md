## 依赖安装

依赖安装是经常使用 [Crawlab](https://github.com/crawlab-team/crawlab) 经常需要的需求，目前的临时解决方案都是通过 hacking 的方式。而现在，我们的最新版本已经有比较成熟的解决方案，也就是在界面上操作安装依赖。

### 如何使用依赖安装

下面我们将介绍如何在 [Crawlab](https://github.com/crawlab-team/crawlab) 界面上使用依赖安装。

首先我们需要导航到节点列表页，点击一个节点的蓝色查看按钮（如下图），进入节点详情页。

![](http://static-docs.crawlab.cn/node-list.png)

进入节点详情页之后，点击“安装”标签，进入依赖安装页面。如果在搜索栏中搜索相关的依赖库，将得到相近的依赖列表。例如，Python 中可以得到 pip 的相关依赖。点击“安装”开始 `pip install <package_name>`，并稍等片刻，就会收到安装成功（或失败）的提示信息；如果该依赖已经在该节点上存在，则会显示“卸载”按钮，点击则可以开始卸载该依赖，相当于 `pip uninstall <package_name>`。当然，其他语言对应其所对应的包管理操作，例如 Node.js 对应 npm。

![](http://static-docs.crawlab.cn/node-detail-installation.png)

点击“查看已安装”，可以看到该节点上已安装的依赖以及其对应的版本，如下图。同样，点击“卸载”可以卸载该依赖。

![](http://static-docs.crawlab.cn/node-detail-installation-existing.png)

由于 Python 是 Docker 镜像上预装的（待会儿会介绍如何在 Docker 上预装 Node.js）。点击 “Node.js” 标签，会看到提示说“Node.js 还没有安装，您是否打算安装它？”。点击“安装”按钮，后台会开始安装 nvm 和 Node.js 8.12 版本。然后就会看到跟 Python 一样的界面了。

![](http://static-docs.crawlab.cn/node-detail-installation-lang.png)

### Docker 中预装编程语言

为了方便爬虫开发者在 Docker 中的 Node.js 爬虫应用，我们开发了在 Docker 中配置预装 Node.js 的功能。只需要在启动的时候设置环境变量 `CRAWLAB_SERVER_LANG_NODE` 为 `Y`，然后启动镜像就可以了。例如如下 `docker-compose.yml`。

```yaml
version: '3.3'
services:
  master: 
    image: tikazyq/crawlab:latest
    container_name: master
    environment:
      CRAWLAB_API_ADDRESS: "http://localhost:8000"  # backend API address 后端 API 地址，设置为 http://<宿主机IP>:<端口>，端口为映射出来的端口
      CRAWLAB_SERVER_MASTER: "Y"  # whether to be master node 是否为主节点，主节点为 Y，工作节点为 N
      CRAWLAB_MONGO_HOST: "mongo"  # MongoDB host address MongoDB 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_REDIS_ADDRESS: "redis"  # Redis host address Redis 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_SERVER_LANG_NODE: "Y"  # 预安装 Node.js 语言环境
    ports:    
      - "8080:8080" # frontend port mapping 前端端口映射
      - "8000:8000" # backend port mapping 后端端口映射 
    depends_on:
      - mongo
      - redis
  worker:
    image: tikazyq/crawlab:latest
    container_name: worker
    environment:
      CRAWLAB_SERVER_MASTER: "N"
      CRAWLAB_MONGO_HOST: "mongo"
      CRAWLAB_REDIS_ADDRESS: "redis"
      CRAWLAB_SERVER_LANG_NODE: "Y"  # 预安装 Node.js 语言环境
    depends_on:
      - mongo
      - redis
  mongo:
    image: mongo:latest
    restart: always
    # volumes:
    #   - "/opt/crawlab/mongo/data/db:/data/db"  # make data persistent 持久化
    # ports:
    #   - "27017:27017"  # expose port to host machine 暴露接口到宿主机
  redis:
    image: redis:latest
    restart: always
    # volumes:
    #   - "/opt/crawlab/redis/data:/data"  # make data persistent 持久化
    # ports:
    #   - "6379:6379"  # expose port to host machine 暴露接口到宿主机
```

### 不足的地方

我知道开发者们会吐槽：为何不做上传 `requirements.txt` 或 `package.json` 批量安装的功能啊；为何不支持环境持久化，每次都要重新安装啊；为何不支持 Java 啊... 我知道这些都是很实用的功能，但 [Crawlab](https://github.com/crawlab-team/crawlab) 的开发向来都是遵从敏捷开发和精益打磨的原则，不会过度开发一个功能，优先保证可行性、可用性、健壮性和稳定性。因此，在验证了大家的使用情况后，我们会逐步完善这个功能，让其变得更加实用。

