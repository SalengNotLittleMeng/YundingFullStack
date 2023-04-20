<template>
  <tr>
    <td>{{ bookIndex }}</td>
    <td>《{{ bookName }}》</td>
    <td>￥{{ bookPrice }}</td>  
    <td>
      <!-- 禁用按钮disabled，用v-bind动态绑定 禁用功能，当购买数量小于1时会禁用减少按钮 -->
      <button 
      :disabled="bookNumber < 1" 
      @click="decrement(bookIndex-1)">-</button> 
      {{ bookNumber }}
      <button @click="increment(bookIndex-1)">+</button>
    </td>
    <td>
      <button @click="removeBook(bookIndex-1)">移除</button>
    </td>
  </tr>
</template>

<script>
  export default{
    props:{
      bookIndex:{
        type:Number,
      },
      bookName:{
        type:String,
      },
      bookPrice:{
        type:Number,
      },
      bookNumber:{
        type:Number,
      }
    },
    emits:['dec','inc','rem'],
    methods:{
      decrement(count){
        this.$emit("dec",count);
      },
      increment(count){
        this.$emit("inc",count);
      },
      removeBook(count){
        this.$emit('rem',count);
      }
    }
  }
</script>

<style scoped>
  td{
    border: 1px solid #aaa;
    padding: 8px 16px;
  }
  .active{
    background-color: rgb(199, 199, 222);
  }
</style>