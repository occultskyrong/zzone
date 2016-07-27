
### Pinyin Analysis for Elasticsearch

> 插件地址:[medcl/elasticsearch-analysis-pinyin](https://github.com/medcl/elasticsearch-analysis-pinyin)
> 插件基于ElasticSearch,v2.3版本docs参见[Elasticsearch Reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)

## 非常感谢medcl大神提供的pinyin插件，以下所有的test example均基于该插件编写

### 名词解释
* [Analysis](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html)          分词、分析
* [Analyzers](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html)			分词器
	* [Standard Analyzer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-standard-analyzer.html)
* [Tokenizers](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenizers.html)        断词

### 基本结构
* copy 自[Analysis](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis.html#analysis)
* #为注释
* 具体名词解释参上[名词解释](#名词解释)
* 翻译可能不准确或不合理，参见英文文档说明

```
index :
	analysis :   #分析模块
        analyzer :			#分词器
            standard :			#标准/默认分词器
                type : standard
                stopwords : [stop1, stop2]
            myAnalyzer1 :
                type : standard
                stopwords : [stop1, stop2, stop3]
                max_token_length : 500
            # configure a custom analyzer which is
            # exactly like the default standard analyzer
            myAnalyzer2 :
                tokenizer : standard
                filter : [standard, lowercase, stop]
        tokenizer :			#断词器
            myTokenizer1 :
                type : standard
                max_token_length : 900
            myTokenizer2 :
                type : keyword
                buffer_size : 512
        filter :			#过滤器
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

#### 需要将地址改为对应es地址
### 测试用例

```
curl -XPUT 'http://192.168.1.101:9200/full_test?pretty' -d '
{

}'
```