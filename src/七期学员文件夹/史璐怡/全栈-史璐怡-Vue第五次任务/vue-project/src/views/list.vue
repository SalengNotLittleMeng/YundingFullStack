<template>
        <ul>
            <li v-for="item in word" :key="item" @click="choice(item)">{{ item }}</li>
        </ul>
        <input type="text" placeholder="请输入事项" v-model="inputword" @keyup.enter="inputForWord(inputword)">
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const word = ref(["吃饭", "睡觉", "打豆豆"])
const router = useRouter()

function choice(item) {
    router.push({
        path: "/home/choice",
        query: {
            option: item,
            out: word,
        }
    })
}
function inputForWord(inputword) {
    word.value.push(inputword)
}
</script>

<style></style>