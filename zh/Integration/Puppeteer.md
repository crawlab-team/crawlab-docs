## 与 Puppeteer 集成

### 调用 SDK

与 Puppeteer 集成请参考 [与 Node.js 爬虫集成](./Nodejs.md)，只需要调用 `crawlab.saveItem` 方法。

### 避免内存泄漏

由于 Puppeteer 是利用 Chromium 来运行爬虫，因此在爬虫关闭的时候很可能会造成浏览器未关闭的情况。为了解决这个问题，我们需要用 `dumb-init` 这个工具来运行爬虫。在创建 Puppeteer 爬虫时，请在 `执行命令` 里输入以下内容。

```bash
dumb-init -- <command>
```

`<command>` 为实际执行命令，例如 `node spider.js`。因此，总的 `执行命令` 为如下内容。

```bash
dumb-init -- node spider.js
```

对于 Docker 用户，因为内置了 `dumb-init`，可以直接使用该工具。对于直接部署用户，需要自行下载。

### 启动 Puppeteer 的正确方式

Puppeteer 是依赖 Chromium 来作为引擎的，因此需要知道 Chromium 的正确执行路径，我们推荐使用 `puppeteer-chromium-resolver` 来启动 Puppeteer。如果您是预装 Node.js 或者在界面上安装 Node.js 的话，`puppeteer-chromium-resolver` 是内置的。

以下是启动 Puppeteer 的例子。

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

具体例子请参考 Github 上 [京东口罩商品抓取爬虫](https://github.com/crawlab-team/crawlab/blob/master/backend/template/spiders/jd_mask/jd_mask_spider.js)。
