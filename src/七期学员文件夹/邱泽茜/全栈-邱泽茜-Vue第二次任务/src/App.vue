<template>
    <h3>总价：{{ TotalPrice }} </h3>
    <h3 >当前选中的书籍：{{ currentBook }}</h3>
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
        <book-list :books="books" 
                   :currentBook="currentBook" 
                   @addCounter="add" 
                   @subCounter="sub" 
                   @btnClick="removeBook" 
                   @isCurrentBook="showCurrentBook"
                   >
                  </book-list>
        <new-book :newBook="newBook"
                  :books="books"
                  :newIndex="this.books.length"
                  v-if="isShow" 
                  @showInput="showInput"
                  @addCounter="add" 
                  @subCounter="sub" 
                  @btnClick="removeBook" 
                  @addName="addName" 
                  @addPrice="addPrice"
                  >
                </new-book>
      </tbody>
    </table>
    <AddBook :books="books" @addBook="addNewBook" @update="update" @showInput="showInput"></AddBook>
  </template>
  
  <script>
  import BookList from "./components/BookList.vue"
  import AddBook from "./components/AddBook.vue"
  import NewBook from "./components/NewBook.vue"
  
  export default {
      name: "App",
      components: {
          BookList,
          AddBook,
          NewBook
      },
      data: function() {
        return {
          books: [
            {name: 'JS高级程序设计', price: 126, count: 1},
            {name: '你不知道的JS（上）', price: 78, count: 1},
            {name: '你不知道的JS（中）', price: 76, count: 1},
            {name: '你不知道的JS（下）', price: 64, count: 1}
          ],
          newBook: [{name: '', price: '', count: 1} ],
          currentBook: '',
          nameValue: '',
          priceValue: 0,
          isShow: false
        }
      },
      computed: {
        TotalPrice() {
          let price = 0
          for (let book of this.books) {
            price += book.price * book.count
          }
          return "￥" + price
        },
      },
      methods: {
        // 改变书籍数量
        add(index) {
          this.books[index].count++
        },
        sub(index) {
          this.books[index].count--
        },
        // 移除
        removeBook(index) {
          this.books.splice(index, 1)
        },
        // 显示当前选中书籍
        showCurrentBook(index) {
          this.currentBook = this.books[index].name
        },
        // 添加书籍
        addNewBook() {
          this.isShow = true
        },
        addName(nameValue) {
          this.nameValue = nameValue
        },
        addPrice(priceValue) {
          this.priceValue = priceValue
        },
        showInput() {
          this.isShow = false
        },
        update() {
          this.newBook[0].name = this.nameValue
          this.newBook[0].price = this.priceValue
          this.newBook[0].count = 1
          if(this.newBook[0].name === ''){
            // console.log( )
            alert("请输入书名！")
          }else if(this.newBook[0].price <= 0){
            alert("请输入正确的价格！")
          }else{
            this.books.push(this.newBook[0])
            // console.log(this.books)
            this.newBook = [{name: '', price: '', count: 1} ]
            this.isShow = false
          }
        }
      }
  }
  </script>
  
  <style>
    thead{
      background-color: aliceblue;
    }
  </style>
  