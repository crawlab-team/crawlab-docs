---
sidebar_position: 2
title: Code Editor
---

# Code Editor

Crawlab allows users to edit code files in the browser with a light-weight online code editor. The code editor is built
on top of [Monaco Editor](https://microsoft.github.io/monaco-editor/), the open-source code editor framework
behind [VS Code](https://code.visualstudio.com/).

This is very useful if you want to make changes to the spider code on Crawlab such as `settings.py` and `items.py`. It
provides a convenient way to make changes without having to download the file, edit it locally, and upload it back to
Crawlab.

![Code Editor](/img/guides/code-editor/code-editor.png)

## Key Features

- **Syntax Highlighting**: Supports Python, Node.js, Go, and other common web scraping languages
- **Intelligent Auto-completion**: Context-aware suggestions for framework-specific syntax (Scrapy, Colly, etc.)
- **File Management**:
    - Create/edit files
    - Directory tree navigation
    - Drag-and-drop file organization

## Getting Started

### Accessing the Editor

1. Navigate to your spider detail page
2. Click `Files` tab
3. Double-click any file to open it in the editor

### Creating New Files

1. Right-click in directory tree
2. Choose `New File` or `New Folder`
3. Enter name with appropriate extension (.py, .json, etc.)

### Saving Changes

- `Ctrl/Cmd + S`: Save current file

## Usage Guide

### Basic Editing

1. Click on a file to open it in the editor
2. Make changes to the file
3. Use `Ctrl/Cmd + S` to save changes

### File Management

1. Use the directory tree to navigate and manage files
2. Drag-and-drop files to move them
3. Right-click on a file to access context-specific actions<br/>
   ![File Context Menu](/img/guides/code-editor/file-context-menu.png)

### Uploading Files

1. Click `Upload` button
2. Select file(s) or folder to upload

## Git Integration

:::info
Git integration is only available in **Crawlab Pro**.
:::

You can also use the code editor to interact with Git repositories to ensure version control. Crawlab provides a simple
interface to clone, pull, commit, and push changes to a Git repository.

For more information, refer to the [Git Integration](../version-control/index.md) guide.