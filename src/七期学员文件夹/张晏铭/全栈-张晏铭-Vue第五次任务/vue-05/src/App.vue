<script setup>
import { onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
  router.push("/");
});
</script>

<template>
  <header>
    <h2>App</h2>
    <RouterLink to="/" class="thing">Home</RouterLink>
    <RouterLink to="/about" class="thing">About</RouterLink>

    <RouterView />
  </header>
</template>

<style scoped>
header {
  margin: 100px auto;
}

.thing {
  margin: 0px 20px;
}
</style>
