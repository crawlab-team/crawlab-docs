## 钉钉机器人

如果您想启用钉钉机器人消息通知，请确保您已经获取了机器人的 **API Webhook** 以及在 Crawlab 中配置好了 API Webhook。如何获取 API Webhook 请查看 [官方文档](https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/26eaddd5)。官方文档可能有些过时了，如果有问题请加微信 tikazyq1 拉群寻求帮助。

⚠️注意：钉钉机器人要求安全验证，建议在“自定义关键词”中填"Crawlab"，确保能正常发推送。

配置 API Webhook 相对比较简单：在 **设置** 页面中将获取的 API Webhook 复制粘贴到 **钉钉机器人 Webhook** 字段，并点击保存。请确保您选择 ”钉钉机器人“ 作为消息通知渠道。

![](http://static-docs.crawlab.cn/mysetting.png)

钉钉机器人通知效果如下。

![](http://static-docs.crawlab.cn/notification-dingtalk.jpg)

