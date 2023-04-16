<template>
  <div>
    <div v-if="arr.length > 0">
      <h2>总价为：￥{{ allMoney }} 当前选中的书籍为：{{ currentName }} 您上次删除的书籍为：{{ delName }}</h2>
      <table border="1">
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        <BookDetails v-for="(item, index) of arr" :key="item.bookName" :bookName="item.bookName" :price="item.price"
          :counter="item.counter" :index="index" @move="change" @money="moneys" :class="{ active: index == currentIndex }"
          @click="select(index)" @moremsg="moreBookmsg"></BookDetails>
      </table>
      <addBook @more="moreBook"></addBook>
    </div>
    <div v-else>
      <h2>书籍删除完毕</h2>
      <addBook @more="moreBook"></addBook>
    </div>
  </div>
</template>

<script>
import addBook from './components/add.vue'
import BookDetails from './components/book_details.vue'
export default {
  components: {
    BookDetails,
    addBook,
  },
  data() {
    return {
      arr: [{
        bookName: "《JavaScript高级程序设计》",
        price: 126,
        counter: 1,
      }, {
        bookName: "《你不知道的JS（上卷）》",
        price: 78,
        counter: 1,
      }, {
        bookName: "《你不知道的JS（中卷）》",
        price: 76,
        counter: 1,
      }, {
        bookName: "《你不知道的JS（下卷）》",
        price: 64,
        counter: 1,
      }],
      allMoney: 344,
      isActive: false,
      currentIndex: -1,
      currentName: '',
      delName: '',
      special: -1,
    }
  },
  methods: {
    change(Index, count) {
      console.log(count);
      this.allMoney -= this.arr[Index].price * count
      this.delName = this.arr[Index].bookName
      this.special = Index
      this.arr.splice(Index, 1)
    },
    moneys(index, count) {
      this.allMoney += this.arr[index].price * count
    },
    select(index) {
      if (this.special != index) {
        this.currentIndex = index
        this.currentName = this.arr[index].bookName
        this.special = -1
      }
    },
    moreBook(vol) {
      if (vol == true) {
        this.arr.push({
          bookName: '',
          price: '',
          counter: 0
        })
      }
      else {
        this.arr.splice(this.arr.length - 1, 1)
      }
    },
    moreBookmsg(newvalue1, newvalue2) {
      if (newvalue1 != "" && newvalue2 != "") {
        this.arr[this.arr.length - 1].bookName = "《" + newvalue1 + "》"
        this.arr[this.arr.length - 1].price = newvalue2
      }
      else {
        alert("请先填写书名再填写价格。。。")
        this.arr.splice(this.arr.length - 1, 1)
        location.reload()
      }
    }
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  width: 500px;
  height: 200px;
}

.active {
  background-color: orangered;
}
</style>