## Permission Management

Crawlab strengthens the support of permission management from version v0.4.9, which makes the permission management more complex and practical and provides the support of permission management for enterprise users.

### User Role

Crawlab 的权限管理是简易版的 RBAC。简单来说，Crawlab 分为两个角色：`管理用户` 和 `普通用户`。
Crawlab's permission management is a simple version of RBAC. In short, Crawlab has two roles: 'manage users' and 'ordinary users'.

- **manage users**：You can view and operate the data of all users, including crawlers, projects, tasks, etc., and see the user management page;
- **ordinary users**：You can only view and operate your own data, not see the user management page.

### Public Crawler

You can see the "public or not" options on the crawler details-overview page. If it is checked and saved, it means that the crawler is a public crawler, that is, all users can view it, but other users can't modify the crawler except the administrator, they can only copy the crawler as their own workspace.