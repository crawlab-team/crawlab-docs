# Quick Start

The quickest way to install Crawlab is [Docker](https://www.docker.com/). If you are not familiar with Docker, you can refer to [Docker Official Site](https://www.docker.com/) and install it on your local machine.

Make sure you have installed Docker, and then pull the image of Crawlab and MongoDB.

```bash
docker pull crawlabteam/crawlab
docker pull mongo
```

If you have not installed [Docker Compose](https://docs.docker.com/compose/), you can install it by executing the command below.

```bash
pip install docker-compose
```

Create a config file named `docker-compose.yml` and enter the content below.

```yaml
version: '3.3'
services:
  master:
    image: crawlabteam/crawlab
    container_name: crawlab_master
    environment:
      CRAWLAB_SERVER_MASTER: Y
      CRAWLAB_MONGO_HOST: mongo
    ports:
      - "8080:8080"
    depends_on:
      - mongo
  mongo:
    image: mongo
```

Start Crawlab (along with MongoDB) by executing the command below.

```bash
docker-compose up -d
```

Now you can open the browser and navigate to http://localhost:8080 to start using Crawlab.

This is a minimal setup of Crawlab and you can experience most of the features in this demo environment. If you would like to deploy Crawlab in production environment, you are recommended to refer to [Installation: Docker](/docs/guide/installation/docker.md), [Installation: Kubernetes](/docs/guide/installation/kubernetes.md) and [Installation: Direct Deploy](/docs/guide/installation/direct-deploy.md) for more information.
