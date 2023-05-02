<template>
  <div id="root">

    <MyHeader :list="this.list" :selectedBook="this.selectedBook"></MyHeader>
    <MyList @selected="selected" @addCount="addCount" @reduceCount="reduceCount" :list="this.list" :addShow="addShow"
      @bookInf="addBookInf" @remove="remove"></MyList>
    <MyFooter @addShow="addShow1"></MyFooter>

  </div>
</template>

<script>
//引入nanoid作为唯一标识
import { nanoid } from 'nanoid'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHead.vue'
export default {
  data() {
    return {
      list: [
        { id: nanoid(), bookName: "相合之物", value: 111, count: 1, operation: "移除" },
        { id: nanoid(), bookName: "高等数学", value: 222, count: 2, operation: "移除" },
        { id: nanoid(), bookName: "深度学习", value: 333, count: 3, operation: "移除" },
        { id: nanoid(), bookName: "活着", value: 444, count: 2, operation: "移除" },
        { id: nanoid(), bookName: "人间失格", value: 555, count: 4, operation: "移除" },
      ],
      selectedBook: '',
      addShow: {
        addShow: true,
        add: '',
      },

    }
  },
  //引入组件
  components: { MyFooter, MyHeader, MyList },
  methods: {
    //通知MyList组件是否显示input框
    addShow1(e, choose) {
      this.addShow = { addShow: e, add: choose }
    },
    //将新增图书信息添加到数组
    addBookInf(bookInf) {
      this.list.push(bookInf)
      this.addShow.add = "false"
    },
    //增加数量
    addCount(id) {
      this.list.forEach(function (list) {
        if (list.id === id) {
          list.count = list.count + 1
        }
      })
    },
    //减少数量
    reduceCount(id) {
      console.log(id)
      this.list.forEach(function (list) {
        if (list.id === id) {
          list.count = list.count - 1
        }
      })
    },
    //选中图书，并将选中图书的id赋值给this.selectedBook，便于传给MyHeader组件
    selected(id) {
      this.list.forEach((list) => {
        if (list.id === id) {
          this.selectedBook = list.bookName
        }
      })
    },
    //移除，通过filter（）进行条件选择
    remove(id) {
      console.log(id)
      this.list = this.list.filter((list) => {
        return list.id != id
      })
    }
  }

}

</script>

<style>
table,
table tr th,
table tr td {
  border: 1px solid #000;
  border-collapse: collapse;

}

table {
  margin: 0 auto;
  width: 500px;

}

table tr th {
  background-color: rgb(162, 161, 161);
  opacity: 0.8;
}

#root {
  margin: 0 auto;
  text-align: center;
}

input {
  width: 100px;
}
</style>
