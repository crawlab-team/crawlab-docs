

# 数据源

Crawlab 支持数据源集成，这意味着您可以使用 Crawlab 管理您的数据源，例如 MongoDB、MySQL、PostgreSQL、SQL Server 等。

## 支持的数据源

| 类别         | 数据源                                                                   | 支持          |
|--------------|--------------------------------------------------------------------------|---------------|
| 非关系型数据库 | [MongoDB](https://mongodb.com)                                            | :white_check_mark: |
| 非关系型数据库 | [ElasticSearch](https://elastic.co)                                       | :white_check_mark: |
| 关系型数据库   | [MySQL](https://mysql.com)                                                | :white_check_mark: |
| 关系型数据库   | [PostgreSQL](https://postgresql.org/)                                     | :white_check_mark: |
| 关系型数据库   | [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) | :white_check_mark: |
| 关系型数据库   | [CockroachDB](https://www.cockroachlabs.com/)                             | :white_check_mark: |
| 关系型数据库   | [Sqlite](https://www.sqlite.org)                                          | :white_check_mark: |
| 流式处理      | [Kafka](https://kafka.apache.org/)                                        | :white_check_mark: |

## 添加数据源

1. 转到 `数据源` 页面 <br/>![data-sources-menu](/img/guide/data-sources-menu.png)
2. 点击 `新建数据源` 按钮 <br/>![new-data-source-button](/img/guide/new-data-source-button.png)
3. 选择 `类型` 作为数据源类型，并输入 `名称` 和连接字段 <br/>![mongo-form](/img/guide/mongo-form.png)
4. 点击 `确认` 按钮以保存数据源

现在您应该能够在 `数据源` 页面中看到该数据源。

## 使用数据源

1. 转到 `爬虫详情` 页面
2. 在 `数据源` 字段中选择数据源 <br/>![mongo-data-source](/img/guide/mongo-data-source.png)
3. 点击 `保存` 按钮以保存爬虫
4. 在保存结果数据的代码中添加相关集成代码（参见下面的 `爬虫代码示例` 部分）
5. 运行爬虫，您应该可以在 `数据` 标签中看到结果 <br/>![results](/img/guide/results.png)

## 爬虫代码示例

### 通用 Python 爬虫

在 [crawlab-sdk](https://pypi.org/project/crawlab-sdk/) 中，可以使用方法 `save_item` 将数据保存到指定的数据源。

```python

```py
from crawlab import save_item

...
  save_item(result_item)
...
```

### Scrapy 爬虫

将 `crawlab.CrawlabPipeline` 添加到 `settings.py`。

```python
ITEM_PIPELINES = {
  'crawlab.CrawlabPipeline': 300,
}
```