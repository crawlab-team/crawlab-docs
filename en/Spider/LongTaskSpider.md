## Long task crawler

Long task Spiders are a special kind of [custom crawlers](./CustomizedSpider.md), this kind of crawler run task will not stop. Generally, it will always get the URL in the message queue and grab it. It will stop running only when the user actively stops or encounters an error. Long task crawlers are usually distributed, in order to effectively use network bandwidth resources and other computing resources, and make the most of the efficiency of distributed nodes. A typical example is a distributed crawler based on Scrapy[scrapy-redis](https://github.com/rmax/scrapy-redis)。

To enable long task crawlers, just turn on the "long task switch" in **create crawler** or **crawler details**.

You can select "long task" in **crawler list** to filter all long task crawlers.