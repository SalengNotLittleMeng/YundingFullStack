<script setup>
import { ref,inject } from 'vue'
let activeIndex = ref(0)
let bookName = inject('bookName')
let props = defineProps(['booksProps'])
let emits = defineEmits(['bookIncrease'], ['bookDecrease'], ['bookDelete']) 
function changeClass(x,y) {
    if (x === y) {
        return 'active'
    }
}
</script>
<template>
    <tbody>
        <tr v-for="book ,index in props.booksProps" :class="changeClass(index,activeIndex)">
            <td >{{ index+1 }}</td>
            <td @click="activeIndex = index; 
            if(!(bookName && bookName === book.name) ){
                bookName = book.name; 
            }
            ">    
                《{{ book.name }}》</td>
            <td>￥{{ book.price }}</td>
            <td >
                <button @click="emits('bookDecrease',index)">-</button>
                {{ book.count }}
                <button @click="emits('bookIncrease',index)">+</button>
            </td>
            <td ><button @click="emits('bookDelete',index )">删除</button></td>
        </tr>
    </tbody>

</template>

<style scoped>

td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    padding: 10px 0;
}

.active{
    background-color: orange;
}
</style>