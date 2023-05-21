<template>
  <div>
    <div class="top">
      <router-link to="/home">home</router-link>
      <div>|</div>
      <router-link to="/about">about</router-link>
    </div>
    <div class="two">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.top{
  display: flex;
  margin: 20px auto;
  width: 110px;
  height: 30px;
  justify-content: space-between;
}
.two{
  /* background: black; */
  width: 500px;
  height: 50px;
  margin: 20px auto;
}
</style>