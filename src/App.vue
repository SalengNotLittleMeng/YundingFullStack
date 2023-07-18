<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
   
    
    <router-view></router-view>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 300px;
  background-color: blue;
}
</style>
