<template>
    <!-- <div class="book" :class="{ 'selected': isSelected }" @click="selectBook"> -->
      <tr class="book" :class="{ 'selected': isSelected }" @click="selectBook">
          <td>{{ title }}</td>
          <td>{{ author }}</td>
          <td>{{ publishedDate }}</td>
          <td>{{ price }}</td>
          <td>
            <button :disabled="count <= 1" @click="delCount(index)">-</button>
            {{count }}
            <button @click="addCount(index)">+</button>
          </td>
          <td>
            <!-- <button @click="selectBook(index)">选中</button> -->
            <button @click.stop="removeBook(index)">删除</button>
          </td>
        </tr>
    <!-- </div> -->
  </template>
  
  <script>
  export default {
    props: ['title', 'author', 'publishedDate', 'price', 'count' ,'isSelected'],
    methods: {
      selectBook() {
        this.$emit('book-selected');
      },
      removeBook() {
        this.$emit('book-removed');
      },
      addCount(){
          this.$emit('count-add')
      },
      delCount(){
        this.$emit('count-del')
      },
    }
  }
  </script>
  
  <style scoped>
  .book {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  table.books {
  border-collapse: collapse;
  width: 100%;
}

table.books th,
table.books td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

table.books th {
  background-color: #eee;
}
  .selected {
    background-color: lightblue;
  }
  </style>