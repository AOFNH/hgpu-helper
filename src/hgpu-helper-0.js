// ==UserScript==
// @name         智慧🤫HuangZhi🤫
// @version      0.2
// @namespace    http://tampermonkey.net/
// @description  try to take over “智慧黄职” !( ⚠ 反对不理性的刷课行为，理不理性，你品😄，你细品😄)
// @note         重要更新，请立即更新
// @author       bellamy.nh
// @match        http://61.136.241.22/suite/onlineLearningAdmin/onlineLearningAdminView.do?feature=onlineLearing&action=learingBKSecondContent&courseKey=*
// @match        http://61.136.241.22/suite/solver/classView.do?feature=courseSite&action=showCourseContent&structureKey=*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/layer/2.3/layer.js
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    $("<link>")
        .attr({ rel: "stylesheet",
               type: "text/css",
               href: "https://cdn.jsdelivr.net/npm/layui-layer@1.0.9/layer.min.css"
              })
        .appendTo("head");
    const info =
          `<p style="color:red ; font-weight:900 ; font-size:21px">脚本声明</p><hr>
         <p style="font-weight:700; font-size:17px">原脚本《智慧🤫HuangZhi🤫理性刷课》是 <a href="https://greasyfork.org/" style="color:blue">Greasy Fork</a> 上一个完全免费的脚本（并不鼓励无脑刷课行为）</p><hr>
         <p style="font-weight:700; font-size:15px">但据用户反馈，存在个别用户未经作者同意私自兜售原脚本，谋取私利，损害了用户体验及脚本作者的权益</p><hr>
         <p style="font-weight:700; font-size:17px">现决定，暂时下架原脚本,恢复情况请关注 <a href="https://greasyfork.org/en/users/365300-noob-nh" style="color:blue; font-weight:900; font-size:17px"> 此页面 </a>动态</p><hr>
         <p style="font-weight:800; font-size:19px ; color:orange">望知悉并转告</p>`;

     let i =  layer.alert(
        info,
        {
            icon: 0
        },
        function(index){
            layer.msg('感谢使用！');
        });

    layer.title('信息', i);


})();