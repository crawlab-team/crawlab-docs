---
sidebar_position: 6
title: Java Spider
---

# Java Spider

## Introduction to Java Web Scraping

Java offers robust capabilities for web scraping with libraries such as JSoup, HtmlUnit, and Selenium WebDriver. These tools enable developers to extract data from websites with varying levels of complexity. Java's strong typing, multithreading capabilities, and extensive libraries make it suitable for building scalable web crawlers.

## Integrating Java Scrapers with Crawlab

This guide demonstrates how to create a Java-based web scraper and integrate it with Crawlab to collect book data from a fictional online bookstore.

### Creating the Spider in Crawlab

1. In the Crawlab web interface, navigate to the Spider list
2. Click the "New Spider" button
3. Fill in the following details:
   - Name: "book_scraper"
   - Execute Command: `java -jar book-scraper.jar`
   - Parameter: (leave empty)
4. Click "Confirm" to create the spider

### Setting Up the Java Project

Our Java project will use Maven for dependency management and build a self-contained JAR with all dependencies included. Here's the structure we'll use:

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
        <!-- JSoup for HTML parsing -->
        <dependency>
            <groupId>org.jsoup</groupId>
            <artifactId>jsoup</artifactId>
            <version>1.15.3</version>
        </dependency>
        
        <!-- JSON processing -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.13.4.2</version>
        </dependency>
        
        <!-- HTTP client -->
        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <version>4.5.13</version>
        </dependency>
        
        <!-- Logging -->
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
            <!-- Maven Assembly Plugin to build a jar with dependencies -->
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
 * Model class representing a book
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

    // Getters and setters
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
 * Utility class to handle Crawlab integration
 */
public class CrawlabIntegration {
    private static final Logger logger = LoggerFactory.getLogger(CrawlabIntegration.class);
    private static final ObjectMapper objectMapper = new ObjectMapper();
    
    // Crawlab environment variables
    private static final String CRAWLAB_API_ADDRESS = System.getenv("CRAWLAB_API_ADDRESS");
    private static final String CRAWLAB_API_TOKEN = System.getenv("CRAWLAB_API_TOKEN");
    private static final String CRAWLAB_TASK_ID = System.getenv("CRAWLAB_TASK_ID");
    private static final String CRAWLAB_COLLECTION = System.getenv("CRAWLAB_COLLECTION");
    
    private static final CloseableHttpClient httpClient = HttpClients.createDefault();

