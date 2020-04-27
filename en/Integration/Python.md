## 与通用 Python 爬虫集成

将下列代码加入到您爬虫中的结果保存部分。

```python
# 引入保存结果方法
from crawlab import save_item

# 这是一个结果，需要为 dict 类型
result = {'name': 'crawlab'}

# 调用保存结果方法
save_item(result)
```

然后，启动爬虫，运行完成之后，您就应该能看到抓取结果出现在 **任务详情-结果** 里。
