

# 依赖管理

Crawlab 允许用户为爬虫和任务安装和管理依赖项。

## 页面菜单

展开左侧边栏的 `Dependencies` 按钮并点击以下子菜单项。

![menu.png](/img/guide/menu.png)

- **Settings**: 全局依赖项设置
- **Python**: Python 依赖项管理
- **Node.js**: Node.js 依赖项管理

## 安装依赖项

1. 导航到依赖项管理页面（Python/Node.js）<br/>![deps-list.png](/img/guide/deps-list.png)
2. 点击 `Installable` 按钮<br/>![installable.png](/img/guide/installable.png)
3. 输入搜索关键词并点击 `Search` 按钮<br/>![img.png](/img/guide/search.png)
4. 点击 `Install` 按钮<br/>![install.png](/img/guide/install.png)
5. 选择 `Mode`（要安装的节点）和 `Upgrade`（是否升级）并点击 `Confirm` 按钮<br/>![install-form.png](/img/guide/install-form.png)

## 卸载依赖项

1. 导航到依赖项管理页面（Python/Node.js）<br/>![deps-list.png](/img/guide/deps-list.png)
2. 点击 `Uninstall` 按钮以卸载依赖项<br/>![uninstall.png](/img/guide/uninstall.png)
3. 选择 `Mode`（要安装的节点）并点击 `Confirm` 按钮<br/>![uninstall-form.png](/img/guide/uninstall-form.png)

## 设置

1. 导航到依赖项管理页面（Settings）<br/>![settings-list.png](/img/guide/settings-list.png)
2. 点击 `Configure` 按钮<br/>![edit.png](/img/guide/configure.png)
3. 编辑配置并点击 `Confirm` 按钮<br/>![settings.png](/img/guide/settings.png)

设置描述：

- **Command**: 用于安装/卸载依赖项的可执行命令。例如 `pip`，`/usr/local/bin/pip39`，`npm`，`yarn`
- **Proxy**: 用于安装/卸载依赖项的代理。例如 `https://registry.npm.taobao.org` 或 `https://pypi.tuna.tsinghua.edu.cn/simple`

## 任务

1. 导航到依赖项管理页面（Python/Node.js）
2. 点击 `Tasks` 按钮<br/>![tasks.png](/img/guide/tasks.png)
3. 您可以查看安装/卸载任务<br/>![tasks-list.png](/img/guide/tasks-list.png)
4. 点击 `Logs` 按钮以查看日志<br/>![tasks-logs.png](/img/guide/tasks-logs.png)
5. 您可以查看给定任务的日志<br/>![tasks-logs-content.png](/img/guide/tasks-logs-content.png)