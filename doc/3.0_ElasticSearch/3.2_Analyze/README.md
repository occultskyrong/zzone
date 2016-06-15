
## 3.2 Analyze(分词)

#### 3.2.0 [ES自带标准分词](https://www.elastic.co/guide/en/elasticsearch/guide/current/analysis-intro.html)

 分词测试实例：
```
GET /_analyze
{
  "analyzer": "standard",
  "text": "Text to analyze"
}
```
the result:
```
{
   "tokens": [
      {
         "token":        "text",
         "start_offset": 0,
         "end_offset":   4,
         "type":         "<ALPHANUM>",
         "position":     1
      },
      {
         "token":        "to",
         "start_offset": 5,
         "end_offset":   7,
         "type":         "<ALPHANUM>",
         "position":     2
      },
      {
         "token":        "analyze",
         "start_offset": 8,
         "end_offset":   15,
         "type":         "<ALPHANUM>",
         "position":     3
      }
   ]
}
```
