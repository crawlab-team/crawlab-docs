---
sidebar_position: 2
title: Dependency Settings
---

# Dependency Settings

:::info
This feature is only available in **Crawlab Pro**.
:::

The **Dependency Settings** are the system-level controls for how Crawlab manages language and runtime dependencies
across your cluster. They govern the platform-wide behavior of [dependency management](../../dependency-management/index.md)
— the installation of language environments (Python, Node.js, Go, Java) and the packages your spiders rely on — rather
than the dependencies of any single spider.

## Where to Find Them

Navigate to **System Settings → Dependency**. This page centralizes the global options that apply to every node and
spider, so you can configure dependency behavior once for the whole platform.

## What You Can Configure

These settings control the system-wide dependency management used when spiders run, including:

- **Automatic dependency installation** — enable or disable automatically installing dependencies declared in a
  project's manifest files (for example `requirements.txt`, `package.json`, `go.mod`, or `pom.xml`) before a task
  executes.
- **Language / runtime dependency management** — the default behavior for resolving and installing the package
  dependencies that spiders need across nodes.

Because these are platform-wide defaults, changes here affect dependency handling for all spiders rather than a single
project.

## Related

- [Dependency Management](../../dependency-management/index.md) — managing language environments and packages,
  including installing, searching, and configuring package sources.
