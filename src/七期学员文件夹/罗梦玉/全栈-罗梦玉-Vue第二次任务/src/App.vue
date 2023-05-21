<template>
  <div>
    <book-main :books="books"></book-main>
  </div>
</template>

<script>

import BookMain from "./components/BookMain.vue"

export default{
  components: {
    BookMain
  },
  data: function () {
    return {
      books: [
        {
          id: 1,
          name: "《JavaScript高级程序设计》",
          price: 126,
          number: 1
        },
        {
          id: 2,
          name: "《你不知道的JS(上卷)》",
          price: 78,
          number: 1
        },
        {
          id: 3,
          name: "《你不知道的JS(中卷)》",
          price: 76,
          number: 1
        },
        {
          id: 4,
          name: "《你不知道的JS(下卷)》",
          price: 64,
          number: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>