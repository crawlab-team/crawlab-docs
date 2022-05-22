The environment configuration is implemented by the Go third-party library viper. When the program starts, viper will read the 'yaml' configuration file and map the environment variables to the variables in the configuration file.

The following is the 'yaml' configuration file, where the variables can be overwritten by the environment variables prefixed with 'CRAWLAB_'.

```yaml
api:
  address: "http://localhost:8000"  # API address
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
  isDeletePeriodically: "N"  # Delete log regularly (default is no)
  deleteFrequency: "@hourly"  # Log deletion frequency
server:
  host: 0.0.0.0  # Back end listening address
  port: 8000  # Back end listening port
  master: "Y"  # Master node or not
  secret: "crawlab"  # JWT secret
  register:
    # mac address or IP address. If it is IP address, you need to specify IP manually
    type: "mac"
    ip: ""
  lang: # Install language environment, y is installation, n is not installation
    python: "Y"
    node: "N"
    java: "N"
    dotnet: "N"
spider:
  path: "/app/spiders"  # spider path
task:
  workers: 4  # Number of actuators running tasks at the same time
other:
  tmppath: "/tmp"  # Temporary file directory
version: 0.4.7  # Version
setting:
  allowRegister: "N"  # Allow registration or not
  enableTutorial: "N"  # Discard tutorial or not
  runOnMaster: "Y"  # Whether to run the task on the master node
  demoSpiders: "N"  # Whether to load demo spider
  checkScrapy: "Y"  # Whether to check Scrapy automatically
notification: # Message notification 
  mail: # Email notification
    server: '' # SMPT server address
    port: ''  # SMTP server port
    senderEmail: ''  # Sender email
    senderIdentity: ''  # Sender identity
    smtp:  # SMTP
      user: ''  # SMTP user
      password: ''  # SMTP password
```

The list of environment variables is as follows.

environment variable | yaml variable path | description | default | Possible values
--- | --- | --- | --- | ---
CRAWLAB_API_ADDRESS | api.path | front end API address | http://localhost:8000 | any value
CRAWLAB_MONGO_HOST | mongo.host | MongoDB Host address | localhost | any value
CRAWLAB_MONGO_PORT | mongo.port | MongoDB port | 27017 | any value
CRAWLAB_MONGO_DB | mongo.db | MongoDB database name | crawlab_test | any value
CRAWLAB_MONGO_USERNAME | mongo.username | MongoDB username | null | any value
CRAWLAB_MONGO_PASSWORD | mongo.password | MongoDB password | null | any value
CRAWLAB_MONGO_AUTHSOURCE | mongo.authSource | MongoDB authSource | null | any value
CRAWLAB_REDIS_ADDRESS  | redis.address  | Redis address | localhost | any value
CRAWLAB_REDIS_PASSWORD | redis.password | Redis password | null | any value
CRAWLAB_REDIS_DATABASE | redis.database | Redis db | 1 | numerical value
CRAWLAB_REDIS_PORT | redis.port | Redis port | null | numerical value
CRAWLAB_LOG_LEVEL | log.level | log level | info | debug, info, warn, error
CRAWLAB_LOG_PATH | log.path | directory of task log | `/var/logs/crawlab` | any value
CRAWLAB_LOG_ISDELETEPERIODICALLY | log.isDeletePeriodically | delete log regularly | Y | Y, N
CRAWLAB_LOG_DELETEFREQUENCY | log.deleteFrequency | delete log frequency regularly | @hourly | any value
CRAWLAB_SERVER_HOST | server.host | server binding IP | 0.0.0.0 | any value
CRAWLAB_SERVER_PORT | server.port | server binding port | 8000 | any value
CRAWLAB_SERVER_MASTER | server.master | whether this node is the master node | N | Y, N
CRAWLAB_SERVER_SECRET | server.secret | server key | crawlab | any value
CRAWLAB_SERVER_REGISTER_TYPE | server.register.type | node registration category | mac | mac, ip, hostname
CRAWLAB_SERVER_REGISTER_IP | server.register.ip | node registration IP | null | any value
CRAWLAB_SPIDER_PATH | spider.path | spider directory | /app/spiders | any value
CRAWLAB_TASK_WORKERS | task.workers | number of tasks executed in parallel | 4 | any numerical value
CRAWLAB_RPC_WORKERS | rpc.workers | RPC number of processes | 16 | any numerical value
CRAWLAB_OTHER_TMPPATH | other.tmppath | temporary file directory | /tmp | any value
CRAWLAB_VERSION | version |version No | corresponding version No | any value
CRAWLAB_SETTING_ALLOWREGISTER |setting.allowRegister | allow registration or not | N | Y, N
CRAWLAB_SETTING_ENABLETUTORIAL |setting.enableTutorial | enable tutorial or not | N | Y, N
CRAWLAB_SETTING_RUNONMASTER |setting.runOnMaster | whether to run the task in the master node | Y | Y, N
CRAWLAB_SETTING_DEMOSPIDERS |setting.demoSpiders | use demo spider or not | N | Y, N
CRAWLAB_SETTING_CHECKSCRAPY |setting.checkScrapy | whether to check Scrapy automatically | Y | Y, N
CRAWLAB_NOTIFICATION_MAIL_SERVER |notification.mail.server | SMPT server address |null|any value
CRAWLAB_NOTIFICATION_MAIL_PORT |notification.mail.port | SMPT server port |null|any value
CRAWLAB_NOTIFICATION_MAIL_SENDEREMAIL |notification.mail.senderEmail | sender email |null|any value
CRAWLAB_NOTIFICATION_MAIL_SENDEREIDENTITY |notification.mail.senderIdentity | sender identity |null|any value
CRAWLAB_NOTIFICATION_MAIL_SMTP_USER |notification.mail.smtp | SMTP username |null|any value
CRAWLAB_NOTIFICATION_MAIL_SMTP_PASSWORD |notification.mail.password | SMTP  password |null|any value
CRAWLAB_SERVER_LANG_NODE | server.lang.node | Preinstalling Node.js language environment | null | Y, N
CRAWLAB_SERVER_LANG_JAVA | server.lang.java | Preinstalling Java language environment | null | Y, N
CRAWLAB_SERVER_LANG_DOTNET | server.lang.dotnet | Preinstalling .Net Core language environment | null | Y, N
CRAWLAB_SERVER_LANG_PHP | server.lang.php | Preinstalling PHP language environment | null | Y, N
