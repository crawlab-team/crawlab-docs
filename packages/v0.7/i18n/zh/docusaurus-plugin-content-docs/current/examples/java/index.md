---
sidebar_position: 6
title: Java 爬虫
---

# Java 爬虫

## Java 网络抓取简介

Java 提供了强大的网络抓取功能，使用诸如 JSoup、HtmlUnit 和 Selenium WebDriver 等库。这些工具使开发人员能够从具有不同复杂程度的网站中提取数据。Java 的强类型、多线程能力和丰富的库使其适合构建可扩展的网络爬虫。

## 将 Java 抓取器与 Crawlab 集成

本指南演示如何创建一个基于 Java 的网络抓取器，并将其与 Crawlab 集成以从虚构的在线书店收集书籍数据。

### 在 Crawlab 中创建爬虫

1. 在 Crawlab 网页界面中，导航到爬虫列表
2. 点击“新建爬虫”按钮
3. 填写以下详细信息：
   - 名称： "book_scraper"
   - 执行命令： `java -jar book-scraper.jar`
   - 参数：（留空）
4. 点击“确认”以创建爬虫

### 设置 Java 项目

我们的 Java 项目将使用 Maven 进行依赖管理，并构建一个包含所有依赖项的自包含 JAR。我们将使用以下结构：

```
book_scraper/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── example/
│       │           └── bookscraper/
│       │               ├── BookScraper.java
│       │               ├── model/
│       │               │   └── Book.java
│       │               └── util/
│       │                   └── CrawlabIntegration.java
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
        <!-- JSoup 用于 HTML 解析 -->
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
        
        <!-- HTTP 客户端 -->
        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <version>4.5.13</version>
        </dependency>
        
        <!-- 日志记录 -->
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
            <!-- Maven Assembly 插件用于构建包含依赖项的 JAR -->
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
 * 表示书籍的模型类
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

    // Getter 和 Setter 方法
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

#### 3. CrawlabIntegration.java

```java
package com.example.bookscraper.util;

import com.example.bookscraper.model.Book;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

/**
 * 用于处理 Crawlab 集成的工具类
 */
public class CrawlabIntegration {
    private static final Logger logger = LoggerFactory.getLogger(CrawlabIntegration.class);
    private static final ObjectMapper objectMapper = new ObjectMapper();
    
    // Crawlab 环境变量
    private static final String CRAWLAB_API_ADDRESS = System.getenv("CRAWLAB_API_ADDRESS");
    private static final String CRAWLAB_API_TOKEN = System.getenv("CRAWLAB_API_TOKEN");
    private static final String CRAWLAB_TASK_ID = System.getenv("CRAWLAB_TASK_ID");
    private static final String CRAWLAB_COLLECTION = System.getenv("CRAWLAB_COLLECTION");
    
    private static final CloseableHttpClient httpClient = HttpClients.createDefault();

