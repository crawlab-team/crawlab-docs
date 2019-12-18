## 爬虫集成

如果您想在 Crawlab 的界面上看到您的抓取结果，您需要将您的爬虫与 Crawlab 进行集成。

以下是爬虫集成的前提条件:

- 需要设置**结果集**；
- 需要将数据写在与 Crawlab 一个数据库中，例如 `crawlab_test`；
- 需要在爬虫中将结果写回指定的数据集中（`CRAWLAB_COLLECTION`），并且在 `task_id` （`CRAWLAB_TASK_ID`）字段上赋值。

下面我们看几个爬虫集成的例子:

1. [集成 Scrapy](/Examples/Scrapy.md)
2. 集成 Puppeteer

