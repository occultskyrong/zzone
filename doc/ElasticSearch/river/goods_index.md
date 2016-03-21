# 0.0 文档说明
- 使用192.168.0.103上端口为9200的es进行数据同步
- 同步的文档信息`{"_index":"goods_index","_type":"goods_mapping"}`
- 数据来源为192.168.0.103上端口为3306的db

## 1.0	[get]	查看索引中文档
```

curl -XGET 'http://192.168.0.103:9200/goods_index/goods_mapping/_search?pretty'

```
##2.0	[get]	查询索引所属river
```

curl -XGET 'http://192.168.0.103:9200/_river/goods_river/_search?pretty'

```
##3.0	[get]	获取所有river状态
```

curl -XGET 'http://192.168.0.103:9200/_river/jdbc/*/_state?pretty'

```
##3.1	[get]	获取good_index的river状态
```

curl -XGET 'http://192.168.0.103:9200/_river/jdbc/goods_river/_state?pretty'

curl -XGET 'http://192.168.0.103:9200/_river/goods_river/_meta?pretty'

```

##4.0	[readme]	每次更新river配置，需要把原有配置删除后创建参见5.0

## 4.1	[post]	创建增量更新(每10分钟一次)
### 4.1.0 增量使用的timestamp或datetime来自于[3.1]中的"state"中
```

curl -XPOST  http://192.168.0.103:9200/_river/goods_river/_meta?pretty -d '
 {
    "type": "jdbc",
    "jdbc": {
        "url": "jdbc:mysql://192.168.0.103:3306/ctcdb_beta",
        "user": "root",
        "password": "ctc@win@sql",
        "sql": {
            "statement": "select *,id as _id,name as name_pinyin,name as suggest_prefix,name as suggest_full from v_on_sell_goods_search where updatedAt > ?"
            , "parameter": ["$river.state.last_active_begin"]
        },
        "index": "goods_index",
        "type": "goods_mapping",
        "bulk_size": 100,
        "max_bulk_requests": 30,
        "bulk_timeout": "10s",
        "flush_interval": "5s",
        "schedule": "0 0/10 0-23 ? * *"
    }
}'

```

## 4.2	[post]	非增量
```

curl -XPOST  http://192.168.0.103:9200/_river/goods_river/_meta?pretty -d '
 {
    "type": "jdbc",
    "jdbc": {
        "url": "jdbc:mysql://192.168.0.103:3306/ctcdb_beta",
        "user": "root",
        "password": "ctc@win@sql",
        "sql": "select *,id as _id,name as name_pinyin,name as suggest_prefix,name as suggest_full from v_on_sell_goods_search",
        "index": "goods_index",
        "type": "goods_mapping",
        "bulk_size": 100,
        "max_bulk_requests": 30,
        "bulk_timeout": "10s",
        "flush_interval": "5s",
        "schedule": "0 0/10 0-23 ? * *"
    }
}'

```
##4.9	[bug]	出现错误：
#### 		MapperParsingException[failed to parse [jdbc.sql]]; nested: ElasticsearchIllegalArgumentException[unknown property [statement]]; 
#### >>> 	解决方案：删除river，重写

##5.0	[delete]	删除river配置
```

curl -XDELETE 'http://192.168.0.103:9200/_river/goods_river?pretty'

```

##9.0	[get]	验证
```

curl -XGET 'http://192.168.0.103:9200/goods_index/goods_mapping/117294?pretty'

```
