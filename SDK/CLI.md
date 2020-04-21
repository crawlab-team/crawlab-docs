## CLI 命令行工具

CLI 命令行工具是一个非常实用的 CLI 程序，是 [Crawlab SDK](https://github.com/crawlab-team/crawlab-sdk) 项目的一部分。CLI 命令行工具旨在帮助 Crawlab 用户更方便的上传爬虫、运行任务、查看数据等。

⚠️注意：CLI 命令行工具还在快速的迭代当中，请持续关注 [Github 仓库](https://github.com/crawlab-team/crawlab-sdk) 或该文档来更新相关信息。

### 安装 CLI 命令行工具

安装 CLI 命令行工具非常简单，执行以下命令就可以了。

⚠️注意：您需要确保您用的 Python 版本是 3.6 以上，否则将可能会在使用中出现错误。

```bash
pip install crawlab-sdk
```

### 登录获取 Token

在使用 CLI 命令行工具之前，我们必须配置登录信息，已确保本地保存从服务端请求回来的 `token`，作为后续请求的验证令牌。

```bash
# 登录并输入参数
crawlab login -u <username> -a <api_address>

# 例子
crawlab login -u admin -a http://localhost:8080/api
```

然后输入登录密码。

如果登录成功，CLI 会将用户名、密码、API 地址和获取到的 Token 保存在本地，供后面使用。

⚠️注意：这里的 `<api_address>` 是后端 API 的地址。如果您是用的 Docker 镜像，只需要在 Web 界面 URL 后加一个 `/api` 后缀就可以了。例如，如果您访问 Web 的地址是 `http://localhost:8080`，您的 `<api_url>` 就是 `http://localhost:8080/api`。

### 上传爬虫

在 Crawlab 中通过 Web 界面上传爬虫是一件比较麻烦的事情，需要将爬虫文件打包成 zip 文件，然后上传到 Crawlab。而通过 CLI 命令行工具，则可以一行命令将爬虫文件上传上去。

操作命令如下。

```bash
# 简单操作
cd /path/to/spider
crawlab upload
```

上面这个操作，先定位到爬虫目录，然后通过 `crawlab upload` 命令将当前文件夹上传到 Crawlab，爬虫名称默认为目录名称。

⚠️注意：如果不传参数，CLI 会将当前整个目录打包成 zip 文件并上传的，不是很安全，因此并不推荐此做法。

当然，如果您想进行更复杂的上传爬虫操作，可以采用下面的命令。

```bash
# 上传指定目录并附带爬虫名称、显示名称、结果集等信息
crawlab upload \
    -d /path/to/spider \ # 爬虫目录
    -n <spider_name> \ # 爬虫名称
    -N <display_name> \ # 显示名称
    -m <execute_command> \ # 执行命令
    -c <result_collection> # 结果集
```

如果您想针对某一个爬虫 ID 上传爬虫，只需要指定 `-i` 这个命令，将爬虫 ID 传入就可以了，CLI 将上传爬虫并覆盖其爬虫文件。

具体的爬虫上传 CLI 帮助，请查看 `crawlab upload --help`。

### 查看节点列表

```bash
crawlab nodes
```

### 查看爬虫列表

```bash
crawlab spiders
```

### 查看任务列表

```bash
crawlab tasks
```

### 查看定时任务列表

```bash
crawlab schedules
```

### 其他功能

其他功能例如“运行任务”、“添加定时任务“、”查看任务日志“等，都还没有来得及实现。如需要这些功能，请加作者微信 tikazyq1 拉交流群关注后续开发。