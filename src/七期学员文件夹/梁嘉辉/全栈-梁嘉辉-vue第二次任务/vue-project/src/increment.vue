<template>
  <div class="app" v-if="this.judge!=true&&this.judgement!=true">
    <button @click="btn">增加图书</button>
  </div>
  <div v-else>
    <button @click="btn1">确认</button>
    <button @click="btn2">取消</button>
  </div>
</template>
<script>
  export default{
    props:["judgement"],
    data(){
      return{
        judge:false,
        judgeMent:this.judgement
      }
    },
    methods:{
      btn(){
        this.judge=true
        this.$emit("add")
      },
      btn1(){
        this.judge=false
        this.$emit("add1")
      },
      btn2(){
        this.judge=false
        this.$emit("add2")
      }
    }
  }
</script>