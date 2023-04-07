<script setup>
import { inject } from 'vue'
let word = inject('word')
let {words,addWord} = inject('words')
</script>
<template>
    <button @click="addWord(words,word)">添加</button>
</template>

<style scoped>
button {
    width: 100px;
    height: 40px;
    font-size: 20px;
    margin: 20px 10px;
    background-color: #fff;
}
</style>