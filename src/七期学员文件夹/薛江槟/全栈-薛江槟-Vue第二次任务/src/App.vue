<template>
  <div class="app">
    
    <content :books="books"  ></content>
    <!-- <addBooks :books="books"  @addBook="addBook" @isdefine="isdefine"></addBooks> -->
  </div>
</template>

<script >
import content from './components/icons/content.vue'
// import addBooks from './components/icons/addBooks.vue'

export default {
  components: {
    content
  },

  data() {
    return {
      books: [
        {
          id: 1,

          name: "《算法导论》",
          price: 58,
          number: 0,

        },
        {
          id: 2,
          name: "《vue.js别跑》",
          price: 86,
          number: 0
        },
        {
          id: 3,
          name: '《起个啥名字呢》',
          price: 5,
          number: 0
        },
      ],

    }
  }
}
//     methods: {
//     //   addBook(book) {
        
//     //     this.isadd = book
//     //    console.log("isadd",this.isadd);
//     //   },
//     //   isdefine(data) {
//     //     this.isdefined = data
//     //     console.log("isdefine",this.isdefined);
//     //   }
//     // }
// }

</script>
<style scoped >

</style>