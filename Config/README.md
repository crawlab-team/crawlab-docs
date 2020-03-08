环境配置是由Go第三方库viper来实现的。当程序启动时，viper会去读取`yaml`配置文件，以及将环境变量与配置文件中的变量对应起来。

以下是`yaml`配置文件，其中的变量可以被以`CRAWLAB_`为前缀的环境变量所覆盖。

```yaml
api:
  address: "http://localhost:8000"  # API 地址
mongo:
  host: localhost  # MongoDB host
  port: 27017  # MongoDB port
  db: crawlab_test  # MongoDB database
  username: ""  # MongoDB username
  password: ""  # MongoDB password
  authSource: "admin"  # MongoDB auth source database
redis:
  address: localhost  # Redis host
  password: ""  # Redis password
  database: 1  # Redis database
  port: 6379  # Redis port
log:
  level: info  # Log Level
  path: "/var/logs/crawlab"  # Log Path
  isDeletePeriodically: "N"  # 是否定期删除日志（默认为否）
  deleteFrequency: "@hourly"  # 删除日志频率
server:
  host: 0.0.0.0  # 后端监听地址
  port: 8000  # 后端监听端口
  master: "Y"  # 是否为主节点
  secret: "crawlab"  # JWT secret
  register:
    # mac地址 或者 ip地址，如果是ip，则需要手动指定IP
    type: "mac"
    ip: ""
spider:
  path: "/app/spiders"  # 爬虫路径
task:
  workers: 4  # 同时运行任务的执行器数量
rpc:
  workers: 16 # RPC 协程个数
other:
  tmppath: "/tmp"  # 临时文件目录
version: 0.4.7  # 版本号
setting:
  allowRegister: "N"  # 是否允许注册
notification: # 消息通知
  mail: # 邮箱通知
    server: '' # SMPT 服务器地址
    port: ''  # SMTP 服务器端口
    senderEmail: ''  # 发送者邮箱
    senderIdentity: ''  # 发送者身份
    smtp:  # SMTP
      user: ''  # SMTP 用户名
      password: ''  # SMTP 密码
```

环境变量列表如下。

环境变量 | yaml变量路径 | 描述 | 默认 | 可能值
--- | --- | --- | --- | ---
CRAWLAB_API_ADDRESS | api.path | 前端API地址 | http://localhost:8000 | 任意
CRAWLAB_MONGO_HOST | mongo.host | MongoDB Host地址 | localhost | 任意
CRAWLAB_MONGO_PORT | mongo.port | MongoDB端口号 | 27017 | 任意
CRAWLAB_MONGO_DB | mongo.db | MongoDB数据库名 | crawlab_test | 任意
CRAWLAB_MONGO_USERNAME | mongo.username | MongoDB用户名 | 空 | 任意
CRAWLAB_MONGO_PASSWORD | mongo.password | MongoDB密码 | 空 | 任意
CRAWLAB_MONGO_AUTHSOURCE | mongo.authSource | MongoDB AuthSource | 空 | 任意
CRAWLAB_REDIS_ADDRESS  | redis.address  | Redis地址 | localhost | 任意
CRAWLAB_REDIS_PASSWORD | redis.password | Redis密码 | 空 | 任意
CRAWLAB_REDIS_DATABASE | redis.database | Redis db | 1 | 数值
CRAWLAB_REDIS_PORT | redis.port | Redis 端口 | 空 | 数值
CRAWLAB_LOG_LEVEL | log.level | 日志级别 | info | debug, info, warn, error
CRAWLAB_LOG_PATH | log.path | 任务日志所在目录 | `/var/logs/crawlab` | 任意
CRAWLAB_LOG_ISDELETEPERIODICALLY | log.isDeletePeriodically | 是否定期删除日志 | Y | Y, N
CRAWLAB_LOG_DELETEFREQUENCY | log.deleteFrequency | 定期删除日志频率 | @hourly | 任意
CRAWLAB_SERVER_HOST | server.host | 服务器绑定IP | 0.0.0.0 | 任意
CRAWLAB_SERVER_PORT | server.port | 服务器绑定端口 | 8000 | 任意
CRAWLAB_SERVER_MASTER | server.master | 该节点是否为主节点 | N | Y, N
CRAWLAB_SERVER_SECRET | server.secret | 服务器密钥 | crawlab | 任意
CRAWLAB_SERVER_REGISTER_TYPE | server.register.type | 节点注册类别 | mac | mac, ip
CRAWLAB_SERVER_REGISTER_IP | server.register.ip | 节点注册IP | 空 | 任意
CRAWLAB_SPIDER_PATH | spider.path | 爬虫所在目录 | /app/spiders | 任意
CRAWLAB_TASK_WORKERS | task.workers | 任务并行执行个数 | 4 | 任意数字
CRAWLAB_RPC_WORKERS | rpc.workers | RPC 协程个数 | 16 | 任意数字
CRAWLAB_OTHER_TMPPATH | other.tmppath | 临时文件目录 | /tmp | 任意
CRAWLAB_VERSION | version |版本号 | 对应版本号 | 任意
CRAWLAB_SETTING_ALLOWREGISTER |setting.allowRegister | 是否允许注册 | N | Y, N
CRAWLAB_NOTIFICATION_MAIL_SERVER |notification.mail.server | SMPT 服务器地址 |空|任意
CRAWLAB_NOTIFICATION_MAIL_PORT |notification.mail.port | SMPT 服务器端口 |空|任意
CRAWLAB_NOTIFICATION_MAIL_SENDEREMAIL |notification.mail.senderEmail | 发送者邮箱 |空|任意
CRAWLAB_NOTIFICATION_MAIL_SENDEREIDENTITY |notification.mail.senderIdentity | 发送者身份 |空|任意
CRAWLAB_NOTIFICATION_MAIL_SMTP_USER |notification.mail.smtp | SMTP 用户名 |空|任意
CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD |notification.mail.password | SMTP 密码 |空|任意
CRAWLAB_SERVER_LANG_NODE | server.lang.node | 预安装 Node.js 语言环境 | 空 | Y, N
