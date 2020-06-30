## Result deduplication

Crawlab has built-in deduplication function for a single spider. If you want to use the built-in deduplication function of Crawlab, you need to turn on the "deduplication" switch in the spider. The specific operation is to navigate to the "spider overview" page, turn on the "deduplication" switch, select the "overwrite" or "ignore" deduplication strategy, and enter the "deduplication field". After the operation is completed, repeat the task, and crawlab will perform the deduplication operation.

⚠️Note: since Crawlab needs to be stored in the corresponding MongoDB, you need to indicate "result set", that is, the corresponding table name, in the spider before deduplication.

### Coverage to deduplication

Coverage to deduplication is to cover the old data and ensure the uniqueness of the data, so as to achieve the purpose of deduplication.

The specific principle and steps are as follows:

1. Find the old data corresponding to the new data according to the "deduplication" field, and delete the old data;
2. Insert new data into the result set.

### Ignore deduplication

It is easier to ignore deduplication than to cover the deduplication. The specific principle is as follows:

1. Find the old data corresponding to the new data according to the "deduplication" field;
2. If there is old data, it is ignored and not inserted;
3. If there is no old data, insert the new data.

### Deduplicate field

The "deduplicated field" is actually the primary key of the result set (although the primary key in MongoDB is always '_id'), multiple data with the same primary key are not allowed. If the deduplication logic of Crawlab is turned on, a unique index will be created on the de duplication field in the result set to ensure the uniqueness of data and the efficiency of data searching.