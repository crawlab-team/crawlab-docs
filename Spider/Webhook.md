## Web Hook

Web Hook 是一个 HTTP 请求，方便用户与其他系统进行集成。

Crawlab 也有 Web Hook 功能，目的是方便用户将 Crawlab 任务启动、完成、出错的信息发送到其他系统。

当用户启用 Web Hook 时，每当任务开始运行、任务结束、或任务出错时，Crawlab 会以 POST 的形式发送 HTTP 请求给 Web Hook 指定的地址。

配置 Web Hook 非常简单：用户在创建好爬虫后，在爬虫概览中启用 Web Hook，填写 Web Hook 的 URL 地址，点击保存。之后就可以用 Web Hook 了。

