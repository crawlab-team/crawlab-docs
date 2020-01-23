#### 其他框架和语言

爬虫任务本质上是由一个shell命令来实现的。任务ID将以环境变量`CRAWLAB_TASK_ID`的形式存在于爬虫任务运行的进程中，并以此来关联抓取数据。另外，`CRAWLAB_COLLECTION`是Crawlab传过来的所存放collection的名称。

在爬虫程序中，需要将`CRAWLAB_TASK_ID`的值以`task_id`作为可以存入数据库中`CRAWLAB_COLLECTION`的collection中。这样Crawlab就知道如何将爬虫任务与抓取数据关联起来了。当前，Crawlab只支持MongoDB。