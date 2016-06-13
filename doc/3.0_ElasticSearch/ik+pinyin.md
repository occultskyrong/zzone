
使用elasticsearch作为商品数据库时，通过使用es的pinyin和ik插件完成建议和搜索的任务


### 1. 用户故事：

  * 电商网站，根据用户输入的关键词或者拼音，搜索对应名称、分类、标签的商品
  * 第一步：用户在搜索框内输入拼音或者拼音的首字母时，对用户输入的内容进行提示，具体的实现参照jd、baidu、taobao，这一步姑且称为拼音识别/建议（suggest），即根据用户输入的拼音来猜测用户想要搜索的关键词。
  * 第二步，用户选择建议列表中的中文词汇进行搜索、或者用户直接将输入的拼音进行搜索，通过搜索商品对应的名称、分类、标签中匹配的内容进行显示。这一步姑且称为内容搜索（search），即根据用户输入的内容进行数据的搜索，提供给用户相似度比较高的商品的数据 
  
### 2. 我的理解：

#### 2.1 第一步中：用户输入的拼音，无论中间是否有空格，后端是不考虑的，后端只考虑用户输入的拼音或者内容在后端数据库中匹配的程度，也不考虑分词的概念，只不过是把用户输入的内容在后端数据库用like或者split，即string的切分（拼音根据中文对应拼音来切分）来进行判断。

* 举个栗子：jd中输入'nxxxx'，给出的结果中（如下图），有"男鞋 休闲鞋"这种中间进行了空格分隔的关键词。![nxxxx的建议](https://raw.githubusercontent.com/occultskyrong/zzone/master/doc/3.0_ElasticSearch/images/mdwss.png)
 
* 而'md wss'这种中间有空格来间隔的，反而结果中是连续的。![md wss的建议](https://github.com/occultskyrong/zzone/blob/master/doc/3.0_ElasticSearch/images/mdwss.png?raw=true)
 
* 继续使用中文进行建议，输入"娃哈哈 饮品"，他不会把"娃哈哈 水 无汽苏打水饮品 350ml*12/箱 整箱装"拆开进行匹配。![娃哈哈 饮品](https://github.com/occultskyrong/zzone/blob/master/doc/3.0_ElasticSearch/images/%E5%A8%83%E5%93%88%E5%93%88%20%E9%A5%AE%E5%93%81.png?raw=true)
 
* 所以我认为，他只是把[去除空格或者其他符号]后的[拼音或者中文]匹配对应商品的名称中的一部分进行切分匹配，js中split的概念
 
#### 2.2 第二步中：用户输入的内容，无论是否拼音、中文、英文，后端都是按照关键词去匹配，后端只考虑用户输入的内容在后端是否能通过关键词/分词匹配到对应内容，而不考虑这个内容是否是拼音。他只是进行了分词的搜索。

* 举个栗子：jd中搜索"娃哈哈 sds"，他不会搜索到"娃哈哈苏打水"的商品，只会去搜索“娃哈哈”、“sds”这两个分词匹配的内容。![娃哈哈 sds](https://github.com/occultskyrong/zzone/blob/master/doc/3.0_ElasticSearch/images/%E5%A8%83%E5%93%88%E5%93%88%20sds.png?raw=true)

* 就算是使用“娃哈哈sds”，也是一样，如下图。而输入“娃哈哈sds”进行建议时会把“娃哈哈苏打水”给提示出来。![娃哈哈sds](https://github.com/occultskyrong/zzone/blob/master/doc/3.0_ElasticSearch/images/%E5%A8%83%E5%93%88%E5%93%88sds.png)

* 所以我认为，他只是把[进行分词后]的搜索内容对应的关键词进行后端数据库分词的检索，而不考虑是否是拼音。

### 3. 技术实现：
* 基于以上考虑，我认为ik适合用来进行搜索部分的接口，pinyin这个插件适合进行建议部分的接口 
* 所以我认为suggest和search是两个步骤，也是两个方向。前者需要考虑拼音，不要考虑分词。后者需要考虑分词，不需要考虑拼音。

### 不知道我这么理解是否符合“正规军”的逻辑

### 未完，因为需要考虑当使用es作为建议和搜索的数据库时，某一个字段应该如何同时支持ik和pinyin这两个伟大的工具



