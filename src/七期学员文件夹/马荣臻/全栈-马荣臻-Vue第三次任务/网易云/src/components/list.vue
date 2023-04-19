<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <div class="title">
      <slot name="titleContent"></slot>
    </div>
    <slot name="content" class="slot">
      <p class="defaultContent">默认内容</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "msgList",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
  },
  data() {},
};
</script>

<style scoped>
#app {
  margin: 10px;
}

p{
  width: 30px;
}

div {
  border-bottom: 1px solid #000;
}

.title {
  border-bottom: 3px solid #000;
}
</style>