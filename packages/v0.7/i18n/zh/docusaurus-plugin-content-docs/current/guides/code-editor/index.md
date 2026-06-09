---
sidebar_position: 2
title: 代码编辑器
---

# 代码编辑器

Crawlab 允许用户在浏览器中使用轻量级在线代码编辑器编辑代码文件。该代码编辑器基于 [Monaco Editor](https://microsoft.github.io/monaco-editor/) 构建，这是 [VS Code](https://code.visualstudio.com/) 背后的开源代码编辑器框架。

如果你想要修改 Crawlab 中的爬虫代码（例如 `settings.py` 和 `items.py`），这非常有用。它提供了一种便捷的方式进行修改，而无需下载文件、本地编辑并重新上传到 Crawlab。

![Code Editor](/img/guides/code-editor/code-editor.png)

## 主要功能

- **语法高亮**：支持 Python、Node.js、Go 和其他常见的网页抓取语言
- **智能自动补全**：针对框架特定语法（如 Scrapy、Colly 等）的上下文感知建议
- **文件管理**：
    - 创建/编辑文件
    - 目录树导航
    - 拖放文件组织

## 快速入门

### 访问编辑器

1. 导航到你的爬虫详情页面
2. 点击 `文件` 选项卡
3. 双击任意文件以在编辑器中打开它

### 创建新文件

1. 在目录树中右键单击
2. 选择 `新建文件` 或 `新建文件夹`
3. 输入带有适当扩展名的名称（.py、.json 等）

### 保存更改

- `Ctrl/Cmd + S`：保存当前文件

## 使用指南

### 基本编辑

1. 单击文件以在编辑器中打开它
2. 修改文件内容
3. 使用 `Ctrl/Cmd + S` 保存更改

### 文件管理

1. 使用目录树导航和管理文件
2. 拖放文件以移动它们
3. 右键单击文件以访问上下文特定操作<br/>
   ![File Context Menu](/img/guides/code-editor/file-context-menu.png)

### 上传文件

1. 点击 `上传` 按钮
2. 选择要上传的文件或文件夹

## 版本控制

:::info
版本控制功能仅在 **Crawlab 专业版** 中可用。
:::

你还可以使用代码编辑器与 Git 仓库交互，以确保版本控制。Crawlab 提供了一个简单的界面来克隆、拉取、提交和推送对 Git 仓库的更改。

更多信息，请参阅 [版本控制](../version-control/index.md) 指南。