const { createApp } = Vue
createApp({
  data() {
    return {
      message:"",
      arr:["fuck","damn","shit"],
      index:3
    }
  },
  methods:{
    add:function(msg){
      this.arr.push(msg)
      this.index++
    },
    input_add:function(message){
      this.arr.push(message)
      this.index++
    },
    dele:function(){
      this.arr.pop()
      this.index--
    }
  }
}).mount('#app')