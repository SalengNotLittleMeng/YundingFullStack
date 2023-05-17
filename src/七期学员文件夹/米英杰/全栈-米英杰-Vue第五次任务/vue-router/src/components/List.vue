<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
// defineEmits(['onTitle'])
const list = ref(["吃饭", "睡觉", "打豆豆"])
const newli = ref("")
function submit() {
    list.value.push(newli.value)
}
function ontitle(item) {
    router.push({ name:'selected',query:{ title: item }})
}
</script>
<template>
    <ul>
        <!-- <li v-for="item in list" @click="$emit('onTitle',item)">{{item}}</li> -->
        <li v-for="item in list" @click="ontitle(item)">{{item}}</li>
    </ul>
    <input v-model="newli" @keyup.enter="submit()">
</template>