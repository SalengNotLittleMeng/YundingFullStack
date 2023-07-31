<template>
  <div class="app">
    <h3>app</h3>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      |
      <router-link to="/about">关于</router-link>
    </div>
    <!-- <div class="rr">
    <router-view></router-view>
    </div> -->
    
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>
  .app{
    height: 100px;
    width: 50%;
    margin: 0 auto;

  }
</style>
