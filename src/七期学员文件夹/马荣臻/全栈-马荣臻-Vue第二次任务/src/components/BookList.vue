<template>
  <div id="app">
    <table>
      <sub-book-list-title></sub-book-list-title>
      <tbody>
        <sub-book-list :class="{ chosen: isChosen[index] }" v-for="(item, index) in books" :key="index" :bookData="item"
          @reduceCount="reduceCount" @addCount="addCount" @remove="remove" @click="chose(index)"
          :datas="this.books[index]"></sub-book-list>
      </tbody>
    </table>
    <h2>总价：{{ totalPrice }}</h2>
    <!-- 书籍的增删 -->
    <button @click="add()" v-if="!isAdd">添加</button>
    <div v-if="isAdd">
      <button @click="yes()" @keyEnter="getObj()">确定</button>
      <button @click="no()">取消</button>
    </div>
    <!-- 书籍的增删 -->

  </div>

  <!-- 以下是真实的数组，UI与真实数据不一致，暂未解决 -->
  <h3>以下是真实的数组，目前存在UI与真实数据不一致的问题，暂未解决</h3>
  <p v-for="item in books" :key="item">{{ item }}<br /></p>
</template>

<script>
import SubBookListTitle from "./SubBookListTitle.vue"
import SubBookList from "./SubBookList.vue"

export default {
  name: "book-list",
  props: {
    row: {
      type: Number,
      default: 3
    },
    col: {
      type: Number,
      default: 5
    },
    bookData: {
      type: Object,
    },
  },
  data() {
    return {
      books: this.bookData,
      isChosen: [],
      chosed: -1,
      isAdd: false,
    }
  },
  components: {
    SubBookListTitle,
    SubBookList,
  },
  computed: {
    totalPrice() {
      let price = 0;
      for (let item in this.books) {
        price += this.books[item].price * this.books[item].count;
      }
      return price
    }
  },
  methods: {
    getObj(e) {
      console.log(e);
    },
    reduceCount() {
      this.$forceUpdate()
    },
    addCount() {
      this.$forceUpdate()
    },
    remove() {
      this.books.splice(this.chosed, 1);
      this.$forceUpdate()
    },
    chose(index) {
      if (this.chosed != -1) {
        this.isChosen[this.chosed] = 0
      }
      this.chosed = index
      this.isChosen[index] = 1;
    },
    add() {
      this.books.push({
        id: this.books[this.books.length - 1].id + 1,
        name: `<input v-model="newObj.name" @keyup="handleInput" />`,
        date: `<input v-model="newObj.name" @keyup="handleInput" />`,
        price: `<input v-model="newObj.name" @keyup="handleInput" />`,
        count: 1
      });
      this.isAdd = true;
    },
    yes() {
      this.books[this.books.length - 1].name = this
      this.isAdd = false
    },
    no() {
      this.isAdd = false
      this.books.pop();
    }
  }
};
</script>

<style scoped>
@import "@/styles/booklist.scss";
</style>