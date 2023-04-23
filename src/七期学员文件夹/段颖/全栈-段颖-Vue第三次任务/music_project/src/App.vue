<template>
  <div id="app">
  
  
  <ProjectTwo/>
  </div>
</template>

<script>
// import Helloworld from './components/Helloworld.vue'
import ProjectTwo from './components/ProjectTwo.vue'
// import artist from './artist.js'
// import hotSong from '../hotSong.js'
// import newSong from '../newSong.js'
// import originSong from '../originSong.js'

export default {
  name: 'App',
  components: {
   
   
    ProjectTwo
  },
 
  
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
.singers{
  display: flex;
  border:1px solid black;
  /* flex-direction: row; */
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>
