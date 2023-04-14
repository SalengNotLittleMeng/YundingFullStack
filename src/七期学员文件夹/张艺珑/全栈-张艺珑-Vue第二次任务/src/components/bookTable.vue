<script setup>
import { ref,provide } from 'vue';
import bookList from './bookList.vue';
let booksProps = ref([{
    name: 'typescript',
    price: 10,
    count: 1,
}])
let bookName = ref('')
let flag = ref(false)
let bookcount = ref(1)
let bookname = ref('')
let bookprice = ref(0)
provide('bookName',bookName)
function bookIncrease(index) {
    booksProps.value[index].count++;
}

function bookDecrease(index) {
    if (booksProps.value[index].count >= 1) {
        booksProps.value[index].count--
    }
    
}
function getToralPrice() {
    let total = 0, i = 0 
    for (i = 0;i < booksProps.value.length; i++){
        total += (booksProps.value[i].price * booksProps.value[i].count)
    }
    return total
}
function bookDelete(index) {
    if (confirm('确认删除吗？')) {
        booksProps.value.splice(index,1)
    }
}
function myAlert(message) {
    window.alert(message)
}
</script>

<template>
<h1>总价：￥{{ getToralPrice() }} 当前选中书籍：《{{ bookName}}》</h1>
<table>
    <thead>
        <th>序号</th>
        <th>书名</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
    </thead>
    <bookList :books-props="booksProps" @book-increase="bookIncrease" @book-decrease="bookDecrease" @book-delete="bookDelete" ></bookList>
    <tr v-show="flag">
        <td>{{ booksProps.length+1 }}</td>
        <td><input type="text" v-model="bookname"></td>
        <td><input type="number" v-model="bookprice"></td>
        <td><button @click="bookcount--">-</button>{{ bookcount }}<button @click="bookcount++">+</button></td>
        <td><button>删除</button></td>
    </tr>
</table>
<button  v-show="!flag" @click="flag= true;">添加</button>
<button v-show="flag" @click="
    if(bookname !== '' ){
        if (bookprice > 0) {
            booksProps.push({
            name: bookname,
            price: bookprice,
            count: bookcount
        });
        } else{
            myAlert('价格不能小于等于0')
        }
    } else{
        myAlert('书名不能为空')
    }
    flag = false;
    bookname = '';
    bookprice = 0;
    count = 1; 
">确认</button>
<button v-show="flag" @click="flag = false">取消</button>
</template>

<style scoped>

h1 {
    margin: auto;
}
table {
    margin: 30px 0;
    border-collapse: collapse;
}

th {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 10px 100px;
    background-color: #e0e0e0;
}

td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    padding: 10px 0;
}

button {
    margin: auto;
}
</style>