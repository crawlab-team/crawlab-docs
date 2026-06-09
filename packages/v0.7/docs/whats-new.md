---
sidebar_position: 2
title: What's New in v0.7
---

# What's New in v0.7

Crawlab v0.7.0 is a major release focused on **database integration**, a **modern editing experience**, and a
**rebuilt communication layer** for distributed clusters. This page summarizes the headline changes. If you are
upgrading from v0.6.x, start with the [Migration Guide](./getting-started/migration.md) — this release contains a
breaking change to cluster communication.

## Database ORM

Crawlab now ships native **ORM (Object-Relational Mapping)** support for SQL databases, powered by
[GORM](https://gorm.io/).

- Works with **MySQL**, **PostgreSQL**, and **SQL Server**.
- Schema is managed automatically — Crawlab detects and maintains tables for you, so you no longer need to hand-write
  `CREATE TABLE` statements before storing scraped data.
- ORM mode is a **per-database toggle**, so you can enable it selectively. It is non-destructive: existing data is
  preserved when switching it on or off.

See the [Database guide](./guides/database/index.md) for details.

## Modern Code Editor

The in-browser file editor is now built on the **Monaco** engine — the same editor that powers
[VS Code](https://code.visualstudio.com/).

- Syntax highlighting for many languages, including Python, Node.js, and Go.
- Context-aware IntelliSense / auto-completion.
- Multi-file editing with directory-tree navigation and drag-and-drop file management.

See the [Code Editor guide](./guides/code-editor/index.md) for details.

## gRPC Communication Overhaul

Node-to-node communication (master ↔ worker) and file synchronization have been rebuilt on top of **gRPC**.

- The default gRPC port is **9666** and must be reachable by every worker node.
- Connections are resilient by design: automatic reconnection with exponential backoff, circuit breakers, and
  keepalive.
- **Breaking change vs v0.6.x** — v0.6.x and v0.7.0 nodes cannot coexist in the same cluster, so a whole-cluster
  upgrade is required.

:::warning
This is a breaking change. Review the [Migration Guide](./getting-started/migration.md) before upgrading an existing
cluster.
:::

## Multi-Platform Docker Images

Official Docker images are now **multi-architecture**, published for both **AMD64** and **ARM64** under the same tag.

- Runs natively on ARM64 hardware such as Apple Silicon and AWS Graviton.
- No separate tag or image is required — pull the same tag on any supported architecture.

See the [Installation guide](./getting-started/installation.md) to get started.

## Task Execution & Reliability

Task execution has been hardened for production workloads.

- Bounded goroutine pools with a dynamic maximum-worker limit to keep resource usage predictable.
- Zombie and orphaned process prevention so finished tasks don't leave processes behind.
- **HEARTBEAT**-based node health monitoring.
- Graceful shutdown so in-flight work is handled cleanly when nodes stop.

In addition, you can now **batch delete tasks**, and Crawlab prevents deletion of resources that are still linked to
projects, schedules, spiders, or nodes.

## Infrastructure

Under the hood, v0.7.0 modernizes the platform foundation.

- **OpenTelemetry** distributed tracing and structured logging for better observability.
- Backend built with **Go 1.23.7**.
- Frontend built with **Vue 3.5.13** and **TypeScript**.

## Upgrading from v0.6.x

Because cluster communication and file synchronization now use gRPC, **all nodes must be upgraded together** — you
cannot mix v0.6.x and v0.7.0 nodes in the same cluster. Make sure the master node's gRPC port (default **9666**) is
reachable by every worker.

Follow the [Migration Guide](./getting-started/migration.md) for the full upgrade procedure, including backup,
verification, and rollback steps.
