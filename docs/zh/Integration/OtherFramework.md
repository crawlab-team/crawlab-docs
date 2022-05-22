## 其他框架和语言

爬虫任务本质上是由一个shell命令来实现的。任务ID将以环境变量`CRAWLAB_TASK_ID`的形式存在于爬虫任务运行的进程中，并以此来关联抓取数据。另外，`CRAWLAB_COLLECTION`是Crawlab传过来的所存放collection的名称。

在爬虫程序中，需要将`CRAWLAB_TASK_ID`的值以`task_id`作为可以存入数据库中`CRAWLAB_COLLECTION`的collection中。这样Crawlab就知道如何将爬虫任务与抓取数据关联起来了。当前，Crawlab只支持MongoDB。

#### Java

我们暂时还没有发布 Java 的 SDK，不过 Java 开发者可以参考下面的代码来实现集成。

```java
public class CrawlabUtil {
    private MongoClient mongoClient;

    public String getTaskId() {
        return System.getenv("CRAWLAB_TASK_ID");
    }

    public String getCollectionName() {
        return System.getenv("CRAWLAB_COLLECTION");
    }

    public MongoClient getMongoClient() {
        String mongoHost = System.getenv("CRAWLAB_MONGO_HOST");
        String mongoPort = System.getenv("CRAWLAB_MONGO_PORT");
        String mongoDatabase = System.getenv("CRAWLAB_MONGO_DB");
        String mongoUsername = System.getenv("CRAWLAB_MONGO_USERNAME");
        String mongoPassword = System.getenv("CRAWLAB_MONGO_PASSWORD");
        String mongoAuthSource = System.getenv("CRAWLAB_MONGO_AUTHSOURCE");
        String url;
        if (Strings.isEmpty(mongoUsername)) {
            url = "mongodb://" + mongoHost + ":" + mongoPort + "/" + mongoDatabase;
        } else {
            url = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDatabase + "?authSource=" + mongoAuthSource;
        }
        if (mongoClient == null) {
            mongoClient = MongoClients.create(url);
        }
        return mongoClient;
    }

    public MongoDatabase getMongoDatabase() {
        String mongoDatabase = System.getenv("CRAWLAB_MONGO_DB");
        MongoClient mongoClient = getMongoClient();
        return mongoClient.getDatabase(mongoDatabase);
    }

    public MongoCollection<Document> getMongoCollection() {
        String mongoCollection = getCollectionName();
        return getMongoDatabase().getCollection(mongoCollection);
    }

    public void saveItem(Document item) {
        item.append("task_id", getTaskId());
        MongoCollection<Document> collection = getMongoCollection();
        collection.insertOne(item);
    }
}
```

当需要保存结果时，只需要调用 `saveItem` 就可以了。其中 `Document` 是一个普通的 Java 类。

