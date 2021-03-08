---
title: es6变量声明
date: 2021-02-01
tags:
- js
- es6
---





<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"><el-input placeholder="请输入密码进行查看" v-model="pwd" show-password @keyup.enter.native="login"></el-input></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"><el-button type="success" @click="login">查看</el-button></div></el-col>
</el-row>

<div v-if="ispwd">

# 变量声明  6种
## var  (es5)

## funuction    (es5)

## let

## const

## import

## class

<div style="color:red;">import、class 详情后面模块单独讲解</div>

<div>
    <img :src="$withBase('/img/logo.jpg')" alt="mixureSecure">
</div>


</div>


<script>
    export default {
        data() {
            return {
                ispwd:false,
                pwd:''
            }
        },
        mounted () {
            this.pwd = "";
        },
        methods:{
            login(){
                console.log(this.pwd)
                if(this.pwd == "123456"){
                    this.ispwd = true;
                }else{
                    this.pwd = "";
                    this.ispwd = false;
                    this.$message.error('密码输入错误，请重新输入，或联系博主！');
                }
            }
        }
    }
</script>