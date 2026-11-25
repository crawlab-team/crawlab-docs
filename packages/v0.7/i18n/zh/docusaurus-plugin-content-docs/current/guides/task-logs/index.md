---
sidebar_position: 3
title: 任务日志
---

# 任务日志

您可以通过执行日志来监控和排查您的爬虫任务。日志显示详细的运行时信息，包括状态更新、错误和爬取进度。

## 查看日志

1. 导航到 `任务` 详情页面
2. 点击 `日志` 标签
3. 在日志面板中查看日志
    ![任务日志](/img/guides/task-logs/task-logs.png)

## 日志格式

由于 Crawlab 捕获了爬虫脚本的标准输出和标准错误，因此任务日志的格式完全由爬虫脚本控制。

例如，如果您有以下 Python 爬虫脚本：

```python
print("Hello, world!")
```

日志面板中的日志将是：

```
Hello, world!
```


## 日志存储驱动

工作节点会把任务输出流式发送给主节点，由主节点保存下来，供内置日志面板显示。这是默认的 `file` 驱动，日志写在 `/var/log/crawlab/tasks` 下，保留 30 天。

| 环境变量 | 默认值 | 说明 |
|---|---|---|
| `CRAWLAB_LOG_DRIVER` | `file` | `file` 把任务日志保存在主节点上，`none` 不保存。 |
| `CRAWLAB_LOG_PATH` | `/var/log/crawlab/tasks` | `file` 驱动使用的目录。 |
| `CRAWLAB_LOG_TTL` | `30d` | `file` 驱动保留日志的时长，例如 `3600s`、`60m`、`24h`、`3d`。 |

任务很多的集群里，主节点的日志磁盘和内存（页缓存）可能增长很快。如果你已经从工作节点容器收集任务输出，可以在主节点上设置 `CRAWLAB_LOG_DRIVER=none`，让它不再保存日志。设置为 `file` 和 `none` 之外的值时，会输出警告并使用 `file`。

使用 `none` 后，任务页面的**日志**标签页是空的，因为它读取的是主节点保存的内容。请改为从工作节点的 stdout 读取任务输出。工作节点默认会把每个任务的输出打印到容器的 stdout 和 stderr，每行带有 `[task:<id>]` 前缀，用 `docker logs` 和 `kubectl logs` 即可查看。设置 `CRAWLAB_TASK_LOG_STDOUT=false` 可以关闭。
