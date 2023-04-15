<template>
  <div v-if="this.books.length > 0">
    <div class="header">
      <h1>总价:{{ formarPrice(totalPrice) }}</h1>
      <h2>当前选中书籍:{{ currentName }}</h2>
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
          <tr v-for="(item, index) in books" :key="item.id" :class="{ active: index === currentIndex }"
            @click="trclick(index, item)">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ formarPrice(item.price) }}</td>
            <td>
              <button :disabled="this.books[index].count <= 0" @click="reduce(index)">-</button>
              {{ item.count }}
              <button @click="increase(index)">+</button>
            </td>
            <td>
              <button @click="remove(index, item)">移除</button>
            </td>
          </tr>
          <increase-book v-if="increase" :order="books.length + 1" :count="newBook.count" v-model:name="newBook.name"
            v-model:price="newBook.price" @decrement="newBook.count--" @increment="newBook.count++">
          </increase-book>
        </tbody>
      </table>
      <button v-if="!increase1" @click="increase = true">添加</button>
      <template v-else>
        <button @click="increaseBook()">确认</button>
        <button @click="increase = false">取消</button>
      </template>
    </div>
  </div>
</template>

<script >
import increaseBook from './components/increaseBook.vue';
export default {
  name: 'App',
  commputeds: {
    increaseBook
  },
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 128,
          count: 1
        },
        {
          id: 2,
          name: '《你不知道的程序设计(上卷)》',
          price: 78,
          count: 1,
        },
        {
          id: 3,
          name: "《你不知道的程序设计(中卷)》",
          price: 76,
          count: 1
        },
        {
          id: 4,
          name: "《你不知道的程序设计(下卷)》",
          price: 64,
          count: 1
        },
      ],
      newBook: {
        name: '',
        price: 0,
        count: 1,
      },
      currentIndex: -1,
      currentName: "",
      currrentBool: false,
      currrentBool1: true,
      newNumber: 0,
      increase1:false
    }

  },
  methods: {
    formarPrice(price) {
      return "￥" + price
    },
    reduce(index) {
      console.log(index);
      if (this.books[index].count >= 1) {
        this.books[index].count--
      }
    },
    increase(index) {
      console.log("点击+", index);
      this.books[index].count++
    },
    remove(index, item) {
      this.books.splice(index, 1);
      alert(item.name + "书籍删除完毕")
    },
    trclick(index, item) {
      console.log(index);
      this.currentIndex = index;
      console.log(item.name);
      this.currentName = item.name
    },
    increaseBook() {
      if (this.newBook.name === '') {
        alert("书籍名字为空")
      }
      else if (this.newBook.price <= 0) {
        alert("书籍价格为正数")
      }
      else {
        this.books.push(this.newBook)
        this.increase = true
      }
    }
  },
  computed: {
    totalPrice() {
      let price = 0
      for (let item of this.books) {
        price += item.price * item.count
      }
      return price
    },

  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
}

thead {
  background-color: #f5f5f5;
}

th,
td {
  border: 1px solid black;
  padding: 8px 16px;
}

.active {
  background-color: orange;
  color: red
}

#addBtn {
  margin-top: 60px;
  height: 40px;
  width: 80px;
}
</style>
