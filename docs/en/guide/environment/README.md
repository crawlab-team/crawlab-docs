# Environment Variables

::: info NOTE
This feature is only available in the [Crawlab Pro Edition](https://www.crawlab.cn/prices).
:::

Crawlab allows users to set environment variables during spider runtime.

## Setting Environment Variables

1. Navigate to the `Environment Variables` page.
2. Click the `Create Environment Variable` button.
3. Fill in the configuration form.

## Accessing Environment Variables

Assuming we have set an environment variable with the key `FOO` and the value `BAR`, we can access it in a spider script using the following sample code.

```python
import os

foo = os.environ.get('FOO')
print(foo) # BAR
```