# Permissions Management

::: info NOTE
This functionality is for [Pro Edition](https://www.crawlab.cn/en/prices) only.
:::

[Crawlab Pro](https://www.crawlab.cn/en/prices) supports a [RBAC](https://www.imperva.com/learn/data-security/role-based-access-control-rbac/)
-based permissions management, which means you can use Crawlab Pro to manage the `Permissions`
of your [users](../user) via `Roles`.

## Permissions

Permissions in Crawlab Pro are the basic unit of user access control.

### Types of permissions

Types of permissions are as below:

- **Action**: Specific actions that a role can perform, such as `View`, `Edit`, `Delete`, `Create`, etc.
- **Page**: Specific pages that a role can access, such as `Spiders`, `Tasks`, `Nodes`, etc.
- **Data**: Specific data records that a role can access, such as `Spiders` attributed to a specific user.

### Permission fields

Fields of permissions are as below:

- **Type**: Type of permission, `Action`, `Page`, or `Data`.
- **Target**: Regex pattern of the targets, where the permission should operate on.
- **Allow**: Regex pattern of allowed items.
- **Deny**: Regex pattern of denied items.

### Create a permission

1. Go to the `Permissions` page by clicking the `Permissions` button in the
   sidebar. <br>![permissions-menu](./img/permissions-menu.png)
2. Click the `New Permission` button <br>![permissions-create](./img/permissions-create.png)
3. Enter necessary info of the new permission and click `Confirm`
   button <br>![permissions-create-form](./img/permissions-create-form.png)

### Delete a permission

1. Go to the `Permissions` page by clicking the `Permissions` button in
   the <br>![permissions-menu](./img/permissions-menu.png)
2. Click the `Delete` button of the permission you want to delete <br>![delete-button](./img/delete-button.png)

## Roles

Roles in Crawlab Pro can be defined by admin users. Roles are associated with a set of permissions, and can be assigned
to users.

### Create a Role

1. Go to the `Roles` page by clicking the navigation button on the left sidebar <br>![roles-menu](./img/roles-menu.png)
2. Click the `New Role` button <br>![roles-create](./img/roles-create.png)
3. Enter necessary info of the new role and click `Confirm` button <br>![roles-create-form](./img/roles-create-form.png)

### Delete a role

1. Go to the `Roles` page by clicking the `Roles` button in
   the <br>![roles-menu](./img/roles-menu.png)
2. Click the `Delete` button of the role you want to delete <br>![delete-button](./img/delete-button.png)

### Link/Unlink permissions to a role

1. Go to the `Permissions` tab in the `Role Detail` page by clicking the `View permissions`
   button. <br>![view-permissions-button](./img/view-permissions-button.png)
2. Click on `Link Permissions` button. <br>![link-permissions-button](./img/link-permissions-button.png)
3. Select the permissions you want to link/unlink to the
   role, and click `Confirm` button. <br>![link-permissions-form](./img/link-permissions-form.png)

### Link/Unlink users to a role

1. Go to the `Permissions` tab in the `Role Detail` page by clicking the `View users`
   button. <br>![view-users-button](./img/view-users-button.png)
2. Click on `Link Users` button. <br>![link-users-button](./img/link-users-button.png)
3. Select the users you want to link/unlink to the
   role, and click `Confirm` button. <br>![link-users-form](./img/link-users-form.png)
