## Scrapy spider

Scrapy is a very popular high-performance spider framework that supports asynchronous crawling. In user research, more than half of the spider development engineers choose python, and Scrapy is a python spider framework, which is very popular with spider engineers.

Crawlab has developed a set of configuration interface for Scrapy spider, which makes it very easy for users to create, configure and modify Scrapy spider on the interface of Crawlab.

#### Start Scrapy

To open the configuration interface of Scrapy, you need to make sure that you are creating a [custom spider](CustomizedSpider.md), and that you need to enable **whether it is Scrapy** when **create a spider** or **modify a spider**, as shown below. This button can be enabled in **create spider** or **spider details**.

![](http://static-docs.crawlab.cn/is-scrapy.png)

⚠️Note: before turning on this option, please make sure that your spider project is a Scrapy spider. The best way to detect it is to check whether there is a 'scrapy.cfg' file in the root directory of your spider project. If the root directory of your spider project does not have a 'scrapy.cfg' file, try to upload your spider with [CLI tool](../SDK/CLI.md).

#### Setting

If the operation is successful, you will see that there is a 'Scrapy setting' tag in the spider details. Click the tag to see the following interface.

![](http://static-docs.crawlab.cn/scrapy-settings-setting.jpg)

The first default label is 'setting'. This is the setting interface of the Scrapy spider, which is where 'settings.py' is configured. Crawlab will read and display the variables in 'settings.py' in your spider project. Here, you can add, delete and modify any variable in 'settings.py'. When modifying variables, don't forget to determine the variable type.

After clicking the 'save' button, your settings will be saved in 'settings.py', you can check whether 'settings.py' takes effect in the 'file' tab.

#### spider

The second label is 'spider', which is defined in the 'spiders' folder. It is a class that inherits the 'scrapy.Spider'.

You can click 'add spider' to create a new Scrapy spider, which is equivalent to executing the operation of 'scrapy genspider'.

At the same time, if you click a spider in the Scrapy spider list, you can jump to the corresponding spider file automatically.

![](http://static-docs.crawlab.cn/scrapy-settings-spiders.png)

#### Items

The third label is 'items', this is where the spider grabs the items, It will read and display the class that its field list inherited from 'scrapy.Item' in 'items.py', as shown below.

![](http://static-docs.crawlab.cn/scrapy-settings-items.png)

Here, you can add and delete fields of 'Item' and 'Item'. You can also modify the name by clicking on 'Item' or field.

After clicking the 'save' button, you will see that the modified 'Item' and 'field' have taken effect in 'items.py'.

#### Pipelines

The fourth label is 'Pipelines'. Here you can see the list of Pipeline. Click and jump to the file 'pipelines.py'.
