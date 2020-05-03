## API

Crawlab adopts the architecture mode(B/S) of separating the front end and the back end, the front end interacts with the back end by API, therefore, the external system can access and operate Crawlab through the API directly in theory. Many enterprises have their own management systems and want to integrate Crawlab as a crawler management system in some way, so the developers have opened the API of Crawlab, so that external systems can access and operate Crawlab by API. This enhances the integration of Crawlab. Crawlab accesses other systems in the form of [Web Hook](../Spider/Webhook.md).

To use the API is very simple, just create a [API token](./ApiToken.md) in Crawlab. You can see the [API token chapter](./ApiToken.md) to create a token.

### API Verification

When developers request an API, they need to put the API Token in the 'Authorization' field in the Headers. Here is an example of Python code.

```python
import requests

url = 'http://crawlab.cn/api/nodes'

api_token = 'xxxx'

headers = {
  'Authorization': 'xxxx'
}

res = requests.get(url, headers=headers)
```

### API Document

**API Documents** is under development. It is recommended that you can check the source code of the back-end to understand the callable API temporarily.