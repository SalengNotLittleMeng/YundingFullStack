<script setup>
import { inject } from 'vue'
let word = inject('word')

</script>

<template>

    <h1>你要输入的单词是：{{ word }}</h1>
    <input  v-model="word" :=$attrs>
</template>

<style scoped>
    input {
        display: block;
        width: 250px;
        height: 40px;
        padding-left: 20px;
        font-size: 25px;
        outline: none;
    }
</style>
