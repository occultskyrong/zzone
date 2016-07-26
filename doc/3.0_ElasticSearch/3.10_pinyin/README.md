
### Pinyin Analysis for Elasticsearch

> 插件地址:[medcl/elasticsearch-analysis-pinyin](https://github.com/medcl/elasticsearch-analysis-pinyin)
> 插件基于ElasticSearch,v2.3版本docs参见[Elasticsearch Reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)

## 非常感谢medcl大神提供的pinyin插件，以下所有的test example均基于该插件编写

## 完整测试

#### 需要将地址改为对应es地址

### 名词解释
* [Analysis]()          分词、分词
* [Tokenizers](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenizers.html)        断词

### 基本操作

#### 创建index:full_test
```
curl -XPUT 'http://192.168.1.101:9200/full_test?pretty'
```
#### 删除index:full_test
```
curl -XDELETE 'http://192.168.1.101:9200/full_test?pretty'
```
### 测试用例
```
curl -XPUT 'http://192.168.1.101:9200/full_test?pretty' -d '
{

}'
```