## Integration with general Python crawler

Add the following code to the results save section of your crawler.

```python
# Reference save result method
from crawlab import save_item

# This is a result. It needs to be dict type
result = {'name': 'crawlab'}

# Call save result method
save_item(result)
```

Then start the crawler. After running, you should be able to see the result in **task details - result**.
