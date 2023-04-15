<template>
  <div class="totalPrice">总价：￥{{ totalPrice }}当前选中书籍:{{ message }}</div>
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
      <book-manage v-for="(item, index) in books" :key="index" :class="{ active: index === currentIndex }"
          @click="changeBac(index)" @increment="increment(index)" :order="index+1" :name="bookTitle(item.name)" :count="item.count" :price="item.price" @removebook="removebook(index)" @decrement="decrement(index)"></book-manage>
          <addBooks :count="newBooks.count" @countdre="newBooks.count--" @countin="newBooks.count++" :id="books.length + 1"  v-model:name="newBooks.name" v-model:price="newBooks.price" v-if="!change" @click="chaged2"></addBooks>
    </tbody>
  </table>
  <button v-if="change" @click="changed">添加</button>
      <div v-else>
          <button @click="addBookT();changed()">确认</button>
          <button @click="changed();cleaCon()">取消</button>
      </div>
</template>

<script>
import bookManage from './components/HelloWorld.vue'
import addBooks from './components/addBooks'
export default {
  data() {
    return {
      books: [{
        name: "JavaScript高级程序设计",
        price: 126,
        count: 1
      }, {
        name: "你不知道的JS(上卷)",
        price: 78,
        count: 1
      }, {
        name: "你不知道的JS(中卷)",
        price: 76,
        count: 1
      }, {
        name: "你不知道的JS(下卷)",
        price: 64,
        count: 1
      }], currentIndex: -1,
      message: '',
      newBooks: {
        name: "",
        price: 0,
        count:1
      },
      change: true
    }
  }, methods: {
    bookTitle(name) {
      return "《" + name + "》"
    },
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removebook(index) {
      this.books.splice(index, 1)
    },
    changeBac(index) {
      this.currentIndex = index
      this.message = this.books[index].name
    },
    addBookT() {
      if (this.newBooks.name === '') {
        alert('书名不能为空')
      } else if (this.newBooks.price <= 0) {
        alert('价格应该是正数')
      } else {
        this.books.push({name:this.newBooks.name,price:this.newBooks.price,count:this.newBooks.count})
        this.change = false
        console.log(this.newBooks
        );
        console.log(this.books);
        this.newBooks.name = ''
        this.newBooks.price = 0
        this.newBooks.count =1
      }
    }, changed() {
      if (this.change) {
        this.change = false
      } else {
        this.change = true
      }
    }, changed2() {
      this.change = false
    }, cleaCon() {
      this.newBooks.name = ''
      this.newBooks.price = 0
      this.newBooks.count = 1
    }
  }, computed: {
    totalPrice() {
      return this.books.reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
    }
  }, components: {
    bookManage,
    addBooks
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 20px;
}

thead {
  background-color: #f5f5f5;
}

th,
td {
  border: 1px solid #000;
  padding: 8px 16px;
}

.totalPrice {
  font-weight: 550;
  margin-bottom: 10px;
}

.active {
  background-color: #e7ca0b;
}
</style>
