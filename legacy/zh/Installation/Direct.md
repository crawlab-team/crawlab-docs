## 直接部署

直接部署是之前没有 Docker 时的部署方式，相对于 Docker 部署来说有些繁琐。但了解如何直接部署可以帮助更深入地理解 Docker 是如何构建 Crawlab 镜像的。

**推荐人群**: 

- 了解 `Node`、`Golang`、`MongoDB`、`Redis`、`Nginx` 的安装和使用方式的开发者
- 希望了解 Crawlab 源代码和运行原理的开发者
- 需要二次开发 Crawlab 的开发者

**推荐配置**:

- Go: 1.12+
- Node: 8.x+
- MongoDB: 3.6+
- Redis: 5.x+
- Nginx: 1.10+

### 1. 拉取代码

首先是将 GitHub 上的代码拉取到本地。

```bash
git clone https://github.com/crawlab-team/crawlab
```

### 2. 安装 Node 环境 

我们使用 `nvm`（Node Version Manager）来管理 Node 环境。当然如果您对 Node 比较熟悉，可以跳过这一节。

请参照 [nvm GitHub 地址](https://github.com/nvm-sh/nvm) 来安装 nvm。或者也可以运行下面的命令来安装。

⚠️**注意**: Windows 用户请用 [nvm-windows](https://github.com/coreybutler/nvm-windows) 来安装。

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

安装好后，执行下面的命令来初始化 nvm。Mac 或 Linux 用户可以将下面的代码添加到 `.profile` 或者 `.bashrc` 文件中。

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

然后，您就可以安装使用特定的 Node 版本了。我们执行以下命令来启用 8.12 版本的 Node。

```bash
nvm use 8.12
```

这里可能会下载安装相应的 Node 版本，请耐心等待。安装好后，运行下面命令查看知否安装成功。

```bash
node -v
```

如果有提示版本号，就说明安装成功了。

### 3. 安装前后端

安装前端所需库。

```bash
npm install -g yarn
cd frontend
yarn install
```

接下来是安装后端所需库。

在运行这一步之前，如果咱们在国内，需要设置一下 Go Module 的代理，将环境变量 `GOPROXY` 设置为 `https://goproxy.cn`。如果是 Linux 或 Mac，可以执行如下命令。

```bash
export GOPROXY=https://goproxy.cn
```

然后，执行如下命令安装后端。

```bash
cd ../backend
go install ./...
```

### 4. 构建前端

这里的构建是指前端构建。在构建之前，我们需要配置一下前端的部署环境变量。

打开 `./frontend/.env.production`，内容如下。

```
NODE_ENV='production'
VUE_APP_BASE_URL=/api
VUE_APP_CRAWLAB_BASE_URL=https://api.crawlab.cn
VUE_APP_DOC_URL=http://docs.crawlab.cn
```

这里解释一下各个环境变量的作用:

- **NODE_ENV**: 当前的环境（development / test / production），这里默认用 `production`，**不用改**；
- **VUE_APP_BASE_URL**: 后端 API 的地址，**需要改成您 API 的外网地址**，例如 http://8.8.8.8:8000；
- **VUE_APP_CRAWLAB_BASE_URL**: Crawlab 远端服务的 API 地址，目前主要发送统计信息用，**不用改**；
- **VUE_APP_DOC_URL**: 文档地址，**不用改**。

配置完成后，执行以下命令。

```bash
cd ../frontend
npm run build:prod
```

构建完成后，会在 `./frontend` 目录下创建一个 `dist` 文件夹，里面是打包好后的静态文件。

### 5. Nginx

安装 `nginx`，在 `ubuntu 16.04` 是以下命令。

```bash
sudo apt-get install nginx
```

添加 `/etc/nginx/conf.d/crawlab.conf` 文件，输入以下内容。

```
server {
    listen    8080;
    root    /path/to/dist;
    index    index.html;
}
```

其中，`root` 是静态文件的根目录，这里是 `npm` 打包好后的静态文件。

现在，只需要启动 `nginx` 服务就完成了启动前端服务。

```bash
nginx reload
```

### 6. MongoDB & Redis

#### 6.1 安装 MongoDB

请参照 [MongoDB 教程](https://www.runoob.com/mongodb/mongodb-tutorial.html) 来完成 MongoDB 的安装。

#### 6.2 安装 Redis

请参照 [Redis 安装](https://www.runoob.com/redis/redis-install.html) 来完成 Redis 的安装。

### 7. 配置

修改配置文件 `crawlab/backend/conf/config.yaml`。配置文件是以 `yaml` 的格式。配置详情请见[配置Crawlab](../Config/README.md)。

### 8. 构建后端

执行以下命令。

```bash
cd ../backend
go build
```

`go build` 命令会将Golang代码打包为一个执行文件，默认在 `$GOPATH/bin` 里。

### 9. 启动服务

这里是指启动后端服务。执行以下命令。

```bash
$GOPATH/bin/crawlab
```

然后在浏览器中输入 `http://localhost:8080` 就可以看到界面了。

⚠️注意：启动的时候需要保证您的工作路径在从 GitHub 拉取下来的 Crawlab 项目的 `./backend` 路径里。

### 10. 下一步

请参考 [爬虫章节](../Spider/README.md) 来详细了解如何使用 Crawlab。

### 11. 参考

- [Crawlab 爬虫框架单机直接部署教程](http://sunsunsir.cn/detail/9)