<template>
  <div class="home_text">
    <h2>我是home</h2>
    <div class="home_nav">
      <router-link to="/home/list" class="list">展示列表</router-link>
      <span class="line">||</span>
      <router-link to="/home/selected" class="selected">你的选择</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import router from "../router";
</script>

<style scoped>
.home_text {
  position: relative;
  left: 30%;
  text-align: center;
  width: 30%;
}
/* .list {
  position: relative;
  left: 50%;
  text-align: center;
}
.selected{
  position: relative;
  left: 51%;
} */
</style>
