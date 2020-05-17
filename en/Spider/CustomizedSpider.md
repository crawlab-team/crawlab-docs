## Custom crawler

Custom crawler is a kind of crawler that can be added in any language and any framework, which is highly customized. When the user adds a custom crawler, Crawlab can integrate it into the crawler management system.

There are two ways to upload crawler projects:

1. By web interface(flexible)
2. By CLI command line tools (simple, recommended)

Here is a detailed introduction.

### By web interface

The detailed steps of uploading crawler items by the web interface are as follows.

##### 1. Package as zip file

Before uploading by the web interface, you need to package the crawler project file into 'zip' format.

⚠️Note: you need to package in the root directory of the crawler project, which means you need to go to the first level of the project and package all files and folders into zip files.

##### 2. Enter crawler data

First, you need to navigate to the crawler list page.

Then, click 'add crawler' and select 'custom crawler' (default is custom crawler). The following interface will appear.

![](http://static-docs.crawlab.cn/spider-create-customized.png)

Enter the appropriate parameters: 'crawler name', 'display name', 'execute command' and 'result'.

They are defined as follows:

- **Crawler name**: unique identification name of a crawler. A file directory of this name will be created in the root directory of the crawler. Therefore, it is recommended to use lowercase English without spaces and special symbols, which can contain underscores;
- **Display name**: the name of the crawler displayed in the front end, which can be any string;
- **Execute command**: the command that the crawler will execute in the 'shell', and the final executed command will be the combination of 'execute command' and 'parameter';
- **Results** 'result set' means that the crawler grabs the collection of the results stored in the MongoDB database, similar to the table in the SQL database.

##### 3. Create a crawler

Next, you have two choices to create a crawler:

1. **Create empty project**: create an empty crawler, that is, directly click the 'add' button, which will not upload any crawler files. You can upload the zip file after the creation (described later), or create the editing file online (please refer to the section of [online editing file](./FileEdit.md)).
2. **Upload zip file directly**: click the 'upload' button to select the zip file just packed. If the crawler name already exists, the previous project file will be overwritten; If the crawler name does not exist, it will be regarded as a new crawler, and all crawler files will be created and uploaded. After uploading the crawler file, you can also create, edit, delete and rename the crawler file through the [file management](./FileEdit.md).
The crawler is then created/updated.

### By CLI command line tool

For developers who are more accustomed to operating on the command line, perhaps CLI tool is a better choice. Moreover, this method does not require the user to package the project into a zip file, which is much more convenient for uploading the crawler.

[CLI command line tool](./CLI.md) is an experimental function that allows developers to easily upload files. For details, please refer to the [cli command line tool](./CLI.md) chapter.

Next, we will show you how to upload a custom crawler through the CLI command line tool.

⚠️Note: please make sure that you have installed CLI command line tool and can obtain 'token' before using. If not, please refer to the [cli command-line tools](./CLI.md) section.

##### Execute command to upload crawler

Executing the following command will package the files automatically in the crawler directory into Zip files and upload them to the Crawlab server, thus eliminating the manual packaging step.

```bash
# Navigate to the crawler project directory
cd /path/to/spider

# Upload the crawler directory
crawlab upload
```

##### View help information

The following command can view the help document of the upload operation. Here are some advanced configuration items.

```bash
crawlab upload --help
```

### About multi crawler projects

You may have questions about what to do if there are more than one crawler in a crawler project. Please refer to ** [Q&A](../../QA/README.md) "I have multiple crawlers under one crawler. Do I need to create multiple crawler projests in Crawlab?"**. If it's a non Scrapy crawler, it's similar, what is needed is to write an entry file, such as 'main.py', and then call different crawlers in the entrance file by passing the different entrance parameters.