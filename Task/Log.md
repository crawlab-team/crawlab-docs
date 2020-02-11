## 任务日志

Crawlab 会收集爬虫任务的运行日志，方便用户调试和监控爬虫程序。查看日志所在位置为 `任务详情` > `日志` 标签。

![](http://static-docs.crawlab.cn/task-log.png)

Crawlab 是通过 `Stdout` 标准输出流来捕获日志的，因此如果希望在 Crawlab 的界面中看到日志，就需要让日志内容输出到 `Stdout` 中。最简单的做法就是打印出来，例如 Python 的 `print` 和 Node.js 的 `console.log`。