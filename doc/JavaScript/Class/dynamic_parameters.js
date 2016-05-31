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
                set(i, _[i]);
            }
        }
    }
    //写入参数
    function set(key, val) {
        that[key] = val;
    }
};

Good.prototype.getName = function () {
    return this.name;
};

//传入两个不同的实例进行对象构建
var good1 = new Good({
    name: '雪碧'
    , unit: '箱'
    , price: 125.00
});

var good2 = new Good({
    name: '雪碧2'
    , unit: '箱'
    , productTime: '2016-5-31'
});

console.info(good1, good1.getName());
console.info(good2, good2.getName());
