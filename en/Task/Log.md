## Task log

Crawlab collects the running log of the spider task, which is convenient for users to debug and monitor the spider program. View the location of the log as task 'details' > 'log' label.

![](http://static-docs.crawlab.cn/task-log2.png)

Crawlab captures logs through the 'Stdout' standard output stream. Therefore, if you want to see logs in the Crawlab interface, you need to output the log content to 'Stdout'. The simplest way is to print it out, such as Python's 'print' and 'console.log' of Node.js.

### Log search

You can search for any related log lines in the 'search log' input box. This can be a regular expression.

⚠️Note: log search uses regular matching, so the performance will be reduced. If the log volume is large, you need to wait patiently.

### Anomaly detection

Crawlab has built-in log exception detection, which is based on regular expression. By default, 'error', 'exception', 'traceback' will be used to match the log content to determine whether the log text is an error log.

If Crawlab finds an error log, it will be displayed in the task list and task details, as shown below.


![](http://static-docs.crawlab.cn/task-log-list.png)

![](http://static-docs.crawlab.cn/task-log-detail.png)

In the 'log' tab, if there is a log exception, crawlab will display a 'error number' button, click it to see all or part of the red error logs, and click these error logs to navigate to the location of the error logs.

### Auto scroll

Turn on the 'auto scroll' button to turn the log to the bottom, and it will turn to the bottom automatically when the log is updated.

### Log setting

We can change the log settings, including exception regular expression, maximum exception log display, and log expiration time. The setting interface is in 'settings' - > 'log', as shown below. Each user can have different log settings.

![](http://static-docs.crawlab.cn/log-setting.png)

The following explains the meaning of log settings:

- **Exception regular expression**：This is the way to judge the exception log text. If the regular expression can match the log text line, the behavior is wrong or the log exception;
- **Maximum exception log display**：In the log details, the maximum number of display lines of 'error number' is 1000 by default;
- **Log expiration time**：After how long is the log deleted automatically, it will not be deleted by default, **but it is strongly recommended to set an expiration time to prevent the log from exceeding the database memory**.

### Principle

Crawlab logs and exception logs are stored in the 'logs' and 'error_logs' collection of 'MongoDB' database. For logs with large amount of data, the database is easy to be full, so we **strongly recommend setting an expiration time**.

There are 3 'indexes' for logs:

- 'task_id' combination of 'seq' is convenient for paging query (without search criteria), and the query cost is small;
- 'task_id' combination of 'msg' is convenient for search and query, and the cost of query is large;
- 'expire_ts' TTL index, easy to delete logs automatically.

Among them, 'task_id' is the task ID, 'seq' is the log sequence number, 'msg' is the log content, 'expire_ts' is the expiration date.