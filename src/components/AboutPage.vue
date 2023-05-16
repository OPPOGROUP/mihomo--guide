<template>
  <h1>关于本项目</h1>
  <p>由于群友op较多 (除了毛桑大部分都是)</p>
  <p>开发一些小工具方便群友，用爱发电</p>
  <h2>项目地址</h2>
  <p>
    <a href="https://github.com/OPPOGROUP">-> github</a>
  </p>
  <h2>项目成员</h2>
  <p>李桑 隆桑</p>
  <a href="https://github.com/Meshate">
    <img :src="logoLi" alt="li sang" width="200" style="border-radius: 50%">
  </a>
  <span style="margin-right: 50px"></span>
  <a href="https://github.com/delongchen">
    <img :src="logoChen" alt="long sang" width="200" style="border-radius: 50%; border: 1px solid black">
  </a>
  <h2>关于微信指令</h2>
  <p>基本格式: #45319 {cmd} {content}</p>
  <p>#45319 是本应用的ID</p>
  <p>{cmd} 是指令</p>
  <p>{content} 是指令内容</p>
  <p>以下是指令详细描述</p>
  <hr/>
  <table>
    <thead>
    <tr>
      <th>指令</th>
      <th>全写</th>
      <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="cmd in cmds"
      :key="cmd[0]"
    >
      <td v-for="item in cmd"><span style="padding: 10px">{{item}}</span></td>
    </tr>
    </tbody>
  </table>
  <p>后续还会添加</p>
</template>

<script setup lang="ts">
import logoLi from '../assets/li.jpg'
import logoChen from '../assets/chen.jpg'

const cmds: [string, string, string][] = [
  ['sc', 'set cookie', '设置米游社cookie'],
  ['sl', 'send long', '直接给隆桑发消息'],
  ['sn', 'set name', '可以给自己设置一个昵称']
]
</script>

<style scoped>

</style>