    /**
     * Save a book item to Crawlab
     * @param book The book to save
     * @return true if saved successfully, false otherwise
     */
    public static boolean saveItem(Book book) {
        try {
            // Check if running in Crawlab
            if (CRAWLAB_API_ADDRESS == null || CRAWLAB_TASK_ID == null) {
                logger.warn("Not running in Crawlab environment, data will not be saved");
                return false;
            }
            
            // Create the request payload
            Map<String, Object> payload = new HashMap<>();
            payload.put("task_id", CRAWLAB_TASK_ID);
            payload.put("data", book);
            
            String collection = CRAWLAB_COLLECTION != null && !CRAWLAB_COLLECTION.isEmpty() 
                    ? CRAWLAB_COLLECTION : "results";
            payload.put("collection", collection);
            
            // Convert to JSON
            String jsonPayload = objectMapper.writeValueAsString(payload);
            
            // Create HTTP POST request
            URI uri = new URI(CRAWLAB_API_ADDRESS + "/items");
            HttpPost httpPost = new HttpPost(uri);
            httpPost.setHeader("Content-Type", "application/json");
            httpPost.setHeader("Authorization", CRAWLAB_API_TOKEN);
            httpPost.setEntity(new StringEntity(jsonPayload, ContentType.APPLICATION_JSON));
            
            // Execute the request
            try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
                int statusCode = response.getStatusLine().getStatusCode();
                if (statusCode >= 200 && statusCode < 300) {
                    logger.info("Successfully saved book: {}", book.getTitle());
                    return true;
                } else {
                    logger.error("Failed to save item. Status code: {}", statusCode);
                    return false;
                }
            }
        } catch (Exception e) {
            logger.error("Error saving item to Crawlab", e);
            return false;
        }
    }

    /**
     * Parse Crawlab parameters
     * @return Map containing the parameters
     */
    public static Map<String, String> getParameters() {
        Map<String, String> params = new HashMap<>();
        String paramStr = System.getenv("CRAWLAB_SPIDER_PARAM");
        
        if (paramStr != null && !paramStr.isEmpty()) {
            try {
                params = objectMapper.readValue(paramStr, 
                        objectMapper.getTypeFactory().constructMapType(HashMap.class, String.class, String.class));
            } catch (Exception e) {
                logger.error("Error parsing Crawlab parameters", e);
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
 * Main class for the book scraper
 */
public class BookScraper {
    private static final Logger logger = LoggerFactory.getLogger(BookScraper.class);
    private static final String BASE_URL = "https://example-bookstore.com";
    
    public static void main(String[] args) {
        try {
            // Get parameters from Crawlab
            Map<String, String> params = CrawlabIntegration.getParameters();
            String category = params.getOrDefault("category", "all");
            
            logger.info("Starting book scraper for category: {}", category);
            
            // Build the starting URL
            String startUrl = BASE_URL + "/books";
            if (!"all".equals(category)) {
                startUrl += "/category/" + category;
            }
            
            scrapeBookList(startUrl, 1);
            
            logger.info("Book scraping completed successfully");
        } catch (Exception e) {
            logger.error("Error in book scraper", e);
            System.exit(1);
        }
    }
    
    /**
     * Scrape a list of books from the given page
     * @param url The URL to scrape
     * @param page The current page number
     */
    private static void scrapeBookList(String url, int page) throws IOException, InterruptedException {
        logger.info("Scraping book list page {} at URL: {}", page, url);
        
        // Connect to the website with a user agent
        Document doc = Jsoup.connect(url)
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                .timeout(10000)
                .get();
        
        // Find all book elements
        Elements bookElements = doc.select("div.book-item");
        logger.info("Found {} books on page {}", bookElements.size(), page);
        
        // Process each book
        for (Element bookElement : bookElements) {
            // Extract basic information
            String title = bookElement.select("h3.book-title").text();
            String author = bookElement.select("div.book-author").text();
            String price = bookElement.select("span.book-price").text();
            String detailUrl = BASE_URL + bookElement.select("a.book-link").attr("href");
            
            // Create a new book object
            Book book = new Book();
            book.setTitle(title);
            book.setAuthor(author);
            book.setPrice(price);
            book.setDetailUrl(detailUrl);
            
            // Visit the detail page to get more information
            scrapeBookDetail(book);
            
            // Save the book to Crawlab
            CrawlabIntegration.saveItem(book);
            
            // Add a small delay to avoid overloading the server
            TimeUnit.MILLISECONDS.sleep(500);
        }
        
        // Check if there's a next page and process it
        Element nextPage = doc.selectFirst("a.pagination-next");
        if (nextPage != null) {
            String nextPageUrl = BASE_URL + nextPage.attr("href");
            
            // Add a delay between pages
            TimeUnit.SECONDS.sleep(2);
            
            // Recursively process the next page
            scrapeBookList(nextPageUrl, page + 1);
        }
    }
    
    /**
     * Scrape detailed information for a book
     * @param book The book to populate with detailed information
     */
    private static void scrapeBookDetail(Book book) throws IOException {
        logger.info("Scraping details for book: {}", book.getTitle());
        
        Document doc = Jsoup.connect(book.getDetailUrl())
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                .timeout(10000)
                .get();
        
        // Extract detailed information
        String isbn = doc.selectFirst("span.book-isbn").text();
        String category = doc.selectFirst("a.book-category").text();
        String description = doc.selectFirst("div.book-description").text();
        String ratingText = doc.selectFirst("div.book-rating").text().split("/")[0].trim();
        double rating = Double.parseDouble(ratingText);
        String imageUrl = doc.selectFirst("img.book-cover").attr("src");
        
        // Update the book object
        book.setIsbn(isbn);
        book.setCategory(category);
        book.setDescription(description);
        book.setRating(rating);
        book.setImageUrl(imageUrl);
    }
}
```

### Key Integration Points

The main integration with Crawlab happens in the `CrawlabIntegration` class:

1. Reading Crawlab environment variables:
   ```java
   private static final String CRAWLAB_API_ADDRESS = System.getenv("CRAWLAB_API_ADDRESS");
   private static final String CRAWLAB_API_TOKEN = System.getenv("CRAWLAB_API_TOKEN");
   private static final String CRAWLAB_TASK_ID = System.getenv("CRAWLAB_TASK_ID");
   private static final String CRAWLAB_COLLECTION = System.getenv("CRAWLAB_COLLECTION");
   ```

2. Saving data to Crawlab:
   ```java
   public static boolean saveItem(Book book) {
       // Create HTTP request to Crawlab API to save the item
   }
   ```

3. Reading parameters from Crawlab:
   ```java
   public static Map<String, String> getParameters() {
       String paramStr = System.getenv("CRAWLAB_SPIDER_PARAM");
       // Parse the parameter string into a map
   }
   ```

### Environment Setup

#### Crawlab Pro
If you're using **Crawlab Pro**, you can install Java directly from the Crawlab UI:

1. Navigate to Dependencies page
2. Select "Java" in the "Environment" dropdown
3. If Java is not installed, click "Install Envs"
4. Select the Java version and nodes you want to install Java on
5. Click "Confirm"

After installing Java, your node will be ready to run Java-based spiders.

#### Crawlab Community
If you're using **Crawlab Community**, ensure that Java is installed on your nodes:

1. SSH into your node server
2. Install Java JDK following the [official installation instructions](https://www.oracle.com/java/technologies/javase-downloads.html)
3. Verify installation with `java -version`
4. Make sure Maven is installed for building Java projects

### Building and Uploading the Project

Once Java is installed on your nodes:

1. Compile and package the Java project into a JAR file on your local machine:
   ```bash
   mvn clean package
   ```

2. In Crawlab, navigate to the spider's detail page
3. Click on the "Files" tab
4. Upload the generated `book-scraper.jar` file from the `target` directory

### Running the Spider

1. In Crawlab, navigate to your spider's detail page
2. Click the "Run" button
3. Select the desired node for execution
4. Add parameters if needed (e.g., `{"category":"fiction"}`)
5. Click "Confirm" to start the spider

After the spider completes, you can view the collected book data in the "Data" tab of your spider's detail page.

## Troubleshooting

If you encounter errors when running your Java spider in Crawlab, check the following:

1. **Missing Java environment**: Ensure Java 11 or newer is installed on your Crawlab nodes
2. **Dependency issues**: Check that all dependencies are correctly packaged in the JAR
3. **Network connectivity**: Verify that your nodes can access the target website
4. **Empty results**: The website structure may have changed; update your selectors

## Advanced Configuration

### Adding Proxy Support

To use proxies in your Java scraper:

```java
// Add to BookScraper.java
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

### Using Selenium for JavaScript-Heavy Sites

For websites that require JavaScript rendering:

```java
// Add these dependencies to pom.xml:
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

// In BookScraper.java:
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
        
        // Wait for JavaScript to load content
        Thread.sleep(2000);
        
        // Extract data
        WebElement titleElement = driver.findElement(By.cssSelector("h3.book-title"));
        String title = titleElement.getText();
        
        // Create and populate book object...
        
    } catch (Exception e) {
        logger.error("Error scraping with Selenium", e);
    } finally {
        driver.quit();
    }
}
``` 