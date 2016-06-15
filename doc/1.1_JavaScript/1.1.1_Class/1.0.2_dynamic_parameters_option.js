/**
 * Created by zrz on 2016/5/31.
 * @version 1.0.0 created
 */

"use strict";

/**
 * 根据形参内容的不同生成不同key的实例
 * @arguments[0]    传入的对象
 * @arguments[1]    需要获取的key数组
 * @constructor
 */
var Good = function () {
    if (arguments && arguments.length > 0) {
        var that = this
            , _ = arguments[0]
            , keys = arguments.length > 1 && arguments[1] || [];
        if (_ && typeof _ === 'object' && Object.keys(_).length > 0) {
            for (var i in _) {
                if (_.hasOwnProperty(i)) {
                    if (keys.length > 0) {
                        if (keys.indexOf(i) >= 0) {
                            that[i] = _[i];
                        }
                    } else {
                        that[i] = _[i];
                    }
                }
            }
        }
    }
};

//实例用法:
// 两个参数，选择提取
 var good1 = new Good({name: '哈哈哈', unit: '箱', price: 125, amount: 0, info: '雪碧很好喝'}, ['name']);
// 一个参数，全部提取
 var good2 = new Good({name: '哈哈哈', unit: '箱', price: 125, amount: 0, info: '雪碧很好喝'});

 console.info(good1)
 
 console.info(good2)
