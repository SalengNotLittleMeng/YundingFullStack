<template>
  <div class="textarea">
    <ul>
      <!-- 用v-for生成展示列表 -->
      <li
        v-for="(val, index) in list"
        :key="index"
        @click="elementClick(index)"
      >
        {{ val }}
      </li>

      <!-- 输入框收集新的列表元素，双向绑定inputValue，监听enter敲击事件 -->
      <li>
        <input v-model="inputValue" @keyup.enter="addInput()" />
      </li>
    </ul>
  </div>
</template> 

<script setup>
import { useRouter } from "vue-router";
import { ref, onUnmounted } from "vue";

//初始化数组与inputValue
const router = useRouter();
const list = ref(["吃饭", "睡觉", "打豆豆"]);
const inputValue = ref("");

//添加新的数组元素，并在添加后清空输入框
function addInput() {
  list.value.push(inputValue.value);
  inputValue.value = "";
}

//传递路由参数
function elementClick(index) {
  router.push({
    path: "/home/selected",
    query: {
      selectedEle: JSON.stringify(list.value[index]),
    },
  });
}
</script>

<style scoped>
.textarea {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>