    /**
     * 将书籍项保存到 Crawlab
     * @param book 要保存的书籍
     * @return 如果保存成功则返回 true，否则返回 false
     */
    public static boolean saveItem(Book book) {
        try {
            // 检查是否在 Crawlab 环境中运行
            if (CRAWLAB_API_ADDRESS == null || CRAWLAB_TASK_ID == null) {
                logger.warn("未在 Crawlab 环境中运行，数据将不会被保存");
                return false;
            }
            
            // 创建请求负载
            Map<String, Object> payload = new HashMap<>();
            payload.put("task_id", CRAWLAB_TASK_ID);
            payload.put("data", book);
            
            String collection = CRAWLAB_COLLECTION != null && !CRAWLAB_COLLECTION.isEmpty() 
                    ? CRAWLAB_COLLECTION : "results";
            payload.put("collection", collection);
            
            // 转换为 JSON
            String jsonPayload = objectMapper.writeValueAsString(payload);
            
            // 创建 HTTP POST 请求
            URI uri = new URI(CRAWLAB_API_ADDRESS + "/items");
            HttpPost httpPost = new HttpPost(uri);
            httpPost.setHeader("Content-Type", "application/json");
            httpPost.setHeader("Authorization", CRAWLAB_API_TOKEN);
            httpPost.setEntity(new StringEntity(jsonPayload, ContentType.APPLICATION_JSON));
            
            // 执行请求
            try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
                int statusCode = response.getStatusLine().getStatusCode();
                if (statusCode >= 200 && statusCode < 300) {
                    logger.info("成功保存书籍: {}", book.getTitle());
                    return true;
                } else {
                    logger.error("保存项失败。状态码: {}", statusCode);
                    return false;
                }
            }
        } catch (Exception e) {
            logger.error("保存项到 Crawlab 出错", e);
            return false;
        }
    }

    /**
     * 解析 Crawlab 参数
     * @return 包含参数的 Map
     */
    public static Map<String, String> getParameters() {
        Map<String, String> params = new HashMap<>();
        String paramStr = System.getenv("CRAWLAB_SPIDER_PARAM");
        
        if (paramStr != null && !paramStr.isEmpty()) {
            try {
                params = objectMapper.readValue(paramStr, 
                        objectMapper.getTypeFactory().constructMapType(HashMap.class, String.class, String.class));
            } catch (Exception e) {
                logger.error("解析 Crawlab 参数出错", e);
            }
        }
        
        return params;
    }
}
```

#### 4. BookScraper.java

```java
package com.example.bookscraper;

import com.example.bookscraper.model.Book;
import com.example.bookscraper.util.CrawlabIntegration;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * 书籍抓取器的主要类
 */
public class BookScraper {
    private static final Logger logger = LoggerFactory.getLogger(BookScraper.class);
    private static final String BASE_URL = "https://example-bookstore.com";
    
    public static void main(String[] args) {
        try {
            // 从 Crawlab 获取参数
            Map<String, String> params = CrawlabIntegration.getParameters();
            String category = params.getOrDefault("category", "all");
            
            logger.info("开始抓取类别为 {} 的书籍", category);
            
            // 构建起始 URL
            String startUrl = BASE_URL + "/books";
            if (!"all".equals(category)) {
                startUrl += "/category/" + category;
            }
            
            scrapeBookList(startUrl, 1);
            
            logger.info("书籍抓取完成");
        } catch (Exception e) {
            logger.error("书籍抓取错误", e);
            System.exit(1);
        }
    }
    
