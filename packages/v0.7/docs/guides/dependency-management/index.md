---
sidebar_position: 8
title: Dependency Management
---

# Dependency Management

:::info
Dependency Management is only available in **Crawlab Pro**.
:::

Effective dependency management is crucial for maintaining consistent crawler environments across distributed systems.
Crawlab simplifies dependency management for Python, Node.js, Go, Java and browser-based projects with built-in support,
automated dependency resolution, and cross-node synchronization. This guide covers essential tools for handling
requirements installation, virtual environments, and ensuring reproducibility across your crawling infrastructure -
including browser automation dependencies like Chrome Driver and related packages.

## Install Environments

:::info
Python is pre-installed in the Crawlab Community edition, whilst Crawlab Pro has already pre-installed Python, Node.js
and Browsers environments.
:::

You can install additional programming language environments or switch to the target versions of environments for all
nodes or selected nodes by following below steps.

1. Navigate to `Dependency` list page.
2. Select the target environment type (language) in the dropdown list.
3. Click `Install Envs` button.
4. Select the target programming language environment and version.
5. Select `Mode` for node selection.
6. Click `Confirm` button.

![Install Envs](/img/guides/dependency-management/install-envs.png)

## Search Dependencies

You can search dependencies from PyPI/NPM/Go/Maven repositories by following below steps.

1. Navigate to `Dependency` list page.
2. Select the target environment type (language) in the dropdown list.
3. Type in the target dependency name in the search bar.
4. Click `Search` button.

![Search Dependencies](/img/guides/dependency-management/search-dependencies.png)

## Install Dependencies

If you want to install the target dependency, you can click the `Install` button in the search results and select the
target version.

![Install Dependencies](/img/guides/dependency-management/install-dependencies.png)

## Uninstall Dependencies

Uninstalling dependencies is quite simple, you can click the `Uninstall` button in the search results.

![Uninstall Dependencies](/img/guides/dependency-management/uninstall-dependencies.png)

## Auto Install Dependencies

Crawlab Pro offers automatic dependency installation to streamline your workflow. When executing crawlers, the system
will:

1. **Automatically detect** required dependencies from your project files (e.g., `requirements.txt`, `package.json`)
2. **Check existing installations** across your nodes
3. **Install missing dependencies** in isolated environments
4. **Maintain version consistency** across all nodes in your cluster

Auto-installation currently supports:

- Python (via `requirements.txt`)
- Node.js (via `package.json`)
- Go (via `go.mod`)
- Java (via `pom.xml`)

You can enable/disable auto-installation in the `System Settings` page.

![Enable/Disable Auto Install Dependencies](/img/guides/dependency-management/enable-disable-auto-install-dependencies.png)

:::caution
Automatic installation may add 30-60 seconds to your initial execution time.
:::

## Spider Dependencies

You can view and manage spider dependencies in the `Dependencies` tab of the `Spider` detail page. This feature allows
you to easily track and update the dependencies of your spiders, ensuring that they are always up to date and
functioning properly. Managing spider dependencies is crucial for maintaining the health and efficiency of your web
scraping operations.

![Spider Dependencies](/img/guides/dependency-management/spider-dependencies.png)

## Network Issues

When managing dependencies in Crawlab, network connectivity issues can sometimes interfere with package downloads and
installations. This is especially common in corporate environments with firewalls or in regions with restricted internet
access such as Mainland China. Configuring proxies correctly can help resolve these issues.

You can manage dependency installation proxy configuration easily by following below steps:
1. Navigate to `Dependency` list page.
2. Select the target environment type (language) in the dropdown list.
3. Click `Configuration` button.
4. Set `Command Package Source URL`.
5. Click `Confirm` button.

![Configure Proxy](/img/guides/dependency-management/configure-proxy.png)
