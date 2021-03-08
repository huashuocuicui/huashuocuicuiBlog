---
title: h3-BUG库
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


###  chrome88 版本 待办处理完不刷新数据     10.7.3

1. 描述.       待办表单提交，表单关闭后，待办列表不会刷新；
2. 原因：      88版本 window.opener 支持有问题，影响产品刷新逻辑
3. 解决办法：  在待办controller 里渲染列表的字段 实现打开表单的a标签加 rel="opener"

::: details 查看解决办法
```js
    <a href="" target="_blank" rel="opener">链接</a>
```
:::

###  IE 浏览器流程状态-保存图片功能异常     10.7.3

1. 描述：      ie浏览器点击保存图片无反应；
2. 原因：      ie浏览器的document.execCommand("SaveAs") 不起作用 
3. 解决办法：  利用canvas实现下载

::: details 查看解决办法
```js
    // 文件目录：portal\frontend\Portal\WFRes\_Scripts\designer\WorkflowDocument.js
    // 重构  DoSaveAsIMG 方法
    DoSaveAsIMG: function () {
        if (document.all.IframeReportImg.src != "about:blank") {
            // window.frames["IframeReportImg"].document.execCommand("SaveAs");
            var url = document.all.IframeReportImg.src;
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, img.width, img.height);
                var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
                var dataURL = canvas.toDataURL('image/' + ext);
                var base64 = {
                    dataURL: dataURL,
                    type: 'image/' + ext,
                    ext: ext
                };
                var parts = base64.dataURL.split(';base64,');
                var contentType = parts[0].split(':')[1];
                var raw = window.atob(parts[1]);
                var rawLength = raw.length;
                var uInt8Array = new Uint8Array(rawLength);
                for (var i = 0; i < rawLength; i++) {
                    uInt8Array[i] = raw.charCodeAt(i);
                }
                var blob = new Blob([uInt8Array], { type: contentType });
                window.navigator.msSaveBlob(blob, '流程图.jpg');
            };
        }
    },
    
    // 修改生成图片 -- 在 veAsImage 方法
    // 1. 添加背景色
    canvas.attr("width", _width).attr("height", _height).css("width", _width + "px").css("height", _height + "px");
    var context = canvas[0].getContext('2d');
    context.fillStyle = "#ffffff";      //新加代码
    context.fillRect(0,0,_width,_height);   //新加代码
    // 2. 修改生成图片格式 原格式png 需要修改为jpeg（不修改会出现黑底）
    $("#divImage img").attr("src", canvas[0].toDataURL("image/png").toString()); // 修改前 
    $("#divImage img").attr("src", canvas[0].toDataURL("image/jpeg").toString());// 修改后
```
:::


###  IE浏览器 后台管理用户设置界面出现乱码（页面元素直接输出到页面）    10.7.3

1. 描述.       用户设置界面出现页面元素直接输出到页面 没有渲染。
2. 原因：      后台管理用户模块采用了vue开发，用了一些es6语法且没有转es5，导致ie浏览器不能识别
3. 解决办法：  修改为es5的语法

::: details 查看解决办法
```js
    changeTel (e) {}  --->   changeTel:function(e) {}
```
:::

###  修改子表计算bug (泰康)    10.7

1. 描述.       子表中产品提供的几种计算函数计算结果错误
2. 原因：      在某次二开过程中，改变了页面元素结构。而产品子表计算规则是根据元素层级取值计算。
3. 解决办法：  重新修改子表计算函数的取值。

::: details 查看解决办法
```js
    // Portal\WFRes\_Scripts\MvcSheet\MvcSheetAll.min.js
    
    if (e(o[s]).attr("data-field") == a) {
        // var d = e(o[s]).children().text() || e(o[s]).children().val() || "0",  // 原产品取值
        var d = e(o[s]).children(":not(p)").text() || e(o[s]).children().val() || "0",  // 修改后的取值
            c = d;
        isNaN(d) && (c = parseFloat(d.replace(/,/g, "").replace(/$/g, "").replace(/¥/g, ""))), h += parseFloat(c), l++, r.push(c)
    }
```
:::

###  修改子表影响下拉框bug  (泰康)    10.7

