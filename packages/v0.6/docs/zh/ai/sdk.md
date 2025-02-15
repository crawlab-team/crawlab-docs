# Crawlab AI SDK

[Crawlab AI](https://www.crawlab.cn/zh/ai)为用户提供了一个SDK，用户可以将Crawlab AI集成到他们自己的应用程序中。SDK现在可以在Python中使用。

## 安装

用户可以使用以下命令安装SDK：

```bash
pip install crawlab-ai
```

## 认证

要使用SDK，用户需要从Crawlab
AI平台获取API密钥。API密钥用于验证SDK发出的请求。用户可以通过在Crawlab [官方网站](https://www.crawlab.cn/zh)上注册账户来获取API密钥。
你需要保证你有一个有效的[许可证](./license.md)来使用API。

一旦你获取了API密钥，你可以在你的应用程序中将它设置为环境变量：

```bash
export CRAWLAB_TOKEN=<your-api-token>
```

或者，你可以用CLI设置它：

```bash
crawlab-ai config -t <your-api-token>
```

## 作为CLI使用

SDK可以作为命令行接口（CLI）工具使用。CLI工具提供了一组命令来与Crawlab AI平台交互。

### 爬取网页

你可以使用SDK作为CLI来爬取网页，如下所示：

```bash
crawlab-ai crawl [-h] [-t {article,list}] [-o OUTPUT] <url>
```

`-t`选项指定要提取的内容类型，可以是`article`或`list`。`-o`选项指定提取内容的输出路径。对于`article`
类型，输出将以JSON格式，而对于`list`，输出类型将以CSV。如果未指定输出路径，内容将打印到控制台。

例如，要从网页提取文章，你可以运行以下命令：

```bash
crawlab-ai crawl -t article https://www.example.com
```

要从网页提取项目列表，你可以运行以下命令：

```bash
crawlab-ai crawl -t list -o output.csv https://www.example.com
```

### 代码生成

你可以使用SDK作为CLI来生成从网页提取内容的代码片段，如下所示：

```bash
crawlab-ai codegen [-h] [-t {article,list}] [-o OUTPUT] <url>
```

`-t`选项指定要提取的内容类型，可以是`article`或`list`。`-o`选项指定生成代码的输出路径。如果未指定输出路径，代码将打印到控制台。

例如，要生成从网页提取文章的代码，你可以运行以下命令：

```bash
crawlab-ai codegen -t article https://www.example.com
```

要生成从网页提取项目列表的代码，你可以运行以下命令：

```bash
crawlab-ai codegen -t list -o output.py https://www.example.com
```

## 作为Python库使用

你也可以在你的应用程序中作为Python库使用SDK。

### 提取列表内容

以下是如何使用SDK从网页提取列表内容的示例：

```python
from crawlab_ai import read_list

# 定义URL
url = "https://example.com"

# 获取数据，不指定字段
df = read_list(url=url)
print(df)

# 你也可以指定字段
fields = ["title", "content"]
df = read_list(url=url, fields=fields)

# 你也可以返回字典列表，而不是DataFrame
data = read_list(url=url, as_dataframe=False)
print(data)
```

### 提取文章内容

以下是如何使用SDK从网页提取文章内容的示例：

```python
from crawlab_ai import read_article

# 定义URL
url = "https://example.com"

# 获取数据
data = read_article(url=url)
print(data)
```

### Scrapy集成

你也可以将SDK与[Scrapy](https://scrapy.org)集成，从网页提取内容。

你可以开始创建一个继承自`ScrapyListSpider`的Scrapy spider：

```python
from crawlab_ai import ScrapyListSpider

class MySpider(ScrapyListSpider):
    name = "my_spider"
    start_urls = ["https://example.com"]
```

就这样轻松！你不必编写任何额外的代码来从网页提取内容。SDK将负责剩下的部分。

如果你想指定要提取的字段，你可以通过在你的spider中覆盖`fields`属性来实现：

```python
from crawlab_ai import ScrapyListSpider

class MySpider(ScrapyListSpider):
    name = "my_spider"
    start_urls = ["https://example.com"]
    fields = ["title", "content"]
```

然后，你可以使用以下命令运行spider：

```bash
scrapy crawl my_spider
```