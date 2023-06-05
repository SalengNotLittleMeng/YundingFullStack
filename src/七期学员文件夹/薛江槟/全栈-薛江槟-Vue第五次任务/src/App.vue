<template>
  <div class="nav">
   
    <ul>
    <li><router-link to="/home">home</router-link></li>
    <li><router-link to="/about">about</router-link></li>
    </ul>

    
       <router-view/>
    
  </div>
</template>
<script setup>
  

</script>
<style scoped >
  .nav{
    color: black;
  }
   li{
        display:inline-block;
        margin: 0px 10px
        px;
    }
</style>