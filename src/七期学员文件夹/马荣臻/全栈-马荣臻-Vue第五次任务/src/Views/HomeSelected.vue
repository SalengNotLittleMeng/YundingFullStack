<template>
  <div class="textarea">
    <p>{{ selectedEle }}</p>
  </div>
</template> 

<script setup>
import { ref, onMounted, onActivated, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const selectedEle = ref("暂无选择");

//组件缓存，设置onActivited钩子更新数据
onActivated(() => {
  if (route.query.selectedEle) {
    selectedEle.value = JSON.parse(route.query.selectedEle);
  }
});
</script>

<style scoped>
.textarea {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>