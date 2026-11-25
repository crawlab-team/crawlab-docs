---
sidebar_position: 3
title: Task Logs
---

# Task Logs

You can monitor and troubleshoot your crawling tasks through execution logs. Logs show detailed runtime information
including status updates, errors, and crawling progress.

## View Logs

1. Navigate to the `Task` detail page
2. Click the `Logs` tab
3. View the logs in the log panel
    ![Task Logs](/img/guides/task-logs/task-logs.png)

## Log Format

As Crawlab captures the standard output and standard error of the spider script, the format of the task logs is totally
controlled by the spider script.

For example, if you spider script (Python) is as follows:

```python
print("Hello, world!")
```

The logs in the log panel will be:

```
Hello, world!
```

## Log Storage Driver

Workers stream task output to the master, and the master stores it so the built-in log panel can show it. This is the
default `file` driver. It writes under `/var/log/crawlab/tasks` and keeps logs for 30 days.

| Environment variable | Default | Description |
|---|---|---|
| `CRAWLAB_LOG_DRIVER` | `file` | `file` stores task logs on the master. `none` stores nothing. |
| `CRAWLAB_LOG_PATH` | `/var/log/crawlab/tasks` | Directory used by the `file` driver. |
| `CRAWLAB_LOG_TTL` | `30d` | How long the `file` driver keeps logs, for example `3600s`, `60m`, `24h` or `3d`. |

On a busy cluster the master's log disk and memory (page cache) can grow quickly. If you already collect task output
from the worker containers, set `CRAWLAB_LOG_DRIVER=none` on the master to stop it from saving logs. A value other than `file` or `none` logs a warning and uses `file`.

With `none`, the **Logs** tab on the task page is empty because it reads what the master stored. Read task output from
the worker's stdout instead. Workers print each task's output to their container's stdout and stderr by default, each
line prefixed with `[task:<id>]`, so `docker logs` and `kubectl logs` show it. Set `CRAWLAB_TASK_LOG_STDOUT=false` to turn
that off.
