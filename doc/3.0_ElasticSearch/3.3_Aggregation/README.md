
### 3.3 Aggregation(聚合)
  
##### 3.3.0 请求参数说明
  * [Terms Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html)
  * [size](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html#_size) 

##### 3.3.1 多字段数据聚合
  * [How to get an Elasticsearch aggregation with multiple fields](http://stackoverflow.com/questions/30728583/how-to-get-an-elasticsearch-aggregation-with-multiple-fields#)

```
"body": {
        "aggs": {
          "resolution": {//分辨率，多字段聚合:sw+sh
              "terms": {
                "field": "sw"
              }, "aggs": {
                    "resolution": {
                      "terms": {
                          "field": "sh"
                        }
                    }
                }
            }
        }
    }
```

##### 3.3.2 不进行分词的聚合
  * [Aggregations and Analysis](https://www.elastic.co/guide/en/elasticsearch/guide/current/aggregations-and-analysis.html)
  * [elasticsearch - Aggregation returns terms in key , but not the complete field, how can I get full filed returned?](http://stackoverflow.com/questions/24640117/elasticsearch-aggregation-returns-terms-in-key-but-not-the-complete-field-h) 
  
##### 3.3.3 查询后聚合
  * [过滤查询以及聚合](http://blog.csdn.net/dm_vincent/article/details/42757519)
```
"body": {
        "query": {//先查询
            "term": {
                "date": "2016-07-01"
            }
        }
        , "aggs": {//后聚合
            "user": {
                "terms": {
                    "field": "id"
                    , "size": 10
                }
            }
        }
    }
```

##### 3.3.4 聚合后过滤
  * [Filter Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-filter-aggregation.html)
  
```
  "body": {
        "aggs": {//先聚合
            "user": {
                "filter": {//后过滤
                    "term": {
                        "date": "2016-07-01"
                    }
                }, "aggs": {
                    "user": {
                        "terms": {
                            "field": "id"
                            , "size": 100
                        }
                    }
                }
            }
        }
    }
```
