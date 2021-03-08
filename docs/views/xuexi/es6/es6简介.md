---
title: es6简介
date: 2021-02-01
tags:
- js
- es6
---



# 介绍
1. ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言

# 与JavaScript的区别
1. ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。

# Babel 转码器
1. Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。
::: tip
    // 转码前
    input.map(item => item + 1);

    // 转码后
    input.map(function (item) {
        return item + 1;
    });
:::
2. 配置文件.babelrc ， Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。
::: tip
    //该文件用来设置转码规则和插件，基本格式如下。
    {
        "presets": [],  //presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
        "plugins": []
    }

    // 官方提供规则
    # 最新转码规则
    $ npm install --save-dev @babel/preset-env
    # react 转码规则
    $ npm install --save-dev @babel/preset-react

    // eg
    {
        "presets": [
            "@babel/env",
            "@babel/preset-react"
        ],
        "plugins": []
    }
:::



