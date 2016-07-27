
# The result for full_test

* 所有的结果都将"+"号替换为“ ”(空格)
* 连续两位的分词，例如：
	* `中国人`"分词为`中 中国 国 国人 人 人民 民`
	* `123*4+5/6`分词为`1 12 2 23 3 3* * *4 4 4+ + +5 5 5/ / /6 6`，其中+替换为“ ”(空格)
	* `【汉字】mark`分词为`【 【汉 汉 汉字 字 字】 】 】m m ma a ar r rk k`

### 1.	tokenizer:"keyword"	,filter:["lowercase"]
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
* 大写转小写


***

### 2.	tokenizer:"keyword"	,filter:["nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 结果太多，不在此赘述，自行尝试。
* 进行了连续两位的分词

***

### 3.	tokenizer:"keyword"	,filter:["standard"]
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
* 仅将“+”号替换为“ ”

***

### 4.	tokenizer:"keyword"	,filter:["lowercase","nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_ln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 结果太多，不在此赘述，自行尝试。
* 进行了连续两位的分词
* 大写转小写

***

### 5.	tokenizer:"keyword"	,filter:["standard","lowercase"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sl&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

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
* 大写转小写

***

### 6.	tokenizer:"keyword"	,filter:["standard","nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 结果太多，不在此赘述，自行尝试。
* 进行了连续两位的分词

***

### 7.	tokenizer:"keyword"	,filter:["standard","lowercase","nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 结果太多，不在此赘述，自行尝试。
* 进行了连续两位的分词
* 大写转小写

***

### 8.	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"prefix","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pp&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hzszgrmhanziMarkDOWNshi123*4 5/6zhongguorenmin",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 1.将所有中文转换成对应小写拼音
* 2.将所有中文拼音首字(z/zh)放在结果前部
* 3.1和2拼接

***

### 9.	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"append","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pa&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hanziMarkDOWNshi123*4 5/6zhongguorenminhzszgrm",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 将所有中文转换成对应小写拼音

***

### 10.	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"only","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_po&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hzszgrm",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 将所有中文拼音首字拼接	

***

### 11.	tokenizer:"keyword"	,filter:{"type":"pinyin","first_letter":"none","padding_char":""}
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hanziMarkDOWNshi123*4 5/6zhongguorenmin",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 将所有中文转换成对应小写拼音	

***

### 12.	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:["standard","nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 结果太多，不在此赘述，自行尝试。
* 1.中文拼音首字+中文转换为对应小写拼音
* 2.将1中的结果进行连续两位的分词

***

### 13.	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:["standard"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hzszgrmhanziMarkDOWNshi123*4 5/6zhongguorenmin",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 同上[8]	

***

### 14.	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:["nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 同上[12]

***

### 15.	tokenizer:{"type":"pinyin","first_letter":"prefix","padding_char":""}	,filter:["lowercase"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hzszgrmhanzimarkdownshi123*4 5/6zhongguorenmin",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 1.将所有中文转换成对应小写拼音
* 2.将所有中文拼音首字(z/zh)放在结果前部
* 3.1和2拼接	
* 大写转小写

***

### 16.	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:["standard","nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 结果太多，不在此赘述，自行尝试。
* 将上[11]结果进行连续两位的分词

***

### 17.	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:["standard"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hanziMarkDOWNshi123*4 5/6zhongguorenmin",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 同上[11]

***

### 18.	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:["nGram"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
* 同上[16]

***

### 19.	tokenizer:{"type":"pinyin","first_letter":"none","padding_char":""}	,filter:["lowercase"]
```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```
```
{
  "tokens" : [ {
    "token" : "hanzimarkdownshi123*4 5/6zhongguorenmin",
    "start_offset" : 0,
    "end_offset" : 26,
    "type" : "word",
    "position" : 1
  } ]
}
```
* 将	上[17]的结果大写转小写

***
