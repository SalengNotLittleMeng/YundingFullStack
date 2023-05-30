<script setup>
import { reactive, onMounted, ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
let obj = reactive({
  people: ["张三", "李四", "王五"],
});
let content;
let count = ref(0)
onMounted(()=>{
  count.value = localStorage.length 
  for(let i = 0; i<= localStorage.length;i++){
    obj.people.push(localStorage.getItem(i))
  }

})
const router = useRouter();
function enter() {
  if(content != ""){
    obj.people.push(content);
    localStorage.setItem(count.value,content)
    count.value++
  }
}

function show(item) {
  router.push("/HomeView/user"+'/'+ item);
}

</script>

<template>
  <div class="home">
    <h2>Home</h2>
    <input type="text" name="" id="" @keydown.enter="enter" v-model="content" />
    <span v-for="(item, index) in obj.people" :key="index" @click="show(item)">
      {{ item }}
    </span>
    <!-- <RouterLink to=""><RouterLink/> -->
    <RouterView class="content"/>
  </div>
</template>

<style scoped>
.home {
  width: 98%;
  margin: 0 auto;
}

input {
  width: 100px;
  height: 20px;
  border-radius: 10px;
}

span {
  margin: 0 10px 0 10px;
  cursor: pointer;
}

.content {
  margin: 20px 0 0 0; 
}
</style>
