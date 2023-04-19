<template>
  <div id="app" v-cloak>
    <h2>总价：{{ prices }} 当前选中书籍：{{ select_name }}</h2>
    <table>
      <TableThead />
      <tbody>
        <tr v-for="(item, index) in list" :key="index" :class="{ active: index === currentIndex }">
          <BookInfo :name="item.name" :price="item.price" :index="index" :counter="item.counter" @add="add(index)"
            @reduce="reduce(index)" @select="select(index)" @delete="Delete(index)"/>
        </tr>
        <BookAdd :serialNumber="this.list.length" @addInfo="addInfo"/>
      </tbody>
    </table>
    <div v-show="!list.length">
      <h1 class="word">购物车空了~选两本书压压惊先！</h1>
    </div>
  </div>
</template>

<script>
import BookInfo from './components/BookInfo.vue'
import TableThead from './components/TableThead.vue'
import BookAdd from './components/BookAdd.vue'

export default {
  components: {
    TableThead,
    BookInfo,
    BookAdd,
  },
  data() {
    return {
      select_name: "",
      currentIndex: "",
      list: [
        { name: "js基础秘密", price: 87, counter: 5 },
        { name: "js基础不是秘密", price: 60, counter: 2 },
        { name: "js基础最大的秘密", price: 58, counter: 6 },
        { name: "js基础二次元秘密", price: 12, counter: 8 }
      ],
    }
  },
  methods: {
    add(index) {
      this.list[index].counter++
    },
    reduce(index) {
      this.list[index].counter--
    },
    select(index) {
      this.select_name = "《" + this.list[index].name + "》"
      this.currentIndex = index
    },
    Delete(index) {
      this.list.splice(index, 1)
    },
    addInfo(result) {
      this.list.push(result)
    }
  },
  computed: {
    prices() {
      let prices = 0
      for (const item of this.list) {
        prices += item.price * item.counter
      }
      return "￥" + prices
    },
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
}

tr {
  border: 1px solid black;
  border-top: 0;
  border-right: 0;
  height: 50px;
}

[v-cloak] {
  display: none;
}

.active {
  background-color: #ec9d0c;
}

.word {
  color: red;
}
</style>
