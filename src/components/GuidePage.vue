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
  <hr>
  <p>在顶部选项栏找到Application按钮 (中文版本叫 '应用')</p>
  <img :src="AppBt" alt="app_bt">
  <p>如果找不到 它可能藏在这个 '>>' 里面</p>
  <img :src="AppBtHide" alt="hide">
  <hr>
  <p>然后在侧边栏找到cookie 并点击这个https开头的栏目</p>
  <img :src="CookieSide" alt="cookie_side">
  <hr>
  <p>接下来在这一堆里找到红框里的条目</p>
  <h2>cookie_token_v2</h2>
  <h2>account_id_v2</h2>
  <img :src="CookieSelect" alt="cookie_select">
  <p>点条目它的值会显示在底部红框所示位置 可以复制</p>
  <hr>
  <p>然后完成下面的表单</p>
  <div>
    <p>
      cookie_token_v2:
      <input type="text" v-model="cookie_token">
      <span v-show="cookie_token.length === 0" style="margin-left: 20px; color: red">不能为空哇</span>
    </p>
    <p>
      account_id_v2:
      <input type="text" v-model="account_id">
      <span v-show="account_id.length === 0" style="margin-left: 20px; color: red">不能为空哇</span>
    </p>
    <div v-show="isFormOk" style="margin-top: 50px; margin-bottom: 50px">
      <span class="result-box">{{result}}</span>
    </div>
  </div>

  <p v-if="!isFormOk">填完表格后继续 {{ddd}}</p>
  <div v-else>
    <p>最后把黑框里的内容全部复制发给微信就ok了</p>
    <img :src="scOk" alt="sc_ok" width="400">
    <p>更多指令点页面顶部右侧 about 查看</p>
  </div>
</template>

<script setup lang="ts">
import {QR_CODE_URL} from "../env";
import F12 from '../assets/f12.png'
import AppBt from '../assets/application_bt.png'
import AppBtHide from '../assets/hiden.png'
import CookieSide from '../assets/cookie.png'
import CookieSelect from '../assets/cookie_select.png'
import scOk from '../assets/sc_ok.png'
import {computed, ref} from "vue";

const cookie_token = ref('')
const account_id = ref('')
const ddd = ref('')
const isFormOk = computed(() => cookie_token.value.length !== 0 && account_id.value.length !== 0)
const result = computed(() => `#45319 sc ${JSON.stringify({account_id: account_id.value, cookie_token: cookie_token.value})}`)

const sleep = (n: number) => new Promise(resolve => {
  setTimeout(resolve, n)
})
const loop = async () => {
  while (true) {
    if (ddd.value.length === 6) {
      ddd.value = ''
    } else {
      ddd.value += '.'
    }
    await sleep(500)
  }
}

loop()
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.result-box {
  padding: 20px;
  border: solid 1px black;
}
</style>
