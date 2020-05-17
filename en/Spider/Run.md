## Run crawler

Crawlab has two ways to run a crawler:
1. Manual trigger
2. [Periodical task trigger](../Schedule/README.md)

### Manual trigger

1. Click the 'run' button in the 'action' column of the 'crawler list' and confirm it, or
2. Click the 'run' button under the 'overview' tab in the 'crawler' details and confirm it, or
3. If it is a 'configurable crawler', you can also click the 'run' button under the 'configuration' tab and confirm it

Then, Crawlab will prompt that the task has been dispatched to the queue, and you can see the newly created task on the left side of 'crawler details'. Click task to navigate to 'task details'.

### Run type

When you click the 'run' button, a dialog box will pop up, in which there is a required option of 'run type', which refers to the mode you want this crawler task to run, that is, the allocation policy of the running node. As shown in the figure below, there are 3 run types: all nodes, specified nodes and random.

![](http://static-docs.crawlab.cn/task-run-popup.png)

- **All nodes**: this task runs on all online nodes at the same time. This strategy is more suitable for large distributed crawlers;
- **Specify node**: specify to run on an online node. This strategy is suitable for crawlers with different topology node distribution, for example, some nodes are distributed in China, others are distributed abroad；
- **Random**: the system assigns any node to run the task, which is the simplest running strategy, and can allocate all effective resources equally.

### Parameter

In the task running confirmation dialog box, another optional input item is 'parameter', which is equivalent to the additional command of 'execute command'.

For 'custom crawlers', running a task is equivalent to executing a line of operation commands, such as 'python spider.py'. The 'parameter' is an additional instruction in the 'execute command', followed by the 'execute command'. The operation command executed by the last task will be the 'execute command' of the crawler add the 'parameter' of the task.

For example, execute the command as 'python spider.py', the parameter is 'keyword'. The last operation command to be run is 'python spider.py keyword'。

'Parameter' makes the crawler more flexible, one of the more useful parts is to improve the reusability of the crawler. For example, a search engine crawler needs to parameterize search keywords, which can be passed into the crawler as a 'parameter'.

Another useful place is that there are multiple crawlers in a crawler project (the 'crawler project' here does not refer to the 'project' in Crawlab). For example, if there are multiple crawlers in a 'Scrapy' crawler project, you can set the '<spider_name>' in 'scrapy crawl <spider_name>' as a parameter and pass it into the crawler , and then you can choose to run different crawlers through the parameter.

### Periodical task trigger

'Periodical task trigger' is a relatively common function, which is very important for tasks with 'incremental fetching' or real-time requirements. This is described in detail in the [scheduled tasks](../Schedule/README.md) section.