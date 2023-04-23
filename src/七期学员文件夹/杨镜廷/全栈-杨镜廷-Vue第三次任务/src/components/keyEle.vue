<template>
  <div class="bigBox">
    <div class="head" v-for="(item) in arr">
      <img ref="img" src="" alt="">
      <div class="char">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
import artist from '../../data/artist.js'
export default {
  data(){
    return{
      arr:"",
    }
  },
  created(){
    this.arr=artist 
   //console.log(666)
  },
  mounted(){
    //console.log(this.$refs.img);
    //console.log(this.arr.length)
    const ele = this.$refs.img
    //console.log(ele)
    for(let i=0;i<this.arr.length;i++){
      ele[i].src = this.arr[i].picUrl
    }
  }
}
</script>
<style scoped>
.head{
  width: 100px;
  height: 100px;
  background: image 50px;
  display:inline-block;
  flex-direction: row;
  justify-content:space-between;
  margin:-10px 10px;
}
.bigBox{
  width: 1200px;
  height: 100px;
}
.char{
  width: 100%;
  text-align: center;
}
img{
  width: 100px;
  height: 100px;
}
</style>
