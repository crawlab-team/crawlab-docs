## Integration with puppeter

### Call SDK

For integration with Puppeteer, please refer to [integration with node.js crawler](./Nodejs.md). Only the 'crawlab.saveItem' method needs to be called.

### Avoid memory leaks

Since Puppeteer uses Chromium to run the crawler, it is likely that the browser will not be closed when the crawler is closed. To solve this problem, we need to use the 'dumb-init' tool to run the crawler. When creating a Puppeteer crawler, enter the following in 'execute command'.

```bash
dumb-init -- <command>
```

'<command>' is the actual execution command, for example, 'node spider.js'. Therefore, the general 'executive command' is as follows.

```bash
dumb-init -- node spider.js
```

For Docker users, because 'dumb-init' is built in, you can use the tool directly. For direct deployment users, you need to download it by yourself.

### The right way to start Puppeteer

Puppeteer relies on Chromium as the engine, so you need to know the correct execution path of Chromium. We recommend using 'puppeteer-chromium-resolver' to start Puppeteer. If you pre install Node.js or install Node.js on the interface, 'puppeteer-chromium-resolver' is built-in.

Here is an example of starting the Puppeteer.

```javascript
...
    const pcr = await PCR({
        folderName: '.chromium-browser-snapshots',
        hosts: ["https://storage.googleapis.com", "https://npm.taobao.org/mirrors"],
        retry: 3
    });

    const browser = await pcr.puppeteer.launch({
        headless: true,
        args: ['--no-sandbox'],
        executablePath: pcr.executablePath
    }).catch(function (error) {
        console.log(error);
    });

    const page = await browser.newPage();
...
```

For specific examples, please refer to [JD mask commodity grabbing Crawler](https://github.com/crawlab-team/crawlab/blob/master/backend/template/spiders/jd_mask/jd_mask_spider.js) on GitHub.