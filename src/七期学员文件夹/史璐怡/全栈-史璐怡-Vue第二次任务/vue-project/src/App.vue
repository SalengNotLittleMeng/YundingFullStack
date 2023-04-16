<!--  -->
<template>
  <div>
    <h2>总价：￥{{ totalprice }}  当前选中书籍：{{ selected }}</h2>
    <table>
      <tr>
        <th>序号</th><th>书名</th><th>价格</th><th>购买数量</th><th>操作</th>
      </tr>
      <tr v-for="(item,index) in bookarr" :key="index" 
      @click="bookchoiced(index)" 
        :class="index === currentIndex ? 'active' : ' '" >
      <book :name="item.name" :number="item.number" :price="item.price" :index="index" 
      @remove="removebtn(index)" 
      @minus="minusbtn(index)" 
      @add="addbtn(index)"  
      ></book>
      </tr>
      <tr v-show="flagB" v-if="flagC">
        <td> {{ bookarr.length +1 }} </td>
        <td><input type="text" v-model="newbook.name"></td>
        <td><input type="number" v-model="newbook.price" v-on:input="judge($event)"></td>
        <td>
          <button @click="minusbtn2()" :disabled="newbook.number <= 1">-</button>
          <input type="number" v-model="newbook.number" >
          <button @click="addbtn2()">+</button>
        </td>
        <td>
          <button @click="remove" disabled>删除</button>
        </td>
      </tr>
    </table>
    <button @click="addBook()" v-show="flagA" >添加</button>
    <button v-show="flagB" @click="newbookbtn">确认</button><button @click="cancel()" v-show="flagB">取消</button>
  </div>
</template>

<script>
import book from "./book.vue";

export default {
  components: {
    book
  },
  data() {
    return {
      bookarr: [
        { name: "JavaScript高级程序设计", price: "126", number: 1, },
        { name: "你不知道的S(上卷)", price: "78", number: 1 , },
        { name: "你不知道的S(中卷)", price: "76", number: 1 , },
        { name: "你不知道的S(下卷)", price: "64", number: 1, }],
      newbook: {
        name: '',
        price: 0,
        number: 1,
      },
      flagA: 1,
      flagB: 0,
      flagC: 1,
      flagD: 0,
      lastindex:0,
      currentIndex: -1,
      selected: " ",
      totalprice:" ",
    };
  },
  computed: {
    totalprice() {
      let totalprice = 0
      for (const item of this.bookarr) {
        totalprice += item.price * item.number
      }
      return totalprice
    },
  },
  methods: {
    minusbtn: function (index) {
      this.bookarr[index].number--
    },
    addbtn: function (index) {
      this.bookarr[index].number++
    },
    removebtn: function (index) {
      this.bookarr.splice(index,1)
    },
    bookchoiced: function (index) {
      this.currentIndex = index;
      this.selected = this.bookarr[index].name
    },
    addBook:function(){
      this.flagC = 1
      this.flagB = 1
      this.flagA = 0
    },
    getlastindex:function(index) {
      this.lastindex = index
      return this.lastindex
    },
    newbookbtn: function () {
      if (this.newbook.name != '' && this.flagD == 1) {
        this.bookarr.push({
          ...this.newbook
        })
        this.newbook = {
          name: '',
          price: 0,
          number: 1,
        }
        this.flagA = !this.flagA
        this.flagB = !this.flagB
        this.flagC = !this.flagC
      } else if (this.newbook.name == '') {
        alert("书名不能为空")
      }
      else if (this.flagD == 0) {
        alert("价格应当是正数")
      }
    },
    judge: function (event) {
      if (event.target.value > 0) {
        this.flagD = 1
      }
    },
    cancel: function () {
      this.flagA = 1
      this.flagB = 0
      this.flagC = 0
    },
    minusbtn2: function () {
      this.newbook.number--
    },
    addbtn2: function () {
      this.newbook.number++
    },
  }
}

</script>
<style>
table {
  border-collapse: collapse;
}

th{
  background-color: gainsboro;
}

th,
td {
  border: 1px solid black;
  padding: 8px 16px;
}

.active {
  background-color: orange;
}</style>