# 安装

Crawlab 专业版通过 Docker 镜像的方式提供，您可以在任何支持 Docker 的环境中安装。

## 前提条件

::: tip
如果您不知道如何安装 Docker 环境，请参考 [Docker 安装](../guide/installation/docker)。
:::

- **Docker 环境**. 请保证您已经安装了 Docker 以及 Docker Compose。
- **许可证**. 您需要一个许可证才能使用 Crawlab 专业版。如果您还没有许可证，请联系我们来进行获取。

## 主流程

::: tip
如果您不知道如何获取许可证，请参考 [许可证](./license)。
If you don't know how to obtain licenses, please refer to [Crawlab Pro License](./license) for more information.
:::

The main process of installing Crawlab Pro is quite similar to that of Crawlab Community. You can refer
to [Crawlab Community Installation via Docker](../guide/installation) for more information.

1. Install [Docker](https://www.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/)
2. Pull Docker image of Crawlab Pro (and MongoDB if you have no external MongoDB instance)
3. Create `docker-compose.yml` and make configurations (including [licenses](./license))
4. Start Docker containers

::: warning
For following guidance, we will assume you have installed Docker and Docker-Compose, and already pulled Docker images.
:::

## Standalone-Node Deployment

@startuml
!theme amiga
!include <cloudogu/common>
!include <cloudogu/tools/docker>

title SND: Simplified Diagram

node "Master Node" #409eff {
TOOL_DOCKER(c, Crawlab) #409eff
TOOL_DOCKER(m, MongoDB) #67c23a
}
c <-right->m
@enduml

**Standalone-Node Deployment (SND)** is similar to the configuration in [Quick Start](../guide/quick-start), and it is
normally for demo purpose or managing a small number of crawlers. In SND, all Docker containers including Crawlab and
MongoDB are in only a single machine, i.e. Master Node (see diagram above).

Create `docker-compose.yml` and enter the content below.

```yaml
version: '3.3'
services:
  master:
    image: crawlabteam/crawlab-pro
    container_name: crawlab_master
    restart: always
    environment:
      CRAWLAB_LICENSE: "your license"  # your license
      CRAWLAB_NODE_MASTER: "Y"  # Y: master node
      CRAWLAB_MONGO_HOST: "mongo"  # mongo host address. In the docker compose network, directly refer to the service name
      CRAWLAB_MONGO_PORT: "27017"  # mongo port 
      CRAWLAB_MONGO_DB: "crawlab"  # mongo database 
      CRAWLAB_MONGO_USERNAME: "username"  # mongo username
      CRAWLAB_MONGO_PASSWORD: "password"  # mongo password 
      CRAWLAB_MONGO_AUTHSOURCE: "admin"  # mongo auth source 
    volumes:
      - "/opt/crawlab/.crawlab/master:/root/.crawlab"  # persistent crawlab home directory
      - "/opt/crawlab/master:/data"  # persistent crawlab data
    ports:
      - "8080:8080"  # exposed api port
    depends_on:
      - mongo

  mongo:
    image: mongo:4.2
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: "username"  # mongo username
      MONGO_INITDB_ROOT_PASSWORD: "password"  # mongo password
    volumes:
      - "/opt/crawlab/mongo/data/db:/data/db"  # persistent mongo data
    ports:
      - "27017:27017"  # expose mongo port to host machine
```

Then, execute `docker-compose up -d` and navigate to `http://<your_ip>:8080` in the browser to start using Crawlab.

## Multi-Node Deployment

@startuml
!theme amiga

title MND: Simplified Diagram

node #409eff "Master Node" as mn
node #e6a23c "Worker Node 1" as wn1
node #e6a23c "Worker Node 2" as wn2
node #e6a23c "Worker Node 3" as wn3

mn -down->wn1
mn -down->wn2
mn -down->wn3
@enduml

**Multi-Node Deployment (MND)** is normally used in production environment, where a cluster consisted of a Master Node
and multiple Worker Nodes is deployed. Master Node is connected by Worker Nodes, and it serves as the central control
system in the cluster.

The configuration for MND is more complex than SND, but you can follow the guidelines below to set up a small cluster,
which would be quite straightforward.

### Set up Master Node

Create `docker-compose.yml` in **Master Node** and enter the content below. Then start by
executing `docker-compose up -d`.

