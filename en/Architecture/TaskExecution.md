## Task Execution

Crawlab's task execution depends on the shell. Executing a spider task is equivalent to executing the corresponding command in the shell, so the user needs to store the execution command in the database before executing the spider task. The execute command line is the 'cmd' field saved in the 'spiders' table.

The architecture of task execution is as follows.

![](https://crawlab.oss-cn-hangzhou.aliyuncs.com/v0.3.0/task-execution.png)

When a spider task is dispatched, the master node will dispatch tasks in 'tasks:<node_id>' (specify work node) and 'tasks: public' (any work node) in Redis, that is the 'RPUSH' command.

When the work node is started, it will start n executors (configured by the environment variable 'CRAWLAB_TASK_WORKERS', which is 4 by default). Each executor will rotate the message queue of Redis, and get the message queue of the specified node 'tasks:<node_id>', if there is no task in the specified queue, it will get the task 'tasks: public' in the message queue of any node.

The details of the execution process will not be described in detail. Please refer to [source code](https://github.com/tikazyq/crawlab/blob/master/backend/services/task.go)。
