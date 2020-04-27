## CI/CD 持续集成/持续部署

在生产环境或大型项目中，我们少不了需要版本控制系统（VCS）和自动化部署（Automatic Deployment）的情况。对于企业来说，生产环境的爬虫开发一般是一个自动化过程。它会经历开发、部署、上线、验证这几个步骤。而这个流程一般是不断迭代（Iterative）的，需要不断更新和发布。

为了方便开发者在 Crawlab 上开发、部署和管理爬虫，我们开发了支持 Git 同步的功能，CI/CD 的流程如下图所示。

![](http://static-docs.crawlab.cn/crawlab-ci-cd.png)

1. 最左侧是 Git 仓库，您可以选择 GitLab 这样的开源框架部署私有服务，或者您也可以选择托管在 GitHub 或者 Gitee 上；
2. 当您在 Crawlab 中配置好爬虫的 Git 设置后，您可以手动或自动的同步爬虫，Crawlab 的主节点（Master Node）将利用 `git pull` 操作将 Git 仓库的爬虫代码拉取（Pull）到主节点本地；
3. 然后主节点将拉取下来的爬虫代码通过 zip 打包的方式上传到 MongoDB GridFS，细节可以参考 [爬虫同步章节](../Architecture/SpiderDeployment.md)；
4. 接下来，爬虫代码将被自动同步到所有在线节点。

经过以上 1-4 步骤，爬虫代码就从 Git 仓库同步到所有节点了。这一过程可以手动，也可以自动。这样，我们就做到了爬虫代码的持续集成（CI）和持续部署（CD）。

下面，请参考 [Git 章节](./Git.md) 来查看如何配置 Git 以及如何自动化同步爬虫。