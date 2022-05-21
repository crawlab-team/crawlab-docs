# 插件

*插件* 是可以延伸既定功能的扩展。在 Crawlab 中，用户可以使用 *插件框架* 来自定义爬虫管理平台。

## 为什么用插件

为什么我们不直接捣鼓一下 Crawlab 源代码来满足自定义需求？其原因是需要考虑 **可维护性**。当您修改 Crawlab 的核心模块时，可能会产生项目维护方面的风险，因为一旦将来有版本升级，您的自定义功能很可能会遭到破坏。

一个良好设计的插件很少会跟 Crawlab 紧耦合，因此 Crawlab 的版本升级更新将不容易对插件造成严重影响。插件是可插拔的，并且能很容易被安装或卸载。

## 插件框架

*插件框架* 是内置在 Crawlab 里的，它用于管理官方和第三方插件。Crawlab 用户能够基于 *Crawlab 插件框架 (CPF)* 来开发插件。

## 官方插件

[Crawlab 开发团队](https://github.com/crawlab-team) 开发了一些公开的官方插件，并在提供长期维护。官方 Crawlab
插件在 [Crawlab 开发团队 GitHub 仓库](https://github.com/orgs/crawlab-team/repositories)，每一个仓库都带有前缀 `plugin-`。

| 名称                                                    | 描述                            | 仓库链接                                                          |
|-------------------------------------------------------|-------------------------------|---------------------------------------------------------------|
| [public-notification](plugin-notification.md)         | 发送消息提醒，例如邮件通知、手机推送            | [链接](https://github.com/crawlab-team/plugin-notification)     |
| [public-dependency](plugin-dependency.md)             | 安装依赖并管理依赖和运行环境                | [链接](https://github.com/crawlab-team/plugin-dependency)       |
| [public-spider-assistant](plugin-spider-assistant.md) | 提供高级网络爬虫功能，包括框架支持，例如 Scrapy 等 | [链接](https://github.com/crawlab-team/plugin-spider-assistant) |

## 安装插件

::: tip
插件安装完成之后，您需要在浏览器中刷新页面来显示插件的 UI 组件。
:::

在 Crawlab 中有多种安装插件的方式。

### 通过名称安装

您可以通过在 `安装插件` 对话框中输入插件名称来安装 [官方插件](#官方插件)。

1. 导航至 `插件` 页面
2. 选择 `公共`
3. 在您想要安装的插件上点击 `安装` 按钮

### 通过 Git 安装

如果您知道 Crawlab 插件的 Git URL，您可以通过它来安装插件。

1. 导航至 `插件` 页面
2. 选择 `Git`
3. 在 `安装 URL` 字段中输入插件 URL
4. 点击 `确定`.

### 通过本地安装

::: warning
这个方式仅适合用源码开发 Crawlab 时使用。
:::

1. 导航至 `插件` 页面
2. 选择 `本地`
3. 在 `安装路径` 字段中输入插件 URL
4. 点击 `确定`.

### 安装源

::: warning
*安装源* 仅对官方插件生效。
:::

默认的官方插件安装源是 `GitHub`。但是 GitHub 不总是最佳安装源。例如，如果您所在地是中国大陆，连接到 GitHub 可能会有些慢。这时您可以选择 `安装源` 为 `Gitee` 来大幅加速官方插件的安装。

## 卸载插件

您可以在 `插件` 页面里点击右侧的 `删除` 按钮来卸载插件。

## 启动/停止

您可以在 `插件` 页面里点击右侧的 `启动` 或 `停止` 按钮来启动或停止插件。
