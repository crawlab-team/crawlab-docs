# API 令牌

要使用[Crawlab AI](https://www.crawlab.cn/zh/ai)，您需要获取一个API令牌。API令牌用于验证您对Crawlab AI平台的请求。

创建API令牌很简单。只需转到[API 令牌](https://www.crawlab.cn/en/tokens)页面，然后点击"创建API令牌"
按钮。系统将提示您为令牌输入一个名称。输入名称后，点击"创建API令牌"按钮，您的API令牌就会生成。

![](./img/tokens.png)

一旦您获取了API令牌，您可以在应用程序中将其设置为环境变量：

```bash
export CRAWLAB_TOKEN=<your-api-token>
```

或者，您可以使用CLI设置它：

```bash
crawlab-ai config -t <your-api-token>
```

有关更多信息，请参阅[SDK文档](./sdk.md)。