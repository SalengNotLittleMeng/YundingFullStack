<template>
  <div class="app">
    <div>
      <div class="headText">
        <router-link to="/home">Home</router-link>
        <p>&nbsp; | &nbsp;</p>
        <router-link to="/about">About</router-link>
      </div>
      <br />
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}
.headText {
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link-active {
  display: inline;
  color: rgb(66, 184, 131);
}
</style>
// class="router-link-active router-link-exact-active"