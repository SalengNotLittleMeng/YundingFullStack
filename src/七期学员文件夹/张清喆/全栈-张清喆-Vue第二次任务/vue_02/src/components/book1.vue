<template>
<!-- 负责实现增添书籍功能的组件 -->
    <tr > 
      <td>{{length+1}}</td>
      <td><input type="text"  v-model="bookname" @input="add_bookname()"></td>
      <td><input type="text"  v-model="price" @input="add_price()"></td>
      <td><button >-</button>1<button >+</button></td>
      <td><button >删除</button></td>
    </tr>
  
</template>

<script>

export default {
  name: 'book1',
  props: ["length"],
  data(){
    return{
      bookname:"",
      price:0,
    }
  },  
  methods:
  {
    add_bookname(){
      this.$emit("add_bookname",this.bookname); 
    },
    add_price(){
      var reg=/^[0-9]*$/;
      if(!reg.test(this.price))
      {
        alert("书籍价格只能是数字")
      }
      else{
        this.$emit("add_price",this.price); 
      }
      
      
    }
  },

  
  
}
</script>

<style scoped>

</style>
