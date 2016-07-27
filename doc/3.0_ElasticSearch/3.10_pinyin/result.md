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
> 将“+”号替换为“ ”(空格)，大写转小写

***

#### 2	tokenizer:"keyword"	,filter:"nGram"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
> 结果太多，不在此赘述，自行尝试。
> 进行了连续两位的分词,"中国人民"分词为“中 中国 国 国人 人 人民 民”

***

#### 3	tokenizer:"keyword"	,filter:"standard"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "【汉字】MarkDOWN是123*4 5/6中国人民",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
> 仅将“+”号替换为“ ”

***

#### 4	tokenizer:"keyword"	,filter:"lowercase"
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_ln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
> 结果太多，不在此赘述，自行尝试。
> 进行了连续两位的分词,"中国人民"分词为“中 中国 国 国人 人 人民 民”，大写转为小写

***

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
