---
title: 云枢-BUG库
date: 2020-03-17
tags:
- BUG
- h3
categories: 
 - h3
---

<el-row :gutter="20">
  <el-col :span="12"><div class="grid-content bg-purple"><el-input placeholder="请输入密码进行查看" v-model="pwd" show-password @keyup.enter.native="login"></el-input></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"><el-button type="success" @click="login">查看</el-button></div></el-col>
</el-row>
<div v-if="ispwd">


###  移动端列表修改代码后发布，页面空白

1. 描述.       移动端列表页设计后发布页面显示空白（代码设计）
2. 原因：      产品模板中checkbox标签缺少闭合标签，
3. 解决办法：  在CheckBox标签上加上个闭合标签

::: details 查看解决办法

<div class="demo-image__preview">
<el-image class="imgs" :src="$withBase(srcList_1[0])" :preview-src-list="srcList_1"></el-image>
<el-image class="imgs" :src="$withBase(srcList_1[1])" :preview-src-list="srcList_1"></el-image>
<el-image class="imgs" :src="$withBase(srcList_1[2])" :preview-src-list="srcList_1"></el-image>
<el-image class="imgs" :src="$withBase(srcList_1[3])" :preview-src-list="srcList_1"></el-image>
</div>

:::


###  流程中心的筛选 ”流程模板“ 不能选中

1. 描述.       在我的待办、已办等中的流程模板下拉选择不能选中
2. 原因：      产品封装方法，未知，
3. 解决办法：  模型要建立分组，放到组下面才可以在我的待办等页面中的流程模板下拉框选择

::: details 查看解决办法

<div class="demo-image__preview">
<el-image class="imgs" :src="$withBase(srcList_2[0])" :preview-src-list="srcList_2"></el-image>
<el-image class="imgs" :src="$withBase(srcList_2[1])" :preview-src-list="srcList_2"></el-image>
</div>

:::








</div>


<script>
    export default {
        data() {
            return {
                ispwd:false,
                pwd:'',
                srcList_1:[
                    '/img/authine/yunshu/mobile1.png',
                    '/img/authine/yunshu/mobile2.png',
                    '/img/authine/yunshu/mobile3.png',
                    '/img/authine/yunshu/mobile4.png'
                ],
                srcList_2:[
                    '/img/authine/yunshu/mobile2_1.png',
                    '/img/authine/yunshu/mobile2_2.png',
                ]
            }
        },
        mounted () {
            this.pwd = "";
        },
        methods:{
            login(){
                let pwdMd5 = this.$md5(this.pwd)
                if(pwdMd5 == "6a957366fd1c72d726f99bbe77ccfa85"){
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

<style>
.imgs{
    width:24%;
    height:200px;
    padding:10px;
    box-sizing:border-box;
}

</style>