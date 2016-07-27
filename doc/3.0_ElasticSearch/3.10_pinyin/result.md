#### 1	tokenizer:"keyword"	,filter:"lowercase"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "【汉字】markdown是123*4 5/6中国人民",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}

```
#### 2	tokenizer:"keyword"	,filter:"nGram"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "【",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "【汉",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "汉",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "汉字",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "字",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "字】",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "】",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "】M",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "M",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "Ma",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "a",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "ar",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "r",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "rk",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "k",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "kD",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "D",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "DO",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "O",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "OW",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "W",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "WN",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "N",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "N是",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "是",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "是1",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "1",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "12",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "2",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "23",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "3",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "3*",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "*",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "*4",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "4",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "4 ",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : " ",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : " 5",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "5",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "5/",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "/",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "/6",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "6",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "6中",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "中",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "中国",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "国",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "国人",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "人",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "人民",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  }, {
    "token" : "民",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
#### 3	tokenizer:"keyword"	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 4	tokenizer:"keyword"	,filter:"lowercase"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_ln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 5	tokenizer:"keyword"	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sl&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 6	tokenizer:"keyword"	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 7	tokenizer:"keyword"	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 8	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"prefix","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pp&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 9	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"append","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pa&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 10	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"only","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_po&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 11	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"none","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 12	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 13	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 14	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:"nGram"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 15	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:"lowercase"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 16	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 17	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 18	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:"nGram"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
#### 19	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:"lowercase"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```

```
