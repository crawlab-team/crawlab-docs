## Email notification

If you want to enable mail notification, you need to do the following environment variable configuration (assuming you use Docker to deploy the environment), please refer to [configuration section](../Config/README.md) for specific configuration.

environment variable name | environment variable value | example
--- | --- | ---
CRAWLAB_NOTIFICATION_MAIL_SERVER | <smtp_server> | smtp.exmail.qq.com
CRAWLAB_NOTIFICATION_MAIL_PORT | <smtp_port> | 465
CRAWLAB_NOTIFICATION_MAIL_SENDERMAIL | <sender_email> | admin@example.com
CRAWLAB_NOTIFICATION_MAIL_SENDERIDENTITY | <sender_identity> | admin@example.com
CRAWLAB_NOTIFICATION_MAIL_SMTP_USER | <smtp_username> | iamawesome
CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD | <smtp_password> | onlyyouknonw

Next, make sure you select "mail" as the notification channel in the **settings** page, fill in your target email address in the **email** field, and then click the "save" button.

The effect of mail message notification is as follows.

![](http://static-docs.crawlab.cn/notification-mail.jpeg)