

# 环境变量

::: info 注意
此功能仅在 [Crawlab Pro Edition](https://www.crawlab.cn/prices) 中可用。
:::

Crawlab 允许用户在爬虫运行期间设置环境变量。

## 设置环境变量

1. 导航到 `Environment Variables` 页面。
2. 点击 `Create Environment Variable` 按钮。
3. 填写配置表单。

## 访问环境变量

假设我们已将一个环境变量的键设置为 `FOO`，值设置为 `BAR`，我们可以在爬虫脚本中使用以下示例代码访问它。

```python
import os

foo = os.environ.get('FOO')
print(foo) # BAR
```