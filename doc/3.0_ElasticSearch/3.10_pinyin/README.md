
### Pinyin Analysis for Elasticsearch

> 插件地址:[medcl/elasticsearch-analysis-pinyin](https://github.com/medcl/elasticsearch-analysis-pinyin)
> 插件基于ElasticSearch,v2.3版本docs参见[Elasticsearch Reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)

## 非常感谢medcl大神提供的pinyin插件，以下所有的test example均基于该插件编写

#### 建议先查看Elasticsearch中[Analysis此章节中的Docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html)

### 名词解释
 > 参见[《Elasticsearch权威指南（中文版）》-10.4 自定义分析器](http://es.xiaoleilu.com/070_Index_Mgmt/20_Custom_Analyzers.html)
 > 原文见[Custom Analyzers](https://github.com/elastic/elasticsearch-definitive-guide/blob/64bd25cc71d73eac6d0684b31c408266689de37f/070_Index_Mgmt/20_Custom_Analyzers.asciidoc)

[Analysis](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html) 分析
* 每个所属的子元素中`type`即为对应的使用类型，比如
	* analyzer中`type:standard`对应[Standard Analyzer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-standard-analyzer.html) 
	* tokenizer中`type:nGram`对应[NGram Tokenizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html)
	* token filter中`type:nGram`对应[NGram Token Filter](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenfilter.html)
* [Analyzers](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html)			分析器
* [Tokenizers](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenizers.html)        分词器
* [Token Filters](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenfilters.html) 标记过滤器

### 基本结构
* copy 自[Analysis](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html#analysis)
* #为注释
* 具体名词解释参上[名词解释](#名词解释)
* 翻译可能不准确或不合理，参见英文文档说明

```
index :		#索引
	analysis :   #分析模块
        analyzer :			#分析器
            standard :			#自定义分析器(的名字)
                type : standard		#type的可选值(standard、simple、whitespace、stop、keyword、pattern、
												language、snowball、custom)，
									#即为analyzer中Standard Analyzer、Simple Analyzer等等
                stopwords : [stop1, stop2] #停用词
            myAnalyzer1 :		#自定义分析器
                type : standard
                stopwords : [stop1, stop2, stop3]
                max_token_length : 500
            # configure a custom analyzer which is
            # exactly like the default standard analyzer
            myAnalyzer2 :		#自定义分析器
                tokenizer : standard	#使用标准tokenizer，也可以使用自定义的tokenizer
                filter : [standard, lowercase, stop] #使用标准的三个filter
			myAnalyzer3 :		#自定义分析器
				tokenizer :myTokenizer1 #使用自定义的myTokenizer1
				filter : [myTokenFilter1] #使用自定义的myTokenFilter1
        tokenizer :			#分词器
            myTokenizer1 :
                type : standard
                max_token_length : 900
            myTokenizer2 :
                type : keyword
                buffer_size : 512
        filter :			#标记过滤器
            myTokenFilter1 :
                type : stop
                stopwords : [stop1, stop2, stop3, stop4]
            myTokenFilter2 :
                type : length
                min : 0
                max : 2000
```

### 基本操作

#### 创建index:full_test

```
curl -XPUT 'http://192.168.1.101:9200/full_test?pretty'
```
#### 删除index:full_test

```
curl -XDELETE 'http://192.168.1.101:9200/full_test?pretty'
```
## 完整测试

#### 需要将地址改为对应es地址，测试环境的es版本为1.5.0
### 测试用例

#### 定义多个分析器
```
curl -XPUT 'http://192.168.1.101:9200/full_test?pretty' -d '

{
    index: {
        analysis: {
            analyzer: {
                k_l: {
                    tokenizer: "keyword"
                    , filter: ["lowercase"]
                }
                , k_n: {
                    tokenizer: "keyword"
                    , filter: ["nGram"]
                }
                , k_s: {
                    tokenizer: "keyword"
                    , filter: ["standard"]
                }
                , k_ln: {
                    tokenizer: "keyword"
                    , filter: ["lowercase", "nGram"]
                }
                , k_sl: {
                    tokenizer: "keyword"
                    , filter: ["standard", "lowercase"]
                }
                , k_sn: {
                    tokenizer: "keyword"
                    , filter: ["standard", "nGram"]
                }
                , k_sln: {
                    tokenizer: "keyword"
                    , filter: ["standard", "lowercase", "nGram"]
                }
                , k_pp: {
                    tokenizer: "keyword"
                    , filter: ["pp"]
                }
                , k_pa: {
                    tokenizer: "keyword"
                    , filter: ["pa"]
                }
                , k_po: {
                    tokenizer: "keyword"
                    , filter: ["po"]
                }
                , k_pn: {
                    tokenizer: "keyword"
                    , filter: ["pn"]
                }
                , pp_sn: {
                    tokenizer: "pp"
                    , filter: ["standard", "nGram"]
                }
                , pp_s: {
                    tokenizer: "pp"
                    , filter: ["standard"]
                }
                , pp_n: {
                    tokenizer: "pp"
                    , filter: ["nGram"]
                }
                , pp_l: {
                    tokenizer: "pp"
                    , filter: ["lowercase"]
                }
                , pn_sn: {
                    tokenizer: "pn"
                    , filter: ["standard", "nGram"]
                }
                , pn_s: {
                    tokenizer: "pn"
                    , filter: ["standard"]
                }
                , pn_n: {
                    tokenizer: "pn"
                    , filter: ["nGram"]
                }
                , pn_l: {
                    tokenizer: "pn"
                    , filter: ["lowercase"]
                }
            }
            , tokenizer: {
                pp: {
                    type: "pinyin"
                    , first_letter: "prefix"
                    , padding_char: ""
                }
                , pa: {
                    type: "pinyin"
                    , first_letter: "append"
                    , padding_char: ""
                }
                , po: {
                    type: "pinyin"
                    , first_letter: "only"
                    , padding_char: ""
                }
                , pn: {
                    type: "pinyin"
                    , first_letter: "none"
                    , padding_char: ""
                }
            }
            , filter: {
                pp: {
                    type: "pinyin"
                    , first_letter: "prefix"
                    , padding_char: ""
                }
                , pa: {
                    type: "pinyin"
                    , first_letter: "append"
                    , padding_char: ""
                }
                , po: {
                    type: "pinyin"
                    , first_letter: "only"
                    , padding_char: ""
                }
                , pn: {
                    type: "pinyin"
                    , first_letter: "none"
                    , padding_char: ""
                }
            }
        }
    }
}'
```

#### 实测以上所有analyzer
* 使用字符串'【汉字】MarkDOWN是123*4+5/6中国人民'，进行encodeURI后加入url
* 具体结果参见[result.md](../result.md)

```

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_ln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sl&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_sln&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pp&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pa&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_po&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=k_pn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pp_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_sn&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_s&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_n&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

curl -XGET 'http://192.168.1.101:9200/full_test/_analyze?pretty&analyzer=pn_l&text=%E3%80%90%E6%B1%89%E5%AD%97%E3%80%91MarkDOWN%E6%98%AF123*4+5/6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91'

```

