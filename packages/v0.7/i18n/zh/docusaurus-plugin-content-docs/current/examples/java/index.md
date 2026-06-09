---
sidebar_position: 6
title: Java 爬虫
---

# Java 爬虫

## Java 网页抓取介绍

Java 借助 JSoup、HtmlUnit 和 Selenium WebDriver 等库，为网页抓取提供了强大的能力。这些工具使开发者能够从复杂程度各异的网站中提取数据。Java 的强类型、多线程能力以及丰富的类库，使其非常适合构建可扩展的网络爬虫。

## 将 Java 抓取器与 Crawlab 集成

本指南演示如何创建一个基于 Java 的网页抓取器，并将其与 Crawlab 集成，以从一个虚构的在线书店采集图书数据。

### 在 Crawlab 中创建爬虫

1. 在 Crawlab 网页界面中，导航至爬虫列表
2. 点击「新建爬虫」按钮
3. 填写以下信息：
   - 名称："book_scraper"
   - 执行命令：`java -jar book-scraper.jar`
   - 参数：（留空）
4. 点击「确认」创建爬虫

### 设置 Java 项目

我们的 Java 项目将使用 Maven 进行依赖管理，并构建一个包含所有依赖的自包含 JAR。以下是我们将采用的结构：

```
book_scraper/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── example/
│       │           └── bookscraper/
│       │               ├── BookScraper.java
│       │               └── model/
│       │                   └── Book.java
│       └── resources/
│           └── log4j2.xml
├── pom.xml
└── book-scraper.jar
```

#### 1. pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>book-scraper</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- 用于 HTML 解析的 JSoup -->
        <dependency>
            <groupId>org.jsoup</groupId>
            <artifactId>jsoup</artifactId>
            <version>1.15.3</version>
        </dependency>
        
        <!-- JSON 处理 -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.13.4.2</version>
        </dependency>
        
        <!-- Crawlab SDK -->
        <dependency>
            <groupId>io.crawlab</groupId>
            <artifactId>crawlab-sdk</artifactId>
            <version>0.7.0</version>
        </dependency>
        
        <!-- 日志 -->
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-api</artifactId>
            <version>2.17.2</version>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-core</artifactId>
            <version>2.17.2</version>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-slf4j-impl</artifactId>
            <version>2.17.2</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Maven Assembly 插件，用于构建包含依赖的 jar -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>3.3.0</version>
                <configuration>
                    <archive>
                        <manifest>
                            <mainClass>com.example.bookscraper.BookScraper</mainClass>
                        </manifest>
                    </archive>
                    <descriptorRefs>
                        <descriptorRef>jar-with-dependencies</descriptorRef>
                    </descriptorRefs>
                    <finalName>book-scraper</finalName>
                    <appendAssemblyId>false</appendAssemblyId>
                </configuration>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

#### 2. Book.java

```java
package com.example.bookscraper.model;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 表示一本图书的模型类
 */
public class Book {
    @JsonProperty("title")
    private String title;
    
    @JsonProperty("author")
    private String author;
    
    @JsonProperty("price")
    private String price;
    
    @JsonProperty("isbn")
    private String isbn;
    
    @JsonProperty("category")
    private String category;
    
    @JsonProperty("description")
    private String description;
    
    @JsonProperty("rating")
    private double rating;
    
    @JsonProperty("image_url")
    private String imageUrl;
    
    @JsonProperty("detail_url")
    private String detailUrl;

    // Getter 和 setter 方法
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDetailUrl() {
        return detailUrl;
    }

    public void setDetailUrl(String detailUrl) {
        this.detailUrl = detailUrl;
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", price='" + price + '\'' +
                ", isbn='" + isbn + '\'' +
                ", category='" + category + '\'' +
                ", rating=" + rating +
                '}';
    }
}
```

#### 3. BookScraper.java

Crawlab Java SDK 会自动从环境中读取连接和任务上下文（API 地址、令牌、任务 ID、目标集合），因此您无需自己读取 `CRAWLAB_*` 环境变量、构建载荷或发起任何 HTTP 调用。您只需将每个抓取到的条目转换为 `Map<String, Object>` 并调用 `CrawlabSDK.saveItem(...)`：

```java
import io.crawlab.sdk.CrawlabSDK;

Map<String, Object> data = Map.of("name", "John", "age", 25);
CrawlabSDK.saveItem(data);
```

`CrawlabSDK.saveItem(...)` 接受 `Object...` 可变参数，因此您也可以一次性传入多个条目（或一个 `List`）。下面的示例将每个 `Book` 转换为 map 并保存。

