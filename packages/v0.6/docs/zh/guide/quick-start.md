# 快速开始

最快安装 Crawlab 的方式是 [Docker](installation/docker.md)。如果您对 Docker 不熟悉，您可以参考 [Docker 官网](https://www.docker.com/)
，并将其安装在您本地.

## 拉取镜像

保证您已经安装好 Docker，并能够拉取 Crawlab 和 MongoDB 的镜像。

```bash
docker pull crawlabteam/crawlab
docker pull mongo
```

如果您还没安装 [Docker Compose](https://docs.docker.com/compose/)，您可以执行以下命令。

```bash
pip install docker-compose
```

## 配置 docker-compose.yml

创建配置文件并命名为 `docker-compose.yml`，然后输入以下内容。

```yaml
version: '3.3'
services:
  master:
    image: crawlabteam/crawlab
    container_name: crawlab_master
    environment:
      CRAWLAB_NODE_MASTER: "Y"
      CRAWLAB_MONGO_HOST: "mongo"
    ports:
      - "8080:8080"
    depends_on:
      - mongo
  mongo:
    image: mongo:4.2
```

## 启动 Crawlab

执行以下命令启动 Crawlab 以及 MongoDB。

```bash
docker-compose up -d
```

现在您可以打开浏览器并导航到 `http://localhost:8080` 并开始使用 Crawlab。

## 下一步

::: warning
这是最小化配置的 Crawlab，您可以通过该演示环境来体验大多数功能。您 **不能** 在生产环节中使用该配置。
:::

如果您希望在生产环境中部署 Crawlab，您应该参考 [安装](installation/README.md).

我们也推荐您完成 [基础教程](basic-tutorial/README.md) 以学习如何使用 Crawlab.
