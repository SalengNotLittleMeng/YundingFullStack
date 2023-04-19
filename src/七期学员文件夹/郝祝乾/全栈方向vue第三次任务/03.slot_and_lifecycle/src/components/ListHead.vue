<template>
  <div class="list-head">
    <div class="title">
      <slot name="title" :title="title">{{ title }}</slot>
      <slot name="other"></slot>
      
    </div>
    <slot>这里应当有一个列表</slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
    operate: {
      type: String,
      default: '更多',
    }
  }
}
</script>

<style scoped>
.list-head {
  padding: 2px;
  border-bottom: solid 1px black;
  margin: 2px;
}

.title {
  border-bottom: solid 2px black;
  font-weight: 900;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
