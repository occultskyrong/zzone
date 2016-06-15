
## JavaScript的对象化


### 1.0 构造对象

  * 当获取到api返回的参数时，因api支持不同的终端，所以参数的构成可能不同，在支持相同对象的前提下（即表述同一值的参数的key应相同，例如商品名称用name而不是title或者其他）,根据api传递的参数不同，需要将相同类的数据进行聚合；
  * 但另一方面，不得不考虑同一api或者相似api，在页面构造时可能显示的值不同，所以需要进行局部相同的实例化。
  * 以下进行简单的探索：

#### 1.0.1 动态化参数传递

###### 根据参数obj中key值的不同，获取不同的实例，具体参见[动态化参数传递](./1.0.1_dynamic_parameters.js)

#### 1.0.2 可配置式动态化参数筛选

###### 根据keys的配置，来筛选所需的参数，具体参见[可配置式动态化参数传递](https://github.com/occultskyrong/zzone/blob/master/doc/JavaScript/Class/1.0.2_dynamic_parameters_option.js)

#### 1.0.3 含变更、可配置式动态化参数筛选

###### 有时候后端返回的参数需要进行一些转换，或者多个api返回的接口所包含的相同意义的key是不同名的，需要统一key的名称
 ```//todo 缺少实例```
 
 > 根据以上，需求的是对后端api返回的数据结构进行可配置式的动态重构。

#### 1.0.4 [动态调用方法](https://github.com/occultskyrong/zzone/blob/master/doc/JavaScript/Class/1.0.4_dynamic_function)
