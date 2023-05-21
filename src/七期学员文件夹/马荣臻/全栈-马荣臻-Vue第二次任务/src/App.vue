<template>
  <book-list :bookData="bookData"></book-list>
</template>

<script>
import BookList from "./components/BookList.vue"
import bookData from "./assets/data"

export default {
  name: 'App',
  data() {
    return {
      bookData: bookData.books,
    }
  },
  components: {
    BookList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
