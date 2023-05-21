<template>
        <ul>
            <li v-for="item in option1" :key="item" @click="choice(item)">{{ item }}</li>
            <input type="text" v-model="inputword" @keyup.enter="inputForWord(inputword)">
        </ul>
</template>

<script setup>
meta: { 
    keepAlive: true;
}
import { ref } from "vue"
const option1 = ref(["吃饭", "睡觉", "打豆豆"])
const inputword = ''
import { useRouter } from "vue-router"
const router = useRouter()
function choice(item) {
    router.push({
        path: "/home/choice",
        query: {
            option: item,
            out:option1
        }
    })
}
function inputForWord(inputword) {
    option1.value.push(inputword)
}

</script>

<style></style>
