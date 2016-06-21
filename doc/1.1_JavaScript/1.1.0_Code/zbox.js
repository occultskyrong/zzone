/**
 * Created by zrz on 2016/6/21.
 * @version 1.0.0 created 工具类
 */
 
"use strict";

var Zbox=(function(){

//获取时间段内所有月份
        var months = function (st, et) {//有序数组
            var arr = []
                , sy = st.getFullYear()
                , sm = st.getMonth() + 1
                , ey = et.getFullYear()
                , em = et.getMonth() + 1
                , len = (ey - sy) * 12 + (em - sm) + 1
                ;
            for (var l = 0; l < len; l++) {
                var yyy = parseInt((l + sm) / 12) //是否需要年的切换
                    , mm = (l + sm) % 12 //月份转换为标准月份
                    , yy = sy + (mm === 0 ? yyy - 1 : yyy);//12月份不需要切换年
                mm = mm === 0 ? 12 : mm;//12月
                mm = (mm < 10 ? '0' : '') + mm; //小于10的补前缀0
                arr.push(yy + '-' + mm);
            }
            return arr;
        };
}());
