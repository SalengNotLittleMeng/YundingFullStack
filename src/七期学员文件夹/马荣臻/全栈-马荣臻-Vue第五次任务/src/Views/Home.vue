<template>
  <div class="textarea">
    <h2 class="title">我是Home组件</h2>
    <div class="home-nav">
      <!-- 路由导航 -->
      <router-link to="/home/list">展示列表</router-link>
      <p>&nbsp; | &nbsp;</p>
      <router-link to="/home/selected">你的选择</router-link>
    </div>
    <!-- 设置组件缓存，防止组件卸载导致数据清除 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
//声明需要缓存的组件
import { ref } from "vue";
const Component = ref("HomeList", "HomeSelected");

</script>

<style scoped>
.home-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  text-align: center;
  color: rgb(66, 184, 131);
}
.router-link-active {
  display: inline;
  color: rgb(66, 184, 131);
}
</style>