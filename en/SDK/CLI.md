## CLI command line tool

CLI command line tool is a very practical CLI program, which is part of the [crawlab SDK](https://github.com/crawlab-team/crawlab-sdk) project. CLI command line tool is designed to help Crawlab users more easily upload crawlers, run tasks, view data, etc.

⚠️Note: CLI command line tool is still in rapid iteration, please keep an eye on [GitHub repository](https://github.com/crawlab-team/crawlab-sdk) or the document to update the information.

### Installing CLI command line tool

Installing the CLI command line tool is very simple, just execute the following command.

⚠️Note: you need to make sure that you are using Python version 3.6 or above, otherwise you may get errors in use.

```bash
pip install crawlab-sdk
```

### Log in to get Token

Before using the CLI command line tool, we must configure the login information to ensure that the 'token' requested from the server is saved locally as the verification token for subsequent requests.

```bash
# Log in and enter parameters
crawlab login -u <username> -a <api_address>

# example
crawlab login -u admin -a http://localhost:8080/api
```

Then enter the login password.

If the login is successful, the CLI will save the user name, password, API address and the acquired token locally for later use.

⚠️Note: the '<api_address>' here is the address of the back end API. If you are using the docker image, you only need to add a suffix '/api' after the web interface URL. For example, if your web access address is 'http://localhost:8080', your '<api_url>' is 'http://localhost:8080/api'.

### Upload crawler

It is a troublesome thing to upload a crawler through the web interface in Crawlab. You need to package the crawler file into a zip file and then upload it to Crawlab. With the CLI command line tool, you can upload the crawler file with one line of command.

The operation command is as follows.

```bash
# 简单操作
cd /path/to/spider
crawlab upload
```

For the above operation, first navigate to the crawler directory, and then upload the current folder to Crawlab by the command 'crawlab upload'. The crawler name defaults to the directory name.

⚠️Note: if you do not pass parameters, CLI will package the current entire directory into a zip file and upload it, which is not very secure, so it is not recommended.

Of course, if you want to do more complex upload crawler operations, you can use the following command.

```bash
# Upload the specified directory with crawler name, display name, result set and other information
crawlab upload \
    -d /path/to/spider \ # crawler name
    -n <spider_name> \ # crawler name
    -N <display_name> \ # display name
    -m <execute_command> \ # execute command
    -c <result_collection> # result set
```

If you want to upload a crawler for a certain crawler ID, you only need to specify the '-i' command to pass in the crawler ID. CLI will upload the crawler and overwrite its crawler file.

For specific help on crawler upload CLI, please check 'crawlab upload --help'.

### View node list

```bash
crawlab nodes
```

### View crawler list

```bash
crawlab spiders
```

### View task list

```bash
crawlab tasks
```

### View periodical task list

```bash
crawlab schedules
```

### Other functions

Other functions such as 'run task', 'add periodical task' and 'view task log' have not been implemented yet. If you need these functions, please add the author's wechat 'tikazyq1' and then add the communication group to follow up the development.