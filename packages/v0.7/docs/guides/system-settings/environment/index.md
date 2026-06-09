---
sidebar_position: 3
title: Environment Variables
---

:::info
This feature is only available in **Crawlab Pro**.
:::

Crawlab allows users to set environment variables during spider runtime.

## Why Use Environment Variables?

Using environment variables in Crawlab offers several important advantages:

- **Configuration Separation**: Keep configuration separate from code, following best practices
- **Sensitive Data Management**: Securely store API keys, credentials, and tokens outside your code
- **Environment-Specific Settings**: Easily configure different values for development, testing, and production
- **Centralized Management**: Update configurations for all spiders from a single location
- **Runtime Flexibility**: Change behavior of spiders without modifying code
- **Enhanced Security**: Avoid hardcoding sensitive information in spider scripts

## Create Environment Variables

1. Navigate to the `System Settings` page.
2. Click the `Environment` tab.
3. Click the `New Environment Variable` button.
4. Fill in the configuration form.
5. Click the `Confirm` button.

## Use Environment Variables

Assuming we have set an environment variable with the key `FOO` and the value `BAR`, we can access it in a spider script using the following sample code.

```python
import os

foo = os.environ.get('FOO')
print(foo) # BAR
```

## Example Use Cases

### Example 1: API Key Management
**Scenario**: Secure storage of a scraping API key

```python
import os
import requests

api_key = os.environ.get('SCRAPINGHUB_API_KEY')
response = requests.get(
    'https://api.scrapinghub.com/v1/projects',
    headers={'Authorization': f'Bearer {api_key}'}
)
```

### Example 2: Database Configuration
**Scenario**: Database connection settings for different environments

```python
import os
import psycopg2

db_config = {
    'host': os.environ.get('DB_HOST'),
    'port': os.environ.get('DB_PORT', '5432'),  # Default port fallback
    'user': os.environ.get('DB_USER'),
    'password': os.environ.get('DB_PASSWORD'),
    'database': os.environ.get('DB_NAME')
}

conn = psycopg2.connect(**db_config)
```

### Example 3: Environment-Specific Settings
**Scenario**: Different configurations for development/production

```python
import os

ENVIRONMENT = os.environ.get('APP_ENV', 'development')
BASE_URL = os.environ.get(
    'API_BASE_URL',
    'https://dev.api.example.com' if ENVIRONMENT == 'development' 
    else 'https://api.example.com'
)
```

### Example 4: Proxy Rotation for Web Crawlers
**Scenario**: Managing multiple proxies with authentication for large-scale scraping

```python
import os
import random
import requests
from urllib.parse import urlparse

# Get proxy list from environment variable (comma-separated)
PROXIES = os.environ.get('CRAWLER_PROXIES', '').split(',')
PROXY_USER = os.environ.get('PROXY_USER', '')
PROXY_PASS = os.environ.get('PROXY_PASS', '')

def get_random_proxy():
    if not PROXIES:
        return None  # Fallback to no proxy
    proxy = random.choice(PROXIES).strip()
    
    # Add authentication if credentials exist
    if PROXY_USER and PROXY_PASS:
        parsed = urlparse(proxy)
        proxy = f"{parsed.scheme}://{PROXY_USER}:{PROXY_PASS}@{parsed.hostname}:{parsed.port}"
    
    return {
        'http': proxy,
        'https': proxy
    }

# Usage example
response = requests.get(
    'https://example.com',
    proxies=get_random_proxy(),
    timeout=30
)
```
