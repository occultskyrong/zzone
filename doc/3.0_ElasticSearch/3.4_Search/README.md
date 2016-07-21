
### 3.4 Search(搜索)

#### 3.4.0 《Elasticsearch权威指南》 
 * [最重要的查询过滤语句](http://es.xiaoleilu.com/054_Query_DSL/70_Important_clauses.html)
 * [搜索——基本的工具](http://es.xiaoleilu.com/050_Search/00_Intro.html)
 * [结构化搜索](http://es.xiaoleilu.com/080_Structured_Search/00_structuredsearch.html)

#### 3.4.3 bool
 * [Bool Query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html)
 * [Finding Multiple Exact ](https://www.elastic.co/guide/en/elasticsearch/guide/current/_finding_multiple_exact_values.html)

#### 3.4.4 term/terms & match
  * term和match的不同：[elasticsearch 查询（match和term）](http://www.cnblogs.com/yjf512/p/4897294.html)(文章署名叶剑峰（链接http://www.cnblogs.com/yjf512/）)
  * [Range Query(范围查询)](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html)
  * [elasticsearch match vs term query](http://stackoverflow.com/questions/23150670/elasticsearch-match-vs-term-query)(term和match同时存在)
```
"body": {
        query: {
            filtered: {
                query: {
                    match_phrase: {
                        ua: "chrome"
                    }
                }, filter: {
                    bool: {
                        must: {
                            term: {
                                date: '2016-07-01'
                            }
                        }
                    }
                }
            }
        }
    }
```
  * 多field的match需要使用bool，see[Multiple Query Strings](https://www.elastic.co/guide/en/elasticsearch/guide/current/multi-query-strings.html)
```
{
        query: {
            filtered: {
                query: {
                    bool: {
                        must: [{
                            match_phrase: {
                                system: 'mall_server'
                            }
                        }, {
                            match: {
                                message: 'getTime'
                            }
                        }]
                    }
                }, filter: {
                    range: {
                        time: {
                            gte: '2016-07-20 00:00:00 000'
                            , lte: '2016-07-20 23:59:59 999'
                        }
                    }
                }
            }
        }
    }
```
  * 

#### 3.4.5 should & must/must_not
