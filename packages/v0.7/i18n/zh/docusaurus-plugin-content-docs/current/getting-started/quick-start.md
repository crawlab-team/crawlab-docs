---
sidebar_position: 1
title: 快速开始
---

# 快速开始

安装Crawlab的最快方式是[Docker](./installation.md)。如果你不熟悉Docker，你可以参考[Docker官方站点](https://www.docker.com/)并在本地机器上安装它。

## 拉取镜像

确保你已经安装了Docker，然后拉取Crawlab和MongoDB的镜像。

```bash
docker pull crawlabteam/crawlab
docker pull mongo
```

## 配置docker-compose.yml

创建一个名为`docker-compose.yml`的配置文件，并输入以下内容。

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
    image: mongo:5
```

## 启动Crawlab

通过执行以下命令启动Crawlab以及MongoDB。

```bash
docker compose up -d
```

现在你可以打开浏览器并导航到`http://localhost:8080`开始使用Crawlab。

## 接下来做什么

:::warning
这是Crawlab的最小化设置，你可以在这个演示环境中体验大多数功能。你不应该在生产环境中使用这个演示设置！
:::

如果你想在生产环境中部署Crawlab，你应该参考[安装](./installation.md)获取更多信息。

我们还建议你按照[基础教程](./basic-tutorial.md)学习如何使用Crawlab。