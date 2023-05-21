<template>
  <div class="nav">
    <h2>我是APP</h2>
  </div>
  <div class="change">
    <router-link to="/home" class="home">Home</router-link>
    <span class="line">||</span>
    <router-link to="/about" class="about">About</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup></script>

<style scoped>
.nav {
  text-align: center;
  position: relative;
}
.home {
  position: relative;
  left: 50%;
  text-align: center;
}
.about {
  position: relative;
  left: 51%;
}
.line {
  position: relative;
  left: 50.5%;
}
</style>
