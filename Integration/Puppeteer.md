### 与 Puppeteer 集成

与 Puppeteer 集成请参考 [与 Node.js 爬虫集成](./Nodejs.md)，只需要调用 `crawlab.saveItem` 方法。

由于 Puppeteer 是利用 Chromium 来运行爬虫，因此在爬虫关闭的时候很可能会造成浏览器未关闭的情况。为了解决这个问题，我们需要用 `dumb-init` 这个工具来运行爬虫。在创建 Puppeteer 爬虫时，请在 `执行命令` 里输入以下内容。

```bash
dumb-init -- <command>
```

`<command>` 为实际执行命令，例如 `node spider.js`。因此，总的 `执行命令` 为如下内容。

```bash
dumb-init -- node spider.js
```

对于 Docker 用户，因为内置了 `dumb-init`，可以直接使用该工具。对于直接部署用户，需要自行下载。