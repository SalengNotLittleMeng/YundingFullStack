<template>
  <div class="box">
    <ul>
      <li v-for="(word,index) in words" @click="select(word)">{{ word }}</li>
    </ul>
     <input type="text" placeholder="请输入事项"  v-model="message" @keyup.enter="increase">
     <h2>你要输入的事项是：{{message}}</h2>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const words=ref(["吃饭","睡觉"])
const message=ref()
function increase(){
  words.value.push(message.value)
  message.value=''
}
function select(word){
  router.push({
  path:"/home/select",
  query:{
    id:word
  }
  })
}

</script>
<style>
</style>