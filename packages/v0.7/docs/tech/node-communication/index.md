---
sidebar_position: 2
title: Node Communication
---
# Node Communication

## Introduction

This document details the communication mechanisms used within Crawlab's distributed architecture. Understanding these
protocols is essential for developers who want to extend Crawlab, troubleshoot communication issues, or implement custom
integrations.

## Master-Worker Communication Overview

Crawlab employs a bidirectional communication model between the master node and worker nodes. This communication is
critical for:

- Task assignment and coordination
- Worker health monitoring and management
- System state synchronization
- Results collection and aggregation

```mermaid
sequenceDiagram
    participant Master as Master Node
    participant Worker as Worker Node
    Master ->> Worker: Task Assignment
    Worker -->> Master: Task Acceptance

    loop Execution
        Worker -->> Master: Status Updates
        Master ->> Worker: Control Commands (optional)
    end

    Worker -->> Master: Execution Results
    Master -->> Worker: Acknowledgment
```

## gRPC Implementation

### Why gRPC?

Crawlab uses gRPC as the primary communication protocol between master and worker nodes for several reasons:

- **Performance**: Binary serialization provides better performance than JSON/REST
- **Strong typing**: Protocol Buffers enforce message structure
- **Bidirectional streaming**: Enables real-time updates and command streaming
- **Language agnosticism**: Supports multiple programming languages

### Service Definitions

Crawlab's core services are defined using Protocol Buffers (.proto files):

#### Task gRPC service:

```protobuf
service TaskService {
  rpc Subscribe(TaskServiceSubscribeRequest) returns (stream TaskServiceSubscribeResponse){};
  rpc Connect(stream TaskServiceConnectRequest) returns (Response){};
  rpc FetchTask(TaskServiceFetchTaskRequest) returns (TaskServiceFetchTaskResponse){};
  rpc SendNotification(TaskServiceSendNotificationRequest) returns (Response){};
}
```

#### Node gRPC service:

```protobuf
service NodeService {
  rpc Register(NodeServiceRegisterRequest) returns (Response){};
  rpc SendHeartbeat(NodeServiceSendHeartbeatRequest) returns (Response){};
  rpc Subscribe(NodeServiceSubscribeRequest) returns (stream NodeServiceSubscribeResponse){};
}
```

### File Synchronization

In v0.7, spider file synchronization between the master and worker nodes is performed over **gRPC streaming**, replacing
the legacy HTTP-based file sync used in v0.6.x. Spider file content is streamed over the gRPC connection, so file
distribution shares the same secure, multiplexed channel as task and node coordination.

- **gRPC streaming transfer**: Spider files are streamed to worker nodes rather than fetched over a separate HTTP
  endpoint
- **Automatic re-sync**: On the first startup after upgrading to v0.7, files are re-synced automatically, and they
  continue to stay in sync as spiders change
- **No separate HTTP file server**: Because sync now rides on the gRPC channel, there is no longer a dedicated HTTP file
  sync path to expose or secure separately

:::info
Because file synchronization now depends on gRPC, the master node's gRPC port (default `9666`) must be reachable by all
worker nodes. This is part of the v0.7 breaking change away from the v0.6.x protocol.
:::

### Connection Management

Worker nodes establish persistent gRPC connections to the master node with the following characteristics:

- **Automatic reconnection**: Workers automatically reconnect when connections fail, using **exponential backoff**
- **Circuit breakers**: Repeated failures trip circuit breakers to prevent cascading failures
- **Keepalive**: Connections use gRPC keepalive to detect and recover from dead connections
- **TLS security**: Connections are secured with TLS (when configured)
- **Connection metadata**: Each connection includes authentication tokens and node identification

## Stream Management

Crawlab extensively uses gRPC streaming for real-time updates:

### Unidirectional Streaming

Used for event notifications like task status updates:

```mermaid
sequenceDiagram
    participant Worker as Worker Node
    participant Master as Master Node
    Worker ->> Master: Subscribe to Task Events

    loop Stream Active
        Master -->> Worker: Task Started Event
        Master -->> Worker: Task Progress Event
        Master -->> Worker: Task Completed Event
    end
```

### Bidirectional Streaming

Used for scenarios requiring two-way continuous communication:

```mermaid
sequenceDiagram
    participant Master as Master Node
    participant Worker as Worker Node
    Worker ->> Master: Open Bidirectional Stream

    loop Stream Active
        Worker -->> Master: Status Update
        Master -->> Worker: Configuration Change
        Worker -->> Master: Log Message
        Master -->> Worker: Cancel Command
    end
```

## Error Handling and Recovery

### Communication Failures

The system implements several error handling mechanisms:

1. **Automatic Retry**: Failed communication attempts are automatically retried with exponential backoff
2. **Circuit Breaking**: Repeated failures trigger circuit breakers to prevent cascading failures
3. **State Recovery**: After reconnection, state is synchronized to recover from communication gaps

## Conclusion

Crawlab's communication protocols provide a robust foundation for distributed crawler management. The gRPC
implementation delivers performance and reliability advantages, while carefully designed message patterns ensure system
resilience and scalability.

Developers extending Crawlab should follow these established patterns to maintain system integrity and performance
characteristics.
