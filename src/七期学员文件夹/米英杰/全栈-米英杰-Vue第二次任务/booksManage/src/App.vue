<template>
  <div>
    <h2>
      总价：{{ RMB(getTotalPrice) }} 当前选中书籍：{{ currentBook }}
    </h2>
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
        <book-manage
          v-for="(book,index) in books" 
          :key="index+1" 
          :order="index+1" 
          :name="bookTitle(book.name)" 
          :price="RMB(book.price)" 
          :count="book.count" 
          @remove-book="removeBook(index)"
          @decrement="book.count--"
          @increment="book.count++"
          @select="getCurrentIndex(book,index)"
          :class="{active:index === currentIndex}"
        >
        </book-manage>
        <increase-book 
          v-if="increase"
          :order="books.length+1"
          :count="newBook.count"
          v-model:name="newBook.name"
          v-model:price="newBook.price"
          @decrement="newBook.count--"
          @increment="newBook.count++"
        >
        </increase-book>
      </tbody>
    </table>
    <button v-if="!increase" @click="increase = true">添加</button>
    <template v-else>
      <button @click="increaseBook()">确认</button>
      <button @click="increase = false">取消</button>
    </template>
  </div>
</template>

<script>
import BookManage from './components/bookManage.vue'
import increaseBook from './components/increaseBook.vue'
export default {
  components:{
    BookManage,
    increaseBook
  },
  data() {
    return {
      books: [
        {
          name: "你不知道的JS（上卷）",
          price: 54,
          count:2,
        },
        {
          name: "你不知道的JS（中卷）",
          price: 76,
          count:3,
        },
        {
          name: "你不知道的JS（下卷）",
          price: 64,
          count:1,
        },
      ],
      newBook: {
        name:'',
        price:0,
        count:1,
      },
      currentIndex: -1,
      currentBook: '',
      increase:false
    }
  },
  methods: {
    RMB(price) {
      return "￥" + price
    },
    bookTitle(name) {
      return "《"+name+"》"
    },
    removeBook(index) {
      this.books.splice(index,1)
    },
    getCurrentIndex(book, index) {
      this.currentBook = book.name
      this.currentIndex = index
    },
    increaseBook() {
      if (this.newBook.name === '') {
        alert("书籍名字不能为空")
      }
      else if (this.newBook.price <= 0) {
        alert("书籍价格应为正数")
      }
      else{
        this.books.push(this.newBook)
        this.increase = false
      }
    }
  },
  computed:{
    getTotalPrice(){
      return this.books.reduce((value,book) => {
        return value + book.price * book.count
      },0)
    }
  }
}
</script>

<style scoped>
  h2{
    font-size: 30px;
  }

  table{
    border-collapse: collapse;
    text-align: center;
    width: 800px;
    margin-bottom: 10px;
  }

  th{
    border: solid 1px black;
    background-color: #f5f5f5;
    padding: 10px 0;
  }
  
  .active{
    background-color: orange;
  }
</style>