```java
package com.example.bookscraper;

import com.example.bookscraper.model.Book;
import io.crawlab.sdk.CrawlabSDK;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * 图书抓取器的主类
 */
public class BookScraper {
    private static final Logger logger = LoggerFactory.getLogger(BookScraper.class);
    private static final String BASE_URL = "https://example-bookstore.com";
    
    public static void main(String[] args) {
        try {
            // 读取来自 Crawlab 的爬虫参数（在运行对话框中设置）
            String category = "all";
            String paramStr = System.getenv("CRAWLAB_SPIDER_PARAM");
            if (paramStr != null && paramStr.contains("category")) {
                // 对于简单的 {"category":"fiction"} 参数，您可以使用
                // 自己选择的 JSON 库进行解析；此处保持最简。
                logger.info("爬虫参数: {}", paramStr);
            }
            
            logger.info("开始抓取类别为 {} 的图书", category);
            
            // 构建起始 URL
            String startUrl = BASE_URL + "/books";
            if (!"all".equals(category)) {
                startUrl += "/category/" + category;
            }
            
            scrapeBookList(startUrl, 1);
            
            logger.info("图书抓取成功完成");
        } catch (Exception e) {
            logger.error("图书抓取器发生错误", e);
            System.exit(1);
        }
    }
    
    /**
     * 从给定页面抓取图书列表
     * @param url 要抓取的 URL
     * @param page 当前页码
     */
    private static void scrapeBookList(String url, int page) throws IOException, InterruptedException {
        logger.info("正在抓取第 {} 页图书列表，URL：{}", page, url);
        
        // 使用 user agent 连接到网站
        Document doc = Jsoup.connect(url)
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                .timeout(10000)
                .get();
        
        // 查找所有图书元素
        Elements bookElements = doc.select("div.book-item");
        logger.info("在第 {} 页找到 {} 本图书", page, bookElements.size());
        
        // 处理每一本图书
        for (Element bookElement : bookElements) {
            // 提取基本信息
            String title = bookElement.select("h3.book-title").text();
            String author = bookElement.select("div.book-author").text();
            String price = bookElement.select("span.book-price").text();
            String detailUrl = BASE_URL + bookElement.select("a.book-link").attr("href");
            
            // 创建一个新的图书对象
            Book book = new Book();
            book.setTitle(title);
            book.setAuthor(author);
            book.setPrice(price);
            book.setDetailUrl(detailUrl);
            
            // 访问详情页以获取更多信息
            scrapeBookDetail(book);
            
            // 将图书保存到 Crawlab
            CrawlabSDK.saveItem(toMap(book));
            logger.info("已保存图书：{}", book.getTitle());
            
            // 添加少量延迟以避免使服务器过载
            TimeUnit.MILLISECONDS.sleep(500);
        }
        
        // 检查是否存在下一页并进行处理
        Element nextPage = doc.selectFirst("a.pagination-next");
        if (nextPage != null) {
            String nextPageUrl = BASE_URL + nextPage.attr("href");
            
            // 在页面之间添加延迟
            TimeUnit.SECONDS.sleep(2);
            
            // 递归处理下一页
            scrapeBookList(nextPageUrl, page + 1);
        }
    }
    
    /**
     * 抓取一本图书的详细信息
     * @param book 要填充详细信息的图书
     */
    private static void scrapeBookDetail(Book book) throws IOException {
        logger.info("正在抓取图书详情：{}", book.getTitle());
        
        Document doc = Jsoup.connect(book.getDetailUrl())
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                .timeout(10000)
                .get();
        
        // 提取详细信息
        String isbn = doc.selectFirst("span.book-isbn").text();
        String category = doc.selectFirst("a.book-category").text();
        String description = doc.selectFirst("div.book-description").text();
        String ratingText = doc.selectFirst("div.book-rating").text().split("/")[0].trim();
        double rating = Double.parseDouble(ratingText);
        String imageUrl = doc.selectFirst("img.book-cover").attr("src");
        
        // 更新图书对象
        book.setIsbn(isbn);
        book.setCategory(category);
        book.setDescription(description);
        book.setRating(rating);
        book.setImageUrl(imageUrl);
    }
    
    /**
     * 将 Book 转换为用于保存到 Crawlab 的 Map
     * @param book 要转换的图书
     * @return 表示抓取条目的 map
     */
    private static Map<String, Object> toMap(Book book) {
        Map<String, Object> data = new HashMap<>();
        data.put("title", book.getTitle());
        data.put("author", book.getAuthor());
        data.put("price", book.getPrice());
        data.put("isbn", book.getIsbn());
        data.put("category", book.getCategory());
        data.put("description", book.getDescription());
        data.put("rating", book.getRating());
        data.put("image_url", book.getImageUrl());
        data.put("detail_url", book.getDetailUrl());
        return data;
    }
}
```

### 关键集成点

与 Crawlab 的主要集成完全由 Crawlab Java SDK 处理：

