<style>
  table {
    border-collapse: collapse;
  }
  thead {
    background-color: azure;
  }
  th,
  td {
    border: 1px solid #aaa;
    padding: 8px 16px;
  }
  .active{
    background-color: aqua;
  }
</style>

<template>
  <h2>总价：{{formatPrice(priceall)}}</h2>
  <h2 v-if="judgeremove">你选中的图书是：{{ this.BookName }}</h2>
  <h2 v-else>已移除：{{ this.delname }}</h2>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>书籍名称</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      
      <tr v-for="(item,index) in books" :key="item.id" :class="{active:index===countindex}">
        <delTr :name="item.name" :price="item.price" 
        :count="item.count" :index="index" 
        @decre="decre1(index)" 
        @incre="incre1(index)" 
        @remove="remove1(index)"
        @chang="chang1(index)"></delTr>
      </tr>
      <tr v-if="judgement">
        <td>{{ books.length+1 }}</td>
        <td>
          <input type="text" v-model="Items.name">
        </td>
        <td>
          <input type="number" v-model="Items.price" v-on:input="abc($event)">
        </td>
        <td>
          <button @click="decrementer(books.length)" :disabled="counter<=0">
            -
          </button>
          {{counter}}
          <button @click="incrementer(books.length)">+</button>
        </td>
        <td>
          <button :disabled="true">移除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <increment  @add="addbtn" @add1="addbtn1"  @add2="addbtn2" :judgement="judgement"></increment>
</template>

<script>
import increment from './increment.vue'
import delTr from './delTr.vue'
export default {
  components:{
    increment,
    delTr
  },
  data() {
          return {
            // number:0,
            delname:'',
            BookName:'',
            counter:1,
            books: [
              {
                id: 1,
                name: '算法导论',
                price: 70,
                count: 1,
              },
              {
                id: 1,
                name: '三体',
                price: 70,
                count: 1,
              },
              {
                id: 1,
                name: '软工导论',
                price: 70,
                count: 1,
              },
              {
                id: 1,
                name: '高数',
                price: 70,
                count: 1,
              },
              {
                id: 1,
                name: '大学物理',
                price: 70,
                count: 1,
              },
            ],
            countindex:-1,
            judgement:false,   
            judge123:false, 
            judgeremove:true,
            Items:{
              id: 1,
              name:'',
              price: '',
              count: 1,
            },
          }
        },
        computed: {
          priceall() {
            let price = 0
            for (const item of this.books) {
              price += item.price * item.count
            }
            return price
          },
        },
        methods: {
          decre1(index){
            this.books[index].count--
          },
          incre1(index){
            this.books[index].count++
          },
          formatPrice(price) {
            return '￥' + price
          },
          remove1(index) {
            this.delname=this.books[index].name
            this.books.splice(index, 1)
            this.judgeremove=false
          },
          chang1(index){
            this.countindex=index
            this.BookName=this.books[index].name
            this.judgeremove=true
          },
          addbtn(){
            this.judgement=true
          },
          decrementer() {
            this.counter--
          },
          incrementer() {
            this.counter++
          },
          abc(event){
            if(event.target.value<=0&&this.Items.price!=''){
              alert("别减啦！图书价格不能为负呦~")
              this.Items.price=0
              this.judge123=true
            }
          },
          addbtn1(){
            if(this.Items.name!=''&&this.Items.price!=''){
              this.judgement=false
              this.books.push({
              ...this.Items
            })
            this.Items={
              id: 1,
              name:'',
              price: '',
              count: 1,
            }
            }else if(this.Items.name==''){
              this.judgement=true
              alert("书名不能为空~")
            }
            else if(this.judge123==true&&this.Items.name!==''){
              this.judgement=true
              alert("图书价格不能为负或零~")
            }
          },
          addbtn2(){
            this.judgement=false
          },
        },
}
</script>


