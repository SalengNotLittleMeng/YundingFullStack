<template>
    <div class="app">
      <div class="title">
          <router-link to="/home">Home</router-link>
          <span>|</span>
          <router-link to="/about">About</router-link>
      </div>
        <router-view></router-view>
    </div>
</template>
<style>
.app{
  width: 400px;
  margin: auto;
}

.title{
  text-align: center;
}
</style>