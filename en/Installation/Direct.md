## Direct deployment

Direct deployment is the deployment method when there is no docker before, which is a little cumbersome compared with docker deployment. Knowing how to deploy directly can help you understand more about how docker builds Crawlab images.

**Recommended Users**: 

- Developers who know how to install and use 'Node', 'Golang', 'MongoDB', 'Redis'
- Developers who want to do secondary development in Crawlab
- Developers who want to contribute code to Crawlab

**Recommended Configuration**:

- Go: 1.12+
- Node: 8.x+
- MongoDB: 3.6+
- Redis: 5.x+
- Nginx: 1.10+

### 1. Pull the code

The first is to pull the code on GitHub to local.

```bash
git clone https://github.com/crawlab-team/crawlab
```

### 2. Install node environment

We use 'nvm' (Node Version Manager) to manage the node environment. You can skip this section if you are familiar with Node.

Please refer to [NVM GitHub address](https://github.com/nvm-sh/nvm) to install nvm, or run the following command to install it.

⚠️**Note**: For Windows users, please use [nvm-windows](https://github.com/coreybutler/nvm-windows) to install nvm.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

After installation, execute the following command to initialize nvm. Mac or Linux users can add the following code to the '.profile' or '.bashrc' files.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Then, you can install and use a specific version of Node. We execute the following command to enable Node version 8.12.

```bash
nvm use 8.12
```

The corresponding Node version may be downloaded and installed here. Please wait patiently. After installation, run the following command to check whether the installation is successful.

```bash
node -v
```

If the version number is prompted, means the installation is successful.

### 3. Install front and back ends

Install the required libraries for the front end.

```bash
npm install -g yarn
cd frontend
yarn install
```

Install the required libraries for the back end.

Before running this step, if it is in China, we need to set the proxy of the go module and set the environment variable 'GOPROXY' to 'https://goproxy.cn'. If it's Linux or Mac, you can execute the following command.

```bash
export GOPROXY=https://goproxy.cn
```

Then, execute the following command to install the back end.

```bash
cd ../backend
go install ./...
```

### 4. Build the front end

The construction here refers to the front end construction. Before building, we need to configure the deployment environment variables of the front end.

Open './frontend/.env.production', the content is as follows.

```
NODE_ENV='production'
VUE_APP_BASE_URL=/api
VUE_APP_CRAWLAB_BASE_URL=https://api.crawlab.cn
VUE_APP_DOC_URL=http://docs.crawlab.cn
```

The role of each environmental variable:

- **NODE_ENV**: The current environment (development / test / production) uses 'production' by default,**no need to change**；
- **VUE_APP_BASE_URL**: Address of back end API, **need to change to your API's Internet address**，such as http://8.8.8.8:8000；
- **VUE_APP_CRAWLAB_BASE_URL**: The API address of crawlab remote service is mainly used to send statistical information,**no need to change**；
- **VUE_APP_DOC_URL**: Document address, **no need to change**。

When the configuration is complete, execute the following command.

```bash
cd ../frontend
npm run build:prod
```

After the construction is completed, a 'dist' folder will be created in the directory of './frontend', which contains the packed static files.

### 5. Nginx

Install 'nginx' in 'Ubuntu 16.04', please execute the following command.

```bash
sudo apt-get install nginx
```

Add the file '/etc/nginx/conf.d/crawlab.conf', enter the following content.

```
server {
    listen    8080;
    root    /path/to/dist;
    index    index.html;
}
```

'root' is the root directory of the static file. Here is the static file packaged by 'npm'.

Now, you only need to start the 'nginx' service to start the front end service.

```bash
nginx reload
```

### 6. MongoDB & Redis

#### 6.1 Install MongoDB

Please refer to [mongodb tutorial](https://www.runoob.com/mongodb/mongodb-tutorial.html) to complete MongoDB installation.

#### 6.2 Install Redis

Please refer to [Redis installation](https://www.runoob.com/redis/redis-install.html) to complete Redis installation.

### 7. Configuration

Modify the configuration file './backend/config.yaml'. The format of the configuration file is 'yaml'. Please refer to [configure crawleb](../Config/README.md) for configuration details.

### 8. Build the back end

Execute the following command.

```bash
cd ../backend
go build
```

The 'go build' command packages the golang code into an execution file, which is in '$GOPATH/bin' by default.

### 9. Start the service

This refers to starting back end services. Execute the following command.

```bash
$GOPATH/bin/crawlab
```

Then enter "http://localhost:8080" in the browser to see the interface.

⚠️Note: when starting, you need to ensure that your work path is in the './backend' path of the Crawlab project pulled from GitHub.

### 10. Next step

Please refer to the [spider section](../Spider/README.md) for details on how to use Crawlab.

### 11. Reference resources

- [Crawlab the tutorial for the direct deployment of a single spider](http://sunsunsir.cn/detail/9)