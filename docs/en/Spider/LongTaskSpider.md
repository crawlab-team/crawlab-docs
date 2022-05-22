## Long task spider

Long task Spiders are a special kind of [custom spiders](CustomizedSpider.md), this kind of spider run task will not stop. Generally, it will always get the URL in the message queue and grab it. It will stop running only when the user actively stops or encounters an error. Long task spiders are usually distributed, in order to effectively use network bandwidth resources and other computing resources, and make the most of the efficiency of distributed nodes. A typical example is a distributed spider based on Scrapy[scrapy-redis](https://github.com/rmax/scrapy-redis)。

To enable long task spiders, just turn on the "long task switch" in **create spider** or **spider details**.

You can select "long task" in **spider list** to filter all long task spiders.
