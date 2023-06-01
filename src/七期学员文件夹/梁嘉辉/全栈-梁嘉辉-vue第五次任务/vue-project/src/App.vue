<template>
  <div class="main">
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <span>|</span>
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="abc"></router-view>
  </div>
</template>
<script>
</script>
<style>
.main{
  position: relative;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 600px;
  /* background-color: aqua; */
}
  .nav{
    position: relative;
    width: 100px;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
    /* background-color: azure; */
  }
  .abc{
    position: absolute;
    top: 90px;
    left:30px
  }
</style>