## Kafka 数据源集成

**⚠️注意：该功能为 [Crawlab 专业版](https://www.crawlab.cn/purchase-pro) 专属功能，如需体验此功能，请访问 [演示网站](https://demo.crawlab.cn)。**

**以下为操作步骤：**

1. 在 “设置” -> “数据源” 中创建新的数据源，选择 Kafka，输入目标数据库的 Host、Port、Topic、用户名、密码等信息；
2. 在 “爬虫详情“ 页面，选择之前创建的数据源；
3. 保证爬虫的脚本是用 [Crawlab SDK](../SDK/README.md) 的 `save_item` 保存结果数据；
4. 运行爬虫任务；
5. 在 “爬虫详情” -> “结果“ 中查看结果数据。

