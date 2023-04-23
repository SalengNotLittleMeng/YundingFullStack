<template>
  <project-two>
    <template v-slot:content> </template>
    <template v-slot:bottom> </template>
  </project-two>
</template>

<script>
import ProjectTwo from "./ProjectTwo.vue";

export default {
  components: { ProjectTwo },
  name: "App",
};
</script>

<style></style>
