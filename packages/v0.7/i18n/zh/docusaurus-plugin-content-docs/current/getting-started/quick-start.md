---
sidebar_position: 1
title: 快速开始
---

# 快速开始

安装 Crawlab 最快的方式是使用 [Docker](./installation.md)。如果你不熟悉 Docker，可以参考 [Docker 官方网站](https://www.docker.com/) 并在本地机器上安装。

## 前提条件

确保你已在本地机器上安装 Docker。

- Windows 和 Mac 用户可安装 [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Linux 用户可参考 [Docker 官方文档](https://docs.docker.com/engine/install/) 进行安装

## 配置 docker-compose.yml

创建名为 `docker-compose.yml` 的配置文件并输入以下内容：

```yaml
services:
  master:
    image: crawlabteam/crawlab
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

## 拉取镜像

执行以下命令拉取所需镜像：

```bash
docker compose pull
```

## 启动 Crawlab

执行以下命令启动 Crawlab：

```bash
docker compose up -d
```

现在你可以打开浏览器并访问 `http://localhost:8080` 开始使用 Crawlab。

## 后续步骤

:::warning
这是 Crawlab 的最小化演示配置，你可以在此体验大部分功能。请勿在生产环境中使用此配置！
:::

如需在生产环境部署 Crawlab，请参考 [安装指南](./installation.md) 获取更多信息。

建议继续学习 [基础教程](./basic-tutorial.md) 了解如何使用 Crawlab。