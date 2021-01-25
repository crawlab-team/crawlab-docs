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

**API 文档**

支持 swagger API 文档，访问 `https://demo-pro.crawlab.cn/api/swagger/index.html` 查看更多 API。
![](https://tva1.sinaimg.cn/large/007S8ZIlly1geg3t15cjsj31ee0u0113.jpg)

同时，如果你已经部署了自己的 crawlab 集群，可以到 `http://your-ip:port/api/swagger/index.html` 中使用 `API Token` 调用API进行在线调试。

举个🌰：
1. 以获取当前的 nodes 信息为例，访问 `http://your-ip:port/api/swagger/index.html` 后点击红色框内的 `Try it out`
![](https://tva1.sinaimg.cn/large/007S8ZIlly1geg3zvq9jsj31fw0u0797.jpg)

2. 在 crawlab 页面随便点击一个 tab ，打开 chrome 调试，找到 request header 中的  `Authorization` ,下图所示：
   ![](https://tva1.sinaimg.cn/large/007S8ZIlly1geg42zv11vj31hs0u0qd0.jpg)

3. 拷贝 token 后，点击 `Excute`，就能看到 API 的返回结果。
   ![](https://tva1.sinaimg.cn/large/007S8ZIlly1geg475b538j31ac0u0gvf.jpg)

使用 API 可以极大提高 crawlab 使用上的灵活性、可扩展性。
