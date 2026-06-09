---
title: Quick Start
---

# Quick Start

The quickest way to install Crawlab is [Docker](installation/docker.md). If you are not familiar with Docker, you can
refer to [Docker Official Site](https://www.docker.com/) and install it on your local machine.

## Pull Images

Make sure you have installed Docker, and then pull the image of Crawlab and MongoDB.

```bash
docker pull crawlabteam/crawlab
docker pull mongo
```

If you have not installed [Docker Compose](https://docs.docker.com/compose/), you can install it by executing the
command below.

```bash
pip install docker-compose
```

## Configure docker-compose.yml

Create a config file named `docker-compose.yml` and enter the content below.

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

## Start Crawlab

Start Crawlab along with MongoDB by executing the command below.

```bash
docker-compose up -d
```

Now you can open the browser and navigate to `http://localhost:8080` to start using Crawlab.

## What Next

::: warning
This is a minimal setup of Crawlab and you can experience most of the features in this demo environment. You should **
NOT** use this demo setup in production environment!
:::

If you would like to deploy Crawlab in production environment, you should refer
to [Installation](installation/README.md) for more information.

We also recommend that you follow [Basic Tutorial](basic-tutorial/README.md) for how to use Crawlab.
