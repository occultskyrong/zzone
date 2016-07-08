
## Eliminating Duplicate
##### 标题取自[Eliminating Duplicate Documents in Elasticsearch]

#### 参考文献
  * [Eliminating Duplicate Documents in Elasticsearch](https://qbox.io/blog/minimizing-document-duplication-in-elasticsearch)
  * [Indexing-time document deduplication](https://discuss.elastic.co/t/indexing-time-document-deduplication/4579)
  * [Deduplication filter?](https://discuss.elastic.co/t/deduplication-filter/21452)

#### 需求分析
  * 用户登录日志包括列数据：用户编号、登录时间、登录日期、设备(pc/wechat/ios/android)、ip
  * 用户登录日志分析时，某个用户频繁登录、注销所造成的冗余数据（同一个用户在单日内多条登录记录）
  * 在一定意义上，统计时是需要去重的，比如为了统计当日登录的用户数量，需要根据用户的编号筛选，每个用户只统计一次登录次数，需要去除多个终端的重复登录日志记录；或者需要统计当日某个终端登录的用户数量，又需要去除某个终端中每个用户在该终端中重复登录的日志记录


