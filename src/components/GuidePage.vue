<template>
  <p>欢迎来到mihomo</p>
  <p>这是一个米家游戏工具, 根据粥原不相容原理, 粥批请自觉离开</p>
  <p>(粥批：指不懂得包容，一味拉踩，不理性的粥玩家。不泛指一般粥玩家)</p>
  <p>以下是使用指导 (请使用pc)</p>

  <!-- p1 -->
  <h1>#1 关注微信公众号</h1>
  <p>由于一些问题，这里使用第三方消息推送平台<a href="https://wxpusher.zjiecode.com/" target="_blank">WxPusher</a></p>
  <img :src="QR_CODE_URL" alt="qrcode">
  <p>(微信公众号当然是用微信扫描了, QR Code会过期, 在本页面是最新的)</p>

  <!-- p2 -->
  <h1>#2 获取米游社Cookie</h1>
  <p><a href="https://www.miyoushe.com/sr" target="_blank">-> 米游社-崩铁社区</a></p>
  <p>首先登录上面的链接 (这个环节没有教程)</p>
  <p>登录成功后按下键盘上的F12 (在F11右边)</p>
  <img :src="F12" alt="f12" width="200">
  <p>这一步会打开你的开发者工具, 失败了您可以参考 -> <a
    href="https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools"
    target="_blank"
  >如何打开浏览器开发者工具</a></p>
  <p>接下来找到 console 或者是 控制台</p>
  <p>(觉得有点乱可以按 ctrl + L 清屏)</p>
  <img :src="consoleCh" alt="console-ch">
  <img :src="consoleEn" alt="console-en">
  <p>接下来复制黑框内的代码, 粘贴到控制台里 -> <span class="click-copy" @click="copyCode">点击复制</span></p>
  <div
    style="border: 1px solid black; border-radius: 5px; padding: 10px"
  >{{getCookieCode}}</div>
  <p>然后按回车(enter)执行代码 复制<span style="color: red">红</span>框里的内容到微信发给公众号(每个人内容不一样)</p>
  <img :src="invokePNG" alt="invoke">
</template>

<script setup lang="ts">
import {QR_CODE_URL} from "../env";
import F12 from '../assets/f12.png'
import consoleCh from '../assets/consoleCh.png'
import consoleEn from '../assets/consoleEn.png'
import invokePNG from '../assets/invoke.png'

const getCookieCode = "{const sc=`#45319 sc ${JSON.stringify(document.cookie.split(';').map(a=>a.split('=')).reduce((b,[k,v])=>{if(b.s.has(k.trim()))b.c[k.trim()]=v;return b},{c:{},s:new Set(['cookie_token'])}).c)}`;console.log(sc);}"

const copyCode = () => {
  navigator.clipboard.writeText(getCookieCode)
}
</script>

<style scoped>
.click-copy {
  border: 1px solid black;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.click-copy:hover {
  background-color: black;
  color: white;
}
</style>
