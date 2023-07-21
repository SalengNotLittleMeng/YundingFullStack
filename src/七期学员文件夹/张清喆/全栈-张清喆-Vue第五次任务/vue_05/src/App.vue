<template>
  <div>
    <p>
      <router-link to="/">home</router-link>   |
    <router-link to="/about">about</router-link>
    </p>
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