1. 描述.       主表上的多级下拉框在选中后，出发子表增加行、删除行时导致下拉框内的值变为空或者变为下拉框内第一选项的值。
2. 原因：      下拉框中配置的关联查询时，出发子表的添加行动作时，产品重新渲染了表单导致。
3. 解决办法：  触发子表动作时删除表单重新渲染

::: details 查看解决办法
```js
    // Portal\WFRes\_Scripts\MvcSheet\MvcSheetAll.min.js
    // 删除if中 e.MvcSheetUI.MvcRuntime.init(e("body")) 的判断逻辑
    
    // 原产品代码
    /*
    if (this.RowCount = this.RowCount - 1, this.OnRemoved && this.RunScript(e(t), this.OnRemoved), void 0 !== i && i || e.MvcSheetUI.MvcRuntime && e.MvcSheetUI.MvcRuntime.init(e("body")), this.VirtualPaging && (this._SetVirtualPagingContainerHeight(), !e(this.Element).find("tr.rows").length && !e(this.Element).find("tr.footer").is(":hidden"))) {
        var o = e(this.Element).parent(".SheetGridViewData").siblings(".SheetGridViewTitle").find("tr.header td");
        e(this.Element).find("tr.footer").eq(0).find("td").each(function (t, i) {
            o.eq(t).css("width", e(i).outerWidth(!0))
        })
    }
    */

    // 修改后代码
    // 解决子表 - 删除行   -- 影响下拉框绑定业务对象的过滤条件
    if (this.RowCount = this.RowCount - 1, this.OnRemoved && this.RunScript(e(t), this.OnRemoved), void 0 !== i && i || e.MvcSheetUI.MvcRuntime, this.VirtualPaging && (this._SetVirtualPagingContainerHeight(), !e(this.Element).find("tr.rows").length && !e(this.Element).find("tr.footer").is(":hidden"))) {
        var o = e(this.Element).parent(".SheetGridViewData").siblings(".SheetGridViewTitle").find("tr.header td");
        e(this.Element).find("tr.footer").eq(0).find("td").each(function (t, i) {
            o.eq(t).css("width", e(i).outerWidth(!0))
        })
    }
```
:::

###  修改催办后 待办列表中显示的催办信息时间格式化    10.7.3

1. 描述.       待办列表，点击催办图标显示的催办信息时间格式为世界格式，转化为 YYYY-mm-dd HH:MM
2. 原因：      产品数据接口传输的时间格式未格式化处理
3. 解决办法：  时间字段格式化处理

::: details 查看解决办法
```js
    // Portal\js\main.js
    // 创建格式化处理函数
    //时间格式化
    $scope.dateFormat = function(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }

    // 处理数据格式化 --- $scope.dateFormat
    .success(function (result, header, config, status) {
        for(var i=0;i<result.length;i++){
            result[i].UrgeTime = $scope.dateFormat("YYYY-mm-dd HH:MM",new Date(result[i].UrgeTime))
        }
        $scope.UrgeWorkItemInfo = result;
    })
```
:::

###  修改快速点击催办按钮bug    10.7.3

1. 描述.       快速多次点击催办按钮，会连续提交催办，导致生成多条催办记录
2. 原因：      快速点击催办按钮时，动作比代码执行速度快，会产生代码执行多次，并提交多次催办记录
3. 解决办法：  点击完毕等待响应，并把按钮置为不可点击状态，等待处理结果，拿到处理结果后再把按钮置为可点击状态。

::: details 查看解决办法
```js
    // Portal\template\ProcessCenter\InstanceDetail.html
    <button ng-disabled="cuibanDisabled" type="button" class="btn btn-primary" ng-click="ok()">
        <span >催办</span>
    </button>

    // Portal\js\controllers\ProcessCenter\InstanceDetailController.js
    $scope.cuibanDisabled = false;  //添加催办是否可点击字段

    $scope.ok = function () {
        // 点击后改状态
        $scope.cuibanDisabled = true;

        $http({
            url:'',
            ...
        }).success(function(){
             $scope.cuibanDisabled = false;
        }).error(function(){
             $scope.cuibanDisabled = false;
        })

    }

```
:::








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