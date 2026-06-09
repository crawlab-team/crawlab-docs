---
sidebar_position: 1
title: Quick Start
---

# Quick Start

The quickest way to install Crawlab is [Docker](./installation.md). If you are not familiar with Docker, you can
refer to [Docker Official Site](https://www.docker.com/) and install it on your local machine.

## Pre-requisites

Make sure you have installed Docker on your local machine.

- For Windows and Mac users, you can install [Docker Desktop](https://www.docker.com/products/docker-desktop).
- For Linux users, you can install Docker by following the instructions on the [Docker Official Site](https://docs.docker.com/engine/install/).

## Configure docker-compose.yml

Create a config file named `docker-compose.yml` and enter the content below.

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

## Pull images

Pull the images by executing the command below.

```bash
docker compose pull
``` 

## Start Crawlab

Start Crawlab by executing the command below.

```bash
docker compose up -d
```

Now you can open the browser and navigate to `http://localhost:8080` to start using Crawlab.

## What Next

:::warning
This is a minimal setup of Crawlab and you can experience most of the features in this demo environment. You should
**NOT** use this demo setup in production environment!
:::

If you would like to deploy Crawlab in production environment, you should refer
to [Installation](./installation.md) for more information.

We also recommend that you follow [Basic Tutorial](./basic-tutorial.md) for how to use Crawlab.
