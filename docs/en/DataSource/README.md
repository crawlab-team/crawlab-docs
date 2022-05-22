## 数据源

**⚠️注意：该功能为 [Crawlab 专业版](https://www.crawlab.cn/purchase-pro) 专属功能，如需体验此功能，请访问 [演示网站](https://demo.crawlab.cn)。**

Crawlab 默认是用 MongoDB 作为储存结果的数据库，而且要求结果数据必须与 Crawlab 运行数据库是同一个数据库。这对使用其他数据库（例如 MySQL、Postgres）的朋友来说有点不友好，有些开发者并不希望用 MongoDB，也不想双写，只想用 MySQL。因此，Crawlab 专业版做了更多数据源的集成。目前我们支持了 MySQL、Postgres、ElasticSearch 数据库，以及 Kafka 消息队列。后续将加入更多数据源，例如 Hbase、SQL Server 等数据库。也就是说，现在用户可以只写入 MySQL、Postgres、Kafka、ElasticSearch 或 MongoDB 其他数据库，而不用同时双写 MongoDB 或 MySQL，就能在 Crawlab 界面上看到抓取的结果数据。

本小节将介绍以下数据源的集成：

- [MongoDB](MongoDB.md)
- [MySQL](MySQL.md)
- [Postgres](Postgres.md)
- [Kafka](Kafka.md)
- [ElasticSearch](ElasticSearch.md)

