<script setup>
import { inject } from 'vue'
let { words, deleteWord } = inject('words')
console.log(words.value.length);
</script>

<template>
        <button @click="deleteWord(words.length-1)">删除</button>
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
