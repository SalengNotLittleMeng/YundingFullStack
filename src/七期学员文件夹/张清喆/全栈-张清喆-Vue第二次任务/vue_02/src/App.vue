<template>
  <div>
    <div>总价:￥{{nownum}};当前选中书籍:{{selected_name}}</div>
    <table>
      <thead>
        <tr>
          <th >序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <book v-for="item in books" :key="item.id" :bookname="item.bookname" :price="item.price" :count="item.count" :id="item.id"  @decrease="decrease" @add="add" @delete1="delete1" @click="color(item.id),selectedname(item.id)"  :class="{selected:item.judge}"></book>
        <book1 :length="books.length" v-if="addjudge==1" @add_bookname="add_bookname" @add_price="add_price" ></book1>
      </tbody>
    </table>
    <button @click="addbook()" v-if="this.add_button==1">添加</button>
    <button  @click="sure(bookname,price)" v-if="this.sure_button==1" >确定</button>
    <button @click="cancel()" v-if="this.cancel_button==1">取消</button>
  </div>
</template>

<script>
import book from './components/book.vue';
import book1 from "./components/book1.vue"

export default {
  components: {
    book,book1,
  },
  data(){
    return {
      num:0,
      selected_name:"",
      addjudge:0,
      sure_button:0,
      cancel_button:0,
      add_button:1,
      addbookname:"",
      addprice:0,
      books:[
        {
          id:0,
          bookname:"书籍1",
          price:"100",
          count:2,
          judge:0,
        },
        {
          id:1,
          bookname:"书籍2",
          price:"200",
          count:1,
          judge:0,
        },
        {
          id:2,
          bookname:"书籍3",
          price:"300",
          count:1,
          judge:0,
        }
      ],
      
    }
  },
  computed:{
    nownum(){
      var num=0;
      for(var i=0;i<this.books.length;i++)
      {
        num+=this.books[i].price*this.books[i].count;
      }
      return num;
    }
  },
  methods:{
        decrease(id){
          if(this.books[id].count>0)
          {
            this.books[id].count--;
          }
        },
        add(id){
          this.books[id].count++;
        },
        delete1(id){
          for(var i=0;i<this.books.length;i++)
          {
            if(this.books[i].id>id)
            {
              this.books[i].id--;
            }
          }
          this.books.splice(id,1);
        },
        color(id){
          for(var i=0;i<this.books.length;i++)
          {
            this.books[i].judge=0;
          }
          this.books[id].judge=1;
        },
        selectedname(id){
          this.selected_name=this.books[id].bookname;
        },
        addbook(){
          this.addjudge=1;
          this.sure_button=1;
          this.add_button=0;
          this.cancel_button=1;
        },
        sure(bookname,price){
          this.sure_button=0;
          this.add_button=1;
          this.cancel_button=0;
          this.addjudge=0;
          this.books.push({
            id:this.books.length,
            bookname:this.addbookname,
            price:this.addprice,
            count:1,
            judge:0,
          })
        },
        cancel(){
          this.sure_button=0;
          this.add_button=1;
          this.cancel_button=0;
          this.addjudge=0;
        },
        add_bookname(bookname){
          this.addbookname=bookname;
        },
        add_price(price){
          
          this.addprice=price;
        },
      }
}
</script>



<style>
table{
  border-collapse: collapse;
}
th,td{
  border: 1px solid black;
  margin: 0;
  padding: 8px 16px;
  /* width: 10px;
  height: 5px; */
}
.selected{
  background-color: pink;
}
</style>
