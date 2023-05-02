<template>
  <div id="app">
   <Children/>
  </div>
</template>

<script>
import Children from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
       Children
  },
  data(){
    return{
    
    }
  }
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
