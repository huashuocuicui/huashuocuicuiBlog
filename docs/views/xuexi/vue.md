---
title: vue
date: 2021-02-01
tags:
- js
- es6
---


###  vue中使用require(path)报错 

描述:       vue中使用require(path)，path为变量时会报错，而require中为静态地址则不会报错 <br>
原因：      webpack本身是一个预编译的打包工具，无法预测未知变量路径 不能require纯变量路径 <br>
解决办法：   1. require(path) ,path 至少要有三部分组成, 目录+文件名+后缀 
            2. 目录 => webpack 才知道从哪里开始查找 
            3. 后缀 => 文件后缀，必须要加上，不然会报错 
            4. 文件名 => 可用变量表示   

::: details 查看解决办法
```js
    // 不能完全使用变量，前置地址必须是静态地址，否则会报错
    value.svg = require('@/assets/' + item.svg )  
```
:::