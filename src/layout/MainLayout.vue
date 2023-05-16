<template>
  <div class="main-layout-container">
    <header><slot name="header"/></header>
    <div class="main-layout-body">
      <aside id="left"></aside>
      <main><slot name="main"/></main>
      <aside id="right"></aside>
    </div>
    <footer><slot name="footer"/></footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-layout-container {
  display: flex;
  height: 100%;
  flex-direction: column;
}

header, footer {
  flex: 0
}

.main-layout-body {
  flex: 1;
  display: flex;
}

#left {
  flex: 0 0 30%;
}

#right {
  flex: 0 0 20%;
}

main {
  flex: 1;
}
</style>
