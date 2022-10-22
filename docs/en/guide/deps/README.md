# Dependencies Management

Crawlab allows users to install and management dependencies for spiders and tasks.

## Page Menu

Expand `Dependencies` button on the left sidebar and click sub-menu items as below.

![menu.png](./img/menu.png)

- **Settings**: Global dependencies settings
- **Python**: Python dependencies management
- **Node.js**: Node.js dependencies management

## Install Dependencies

1. Navigate to the dependencies management page (Python/Node.js) <br>![deps-list.png](./img/deps-list.png)
2. Click on `Installable` button <br>![installable.png](./img/installable.png)
3. Enter search keywords and click on `Search` button <br>![img.png](./img/search.png)
4. Click on `Install` button <br>![install.png](./img/install.png)
5. Select `Mode` (which nodes to install) and `Upgrade` (whether to upgrade) and click `Confirm`
   button <br>![install-form.png](./img/install-form.png)

## Uninstall Dependencies

1. Navigate to the dependencies management page (Python/Node.js) <br>![deps-list.png](./img/deps-list.png)
2. Click on `Uninstall` button to uninstall the dependency <br>![uninstall.png](./img/uninstall.png)
3. Select `Mode` (which nodes to install) and click `Confirm` button <br>![uninstall-form.png](./img/uninstall-form.png)

## Settings

1. Navigate to the dependencies management page (Settings) <br>![settings-list.png](./img/settings-list.png)
2. Click on `Configure` button <br>![edit.png](./img/configure.png)
3. Edit the configuration and click on `Confirm` button <br>![settings.png](./img/settings.png)

Settings description:

- **Command**: executable command for installing/uninstalling dependencies. E.g. `pip`, `/usr/local/bin/pip39`, `npm`
  , `yarn`
- **Proxy**: proxy for installing/uninstalling dependencies. E.g. `https://registry.npm.taobao.org`
  or `https://pypi.tuna.tsinghua.edu.cn/simple`

## Tasks

1. Navigate to the dependencies management page (Python/Node.js)
2. Click on `Tasks` button <br>![tasks.png](./img/tasks.png)
3. You can view install/uninstall tasks <br>![tasks-list.png](./img/tasks-list.png)
4. Click on `Logs` button to view logs <br>![tasks-logs.png](./img/tasks-logs.png)
5. You can view logs of given tasks <br>![tasks-logs-content.png](./img/tasks-logs-content.png)