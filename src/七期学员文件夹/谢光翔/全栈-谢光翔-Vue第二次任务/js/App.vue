<script setup>
import {ref,computed} from 'vue';
import myTable from './my_table.vue'

const book=ref('');
const book_list=ref([
  {
    book_name:"哈哈",
    price:20,
    amount:1,
  },
  {
    book_name:"小小米",
    price:10,
    amount:1,
  }
]);
const total_price=computed(()=>{
  let result=0;
  for(let i=0;i<book_list.value.length;i++){
    result+=book_list.value[i].price*book_list.value[i].amount
  }
  return result
});

function add(book_name,price,amount){
  book_list.value.push({
    book_name:book_name,
    price:price,
    amount:amount,
  });
}

function examSelect(bookName){
  book.value=bookName;
}
</script>

<template>
  <h3>总价：￥{{ total_price }} 当前选中书籍：{{ book }}</h3>
  <myTable :bookList="book_list" :selected_book="book" @response="examSelect" @add="add"></myTable>
</template>