    /**
     * 从给定页面抓取书籍列表
     * @param url 要抓取的 URL
     * @param page 当前页码
     */
    private static void scrapeBookList(String url, int page) throws IOException, InterruptedException {
        logger.info("正在抓取第 {} 页的书籍列表，URL: {}", page, url);
        
        // 使用用户代理连接到网站
        Document doc = Jsoup.connect(url)
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                .timeout(10000)
                .get();
        
        // 查找所有书籍元素
        Elements bookElements = doc.select("div.book-item");
        logger.info("在第 {} 页找到 {} 本书", page, bookElements.size());
        
        // 处理每本书
        for (Element bookElement : bookElements) {
            // 提取基本信息
            String title = bookElement.select("h3.book-title").text();
            String author = bookElement.select("div.book-author").text();
            String price = bookElement.select("span.book-price").text();
            String detailUrl = BASE_URL + bookElement.select("a.book-link").attr("href");
            
            // 创建新的书籍对象
            Book book = new Book();
            book.setTitle(title);
            book.setAuthor(author);
            book.setPrice(price);
            book.setDetailUrl(detailUrl);
            
            // 访问详情页面以获取更多信息
            scrapeBookDetail(book);
            
            // 将书籍保存到 Crawlab
            CrawlabIntegration.saveItem(book);
            
            // 添加小延迟以避免服务器过载
            TimeUnit.MILLISECONDS.sleep(500);
        }
        
        // 检查是否有下一页并处理它
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
     * 为书籍抓取详细信息
     * @param book 要填充详细信息的书籍
     */
    private static void scrapeBookDetail(Book book) throws IOException {
        logger.info("正在抓取书籍的详细信息: {}", book.getTitle());
        
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
        
        // 更新书籍对象
        book.setIsbn(isbn);
        book.setCategory(category);
        book.setDescription(description);
        book.setRating(rating);
        book.setImageUrl(imageUrl);
    }
}
```

### 关键集成点

与 Crawlab 的主要集成发生在 `CrawlabIntegration` 类中：

1. 读取 Crawlab 环境变量：
   ```java
   private static final String CRAWLAB_API_ADDRESS = System.getenv("CRAWLAB_API_ADDRESS");
   private static final String CRAWLAB_API_TOKEN = System.getenv("CRAWLAB_API_TOKEN");
   private static final String CRAWLAB_TASK_ID = System.getenv("CRAWLAB_TASK_ID");
   private static final String CRAWLAB_COLLECTION = System.getenv("CRAWLAB_COLLECTION");
   ```

2. 将数据保存到 Crawlab：
   ```java
   public static boolean saveItem(Book book) {
       // 创建 HTTP 请求到 Crawlab API 以保存项
   }
   ```

3. 从 Crawlab 读取参数：
   ```java
   public static Map<String, String> getParameters() {
       String paramStr = System.getenv("CRAWLAB_SPIDER_PARAM");
       // 将参数字符串解析为 Map
   }
   ```

### 环境设置

#### Crawlab 专业版
如果您使用的是 **Crawlab 专业版**，您可以直接从 Crawlab 界面安装 Java：

1. 导航到依赖项页面
2. 在“环境”下拉菜单中选择“Java”
3. 如果 Java 未安装，请点击“安装环境”
4. 选择要安装 Java 的版本和节点
5. 点击“确认”

安装 Java 后，您的节点将准备好运行基于 Java 的爬虫。

#### Crawlab 社区版
如果您使用的是 **Crawlab 社区版**，请确保在您的节点上安装 Java：

1. SSH 登录到您的节点服务器
2. 按照 [官方安装说明](https://www.oracle.com/java/technologies/javase-downloads.html) 安装 Java JDK
3. 使用 `java -version` 验证安装
4. 确保安装 Maven 以构建 Java 项目

### 构建和上传项目

在您的节点上安装 Java 后：

1. 在本地机器上编译并打包 Java 项目为 JAR 文件：
   ```bash
   mvn clean package
   ```

2. 在 Crawlab 中，导航到爬虫的详细页面
3. 点击“文件”标签
4. 上传从 `target` 目录生成的 `book-scraper.jar` 文件

### 运行爬虫

1. 在 Crawlab 中，导航到您的爬虫的详细页面
2. 点击“运行”按钮
3. 选择要执行的节点
4. 如需，添加参数（例如：`{"category":"fiction"}`）
5. 点击“确认”以启动爬虫

爬虫完成后，您可以在爬虫详细页面的“数据”标签中查看收集的书籍数据。

## 故障排除

如果在 Crawlab 中运行 Java 爬虫时遇到错误，请检查以下内容：

1. **缺少 Java 环境**：确保您的 Crawlab 节点已安装 Java 11 或更高版本
2. **依赖问题**：检查 JAR 文件中的所有依赖项是否正确打包
3. **网络连通性**：验证您的节点是否可以访问目标网站
4. **空结果**：网站结构可能已更改；更新您的选择器

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

### 使用 Selenium 处理 JavaScript 丰富的网站

对于需要 JavaScript 渲染的网站：

```java
// 在 pom.xml 中添加这些依赖项：
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
        
        // 创建并填充书籍对象...
        
    } catch (Exception e) {
        logger.error("使用 Selenium 抓取错误", e);
    } finally {
        driver.quit();
    }
}
```