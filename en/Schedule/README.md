## Periodical Tasks

定时任务是指定某个时刻，重复性地执行的任务，英文叫做`Periodical Tasks`，在`Linux`中也被称为`Crontab`。定时任务可以让任务可以被执行多次，而用户则不用手动的操作来执行任务。在生产环境中，这非常常见。定时任务对于对增量抓取或对数据实时性有要求的用户来说非常有用。
A scheduled task is a task that is executed repeatedly at a specified time. It is called 'Periodical Tasks' in English and 'Crontab' in Linux. A periodical task can be executed multiple times, while the user does not need to perform the task manually. This is very common in production environments. Periodical tasks are very useful for users who need incremental fetching or real-time data.

The periodical tasks list is updated frequently. Every time a crawler is updated, deleted, created, and a periodical task is updated, deleted, and created, the periodical tasks list will be updated.

### Create Periodical Tasks

Navigate to the 'periodical tasks' page to see the list of periodical tasks.

Click 'Add Periodical Tasks' to pop up the create periodical task pop-up box. Fill in the corresponding content and click the submit button to create a periodical task.

![](https://crawlab.oss-cn-hangzhou.aliyuncs.com/gitbook/schedule-list-add.png)

'Cron' here is the same as 'crontab' in Linux. If you don't know about 'crontab', please refer to [this article](https://www.cnblogs.com/longjshz/p/5779215.html).

### Modify Periodical Tasks

Navigate to the 'periodical tasks' page, click the 'modify' button in the 'operation' column, and a pop-up box for modifying the periodical task will pop up. Fill in the corresponding content and click the submit button to modify the periodical task.

### Delete Periodical Tasks

Navigate to the 'periodical tasks' page, click the 'delete' button in the 'operation' column, confirm to delete the task.
