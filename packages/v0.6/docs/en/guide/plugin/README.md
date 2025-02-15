# Plugin

*Plugin* is an extension which can extend beyond existing functionalities and features. In Crawlab, the *Plugin
Framework* is in place for users to customize their web crawler management platforms.

## Why Plugin

Why don't we just hack around the source code in Crawlab when customization is needed? The reason is the concern
for **Maintainability**. When you change some code of core modules in Crawlab, you might risk your project's
maintainability because there will be upgrades in the future, which would very likely break your current customization.

A well-designed plugin is less likely to be tightly coupled with Crawlab, so that updates in Crawlab will not
significantly affect the plugin. Plugins are pluggable and easy to be installed or uninstalled.

## Plugin Framework

*Plugin Framework* is embedded in Crawlab which manages official and third-party plugins. Crawlab users can develop
plugins based on Crawlab Plugin Framework (CPF).

## Official Plugins

There are some public official plugins maintained by [Crawlab Team](https://github.com/crawlab-team). The GitHub repos
of official Crawlab plugins are normally located
in [Crawlab Team's repositories](https://github.com/orgs/crawlab-team/repositories), each of which has a
prefix `plugin-`.

| Name                                                  | Description                                                                           | 仓库链接                                                            |
|-------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [plugin-notification](plugin-notification.md)         | Sending alerts and notifications such as emails and mobile push notifications         | [Link](https://github.com/crawlab-team/plugin-notification)     |
| [plugin-dependency](plugin-dependency.md)             | Installing and managing dependencies and running environment                          | [Link](https://github.com/crawlab-team/plugin-dependency)       |
| [plugin-spider-assistant](plugin-spider-assistant.md) | Providing advanced web crawler features such as framework support (e.g. Scrapy, etc.) | [Link](https://github.com/crawlab-team/plugin-spider-assistant) |

## Install Plugin

::: tip
After a plugin is installed, you should refresh page in your web browser in order for plugin UI components to display.
:::

There are several ways of installing plugins in Crawlab.

### Install Official Plugins

You can install [official plugins](#official-plugins) by only input the plugin name in `Install Plugin` dialog.

1. Navigate to `Plugins`.
2. Choose `Public`.
3. Click `Install` button on plugins you would like to install.

### Install by Git

If you know the git url of a Crawlab plugin, you can install it through git url.

1. Navigate to `Plugins`.
2. Choose `Type` as `Git`.
3. Enter the url of the plugin in the field `Install URL`.
4. Click `Confirm`.

### Install by Local

::: warning
This method is recommended only when you are developing Crawlab with source code.
:::

1. Navigate to `Plugins`.
2. Choose `Type` as `Local`.
3. Enter local path of the plugin in the field `Install Path`.
4. Click `Confirm`.

### Installation Source

::: warning
*Installation Source* is only for official plugins.
:::

The default installation source of official plugins is `GitHub`. But GitHub is not always the best `Source` to access.
For example, if you are in Mainland China, accessing GitHub can sometimes be slow; then you can choose `Gitee`
as `Source` of official plugins, which will largely speed up plugin installation.

## Uninstall Plugin

You can uninstall a plugin by clicking `Delete` button on the right in `Plugins` page.

## Start/Stop

You can start or stop a plugin by clicking `Start` or `Stop` button on the right in `Plugins` page.
