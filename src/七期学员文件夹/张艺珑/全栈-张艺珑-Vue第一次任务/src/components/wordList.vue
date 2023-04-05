<script setup>
import { inject } from 'vue';
let { words } = inject('words')
function getClass() {
    if (words.value.length > 5) {
        return 'over'
    }
}
</script>

<template>
    <ul :class="getClass()">单词列表：
        <li v-for="word in words">{{ word }}</li>
    </ul>
</template>

<style scoped>
    .over {
        color: red;
    }
</style>