<template>
  <div class="col-list">
    <div list></div>
    <slot>纵向列表</slot>
  </div>
</template>

<script>
export default {
  props: {

    list: {
      type: Array,
      default: [],
    }
  }
}
</script>

<style scoped>
.col-list {
  padding: 2px;
  display: inline-block;
  margin: 2px;
}
</style>
