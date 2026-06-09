---
sidebar_position: 8
title: Database
---

# Database

:::info
Database support is only available in **Crawlab Pro**.
:::

By default, Crawlab will save the collected data to the default database (MongoDB). Yet Crawlab aims at being a
multipurpose web crawler management platform, which means it can be used to manage crawlers for various purposes.
Therefore, it is designed to be flexible and can be easily integrated with mainstream databases, so that you can store
your scraped data in the database of your choice.

The Database module in Crawlab is similar to some database management tools like
[DBeaver](https://github.com/dbeaver/dbeaver) or [DataGrip](https://www.jetbrains.com/datagrip/).

## Supported Databases

Crawlab currently supports the following databases:

- [MongoDB](https://www.mongodb.com/)
- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)
- [Elasticsearch](https://www.elastic.co/elasticsearch/)

We are working on adding more database support, including but not limited to:

- [ClickHouse](https://clickhouse.com/)
- [Cassandra](https://cassandra.apache.org/)
- [Hive](https://hive.apache.org/)
- [Snowflake](https://www.snowflake.com/)
- [Redis](https://redis.io/)
- [Kafka](https://kafka.apache.org/)

## Database Management

Crawlab provides a centralized database management interface, where you can manage your databases and data collections.

### Create Database

You can create a new database by clicking the `New Database` button in the database management interface and entering
the database connection information.

![Create Database](/img/guides/database/create-database.png)

### Update Database Schema

You can alter the database schema like adding, updating or deleting tables in the `Databases` tab in the `Database`
detail page.

![Update Database Schema](/img/guides/database/update-database-schema.png)

### Execute Query

You can also execute database queries in the `Console` tab in the `Database` detail page. This is useful when you want
to test your queries before running them in your code.

![Execute Query](/img/guides/database/execute-query.png)

## ORM Mode

Starting from v0.7.0, Crawlab provides native **ORM (Object-Relational Mapping)** support for SQL databases,
powered by [GORM](https://gorm.io/). When ORM mode is enabled, Crawlab manages your database schema and performs
type-safe operations automatically, including automatic schema detection and table management — so you no longer
need to hand-write `CREATE TABLE` statements before storing scraped data.

### Supported Databases

ORM mode is available for the following data sources:

- **MySQL**
- **PostgreSQL**
- **SQL Server**

Other data sources (e.g. MongoDB, Elasticsearch) continue to use Crawlab's native storage handling and do not expose
the ORM toggle.

### Enabling ORM

For a compatible database, an **ORM** toggle is shown in the database settings. Switching it on enables ORM-managed
schema and writes for that database; switching it off reverts to the legacy storage service. The setting is
**per-database**, so you can enable ORM selectively.

When a database is created, Crawlab initializes a sensible default — ORM is enabled by default for supported data
sources and disabled for the rest. You can change it at any time; the toggle is non-destructive and does not drop
existing data.

:::info
ORM mode only affects how Crawlab manages schema and writes for the selected database. Existing data is preserved
when toggling, so you can migrate incrementally.
:::

### ORM API

ORM state can also be managed programmatically via the REST API:

| Method & Path | Description |
|---|---|
| `GET /databases/{id}/orm/status` | Whether ORM is `enabled` and `supported` for the database |
| `PUT /databases/{id}/orm/status` | Enable or disable ORM (`{"enabled": true}`) |
| `GET /databases/{id}/orm/compatibility` | Compatibility details, including reasons and the list of ORM-supported data sources |
| `POST /databases/{id}/orm/initialize` | Apply the default ORM setting for the database's data source |

See the [ORM Status API](/docs/api-ref/get-database-orm-status) and related endpoints in the API Reference for full
request and response schemas.

## Connect to Database

In the [Data Integration](../data-integration/index.mdx) section, you have already learnt how to use Crawlab SDK to
store data to Crawlab so that you can preview scraped data.

The Database module is designed to be a centralized database management interface, where you can easily manage your
databases
and tables. In addition, you can select the database you would like to store your scraped data to in the `Spider` detail
page.

Follow the steps below to connect to a database.

1. Create a new database in the `Databases` list page.
2. Navigate to the `Spider` detail page.
3. Navigate to the `Data` tab.
4. Choose the database and table for storing scraped data.

![Connect to Database](/img/guides/database/connect-to-database.png)
