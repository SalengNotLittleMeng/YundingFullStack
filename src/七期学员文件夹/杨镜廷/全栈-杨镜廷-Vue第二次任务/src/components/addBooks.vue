<template>
  <h4>输入书名</h4><input type="text" v-model="bookName">
  <button @click="transmit(bookName)">确定</button>
</template>
<script>
export default{
  data(){
    return{
      bookName:""
    }
  },
  methods:{
    transmit(name){
      this.$emit("addBooks",name)
    }
  }
}
</script>
<style>
</style>