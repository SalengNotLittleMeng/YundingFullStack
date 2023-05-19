<template>
  <div class="app">
    <div class="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/home">about</router-link>
    </div>
    <router-view></router-view>
    <div class="show">
      <router-link to="/showlist">展示列表</router-link>|
      <router-link to="/option">你的选择</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  /*components: {
    HelloWorld,
  }*/
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
