## 邮件通知

如果您想启用邮件通知，您需要做如下环境变量配置（假设您是 Docker 部署）。具体配置请参考 [配置章节](../../Config/README.md)。

环境变量名 | 环境变量值 | 例子
--- | --- | ---
CRAWLAB_NOTIFICATION_MAIL_SERVER | <smtp_server> | smtp.exmail.qq.com
CRAWLAB_NOTIFICATION_MAIL_PORT | <smtp_port> | 465
CRAWLAB_NOTIFICATION_MAIL_SENDERMAIL | <sender_email> | admin@example.com
CRAWLAB_NOTIFICATION_MAIL_SENDERIDENTITY | <sender_identity> | admin@example.com
CRAWLAB_NOTIFICATION_MAIL_SMTP_USER | <smtp_username> | iamawesome
CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD | <smtp_password> | onlyyouknonw

接下来，请确保您在 **设置** 页面中选择了 “邮件” 作为通知渠道，并且在 **邮件** 字段填写好您的目标邮件地址，然后点击“保存”按钮。

邮件消息通知的效果如下。

![](http://static-docs.crawlab.cn/notification-mail.jpeg)