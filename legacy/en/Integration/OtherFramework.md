## Other frameworks and languages

The spider task is essentially implemented by a shell command. The task ID will exist in the process of running the spider task in the form of the environment variable 'CRAWLAB_TASK_ID', and it will be used to associate the fetching data. In addition, 'CRAWLAB_COLLECTION' is the name of the collection stored from Crawlab.

In a spider, you need to store the value of 'CRAWLAB_TASK_ID' in the form of 'task_id' in the collection of 'CRAWLAB_COLLECTION' in the database. In this way, Crawlab knows how to associate the spider task with the fetching data. Currently, Crawlab only supports MongoDB.