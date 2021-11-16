## Custom spider

Custom spider is a kind of spider that can be added in any language and any framework, which is highly customized. When the user adds a custom spider, Crawlab can integrate it into the spider management system.

There are two ways to upload spider projects:

1. By web interface(flexible)
2. By CLI command line tools (simple, recommended)

Here is a detailed introduction.

### By web interface

The detailed steps of uploading spider items by the web interface are as follows.

##### 1. Package as zip file

Before uploading by the web interface, you need to package the spider project file into 'zip' format.

⚠️Note: you need to package in the root directory of the spider project, which means you need to go to the first level of the project and package all files and folders into zip files.

##### 2. Enter spider data

First, you need to navigate to the spider list page.

Then, click 'add spider' and select 'custom spider' (default is custom spider). The following interface will appear.

![](http://static-docs.crawlab.cn/spider-create-customized.png)

Enter the appropriate parameters: 'spider name', 'display name', 'execute command' and 'result'.

They are defined as follows:

- **Spider name**: unique identification name of a spider. A file directory of this name will be created in the root directory of the spider. Therefore, it is recommended to use lowercase English without spaces and special symbols, which can contain underscores;
- **Display name**: the name of the spider displayed in the front end, which can be any string;
- **Execute command**: the command that the spider will execute in the 'shell', and the final executed command will be the combination of 'execute command' and 'parameter';
- **Results** 'result set' means that the spider grabs the collection of the results stored in the MongoDB database, similar to the table in the SQL database.

##### 3. Create a spider

Next, you have two choices to create a spider:

1. **Create empty project**: create an empty spider, that is, directly click the 'add' button, which will not upload any spider files. You can upload the zip file after the creation (described later), or create the editing file online (please refer to the section of [online editing file](FileEdit.md)).
2. **Upload zip file directly**: click the 'upload' button to select the zip file just packed. If the spider name already exists, the previous project file will be overwritten; If the spider name does not exist, it will be regarded as a new spider, and all spider files will be created and uploaded. After uploading the spider file, you can also create, edit, delete and rename the spider file through the [file management](FileEdit.md).
The spider is then created/updated.

### By CLI command line tool

For developers who are more accustomed to operating on the command line, perhaps CLI tool is a better choice. Moreover, this method does not require the user to package the project into a zip file, which is much more convenient for uploading the spider.

[CLI command line tool](../SDK/CLI.md) is an experimental function that allows developers to easily upload files. For details, please refer to the [cli command line tool](../SDK/CLI.md) chapter.

Next, we will show you how to upload a custom spider through the CLI command line tool.

⚠️Note: please make sure that you have installed CLI command line tool and can obtain 'token' before using. If not, please refer to the [cli command-line tools](../SDK/CLI.md) section.

##### Execute command to upload spider

Executing the following command will package the files automatically in the spider directory into Zip files and upload them to the Crawlab server, thus eliminating the manual packaging step.

```bash
# Navigate to the spider project directory
cd /path/to/spider

# Upload the spider directory
crawlab upload
```

##### View help information

The following command can view the help document of the upload operation. Here are some advanced configuration items.

```bash
crawlab upload --help
```

### About multi spider projects

You may have questions about what to do if there are more than one spider in a spider project. Please refer to ** [Q&A](../../QA/README.md) "I have multiple spiders under one spider. Do I need to create multiple spider projests in Crawlab?"**. If it's a non Scrapy spider, it's similar, what is needed is to write an entry file, such as 'main.py', and then call different spiders in the entrance file by passing the different entrance parameters.
