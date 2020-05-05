## Crawler integration

If you want to see your crawler results on the Crawlab interface, you need to integrate your crawler with Crawlab.

The following are prerequisites for crawler integration:

- You need to set ** result set **;
- You need to write the data in a database with Crawlab, for example, 'crawlab_test';
- You need to write the result back to the specified dataset in the crawler ('CRAWLAB_COLLECTION'), and assign a value in the 'task_id'('CRAWLAB_TASK_ID') field.

Here are some examples of crawler integration:

1. [Integrate Scrapy](./Scrapy.md)
2. [Integrate Puppeteer](./Puppeteer.md)
3. [General Python crawler](./Python.md)
3. [General Node.js crawler](./Nodejs.md)

