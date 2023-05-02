<template>
<!-- 负责填充书籍信息的组件 -->
    <tr > 
      <td>{{id+1}}</td>
      <td>《{{bookname}}》</td>
      <td>￥{{price}}</td>
      <td><button @click="decrease(id)">-</button>{{count}}<button @click="add(id)">+</button></td>
      <td><button @click="delete1(id)">删除</button></td>
    </tr>
  
</template>

<script>

export default {
  name: 'book',
  props: ["id","bookname","price","count","decrease"],
  methods:{
    decrease(id){     
      this.$emit("decrease",id);
    },
    add(id){     
      this.$emit("add",id);
    },
    delete1(id){
      this.$emit("delete1",id);
    },
    
  }
  
}
</script>

<style scoped>

</style>
