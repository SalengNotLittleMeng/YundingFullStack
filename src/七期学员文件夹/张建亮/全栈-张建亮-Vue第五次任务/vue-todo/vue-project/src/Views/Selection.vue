<template>
    <ul>
<li v-for="(item,index) in list" :item="item" @click="display(item,index)">{{ item }}</li>
    </ul>
    <input type="text" v-model="value" @keyup.enter="add()">
</template>

<script>
import router from '../router';

export default {
    name: 'selection',
    data() {
        return {
            list: ["吃饭", "睡觉", "卷"],
            value: '',
            
        }
    },
    methods: {
        add() {
            this.list.push(this.value)
        },
        display(item,index) {
            router.push({
                path: "/home/display",
                query: {
                    selected: item,
                    
                }
            })
            console.log(item)
        }
    }
}
</script>

<style scoped>
a{
text-decoration: none;
color:#333;}

</style>