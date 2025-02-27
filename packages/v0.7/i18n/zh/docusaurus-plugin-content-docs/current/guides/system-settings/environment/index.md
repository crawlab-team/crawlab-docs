---
sidebar_position: 3
title: 环境变量
---

# 环境变量

:::info
此功能仅在 **Crawlab 专业版** 中可用。
:::

Crawlab 允许用户在爬虫运行时设置环境变量。

## 为什么使用环境变量？

在 Crawlab 中使用环境变量提供了几个重要的优势：

- **配置分离**：将配置与代码分开，遵循最佳实践
- **敏感数据管理**：安全地存储 API 密钥、凭证和令牌，而不将其放在代码中
- **特定环境设置**：轻松为开发、测试和生产环境配置不同的值
- **集中管理**：从一个位置更新所有爬虫的配置
- **运行时灵活性**：无需修改代码即可更改爬虫的行为
- **增强安全性**：避免在爬虫脚本中硬编码敏感信息

## 创建环境变量

1. 导航到 `系统设置` 页面。
2. 点击 `环境` 选项卡。
3. 点击 `新建环境变量` 按钮。
4. 填写配置表单。
5. 点击 `确认` 按钮。

## 使用环境变量

假设我们已经设置了键为 `FOO`，值为 `BAR` 的环境变量，我们可以在爬虫脚本中使用以下示例代码访问它。

```python
import os

foo = os.environ.get('FOO')
print(foo) # BAR
```

## 示例用例

### 示例 1：API 密钥管理
**场景**：安全存储抓取 API 密钥

```python
import os
import requests

api_key = os.environ.get('SCRAPINGHUB_API_KEY')
response = requests.get(
    'https://api.scrapinghub.com/v1/projects',
    headers={'Authorization': f'Bearer {api_key}'}
)
```

### 示例 2：数据库配置
**场景**：不同环境的数据库连接设置

```python
import os
import psycopg2

db_config = {
    'host': os.environ.get('DB_HOST'),
    'port': os.environ.get('DB_PORT', '5432'),  # 默认端口回退
    'user': os.environ.get('DB_USER'),
    'password': os.environ.get('DB_PASSWORD'),
    'database': os.environ.get('DB_NAME')
}

conn = psycopg2.connect(**db_config)
```

### 示例 3：特定环境设置
**场景**：开发/生产环境的不同配置

```python
import os

ENVIRONMENT = os.environ.get('APP_ENV', 'development')
BASE_URL = os.environ.get(
    'API_BASE_URL',
    'https://dev.api.example.com' if ENVIRONMENT == 'development' 
    else 'https://api.example.com'
)
```

### 示例 4：Web 爬虫的代理轮换
**场景**：管理带有身份验证的大规模抓取的多个代理

```python
import os
import random
import requests
from urllib.parse import urlparse

# 从环境变量获取代理列表（逗号分隔）
PROXIES = os.environ.get('CRAWLER_PROXIES', '').split(',')
PROXY_USER = os.environ.get('PROXY_USER', '')
PROXY_PASS = os.environ.get('PROXY_PASS', '')

def get_random_proxy():
    if not PROXIES:
        return None  # 回退到无代理
    proxy = random.choice(PROXIES).strip()
    
    # 如果存在凭据，则添加身份验证
    if PROXY_USER and PROXY_PASS:
        parsed = urlparse(proxy)
        proxy = f"{parsed.scheme}://{PROXY_USER}:{PROXY_PASS}@{parsed.hostname}:{parsed.port}"
    
    return {
        'http': proxy,
        'https': proxy
    }

# 使用示例
response = requests.get(
    'https://example.com',
    proxies=get_random_proxy(),
    timeout=30
)
```