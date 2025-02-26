---
sidebar_position: 8
title: 依赖管理
---

# 依赖管理

:::info
依赖管理仅在 **Crawlab Pro** 中可用。
:::

有效的依赖管理对于维护分布式系统中的爬虫环境一致性至关重要。Crawlab 通过内置支持、自动依赖解析和跨节点同步简化了对
Python、Node.js、Go、Java 和基于浏览器的项目的依赖管理。本指南涵盖了处理需求安装、虚拟环境以及确保跨您的爬取基础架构的可重复性所需的必备工具——包括像
Chrome Driver 和相关包这样的浏览器自动化依赖。

## 安装环境

:::info
Crawlab 社区版中预装了 Python，而 Crawlab Pro 已经预装了 Python、Node.js 和浏览器环境。
:::

您可以按照以下步骤安装额外的编程语言环境或为所有节点或选定节点切换到目标版本的环境。

1. 导航到 `依赖` 列表页面。
2. 在下拉列表中选择目标环境类型（语言）。
3. 点击 `安装环境` 按钮。
4. 选择目标编程语言环境及其版本。
5. 选择 `模式` 进行节点选择。
6. 点击 `确认` 按钮。

![安装环境](/img/guides/dependency-management/install-envs.png)

## 搜索依赖

您可以按照以下步骤从 PyPI/NPM/Go/Maven 存储库搜索依赖。

1. 导航到 `依赖` 列表页面。
2. 在下拉列表中选择目标环境类型（语言）。
3. 在搜索栏中输入目标依赖名称。
4. 点击 `搜索` 按钮。

![搜索依赖](/img/guides/dependency-management/search-dependencies.png)

## 安装依赖

如果您想安装目标依赖，可以在搜索结果中点击 `安装` 按钮并选择目标版本。

![安装依赖](/img/guides/dependency-management/install-dependencies.png)

## 卸载依赖

卸载依赖非常简单，您可以在搜索结果中点击 `卸载` 按钮。

![卸载依赖](/img/guides/dependency-management/uninstall-dependencies.png)

## 自动安装依赖

Crawlab Pro 提供自动依赖安装以简化您的工作流程。当执行爬虫时，系统将：

1. **自动检测** 项目文件（例如 `requirements.txt`、`package.json`）中的所需依赖。
2. **检查现有安装** 跨越您的节点。
3. **在隔离环境中安装缺失的依赖**。
4. **在整个集群的所有节点上保持版本一致性**。

自动安装目前支持：

- Python（通过 `requirements.txt`）
- Node.js（通过 `package.json`）
- Go（通过 `go.mod`）
- Java（通过 `pom.xml`）

您可以在 `系统设置` 页面启用/禁用自动安装。

![启用/禁用自动安装依赖](/img/guides/dependency-management/enable-disable-auto-install-dependencies.png)

:::caution
自动安装可能会增加 30-60 秒的初始执行时间。
:::

## 爬虫依赖

您可以在 `爬虫` 详细信息页面的 `依赖` 标签中查看和管理爬虫依赖。此功能允许您轻松跟踪和更新爬虫的依赖项，确保它们始终保持最新且正常运行。管理爬虫依赖对于维护您的网络抓取操作的健康和效率至关重要。

![爬虫依赖](/img/guides/dependency-management/spider-dependencies.png)

## 网络问题

在 Crawlab 中管理依赖时，网络连接问题有时会干扰软件包的下载和安装。这在企业环境中尤其常见，这些环境有防火墙，或者在中国大陆等互联网访问受限的地区。正确配置代理可以解决这些问题。

您可以按照以下步骤轻松管理依赖安装代理配置：

1. 导航到 `依赖` 列表页面。
2. 在下拉列表中选择目标环境类型（语言）。
3. 点击 `配置` 按钮。
4. 设置 `命令包源 URL`。
5. 点击 `确认` 按钮。

![配置代理](/img/guides/dependency-management/configure-proxy.png)