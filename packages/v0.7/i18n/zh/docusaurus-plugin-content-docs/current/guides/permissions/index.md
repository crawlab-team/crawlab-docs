---
title: 权限管理
---

# 权限管理

:::info
此功能仅适用于 [Pro 版](https://www.crawlab.cn/en/prices)。
:::

[Crawlab Pro](https://www.crawlab.cn/en/prices) 支持基于 [RBAC](https://www.imperva.com/learn/data-security/role-based-access-control-rbac/) 的权限管理，这意味着您可以使用 Crawlab Pro 通过 `角色` 管理您的用户 的 `权限`。

## 权限

Crawlab Pro 中的权限是用户访问控制的基本单元。

### 权限类型

权限类型如下：

- **操作**：角色可以执行的具体操作，如 `查看`、`编辑`、`删除`、`创建` 等。
- **页面**：角色可以访问的具体页面，如 `爬虫`、`任务`、`节点` 等。
- **数据**：角色可以访问的具体数据记录，如属于特定用户的 `爬虫`。

### 权限字段

权限字段如下：

- **类型**：权限类型，`操作`、`页面` 或 `数据`。
- **目标**：权限应操作的目标的正则模式。
- **允许**：允许项目的正则模式。
- **拒绝**：拒绝项目的正则模式。

### 创建权限

1. 通过点击侧边栏中的 `权限` 按钮进入 `权限` 页面。<br/>![permissions-menu](/img/guide/permissions-menu.png)
2. 点击 `新建权限` 按钮<br/>![permissions-create](/img/guide/permissions-create.png)
3. 输入新权限的必要信息并点击 `确认` 按钮<br/>![permissions-create-form](/img/guide/permissions-create-form.png)

### 删除权限

1. 通过点击侧边栏中的 `权限` 按钮进入 `权限` 页面。<br/>![permissions-menu](/img/guide/permissions-menu.png)
2. 点击要删除的权限的 `删除` 按钮<br/>![delete-button](/img/guide/delete-button.png)

## 角色

Crawlab Pro 中的角色可以由管理员用户定义。角色与一组权限相关联，并可以分配给用户。

### 创建角色

1. 通过点击左侧侧边栏上的导航按钮进入 `角色` 页面<br/>![roles-menu](/img/guide/roles-menu.png)
2. 点击 `新建角色` 按钮<br/>![roles-create](/img/guide/roles-create.png)
3. 输入新角色的必要信息并点击 `确认` 按钮<br/>![roles-create-form](/img/guide/roles-create-form.png)

### 删除角色

1. 通过点击 `角色` 按钮进入 `角色` 页面。<br/>![roles-menu](/img/guide/roles-menu.png)
2. 点击要删除的角色的 `删除` 按钮<br/>![delete-button](/img/guide/delete-button.png)

### 将权限链接/取消链接到角色

1. 通过点击 `角色详情` 页面中的 `查看权限` 按钮进入 `权限` 标签页。<br/>![view-permissions-button](/img/guide/view-permissions-button.png)
2. 点击 `链接权限` 按钮。<br/>![link-permissions-button](/img/guide/link-permissions-button.png)
3. 选择要链接/取消链接到角色的权限，并点击 `确认` 按钮。<br/>![link-permissions-form](/img/guide/link-permissions-form.png)

### 将用户链接/取消链接到角色

1. 通过点击 `角色详情` 页面中的 `查看用户` 按钮进入 `权限` 标签页。<br/>![view-users-button](/img/guide/view-users-button.png)
2. 点击 `链接用户` 按钮。<br/>![link-users-button](/img/guide/link-users-button.png)
3. 选择要链接/取消链接到角色的用户，并点击 `确认` 按钮。<br/>![link-users-form](/img/guide/link-users-form.png)