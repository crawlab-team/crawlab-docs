## Dependent installation

Dependent installation is a frequently needed requirement for using [Crawlab](https://github.com/crawlab-team/crawlab). The current temporary solution is by hacking. Now, our latest version has a more mature solution, which is to operate the installation dependency on the interface.

### How to use dependent installation

Next, we will show you how to use dependency installation on the [Crawlab](https://github.com/crawlab-team/crawlab) interface.

First, we need to navigate to the node list page and click the blue view button of a node (as shown in the figure below) to enter the node details page.

![](http://static-docs.crawlab.cn/node-list.png)

After entering the node details page, click the "Install" tab to enter the dependent installation page. If you search the related dependency Library in the search bar, you will get a similar dependency list. For example, you can get the dependency of PIP in Python. Click 'Install' to start 'pip install <package_name>', and wait for a moment, you will receive the prompt message of successful (or failed) installation; if the dependency already exists on this node, the "uninstall" button will be displayed, and click to start uninstalling the dependency, which is equivalent to 'pip uninstall <package_name>'. Of course, other languages correspond to their corresponding package management operations, for example, Node.js corresponds to npm.

![](http://static-docs.crawlab.cn/node-detail-installation.png)

Click 'View installed' to see the installed dependencies and their corresponding versions on this node, as shown in the following figure. Similarly, click 'uninstall' to uninstall the dependency.

![](http://static-docs.crawlab.cn/node-detail-installation-existing.png)

Python is pre installed on the Docker image (I'll show you how to pre install Node.js on the Docker later). Click the 'Node.js' tab, and you will see a prompt saying 'Node.js has not been installed, do you plan to install it?'. Click the 'Install' button, and nvm and node.js version 8.12 will be installed in the background. Then you'll see the same interface as Python.

![](http://static-docs.crawlab.cn/node-detail-installation-lang.png)

### Pre installed programming language in Docker

In order to facilitate crawler developers to use Node.js in Docker, we have developed the function of pre installing node.js in Docker. You only need to set the environment variable 'CRAWLAB_SERVER_LANG_NODE' to 'Y' at start it, and then start the image. For example, 'docker-compose.yml'.

```yaml
version: '3.3'
services:
  master: 
    image: tikazyq/crawlab:latest
    container_name: master
    environment:
      CRAWLAB_SERVER_MASTER: "Y"  # whether to be master node 是否为主节点，主节点为 Y，工作节点为 N
      CRAWLAB_MONGO_HOST: "mongo"  # MongoDB host address MongoDB 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_REDIS_ADDRESS: "redis"  # Redis host address Redis 的地址，在 docker compose 网络中，直接引用服务名称
      CRAWLAB_SERVER_LANG_NODE: "Y"  # 预安装 Node.js 语言环境
    ports:    
      - "8080:8080"
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

