## Installation dependency

Installation dependency is used frequently[Crawlab](https://github.com/crawlab-team/crawlab). The current temporary solutions are all through hacking. Now, our latest version has a more mature solution, which is to operate the installation dependency on the interface.

### How to use installation dependency

Next, we will show you how to use installation dependency on the interface of [Crawlab](https://github.com/crawlab-team/crawlab).

First, we need to navigate to the node list page and click the blue view button of a node (as shown in the figure below) to enter the node details page.

![](http://static-docs.crawlab.cn/node-list.png)

After entering the node details page, click the 'Install' tab to enter the dependent installation page. If you search the related dependency Library in the search bar, you will get a similar dependency list. For example, you can get the dependency of pip in Python. Click 'Install' to start 'pip install <package_name>', and wait for a moment, you will receive the prompt message of successful (or failed) installation. If the dependency already exists on this node, the 'uninstall' button will be displayed. Click to start uninstalling the dependency, which is equivalent to 'pip uninstall <package_name>',  of course, other languages correspond to their corresponding package management operations, such as Node.js corresponding to npm.

![](http://static-docs.crawlab.cn/node-detail-installation.png)

Click 'View installed' to see the installed dependencies and their corresponding versions on this node, as shown in the following figure. Similarly, click 'uninstall' to uninstall the dependency.

![](http://static-docs.crawlab.cn/node-detail-installation-existing.png)

Because Python is pre installed on the Docker image (I'll show you how to pre install Node.js on the Docker later). Click 'Node.js' label, you will see the prompt 'Node.js is not installed yet. Do you plan to install it? '. Click the 'Install' button, the background will start to install NVM and Node.js version 8.12. Then you'll see the same interface as Python.

![](http://static-docs.crawlab.cn/node-detail-installation-lang.png)

### Pre installed programming language in Docker

For the convenience of spider developers to use Node.js application in Docker, we developed the configuration and pre installation Node.js function in Docker. You only need to set the environment variable 'CRAWLAB_SERVER_LANG_NODE' is 'Y', and then start the image. For example, 'docker-compose.yml'.

```yaml
version: '3.3'
services:
  master: 
    image: tikazyq/crawlab:latest
    container_name: master
    environment:
      CRAWLAB_SERVER_MASTER: "Y"  # whether to be master node
      CRAWLAB_MONGO_HOST: "mongo"  # MongoDB host address
      CRAWLAB_REDIS_ADDRESS: "redis"  # Redis host address
      CRAWLAB_SERVER_LANG_NODE: "Y"  # pre installation Node.js language environment
    ports:    
      - "8080:8080"
    depends_on:
      - mongo
      - redis
  worker:
    image: tikazyq/crawlab:latest
    container_name: worker
    environment:
      CRAWLAB_SERVER_MASTER: "N"
      CRAWLAB_MONGO_HOST: "mongo"
      CRAWLAB_REDIS_ADDRESS: "redis"
      CRAWLAB_SERVER_LANG_NODE: "Y"  # pre installation Node.js language environment
    depends_on:
      - mongo
      - redis
  mongo:
    image: mongo:latest
    restart: always
    # volumes:
    #   - "/opt/crawlab/mongo/data/db:/data/db"  # make data persistent 
    # ports:
    #   - "27017:27017"  # expose port to host machine
  redis:
    image: redis:latest
    restart: always
    # volumes:
    #   - "/opt/crawlab/redis/data:/data"  # make data persistent
    # ports:
    #   - "6379:6379"  # expose port to host machine
```

### Shortcoming

I know developers will make complaints about why not upload batch 'requirements.txt' or 'package.json', why does not it support environment persistence and need to be reinstalled every time? Why does it not support Java? I know these are very practical functions, but [Crawlab](https://github.com/crawlab-team/crawlab) our development always follows the principle of agile development and lean polishing, does not over develop a function, and gives priority to the guarantee of feasibility, availability, robustness and stability. Therefore, we will improve this function gradually and make it more practical after verifying your use.
