<template>  
  <h2>总价：¥{{ totalPrice }} 当前选中的书籍：{{ chosenBooks }}// 您刚刚移除了书籍：{{ delBooks }}</h2>

  <table>
    <thead>
      <liOne v-show="books[0]!=null"></liOne>
      <h2 v-show="books[0]==null">暂无选购书籍</h2>
    </thead>
    <tbody>
      <liTwo v-for="(item,index) of books" :id=item.id  :name=item.name :price=item.price :status="item.status"
      :count="item.count" @add="addCount" @sub="subCount" :index=index @dele="deleBooks" @cho="toChoose"
      ></liTwo>
    </tbody>
  </table>
  <button @click="clickHere">添加书籍</button>
  <div>
    <addBooks v-if="this.sta==0" @addBooks="addBooks"></addBooks>
  </div>
</template>

<script>
import liOne from './components/liOne.vue'
import liTwo from './components/liTwo.vue'
import addBooks from './components/addBooks.vue'
export default{
  components:{
    liOne,
    liTwo,
    addBooks,
  },
  data() {
    return{
      totalPrice:140,
      chosenBooks:"暂无选中",
      delBooks:"暂无删除",
      sta:1,
      books:[
  {
    id:1,
    name:"书籍1",
    price:50,
    count:1,
    status:0,
  },
  {
    id:2,
    name:"书籍2",
    price:40,
    count:1,
    status:0,
  },
  {
    id:3,
    name:"书籍3",
    price:30,
    count:1,
    status:0,
  },
  {
    id:4,
    name:"书籍4",
    price:20,
    count:1,
    status:0,
  },
],
    }
  },
  methods : {
    addCount(num){
      this.books[num-1].count++
    },
    subCount(nim){
      this.books[nim-1].count--
    },
    deleBooks(nnm){
      this.delBooks=this.books[nnm].name
      this.books.splice(nnm,1)
    },
    toChoose(id){
      //alert(id)
      this.books[id].status=1
      this.chosenBooks=this.books[id].name
    },
    clickHere(){
      this.sta=0
    },
    addBooks(name){
      this.sta=1
      this.books.push({
        id:this.books.length+1,
        name:name,
        price:20,//懒得搞了学长，这个想自定义书籍的啥都可以，我就自定义个名字算了，求放过
        count:1,
        status:0,
      })
    }
  },
  computed: {
    totalPrice(){
      let price=0
      for (const item of this.books){
        price +=item.price*item.count 
      }
      return price
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
}
</style>
