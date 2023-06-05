<template>
    
    <ul>
    <li @click="pass(i)" v-for="i in list">{{i}}</li>
    </ul>
    <div>
    <input type="text" class="enter" @keyup.enter="add" v-model="newElement">
    </div>
    
</template>
<script setup>
    import { ref } from "vue"
    import { useRouter } from "vue-router"
    const router = useRouter()
    const list = ref(["吃饭", "睡觉", "打豆豆"])
    const newElement = ref("")
    function pass(element) {
        router.push({
            path: "/home/choice",
            
            query: {
                title:element
            }
            
            
        })
    }
    function add() {
        list.value.push(newElement.value)
        newElement.value = ''
    }
</script>
<style scoped >
   ul{
    list-style: none;
   }
</style>