## CI/CD Continuous Integration / Continuous Deployment

In a production environment or a large project, we need version control system (VCS) and automatic deployment. For enterprises, the development of spiders in production environment is an automated process. It will go through the steps of development, deployment, release and verification. This process is usually iterative and needs to be updated and released.

In order to make it more convenient for developers to develop, deploy and manage spiders on Crawlab, we developed the Git synchronization support function. The flow of CI/CD is shown in the figure below.

![](http://static-docs.crawlab.cn/crawlab-ci-cd.png)

1. On the left is Git warehouse. You can choose an open source framework like GitLab to deploy private services, or you can choose to host on GitHub or Gitee;
2. After you configure the Git settings of the spider in Crawlab, you can synchronize the spider manually or automatically. The master node of Crawlab will use the 'git pull' operation to pull the spider code of Git warehouse to the local master node;
3. Then the master node uploads the spider code pulled down to MongoDB GridFS in zip package. For details, please refer to [spider synchronization chapter](../Architecture/SpiderDeployment.md);
4. Next, the spider code will be automatically synchronized to all online nodes.

After the above steps 1-4, the spider code is synchronized from Git warehouse to all nodes. This process can be manual or automatic. In this way, we achieve continuous integration(CI) and continuous deployment(CD) of spider code.

Please refer to the [git chapter](./Git.md) to see how to configure Git and how to synchronize spiders automatically.