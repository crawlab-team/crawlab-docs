## 与通用 Node.js 爬虫集成

将下列代码加入到您爬虫中的结果保存部分。

```javascript
// 引入 SDK
const crawlab = require('crawlab-sdk');

// 这是一个结果，需要为 object 类型
const result = {name: 'crawlab'};

(async () => {
    // 调用保存结果方法
    await crawlab.saveItem(result);

    // 关闭数据库连接，否则程序不会结束
    await crawlab.close();
})();
```

然后，启动爬虫，运行完成之后，您就应该能看到抓取结果出现在 **任务详情-结果** 里。
