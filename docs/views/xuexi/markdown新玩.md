---
title: markdown新玩
date: 2020-07-17
tags:
- markdown
- 手册
---


bar1
<div v-for="i in 3" class="aa">遍历 ： {{ i }} </div>

<div v-for="item in aa" :class="item.className">遍历 ： {{ item.name }} </div>

<input type='text'>
<input type='password'>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

{{ $page }}

图片放到public中，md中使用
<img :src="$withBase('/img/logo.jpg')" alt="mixureSecure">




<style>
    div.ceshi1{color:red;}
    div.ceshi2{color:yellow;}
    div.ceshi3{color:green;}
    div.ceshi4{color:blue;}
</style>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      aa:[
            {name:'测试1',className:'ceshi1'},
            {name:'测试2',className:'ceshi2'},
            {name:'测试3',className:'ceshi3'},
            {name:'测试4',className:'ceshi4'},
            {name:'测试5',className:'ceshi5'}
        ]
    }
  },
  mounted () {
    // import('./lib-that-access-window-on-import').then(module => {
    //   this.dynamicComponent = module.default
    // })
  }
}
</script>


# 别走，请留下你的声音
<Vssue title="test评论" />