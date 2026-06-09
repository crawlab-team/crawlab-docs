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
