<template>
  <div class="hello">
    <!-- 以下为遍历的数据 -->
    <div  class="nav-item"  >
      <div>{{bookItem.id}}</div>
      <div style="cursor:pointer" @click="handleBookName">{{bookItem.name}}</div>
      <div>{{bookItem.price}}</div>
      <div> <button @click="decrease">-</button>    
        {{bookItem.number}}
        <button @click="more">+</button></div>
      <div><button>移除</button></div>
    </div>
  </div>
</template>
//父组件书单,子组件每本书
<script>
export default {
  name: 'HelloWorld',
  props:{
    bookItem:{
        type:Object,
        default:()=>{
          return{
          id:'',
          price:'',
          name:'',
          number:'',
          }
        }
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    handleDel(){
        this.$emit('delBook',this.bookItem.id)
    },
    more(){
       this.$emit('moreOne',this.bookItem.id)//this.bookItem.number还行不通的,数量父组件是知道的,但具体要改变的是那本书是需要子组件传过去的
    },
    decrease(){
      this.$emit('decreaseOne',this.bookItem.id)
    },
    handleBookName(){
      console.log('id',this.bookItem.id)
      this.$emit('changeColor',this.bookItem.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ></style>