```yaml
# master node
version: '3.3'
services:
  master:
    image: crawlabteam/crawlab-pro
    container_name: crawlab_master
    restart: always
    environment:
      CRAWLAB_LICENSE: "your license"  # your license
      CRAWLAB_NODE_MASTER: "Y"  # Y: master node
      CRAWLAB_MONGO_HOST: "mongo"  # mongo host address. In the docker compose network, directly refer to the service name
      CRAWLAB_MONGO_PORT: "27017"  # mongo port 
      CRAWLAB_MONGO_DB: "crawlab"  # mongo database 
      CRAWLAB_MONGO_USERNAME: "username"  # mongo username
      CRAWLAB_MONGO_PASSWORD: "password"  # mongo password 
      CRAWLAB_MONGO_AUTHSOURCE: "admin"  # mongo auth source 
    volumes:
      - "/opt/crawlab/.crawlab/master:/root/.crawlab"  # persistent crawlab home directory
      - "/opt/crawlab/master:/data"  # persistent crawlab data
    ports:
      - "8080:8080"  # exposed api port
      - "9666:9666"  # exposed grpc port
    depends_on:
      - mongo

  mongo:
    image: mongo:4.2
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: "username"  # mongo username
      MONGO_INITDB_ROOT_PASSWORD: "password"  # mongo password
    volumes:
      - "/opt/crawlab/mongo/data/db:/data/db"  # persistent mongo data
    ports:
      - "27017:27017"  # expose mongo port to host machine
```

### Set up Worker Nodes

Create `docker-compose.yml` in each **Worker Node** and enter the content below. Then start by
executing `docker-compose up -d`.

```yaml
# worker node
version: '3.3'
services:
  worker:
    image: crawlabteam/crawlab-pro
    container_name: crawlab_worker
    restart: always
    environment:
      CRAWLAB_LICENSE: "your license"  # your license
      CRAWLAB_NODE_MASTER: "N"  # N: worker node
      CRAWLAB_GRPC_ADDRESS: "<master_node_ip>:9666"  # grpc address
      CRAWLAB_FS_FILER_URL: "http://<master_node_ip>:8080/api/filer"  # seaweedfs api
    volumes:
      - "/opt/crawlab/.crawlab/worker:/root/.crawlab"  # persistent crawlab home directory
      - "/opt/crawlab/worker:/data"  # persistent crawlab data
```

Please note that you should replace `<master_node_ip>` with the IP address of Master Node and make sure it is accessible
by Worker Nodes.

After Master Node and Worker Nodes are all started, you can now navigate to `http://<master_node_ip>:8080` to start
using Crawlab.

::: warning

### Expose ports of Master Node

As Worker Nodes connect to Master Node through ports **8080** (API) and **9666** (gRPC), you should make sure they are
both opened and NOT blocked by firewall on Master Node.
:::

## External MongoDB

In MND introduced above, you may notice that MongoDB is by default deployed on Master Node. But performance wise, this
handy deployment configuration can result in problems, because MongoDB itself can be a bottleneck particularly in a
large-scale distributed system.

Fortunately, this issue can be resolved by using external MongoDB deployed in other nodes, or from cloud database
service providers, e.g. AWS, Azure, Aliyun etc. By doing so, MongoDB can be easily scaled so that the database
robustness would be ensured. Please refer to the diagram below.

@startuml
!theme amiga

title MND with external MongoDB

node #409eff "Master Node" as mn
node #e6a23c "Worker Node 1" as wn1
node #e6a23c "Worker Node 2" as wn2
node #e6a23c "Worker Node 3" as wn3
database #67c23a "MongoDB" as dbm

mn -down->wn1
mn -down->wn2
mn -down->wn3
mn <-right->dbm
@enduml

The configuration file `docker-compose.yml` for Master Node is slightly different from that
of [default MND](#multi-node-deployment). Please find the content as below.

```yaml
# master node with external mongo
version: '3.3'
services:
  master:
    image: crawlabteam/crawlab-pro
    container_name: crawlab_master
    restart: always
    environment:
      CRAWLAB_LICENSE: "your license"  # your license
      CRAWLAB_NODE_MASTER: "Y"  # Y: master node
      CRAWLAB_MONGO_URI: "<mongo_uri>"  # mongo uri (set this alone)
      CRAWLAB_MONGO_HOST: "<mongo_host>"  # mongo host address
      CRAWLAB_MONGO_PORT: "<mongo_port>"  # mongo port 
      CRAWLAB_MONGO_DB: "<mongo_db>"  # mongo database 
      CRAWLAB_MONGO_USERNAME: "<mongo_username>"  # mongo username
      CRAWLAB_MONGO_PASSWORD: "<mongo_password>"  # mongo password 
      CRAWLAB_MONGO_AUTHSOURCE: "<mongo_auth_source>"  # mongo auth source 
      CRAWLAB_MONGO_AUTHMECHANISM: "<mongo_auth_mechanism>"  # mongo auth mechanism 
      CRAWLAB_MONGO_AUTHMECHANISMPROPERTIES: "<mongo_auth_mechanism_properties>"  # mongo auth mechanism properties
    volumes:
      - "/opt/crawlab/.crawlab/master:/root/.crawlab"  # persistent crawlab home directory
      - "/opt/crawlab/master:/data"  # persistent crawlab data
    ports:
      - "8080:8080"  # exposed api port
      - "9666:9666"  # exposed grpc port
```

As you can see, the service `mongo` is removed and MongoDB-related connection environment variables (
e.g. `CRAWLAB_MONGO_HOST`, `CRAWLAB_MONGO_PORT`) are changed to those of external MongoDB. You can leave some
environment variables empty if you don't need them. 
