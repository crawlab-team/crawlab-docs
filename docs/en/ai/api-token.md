# API Token

To use [Crawlab AI](https://www.crawlab.cn/en/ai), you need to obtain an API token. The API token is used to
authenticate your requests to the Crawlab AI platform.

Creating an API token is easy. Just go to the [API Tokens](https://www.crawlab.cn/en/tokens) page, and click on the "
Create Token" button. You will be prompted to enter a name for your token. Once you have entered a name, click on the
"Create API token" button, and your API token will be generated.

![](./img/tokens.png)

Once you have obtained your API token, you can set it as an environment variable in your application:

```bash
export CRAWLAB_TOKEN=<your-api-token>
```

Or, you can set it with the CLI:

```bash
crawlab-ai config -t <your-api-token>
```

For more information, please refer to the [SDK documentation](./sdk.md).
