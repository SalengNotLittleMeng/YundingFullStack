<template>
  <div>
    <h1>书籍管理系统</h1>
    <table class="books">
      <thead>
        <tr>
          <th>书名</th>
          <th>作者</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <book
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :author="book.author"
        :publishedDate="book.publishedDate"
        :price="book.price"
        :count="book.count"
        :isSelected="selectedBookIndex === index"
        @book-selected="selectBook(index)"
        @book-removed="removeBook(index)"
        @count-add="addCount(index)"
        @count-del="delCount(index)"
      ></book>
      <tr v-if="isAddBookVisible">
          <td>
            <input type="text" v-model="newBook.title" placeholder="书名">
          </td>
          <td>
            <input type="text" v-model="newBook.author" placeholder="作者">
          </td>
          <td>
            <input type="text" v-model="newBook.publishedDate" placeholder="出版日期">
          </td>
          <td>
            <input type="number" v-model="newBook.price" placeholder="价格">
          </td>
          <td>
            <input type="number" v-model="newBook.count" placeholder="数量">
          </td>
          <td>
            <button @click="addBook">确认添加</button>
          </td>
        </tr>
    </table>
    <button @click="toggleAddBookVisibility">添加书籍</button>
    <p>总价：{{ totalPrice }} </p>
    <p v-if="selectedBook !== null">选中的书籍：{{ selectedBook.title }}</p>
  </div>
</template>

<script>
import Book from './bookList.vue';

export default {
  components: { Book },
  data() {
    return {
      books: [
      {id:'001', title: 'JavaScript高级程序设计', author: 'Nicholas C. Zakas', publishedDate: '2013-02-01' ,price:'29' ,count:1 },
        {id:'002', title: 'CSS世界', author: '张鑫旭', publishedDate: '2018-05-01' ,price:'45' ,count:1 },
        {id:'003', title: 'Vue.js实战', author: '梁灏', publishedDate: '2019-08-15' ,price:'14' ,count:1 }
      
      ],
      selectedBookIndex: null,
      newBook: { title: '', author: '', publishedDate: '' ,price: '' ,count : ''},
      isAddBookVisible: false
    };
  },
  computed: {
    selectedBook() {
      return this.selectedBookIndex !== null ? this.books[this.selectedBookIndex] : null;
    },
    identifier(){
        return "￥"
    },
    totalPrice(){
        let price = 0
        for (const item of this.books){
            price += item.price * item.count
        }
        return price
    }
  },
  methods: {
    selectBook(index) {
      this.selectedBookIndex = index;
    },
    removeBook(index) {
      this.books.splice(index, 1);
      if (this.selectedBookIndex === index) {
        this.selectedBookIndex = null;
      } else if (this.selectedBookIndex > index) {
        this.selectedBookIndex--;
      }
    },
    addCount(index){
        this.books[index].count += 1
    },
    delCount(index){
        this.books[index].count -= 1
    },
    addBook() {
      if(this.newBook.title == '' || this.newBook.author == ''){
        alert('书名与作者不能为空')
      }else{
        this.books.push(this.newBook);
        this.newBook = { title: '', author: '', publishedDate: '',price: '' ,count : '' };
        this.isAddBookVisible = false;
      }
      
    },
    toggleAddBookVisibility() {
      this.isAddBookVisible = !this.isAddBookVisible;
    }
  }
}
</script>

<style scoped>



table {
  border-collapse: collapse;
  width: 100%;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

table th {
  background-color: #eee;
}

.add-book {
  margin-top: 20px;
}
</style>


