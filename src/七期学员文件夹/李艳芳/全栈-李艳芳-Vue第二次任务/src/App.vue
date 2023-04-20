<template>
  <div id="app">
    <template v-if="books.length">
      <h2>总价：￥{{ totalPrice }} 当前选中书籍：{{ currentBook }}</h2>
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
            <show-book 
            v-for="(item,index) in books" 
            :key="item.id"
            @click="rowClick(index,item)"
            :class="{ active: index === currentIndex }"
            :bookIndex="index + 1"
            :bookName="item.name"
            :bookPrice="item.price"
            :bookNumber="item.count"
            @dec="decBtnClick(index)"
            @inc="incBtnClick(index)"
            @rem="removeBtnClick(index)"></show-book>
            <add-book v-if="showAdd"
            :newIndex="books.length + 1"
            :newPrice="newPri"
            :newNumber="newNum"
            @nRem="newRem"></add-book>
          </tbody>
      </table>
      <br>
      <div v-if="showAdd">
        <button @click="confirm">确认</button>&nbsp;
        <button @click="cancel">取消</button>
      </div>
      <button class="button" v-else
      @mes="message"
      @click="addBook(message)" >添加</button>
    </template>
    <template v-else>
        <h2>购物车为空，请添加书籍！</h2>
    </template>
  </div>
</template>

<script>
import showBook from "./components/showBook.vue";
import addBook from "./components/addBook.vue";
  export default{
    components: {
      addBook,
      showBook
    },
    data(){
      return{
        books:[
        {
          id:1,
          name:'JavaScript高级程序设计',
          price:126,
          count:1
        },
        {
          id:2,
          name:'你不知道的JS（上卷）',
          price:78,
          count:1
        },
        {
          id:3,
          name:'你不知道的JS（中卷）',
          price:76,
          count:1
        },
        {
          id:4,
          name:'你不知道的JS（下卷）',
          price:64,
          count:1
        }
        ],
        currentIndex:-1,
        currentBook:' ',
        newPri:0,
        newNum:1,
        showAdd:0,
      }
    },
    methods: {
      decBtnClick(index){
        this.books[index].count--
      },
      incBtnClick(index){
        this.books[index].count++
      },
      removeBtnClick(index){
        this.books.splice(index,1)
      },
      rowClick(index,item){
        this.currentIndex = index;
        this.currentBook = item.name
      },
      addBook(message){
        this.showAdd = 1;
        this.books[this.books.length + 1] = message
      },
      newRem(){
        this.showAdd = 0
      },
    },
    computed: {
      totalPrice(){
        //直接遍历books
        let price = 0;
        for(let i = 0;i < this.books.length;i++){
          price += this.books[i].price * this.books[i].count
        };
        return price
      }
    },
  }
</script>

<style scoped>
  table{
    border-collapse: collapse; /*边框合并*/
    text-align: center;
    width:1000px;
  }
  thead{
    background-color: #f5f5f5;
    color: rgb(88, 88, 89);
  }
  th{
    border: 1px solid #aaa;
    padding: 8px 16px;
  }
</style>