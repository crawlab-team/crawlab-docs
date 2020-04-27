## API

Crawlab 是前后端分离架构（B/S），前端是通过访问 API 的形式来与后端交互的，因此理论上外部系统可以直接通过 API 来访问以及操作 Crawlab。很多企业有自己的管理系统，希望通过某种方式集成 Crawlab 作为爬虫管理系统，因此 Crawlab 开发组开放了 Crawlab 的 API，让外部系统可以通过 API 的形式访问操作 Crawlab。这增强了 Crawlab 的可集成性。Crawlab 访问其他系统是通过 [Web Hook](../Spider/Webhook.md) 的形式。

要使用 API 也很简单，只需要在 Crawlab 中创建一个 [API Token](./ApiToken.md) 就可以了，您可以看 [API Token 章节](./ApiToken.md) 来创建 Token。

### API 验证

开发者在请求 API 时，需要将 API Token 放在 Headers 中的 `Authorization` 字段。以下是 Python 代码示例。

```python
import requests

url = 'http://crawlab.cn/api/nodes'

api_token = 'xxxx'

headers = {
  'Authorization': 'xxxx'
}

res = requests.get(url, headers=headers)
```

### API 文档

**API 文档** 正在整理，建议读者暂时看后端的源码来了解可调用的 API。