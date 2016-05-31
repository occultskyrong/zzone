/**
 * Created by zrz on 2016/5/31.
 * @version 1.0.0 created 动态化参数传递
 */

"use strict";

//根据形参内容的不同生成不同key的实例
var Good = function (_) {
    var that = this;
    if (_ && typeof _ === 'object' && Object.keys(_).length > 0) {
        for (var i in _) {
            if (_.hasOwnProperty(i)) {
                that[i] = _[i];
            }
        }
    }
};
//计算总价
Good.prototype.sum = function () {
    return parseFloat(parseFloat((this.amount || 0) * (this.price || 0)).toFixed(2));
};

var good1 = new Good({
    name: '雪碧'
    , unit: '箱'
    , price: 125.00
    , amount: 0
    , info: '雪碧很好喝'
});

var good2 = new Good({
    name: '可口可乐'
    , unit: '箱'
    , price: 10
    , amount: 0
    , productTime: '2016-5-31'
});

good1.name = '哈哈哈';
console.info(good1, good1.name);

console.info(good2, good2.sum());
good2.amount = 1.15645231;//改变数量
console.info(good2, good2.sum());
good2.price = 12.13651;//改变价格
console.info(good2, good2.sum());
