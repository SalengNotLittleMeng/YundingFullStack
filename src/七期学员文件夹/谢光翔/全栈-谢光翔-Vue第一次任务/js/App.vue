<script setup>
import { ref } from 'vue';
import showList from './show.vue'
const key_word=ref('');
const arr=ref([]);
function login(){
  arr.value.push({word:key_word.value});
  key_word.value='';
}
function remove(){
  arr.value=arr.value.filter(t=>t.word!==key_word.value);
  key_word.value='';
}
</script>
<template>
  <input type="text" placeholder="输入" v-model="key_word" @keyup.enter="login">
  <h1>你要输入的单词是：{{ key_word }}</h1>
  <button @click="login">添加</button>
  <button @click="remove">删除</button>
  <showList :showLists="arr"></showList>
</template>