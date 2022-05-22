## Integration with general Node.js spider

Add the following code to the results save section of your spider.

```javascript
// Import SDK
const crawlab = require('crawlab-sdk');

// This is a result. It needs to be object type
const result = {name: 'crawlab'};

(async () => {
    // Call save result method
    await crawlab.saveItem(result);

    // Close the database connection, otherwise the program will not end
    await crawlab.close();
})();
```

Then start the spider. After running, you should be able to see the result in **task details - result**.
