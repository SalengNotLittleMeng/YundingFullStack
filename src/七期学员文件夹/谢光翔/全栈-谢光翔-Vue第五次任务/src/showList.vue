<script setup>
import { ref, inject } from 'vue'

  const word = ref('')
  const lists = inject('shared')

  const addToList = (word) => {
    lists.value.push(word.value)
    word.value = ''
  }

  function login(){
    addToList(word)
  }
</script>

<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index" @click="$router.push({ path: '/choice', query: { choice: item } })">{{ item }}</li>
  </ul>
  <input type="text" :value="word" v-on:keyup.enter="login" v-on:input="word = $event.target.value" />
</template>