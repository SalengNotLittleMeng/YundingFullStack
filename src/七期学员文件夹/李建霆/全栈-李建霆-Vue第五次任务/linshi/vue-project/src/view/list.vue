<template>
  <ul>
    <li v-for="(item, index) in list" @click="onto(item)">{{ item }}</li>
  </ul>
  <input v-model="add" @keyup.enter="submit()" placeholder="请输入事项" />
</template>

<script setup>
import router from "../router";
import { useRouter } from "vue-router";
import { ref } from "vue";

function submit() {
  list.value.push(add.value);
}
function onto(item) {
  router.push({ path: "/home/selected", query:{thing:item}});
}
const list = ref(["吃饭"]);
const add = ref([""]);

// const createlist =  {
//   template: "#thing_list",
//   data() {
//     return {
//       things: [
//         {
//           id: 1,
//           thing: "吃饭",
//         },
//         {
//           id: 2,
//           thing: "睡觉",
//         },
//         {
//           id: 3,
//           thing: "吃饭",
//         },
//         {
//           id: 4,
//           thing: "吃饭",
//         },
//       ],
//     };
//   },
// }
</script>

<style scoped></style>
