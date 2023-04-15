<script>
export default {
  data() {
    return {
      notice: false,
      content: '',
      allContent: [],
      isRed: false
    }
  },
  methods: {
    add() {
      this.allContent.push(this.content)
    },
    remove() {
      this.allContent.pop()
    },
  },
  watch: {
    allContent: {
      handler(newValue, oldValue) {
        if (this.allContent.length >= 5) {
          this.isRed = true
          this.notice = true
        } else {
          this.isRed = false
          this.notice = false
        }
      },
      deep: true
    }
  }
}
</script>

<template>
  <input type="text" v-model="content" @keyup.enter="add">
  <h2>你输入的单词是：{{ content }}</h2>

  <button @click="add">添加</button>
  <button @click="remove">删除</button>
  <div :class="{ red: isRed }">
    <div v-if="notice">憋加了,已经塞不下了
    </div>
    单词列表
    <ul>
      <li v-for="(p, index) in allContent" :key="index">
        {{ p }}
      </li>
    </ul>
  </div>
</template>

<style>
button {
  width: 50px;
  height: 20px;
  margin: 10px;
}

.red {
  color: red;
}
</style>





