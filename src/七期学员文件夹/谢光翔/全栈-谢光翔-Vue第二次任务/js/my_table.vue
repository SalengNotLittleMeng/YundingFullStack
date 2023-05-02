<script setup>
import {ref} from 'vue';
/*const props=defineProps({
    id:Number,
    book_name:String,
    price:Number,
    amount:Number,
})*/
const props=defineProps(["bookList","selected_book"]);
const isSelected=ref(-1);
const emit=defineEmits(["response","add"]);
const temp=ref(0);
const new_book_name=ref('');
const new_book_price=ref(0);
const is_add=ref(false);

function remove(index){
    props.bookList.splice(index,1);
}
function add_event(){
    if(new_book_name.value==''){
        alert('书名不能为空');
    }else if(new_book_price.value<=0){
        alert('价格应为正数');
    }else{
        emit('add',new_book_name.value,new_book_price.value,temp.value);
        is_add.value=false;
        temp.value=0;
    }
    
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>序号</th>
                <th>书名</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="books,index in props.bookList" :class="{selected:isSelected==index}" @click="()=>{isSelected=index;emit('response',books.book_name)}">
                <td>{{ index+1 }}</td>
                <td>《{{ books.book_name }}》</td>
                <td>￥{{ books.price }}</td>
                <td><button @click="books.amount--" :disabled="books.amount==0">-</button>{{ books.amount }}<button @click="books.amount++">+</button></td>
                <td><button @click="remove(index)">移除</button></td>
            </tr>
            <tr v-if="is_add">
                <td>{{ props.bookList.length+1 }}</td>
                <td><input type="text" v-model="new_book_name"></td>
                <td><input type="number" v-model="new_book_price"></td>
                <td><button @click="temp--" :disabled="temp==0">-</button>{{ temp }}<button @click="temp++">+</button></td>
                <td><button disabled>移除</button></td>
            </tr>
        </tbody>
    </table>
    <button @click="is_add=true" v-if="!is_add">添加</button>
    <button v-if="is_add" @click="add_event">确定</button>
    <button v-if="is_add" @click="is_add=false;temp=0">取消</button>
</template>
<style scoped>
    table{
        width: 40%;
        text-align: center;
        border-collapse: collapse;
    }
    th,td{
        border: 1px solid black;
    }
    .selected{
        background-color: orange;
    }
</style>