1. 导入 Crawlab SDK：
   ```java
   import io.crawlab.sdk.CrawlabSDK;
   ```

2. 将数据保存到 Crawlab：
   ```java
   Map<String, Object> data = Map.of("name", "John", "age", 25);
   CrawlabSDK.saveItem(data);
   ```
   SDK 会自动从环境中读取 Crawlab 连接和任务上下文（API 地址、令牌、任务 ID、目标集合），因此您无需自己读取任何 `CRAWLAB_*` 变量或构建 HTTP 请求。`saveItem(...)` 接受 `Object...` 可变参数，因此您也可以一次性传入多个条目。

3. 从 Crawlab 读取参数：
   ```java
   String paramStr = System.getenv("CRAWLAB_SPIDER_PARAM");
   // 使用您的 JSON 库解析参数字符串（例如 {"category":"fiction"}）
   ```

:::note
抓取数据写入的集合（数据库表）是在 Crawlab UI 中爬虫的 **数据** 标签页配置的——它不是在代码中设置的。
:::

### 环境设置

#### Crawlab 专业版
如果您使用的是 **Crawlab 专业版**，可以直接从 Crawlab UI 安装 Java：

1. 导航至「依赖」页面
2. 在「环境」下拉列表中选择「Java」
3. 如果 Java 尚未安装，点击「安装环境」
4. 选择您想要安装 Java 的版本和节点
5. 点击「确认」

安装 Java 后，您的节点即可运行基于 Java 的爬虫。

#### Crawlab 社区版
如果您使用的是 **Crawlab 社区版**，请确保节点上已安装 Java：

1. SSH 登录到您的节点服务器
2. 按照[官方安装说明](https://www.oracle.com/java/technologies/javase-downloads.html)安装 Java JDK
3. 使用 `java -version` 验证安装
4. 确保已安装 Maven 以构建 Java 项目

### 构建并上传项目

一旦节点上安装了 Java：

1. 在本地机器上将 Java 项目编译并打包为 JAR 文件：
   ```bash
   mvn clean package
   ```

2. 在 Crawlab 中，导航至爬虫的详情页面
3. 点击「文件」标签页
4. 从 `target` 目录上传生成的 `book-scraper.jar` 文件

### 运行爬虫

1. 在 Crawlab 中，导航至您的爬虫详情页面
2. 点击「运行」按钮
3. 选择用于执行的目标节点
4. 如有需要，添加参数（例如 `{"category":"fiction"}`）
5. 点击「确认」启动爬虫

爬虫完成后，您可以在爬虫详情页面的「数据」标签页中查看采集到的图书数据。

## 故障排除

如果在 Crawlab 中运行 Java 爬虫时遇到错误，请检查以下各项：

1. **缺少 Java 环境**：确保 Crawlab 节点上安装了 Java 11 或更高版本
2. **依赖问题**：检查所有依赖是否已正确打包进 JAR
3. **网络连通性**：验证您的节点能否访问目标网站
4. **结果为空**：网站结构可能已发生变化；请更新您的选择器

## 高级配置

### 添加代理支持

要在 Java 抓取器中使用代理：

```java
// 添加到 BookScraper.java
private static Document getDocumentWithProxy(String url) throws IOException {
    System.setProperty("http.proxyHost", "proxy.example.com");
    System.setProperty("http.proxyPort", "8080");
    System.setProperty("https.proxyHost", "proxy.example.com");
    System.setProperty("https.proxyPort", "8080");
    
    return Jsoup.connect(url)
            .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
            .timeout(10000)
            .get();
}
```

### 对 JavaScript 密集型站点使用 Selenium

对于需要 JavaScript 渲染的网站：

```java
// 将这些依赖添加到 pom.xml：
// <dependency>
//     <groupId>org.seleniumhq.selenium</groupId>
//     <artifactId>selenium-java</artifactId>
//     <version>4.8.0</version>
// </dependency>
// <dependency>
//     <groupId>io.github.bonigarcia</groupId>
//     <artifactId>webdrivermanager</artifactId>
//     <version>5.3.2</version>
// </dependency>

// 在 BookScraper.java 中：
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

private static void scrapeDynamicPage(String url) {
    WebDriverManager.chromedriver().setup();
    
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--headless");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    
    WebDriver driver = new ChromeDriver(options);
    
    try {
        driver.get(url);
        
        // 等待 JavaScript 加载内容
        Thread.sleep(2000);
        
        // 提取数据
        WebElement titleElement = driver.findElement(By.cssSelector("h3.book-title"));
        String title = titleElement.getText();
        
        // 创建并填充图书对象……
        
    } catch (Exception e) {
        logger.error("使用 Selenium 抓取时发生错误", e);
    } finally {
        driver.quit();
    }
}
```
