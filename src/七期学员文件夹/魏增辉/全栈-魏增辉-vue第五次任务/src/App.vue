<template>
  <div class="father">
      <div class="child">
          <router-link to="/home">Home</router-link>
          <span>|</span>
          <router-link to="/about">About</router-link>
      </div>
        <router-view></router-view>
    </div>

</template>

<script>

</script>

<style>
 .father{
  width: 600px;
  margin: 0 auto;
 }
</style>
