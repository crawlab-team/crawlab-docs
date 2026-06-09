---
sidebar_position: 4
title: Migration to v0.7
---

# Migration Guide: v0.6.x to v0.7.0

Crawlab v0.7.0 introduces breaking changes to **cluster communication** and **file synchronization**, both of which now
use gRPC. A **cluster-wide upgrade is required** — you cannot mix v0.6.x and v0.7.0 nodes in the same cluster.

This guide walks you through upgrading an existing v0.6.x deployment.

## Pre-Upgrade Checklist

- Back up your MongoDB database.
- Record your current configuration (environment variables, `docker-compose.yml` files).
- Ensure no critical tasks are running.
- Plan for a maintenance window (15–30 minutes for typical deployments).

## Breaking Changes

### gRPC Communication Protocol

**What changed**: Node-to-node communication now uses gRPC instead of the legacy protocol.

**Impact**: v0.6.x worker nodes **cannot** communicate with a v0.7.0 master node, and vice versa.

**Action required**: Upgrade **all** nodes (master and workers) together. Make sure the master node's gRPC port
(default `9666`) is reachable by every worker node.

### File Synchronization

**What changed**: File synchronization between master and worker nodes now uses gRPC streaming instead of HTTP.

**Impact**: Spider files are re-synced automatically on first startup after the upgrade.

**Action required**: None — migration is automatic. Allow extra time on first startup for file re-sync.

## Upgrade Procedure

### Docker Compose Deployment

1. **Stop all services**:

   ```bash
   docker compose down
   ```

2. **Back up MongoDB data**:

   ```bash
   # If using a Docker volume
   docker run --rm -v crawlab_mongo_data:/data -v $(pwd)/backup:/backup \
     alpine tar czf /backup/mongo-backup.tar.gz /data

   # Or with mongodump
   mongodump --uri="mongodb://localhost:27017/crawlab" --out=./backup
   ```

3. **Update the Docker image tags** to `0.7.0` on every node:

   ```yaml
   # docker-compose.yml
   services:
     master:
       image: crawlabteam/crawlab:0.7.0  # was :0.6.x
       # ... rest of config
       ports:
         - "8080:8080"  # API
         - "9666:9666"  # gRPC (required for worker connectivity)
   ```

4. **Start services**:

   ```bash
   docker compose up -d
   ```

5. **Verify**:
   - Check master logs: `docker compose logs master`
   - Check worker logs: `docker compose logs worker`
   - Confirm workers appear as **Online** under **Nodes** in the UI.
   - Verify spider files are synced (may take a few minutes on first startup).

:::warning
Worker nodes connect to the master through ports **8080** (API) and **9666** (gRPC). Make sure both are open and not
blocked by a firewall on the master node.
:::

### Binary / Source Deployment

1. Stop all Crawlab processes (workers first, then master).
2. Back up your MongoDB database.
3. Replace binaries with the v0.7.0 versions.
4. Start the master node first, then the workers.
5. Verify node connectivity in the UI.

## Post-Upgrade Verification

1. **Node connectivity**: all worker nodes should appear as **Online** on the Nodes page.
2. **File sync**: spider files should be visible on worker nodes (check **Spiders → Files**).
3. **Task execution**: run a test task to confirm end-to-end functionality.
4. **Database connections**: if using SQL databases, verify connectivity on the Databases page.

## New Features Available After Upgrade

After upgrading, you can take advantage of:

- **Database ORM** — enable ORM mode for MySQL/PostgreSQL/SQL Server databases via the toggle in
  [database settings](../guides/database/index.md#orm-mode).
- **Monaco editor** — the [new code editor](../guides/code-editor/index.md) is active by default for all file editing.
- **ARM64 support** — if deploying on ARM64 hardware (Apple Silicon, AWS Graviton), use the same image tag; the images
  are multi-architecture.

## Rollback Procedure

If you encounter issues after upgrading:

1. Stop all v0.7.0 services.
2. Restore the MongoDB backup:

   ```bash
   mongorestore --uri="mongodb://localhost:27017/crawlab" --drop ./backup/crawlab
   ```

3. Revert the Docker image tags to your previous v0.6.x version.
4. Start services.

:::note
Roll back within 24 hours of upgrading. Any data created in v0.7.0 (new tasks, spiders, etc.) is lost when restoring
the backup.
:::

## Troubleshooting

### Workers not connecting after upgrade

- Ensure both master and workers are running v0.7.0.
- Check that the gRPC port (default `9666`) is reachable between nodes.
- Review master logs for connection errors.

### Spider files not syncing

- Allow up to a few minutes for the initial sync after upgrade.
- Check worker logs for file sync errors.
- Verify disk space on worker nodes.

### Tasks stuck in "pending"

- Verify workers are connected and online.
- Restart worker nodes if the issue persists.
- Check task logs for specific errors.

## Questions or Issues?

- GitHub Issues: [github.com/crawlab-team/crawlab/issues](https://github.com/crawlab-team/crawlab/issues)
