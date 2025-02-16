---
slides:
- title: Email
  content: Notification preview
  image: /assets/img/screenshots/screenshot-email-notifications.png
- title: Mobile
  content: Notification preview
  image: /assets/img/screenshots/screenshot-mobile-notifications.png
---

# 通知

::: info 注意
此功能仅适用于[专业版](https://www.crawlab.cn/en/prices)。
:::

Crawlab 允许用户接收电子邮件或移动通知。

## 电子邮件

1. 导航到 `通知` 页面 <br/>![notifications-menu.png](/img/guide/notification-menu.png)
2. 点击 `电子邮件` 类型的通知配置
3. 填写配置表单 <br/>![email-config.png](/img/guide/email-config.png)
4. 点击 `保存` 按钮

SMTP 配置：

- **SMTP 服务器**：SMTP 服务器地址
- **SMTP 端口**：SMTP 服务器端口
- **SMTP 用户**：SMTP 服务器用户名
- **SMTP 密码**：SMTP 服务器密码
- **发件人邮箱**：SMTP 服务器发件人邮箱
- **发件人身份**：SMTP 服务器发件人身份
- **收件人**：收件人邮箱
- **抄送**：抄送邮箱

## 移动

1. 导航到 `通知` 页面 <br/>![notifications-menu.png](/img/guide/notification-menu.png)
2. 点击 `移动` 类型的通知配置
3. 填写配置表单 <br/>![mobile-config.png](/img/guide/mobile-config.png)
4. 点击 `保存` 按钮

::: tip
请参阅相关文档以了解如何获取 Webhook 令牌。

- [钉钉](https://open.dingtalk.com/document/robots/custom-robot-access)
- [企业微信](https://developer.work.weixin.qq.com/document/path/91770)

:::

## 触发

1. 导航到 `通知` 页面 <br/>![notifications-menu.png](/img/guide/notification-menu.png)
2. 点击 `触发` 标签
3. 选择您希望触发的事件类型

## 模板

1. 导航到 `通知` 页面 <br/>![notifications-menu.png](/img/guide/notification-menu.png)
2. 点击任何类型的通知配置
3. 点击 `模板` 标签 <br/>![template.png](/img/guide/template.png)

::: tip
要理解模板的语法和变量，请参阅
[template-parser](https://github.com/crawlab-team/template-parser)
:::