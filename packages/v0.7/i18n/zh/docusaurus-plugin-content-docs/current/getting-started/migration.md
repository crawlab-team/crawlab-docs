---
sidebar_position: 4
title: 迁移到 v0.7
---

# 迁移指南：v0.6.x 到 v0.7.0

Crawlab v0.7.0 对**集群通信**与**文件同步**引入了破坏性变更，两者现在均使用 gRPC。**需要进行整个集群的升级**——你不能在同一集群中混用 v0.6.x 与 v0.7.0 节点。

本指南将引导你完成从现有 v0.6.x 部署的升级。

## 升级前检查清单

- 备份你的 MongoDB 数据库。
- 记录当前配置（环境变量、`docker-compose.yml` 文件）。
- 确保没有关键任务正在运行。
- 预留一个维护窗口（典型部署约 15–30 分钟）。

## 破坏性变更

### gRPC 通信协议

**变更内容**：节点间通信现在使用 gRPC，而非旧版协议。

**影响**：v0.6.x 工作节点**无法**与 v0.7.0 主节点通信，反之亦然。

**所需操作**：将**所有**节点（主节点与工作节点）一起升级。确保主节点的 gRPC 端口（默认 `9666`）能被每个工作节点访问。

### 文件同步

**变更内容**：主节点与工作节点之间的爬虫文件同步现在使用 gRPC 流式传输，而非旧版基于 HTTP 的同步。

**影响**：升级后首次启动时，爬虫文件会自动重新同步。

**所需操作**：无——迁移是自动的。请为首次启动的文件重新同步预留额外时间。

## 升级流程

### Docker Compose 部署

1. **停止所有服务**：

   ```bash
   docker compose down
   ```

2. **备份 MongoDB 数据**：

   ```bash
   # 如果使用 Docker 卷
   docker run --rm -v crawlab_mongo_data:/data -v $(pwd)/backup:/backup \
     alpine tar czf /backup/mongo-backup.tar.gz /data

   # 或使用 mongodump
   mongodump --uri="mongodb://localhost:27017/crawlab" --out=./backup
   ```

3. **在每个节点上将 Docker 镜像标签更新为** `0.7.0`：

   ```yaml
   # docker-compose.yml
   services:
     master:
       image: crawlabteam/crawlab:0.7.0  # 原为 :0.6.x
       # ... 其余配置
       ports:
         - "8080:8080"  # API
         - "9666:9666"  # gRPC（工作节点连接所必需）
   ```

4. **启动服务**：

   ```bash
   docker compose up -d
   ```

5. **验证**：
   - 查看主节点日志：`docker compose logs master`
   - 查看工作节点日志：`docker compose logs worker`
   - 在 UI 的 **节点** 页面确认工作节点显示为 **在线**。
   - 验证爬虫文件已同步（首次启动可能需要几分钟）。

:::warning
工作节点通过 **8080**（API）和 **9666**（gRPC）端口连接主节点。请确保两者均已开放，且未被主节点上的防火墙阻挡。
:::

### 二进制 / 源码部署

1. 停止所有 Crawlab 进程（先停工作节点，再停主节点）。
2. 备份你的 MongoDB 数据库。
3. 将二进制文件替换为 v0.7.0 版本。
4. 先启动主节点，再启动工作节点。
5. 在 UI 中验证节点连通性。

## 升级后验证

1. **节点连通性**：所有工作节点应在节点页面显示为 **在线**。
2. **文件同步**：工作节点上应能看到爬虫文件（查看 **爬虫 → 文件**）。
3. **任务执行**：运行一个测试任务以确认端到端功能正常。
4. **数据库连接**：如果使用 SQL 数据库，在数据库页面验证连通性。

## 升级后可用的新特性

升级后，你可以使用：

- **数据库 ORM**——通过[数据库设置](../guides/database/index.md#orm-mode)中的开关，为 MySQL/PostgreSQL/SQL Server 数据库启用 ORM 模式。
- **Monaco 编辑器**——[全新代码编辑器](../guides/code-editor/index.md)在所有文件编辑中默认启用。
- **ARM64 支持**——如果部署在 ARM64 硬件（Apple Silicon、AWS Graviton）上，使用相同的镜像标签即可；镜像为多架构。

## 回滚流程

如果升级后遇到问题：

1. 停止所有 v0.7.0 服务。
2. 恢复 MongoDB 备份：

   ```bash
   mongorestore --uri="mongodb://localhost:27017/crawlab" --drop ./backup/crawlab
   ```

3. 将 Docker 镜像标签还原为之前的 v0.6.x 版本。
4. 启动服务。

:::note
请在升级后 24 小时内回滚。恢复备份时，在 v0.7.0 中创建的任何数据（新任务、爬虫等）都将丢失。
:::

## 故障排查

### 升级后工作节点无法连接

- 确保主节点与工作节点都运行 v0.7.0。
- 检查节点间 gRPC 端口（默认 `9666`）是否可达。
- 查看主节点日志中的连接错误。

### 爬虫文件无法同步

- 升级后首次同步请预留几分钟。
- 查看工作节点日志中的文件同步错误。
- 检查工作节点的磁盘空间。

### 任务卡在 "pending"

- 确认工作节点已连接且在线。
- 如问题持续，重启工作节点。
- 查看任务日志中的具体错误。

## 有疑问或问题？

- GitHub Issues：[github.com/crawlab-team/crawlab/issues](https://github.com/crawlab-team/crawlab/issues)
