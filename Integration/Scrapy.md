### 与Scrapy集成

Scrapy 是一个非常强大的爬虫框架。如果您对 Scrapy 不了解，请查看 [官网介绍](https://scrapy.org/)。跟 Crawlab 集成之后，可以在界面上看到您的爬虫任务抓取到的数据。

以下是 Crawlab 跟 `Scrapy` 集成的例子，利用了 Crawlab 传过来的 TaskID `task_id` 和 集合名称 `collection_name`。代码中的注释将逐行讲解。

⚠️**注意**: `集合名称` 类似于 SQL 数据库中的 `表名`，`集合` 类似于 `表`。

以下是 `pipeline` 文件。

```python
# 这是 Scrapy 中的 Pipeline 文件
import os
from pymongo import MongoClient

# MongoDB 的参数，保证数据库与 Crawlab 的一致
MONGO_HOST = 'mongo'
MONGO_PORT = 27017
MONGO_DB = 'crawlab_test'

class JuejinPipeline(object):
    # MongoDB 连接实例
    mongo = MongoClient(host=MONGO_HOST, port=MONGO_PORT)
    
    # 数据库实例
    db = mongo[MONGO_DB]
    
    # 集合名称
    col_name = os.environ.get('CRAWLAB_COLLECTION')
    
    # 集合实例
    col = db[col_name]

    # 处理 item 的回调函数
    def process_item(self, item, spider):
      	# 将 TaskID 赋值给 item
        item['task_id'] = os.environ.get('CRAWLAB_TASK_ID')
        
        # 保存 item 到数据库
        self.col.save(item)
        
        return item
```

以下是 `item.py` 文件。

```python
# 这是 Scrapy 中的 item.py 文件
import scrapy

class Product(scrapy.Item):
    name = scrapy.Field()
    price = scrapy.Field()
    stock = scrapy.Field()
    tags = scrapy.Field()
    
    # 集合项的主键
    _id = scrapy.Field()
    
    # 用于储存 TaskID
    task_id = scrapy.Field()
```

相信您看了以上这个例子，应该对如何将 Scrapy 爬虫与 Crawlab 集成有一定了解。如果您看完这个教程还是不够理解，请加作者微信 tikazyq1，并注明 "Crawlab"，作者将拉您入群答疑解惑。