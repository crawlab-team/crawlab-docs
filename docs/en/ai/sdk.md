# Crawlab AI SDK

[Crawlab AI](https://www.crawlab.cn/en/ai) provides an SDK for users to integrate Crawlab AI into their own
applications. The SDK is now available in Python.

## Installation

Users can install the SDK using the following command:

```bash
pip install crawlab-ai
```

## Authentication

To use the SDK, users need to obtain an [API token](./api-token.md) from the Crawlab AI platform. The API token is used
to authenticate the requests made by the SDK. Users can obtain the API token by signing up for an account on
the Crawlab [official site](https://www.crawlab.cn/en). You need to make sure you have a valid [license](./license.md)
to use the API.

Once you have obtained the API token, you can set it as an environment variable in your application:

```bash
export CRAWLAB_TOKEN=<your-api-token>
```

Or, you can set it with CLI:

```bash
crawlab-ai config -t <your-api-token>
```

## Usage as CLI

The SDK can be used as a command-line interface (CLI) tool. The CLI tool provides a set of commands to interact with the
Crawlab AI platform.

### Crawl a Webpage

You can crawl a webpage using the SDK as CLI as follows:

```bash
crawlab-ai crawl [-h] [-t {article,list}] [-o OUTPUT] <url>
```

The `-t` option specifies the type of content to extract, which can be either `article` or `list`. The `-o` option
specifies the output path for the extracted content. For type of `article`, the output will be in JSON format, while
for `list`, the output type will be in CSV. If the output path is not specified, the content will be printed to the
console.

For example, to extract an article from a webpage, you can run the following command:

```bash
crawlab-ai crawl -t article https://www.example.com
```

To extract a list of items from a webpage, you can run the following command:

```bash
crawlab-ai crawl -t list -o output.csv https://www.example.com
```

### Code Generation

You can generate code snippets for extracting content from a webpage using the SDK as CLI as follows:

```bash
crawlab-ai codegen [-h] [-t {article,list}] [-o OUTPUT] <url>
```

The `-t` option specifies the type of content to extract, which can be either `article` or `list`. The `-o` option
specifies the output path for the generated code. If the output path is not specified, the code will be printed to the
console.

For example, to generate code for extracting an article from a webpage, you can run the following command:

```bash
crawlab-ai codegen -t article https://www.example.com
```

To generate code for extracting a list of items from a webpage, you can run the following command:

```bash
crawlab-ai codegen -t list -o output.py https://www.example.com
```

## Usage as Python Library

You can also use the SDK as a Python library in your application.

### Extracting List Content

Here is an example of how to use the SDK to extract list content from a webpage:

```python
from crawlab_ai import read_list

# Define the URL
url = "https://example.com"

# Get the data without specifying fields
df = read_list(url=url)
print(df)

# You can also specify fields
fields = ["title", "content"]
df = read_list(url=url, fields=fields)

# You can also return a list of dictionaries instead of a DataFrame
data = read_list(url=url, as_dataframe=False)
print(data)
```

### Extracting Article Content

Here is an example of how to use the SDK to extract article content from a webpage:

```python
from crawlab_ai import read_article

# Define the URL
url = "https://example.com"

# Get the data
data = read_article(url=url)
print(data)
```

### Scrapy Integration

You can also integrate the SDK with [Scrapy](https://scrapy.org) to extract content from webpages.

You can start by creating a Scrapy spider that inherits from `ScrapyListSpider`:

```python
from crawlab_ai import ScrapyListSpider

class MySpider(ScrapyListSpider):
    name = "my_spider"
    start_urls = ["https://example.com"]
```

And that's it! You don't have to write any additional code to extract content from the webpage. The SDK will take care
of the rest.

If you would like to specify the fields to extract, you can do so by overriding the `fields` attribute in your spider:

```python
from crawlab_ai import ScrapyListSpider

class MySpider(ScrapyListSpider):
    name = "my_spider"
    start_urls = ["https://example.com"]
    fields = ["title", "content"]
```

Then, you can run the spider using the following command:

```bash
scrapy crawl my_spider
```

