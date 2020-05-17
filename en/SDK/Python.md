# Python SDK

Crawlab's Python SDK is mainly composed of two parts:

1. [CLI command line tool](./CLI.md)
2. [Utility tool](./Python.md)

### CLI command line tool

CLI command line tool is mainly designed for developers who are more accustomed to using command line. They can use this command line tool to interact with Crawlab.

CLI command line tool is simple to install:

```bash
pip install crawlab-sdk
```

Then, you can use the command 'crawlab' to interact with Crawlab on the command line.

You can use the following command for help, or you can refer to the [cli chapter](./CLI.md).

```bash
crawlab --help
```

### Utility tool

Utility tool mainly provides some 'helper' methods to integrate your crawler into Crawlab better, such as saving the result data to Crawlab and so on.

Here's how Scrapy and general Python crawlers integrate with Crawlab.

⚠️Note: make sure you have installed 'crawlab-sdk' by pip.

##### Scrapy integration

Find 'ITEM_PIPELINES'(variable of type 'dict') in 'settings.py', and add the following content.

```python
ITEM_PIPELINES = {
    'crawlab.pipelines.CrawlabMongoPipeline': 888,
}
```

Then, start the scratch crawler. After it running, you should be able to see the result in [task details - result](../Task/Results.md).

##### General Python crawler integration

Add the following code to the results save section of your crawler.

```python
# import the method of saving results
from crawlab import save_item

# This is a result that needs to be of type dict
result = {'name': 'crawlab'}

# call save result method
save_item(result)
```

Then, start the crawler. After it running, you should be able to see the result in [task details - result](../Task/Results.md).
