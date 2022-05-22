## Postgres 数据源集成

**⚠️注意：该功能为 [Crawlab 专业版](https://www.crawlab.cn/purchase-pro) 专属功能，如需体验此功能，请访问 [演示网站](https://demo.crawlab.cn)。**

**以下为操作步骤：**

1. 在目标数据库中，创建目标表，要保证其中包含 `task_id` 列，并为 `varchar` 类型；
2. 在 “设置” -> “数据源” 中创建新的数据源，选择 `Postgres`，输入目标数据库 Host、Port、用户名、密码等信息；
3. 在 “爬虫详情“ 页面，选择之前创建的数据源；
4. 在 “爬虫详情” 页面，在 “结果表“ 中输入目标表名；
5. 保证爬虫的脚本是用 [Crawlab SDK](../SDK/README.md) 的 `save_item` 保存结果数据；
6. 运行爬虫任务；
7. 在 “爬虫详情” -> “结果“ 中查看结果数据。

