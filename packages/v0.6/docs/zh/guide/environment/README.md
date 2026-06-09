# 环境变量

::: info 注意
该功能仅适用于 [Crawlab 专业版](https://www.crawlab.cn/prices)。
:::

Crawlab 允许用户在爬虫运行时设置环境变量。

## 设置环境变量

1. 导航到 `环境变量` 页面
2. 点击 `新建环境变量` 按钮
3. 填写配置表单

## 调用环境变量

假设我们已经设置设置了一个环境变量，键为 `FOO`，值为 `BAR`，则我们可以在爬虫脚本中调用它，示例代码如下。

```python
import os

foo = os.environ.get('FOO')
print(foo) # BAR
```
