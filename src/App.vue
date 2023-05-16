<script setup lang="ts">
import MainLayout from "./layout/MainLayout.vue";
import {useRouter} from "vue-router";
const router = useRouter()

const goPage = (path: string) => {
  router.push({path})
}
</script>

<template>
  <main-layout>
    <template #header>
      <div style="height: 50px; background-color: black; position: relative">
        <h1 style="margin: 0; display: inline-block; color: white; cursor: pointer" @click="goPage('/')">mihomo-guide</h1>
        <div class="header-action">
          <span @click="goPage('/about')">about</span>
        </div>
      </div>
    </template>

    <template #footer>
      <div style="text-align: center">
        <div>
          <a href="https://beian.miit.gov.cn/" target="_blank">渝ICP备2023004735号-1</a>
          <div> Copyright © 2017 - 2023 cdl. All Rights Reserved. 尼哥 版权所有</div>
        </div>
      </div>
    </template>

    <template #main>
      <router-view/>
      <div style="margin-top: 400px"></div>
    </template>
  </main-layout>
</template>

<style scoped>
.header-action {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.header-action span {
  color: white;
  border: 1px solid white;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
}

.header-action span:hover {
  color: black;
  background-color: white;
  cursor: pointer;
}
</style>
