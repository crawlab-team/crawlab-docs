## 自动安装依赖

对于 Docker 安装 Crawlab 的开发者来说，每次更新容器（例如 down & up）时候会比较繁琐，因为需要重新安装爬虫的依赖，这对于长期使用 Crawlab 的用户来说，是一个痛点。

为了解决开发者的痛点，Crawlab 开发组开发了自动安装依赖的功能。

为了使用自动安装依赖的功能，用户需要将在爬虫项目中，将 `requirements.txt`（Python）或 `package.json` （Node.js）放在爬虫根目录，并上传到 Crawlab。Crawlab 会自动扫描代码目录，如果存在 `requirements.txt` 或 `package.json`，就会自动执行对应的安装程序，将指定的依赖安装到 Crawlab 节点上。

对于经常需要重启 Crawlab 的用户来说，可以将需要的依赖存在依赖配置文件（`requirements.txt` 或 `package.json`）里，每次重启 Crawlab 后，它会自动将对应的依赖安装上。