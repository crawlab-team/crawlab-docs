## Scrapy crawler

Scrapy is a very popular high-performance crawler framework that supports asynchronous crawling. In user research, more than half of the crawler development engineers choose python, and Scrapy is a python crawler framework, which is very popular with crawler engineers.

Crawlab has developed a set of configuration interface for Scrapy crawler, which makes it very easy for users to create, configure and modify Scrapy crawler on the interface of Crawlab.

#### Start Scrapy

To open the configuration interface of Scrapy, you need to make sure that you are creating a [custom crawler](./CustomizedSpider.md), and that you need to enable **whether it is Scrapy** when **create a crawler** or **modify a crawler**, as shown below. This button can be enabled in **create crawler** or **crawler details**.

![](http://static-docs.crawlab.cn/is-scrapy.png)

⚠️Note: before turning on this option, please make sure that your crawler project is a Scrapy crawler. The best way to detect it is to check whether there is a 'scrapy.cfg' file in the root directory of your crawler project. If the root directory of your crawler project does not have a 'scrapy.cfg' file, try to upload your crawler with [CLI tool](../SDK/CLI.md).

#### Setting

If the operation is successful, you will see that there is a 'Scrapy setting' tag in the crawler details. Click the tag to see the following interface.

![](http://static-docs.crawlab.cn/scrapy-settings-setting.jpg)

The first default label is 'setting'. This is the setting interface of the Scrapy crawler, which is where 'settings.py' is configured. Crawlab will read and display the variables in 'settings.py' in your crawler project. Here, you can add, delete and modify any variable in 'settings.py'. When modifying variables, don't forget to determine the variable type.

After clicking the 'save' button, your settings will be saved in 'settings.py', you can check whether 'settings.py' takes effect in the 'file' tab.

#### Crawler

The second label is 'crawler', which is defined in the 'spiders' folder. It is a class that inherits the 'scrapy.Spider'.

You can click 'add crawler' to create a new Scrapy crawler, which is equivalent to executing the operation of 'scrapy genspider'.

At the same time, if you click a crawler in the Scrapy crawler list, you can jump to the corresponding crawler file automatically.

![](http://static-docs.crawlab.cn/scrapy-settings-spiders.png)

#### Items

The third label is 'items', this is where the crawler grabs the items, It will read and display the class that its field list inherited from 'scrapy.Item' in 'items.py', as shown below.

![](http://static-docs.crawlab.cn/scrapy-settings-items.png)

Here, you can add and delete fields of 'Item' and 'Item'. You can also modify the name by clicking on 'Item' or field.

After clicking the 'save' button, you will see that the modified 'Item' and 'field' have taken effect in 'items.py'.

#### Pipelines

The fourth label is 'Pipelines'. Here you can see the list of Pipeline. Click and jump to the file 'pipelines.py'.