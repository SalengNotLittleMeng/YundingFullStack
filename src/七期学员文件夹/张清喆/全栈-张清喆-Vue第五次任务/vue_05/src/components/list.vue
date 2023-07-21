<template>
    <div>
      <li  v-for="item in items" :key="item.num" @click="change(item.num)">{{item.nam}}</li>
      <input type="text" v-model="this.name" @blur="add(this.name)">
    </div>
  </template>
  
  <script>
  export default {
    name: 'list',
    props:["items"],
    data(){
      return {
        name:"",
      }
    },
    methods:{
      add(name){     
      this.$emit("add",name);
      this.name=""
      },
      change(a)
      {
        this.$emit("change",a);
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>