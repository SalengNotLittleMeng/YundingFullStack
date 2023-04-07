<script>
export default {
  data(){
        return{
          message:"",
          words:[],
          fontColor:"red",
          index:0
        }
      },
      methods:{
        increase:function(){
          if(this.index<5&&this.message!=''){
            this.words.push(this.message)
            this.message=''
            this.index++
            // console.log(this.index)
          }else if(this.index==5){
            this.index=6
          }
        },
        delet:function(){
          if(this.words.length>0){
            this.words.pop()
            this.index=this.words.length
            // console.log(this.index)
          }else{
            alert("没单词了，别删了！")
          }
        }
      }
}
</script>

<template>
  <input type="text" v-model="message" @keyup.enter="increase">
     <button @click="increase">添加</button>
     <button @click="delet">删除</button>
     <h2>你要输入的单词是：{{message}}</h2>
     <h3 v-if="index>5" :style="{color:fontColor}">鳖加啦！单词数量太多啦</h3>
     <h3 v-if="this.words.length>0" :style="index>5?{color:fontColor}:''">单词列表</h3>
     <ul :style="index>5?{color:fontColor}:''">
      <li v-for="word in words">
        {{word}}
      </li>
     </ul>
</template>

