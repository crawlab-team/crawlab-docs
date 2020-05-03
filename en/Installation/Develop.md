## Development model

The development mode allows developers to preview the output of the source code quickly, and the modified program can be seen by changing the code immediately. The development mode is for developers who want to make secondary development based on the source code of Crawlab or want to contribute to Crawlab. Compared with [direct deployment](./Direct.md), the development mode is more reflected in its debuggability and flexibility, but it is not as stable as direct deployment.

⚠️**Note**: It is strongly recommended not to use development mode in production environment, because the program running in development mode is very unstable and not suitable for running in production environment.

**Recommended Users**: 

- Developers who know how to install and use 'Node', 'Golang', 'MongoDB', 'Redis'
- Developers who want to do secondary development in Crawlab
- Developers who want to contribute code to Crawlab
 
**Recommended Configuration**:

- Go: 1.12+
- Node: 8.x+
- MongoDB: 3.6+
- Redis: 5.x+

### 1. Pull the code

The first is to pull the code on GitHub to local.

```bash
git clone https://github.com/crawlab-team/crawlab
```

### 2. Install node environment

Please refer to section 2 of [direct deployment](./Direct.md).

### 3. Installing the front and back ends

Please refer to section 3 of [direct deployment](./Direct.md).

### 4. MongoDB & Redis

Please refer to section 6 of [direct deployment](./Direct.md).

### 5. Configuration

Please refer to section 7 of [direct deployment](./Direct.md).

### 6. Start the front end

In the directory './frontend', run the following command to start the front end.

```bash
npm run dev
```

At this time, you can enter "http://localhost:8080" in the browser to see the interface, but you can't connect to the back end yet.

In development mode, any front end code you modify will be reflected on the interface directly, which means you do not need to recompile and start the front end.

### 7. Start the back end

In the directory './backend', run the following command to start the front end.

```bash
go run main.go
```

⚠️**Note**: For any back end changes, you need to restart the above command to see the changes.

### 8. Develop Crawlab

Any developer who interested in crawler management platform is welcome to contribute or develop Crawlab.

After completing the above steps, I believe you can run Crawlab and see the page successfully. In order to make it easier to develop Crawlab, you need to know more about it, it is strongly recommended that you read the [architecture chapter](../Architecture/README.md) and [contribution chapter](../Contribution/README.md) first.

### 