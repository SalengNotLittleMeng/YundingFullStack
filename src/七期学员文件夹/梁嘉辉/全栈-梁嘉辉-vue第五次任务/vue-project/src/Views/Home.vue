<template>
  <div>
  <div class="home">我是Home组件</div>
  <div class="nav2">
      <a class="show" @click="showbtn">展示列表</a>
      <span>|</span>
      <a class="show" @click="selectbtn">你的选择</a>
  </div>
  <router-view class="bcd"></router-view>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  const router=useRouter()
  function showbtn() {
    router.push({
      path:"/home/list",
      // query:{
      //   name:"why",
      //   age:18
      // }
    })
  }
  function selectbtn(){
    router.push({
      path:"/home/select",
    })
  }
</script>
<style>
  .home{
    font-size: 40px;
    font-weight: 600;
  }
  .nav2{
    position: relative;
    top: 20px;
    width: 136px;
    margin-left: 205px;
  }
  .show{
    cursor: pointer;
    color: green;
  }
  .bcd{
    position: relative;
    top:50px;
  }
</style>