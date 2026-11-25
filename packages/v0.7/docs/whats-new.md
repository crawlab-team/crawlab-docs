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

## v0.7 Patch Releases

Since v0.7.0, patch releases have added new capabilities and fixed issues found in production clusters. Releases are
listed newest first.

### v0.7.5 (2026-09-04)

Bug fixes:

- Automatic dependency installation before a task now uses the package mirror you configured in the dependency
  settings.
- Python package search in the dependency page now works when Crawlab is configured to use a mirror.
- A task can now be cancelled while it is still installing dependencies.
- The page-level permission check now honors the configured root admin role.
- Task logs now open in a tab inside Crawlab instead of a separate browser tab.

### v0.7.4 (2026-09-03)

New features:

- **Load-aware task placement.** The master now places pending tasks on the least-loaded eligible node, instead of
  whichever worker polls first. Workers only start tasks that were placed on them. See
  [Task](./concepts/task/index.md).
- **Manual runs follow the schedule's run count and execution strategy.** Clicking **Run** on a schedule now respects the
  same run-count ceiling and execution strategy as a cron fire, so it no longer stacks extra tasks on top of a full
  schedule. See [Schedule](./concepts/schedule/index.md).
- **Resume tasks lost with a node.** When a node goes offline and its tasks are lost, Crawlab starts one replacement
  task. This now also applies to tasks you started manually, and can be turned off. See
  [Task](./concepts/task/index.md).
- **`none` task log driver.** Set `CRAWLAB_LOG_DRIVER=none` to stop the master from storing task logs on its disk. See
  [Task Logs](./guides/task-logs/index.md).
- **Database-level validation.** Crawlab's own MongoDB collections now reject ObjectID and date fields of the wrong
  type. See [Database](./guides/database/index.md).
- **Filter schedules by node group** in the schedule list.

Bug fixes:

- Tasks whose process is still alive when their node reconnects after a long disconnect are now picked up again instead
  of being killed.
- A manual run on a random node no longer starts twice, and cancelling or reclaiming a task no longer leaves duplicate
  processes behind.
- Node metrics inside Docker and Kubernetes now report the container's CPU and memory rather than the host's.
- Task-error notifications are now sent for tasks that the master marks as failed or abnormal during reconciliation.
- A failed automatic dependency installation no longer fails the task, installs no longer disturb a running spider's
  environment, and Python dependencies work on hosts that only have `python3`.
- Cron schedules no longer create duplicate tasks when entries are stacked, and a cron fire runs exactly once when more
  than one master is running.
- ObjectIDs and dates are no longer stored as strings, and existing damaged documents are repaired on start-up.
- Updating a role with a request body that has no `_id` no longer returns an error.
- A JSON export is now marked finished only after its file is written.
- File editor: edits are no longer lost on a second save, a git pull now refreshes the open file, and switching tabs no
  longer shows the previous file's content.
- A destructive git pull now asks for confirmation in the UI.

### v0.7.3 (2026-07-06)

- Task output now also goes to the container's stdout/stderr by default, so `docker logs` and `kubectl logs` show it. Each
  line is prefixed with `[task:<id>]`. Set `CRAWLAB_TASK_LOG_STDOUT=false` to turn it off.
- Fixed tasks that came back as `running` after their node went offline and returned, although their process was gone.
  These tasks held a runner slot and blocked their schedule from firing.
- The node picker in the run, task and schedule dialogs now lists all nodes (it was limited to 10).
- The **Tasks** tab on node and schedule detail pages can paginate again.
- The task list no longer switches between filtered and unfiltered results, and list filters are kept per tab.

### v0.7.2 (2026-07-02)

- Updating a document through the API no longer overwrites its other fields with empty values.
- **Run count for schedules.** A schedule can now set how many tasks it should keep running, and the run dialogs accept
  a run count.
- The `ignore` execution strategy now works per node instead of all-or-nothing, and the run count acts as a concurrency
  ceiling.
- Notifications: DingTalk @-mentions, and signed DingTalk and Lark webhooks.
- Nodes: offline nodes can be deleted, long-offline nodes are disabled automatically, and nodes keep a stable identity
  in containers. `CRAWLAB_NODE_KEY` and `CRAWLAB_NODE_NAME` now override the saved configuration.
- Task and node filters in list views are searchable. Tasks can be filtered by node group, and the task list has a Node
  Group column.
- Authentication: login tokens now expire, and the JWT secret is no longer a shared default.
- The server rejects a duplicate spider name within the same project.
- Task cancellation and cleanup are more reliable: the whole spider process tree is stopped on cancel, orphaned
  processes are cleaned up, and a full worker queue holds tasks back instead of failing them.
- Node metrics inside containers report the container's CPU and memory.

### v0.7.1 (2026-06-10)

- Fixed worker file synchronization from Git being aborted by `__pycache__` directories.

## Upgrading from v0.6.x

Because cluster communication and file synchronization now use gRPC, **all nodes must be upgraded together** — you
cannot mix v0.6.x and v0.7.0 nodes in the same cluster. Make sure the master node's gRPC port (default **9666**) is
reachable by every worker.

Follow the [Migration Guide](./getting-started/migration.md) for the full upgrade procedure, including backup,
verification, and rollback steps.
