<template>
  <h1>热门歌手</h1>
  <div>   
    <key><!--就是这个组件-->
    </key>
  </div>
  <h1></h1>
  <h1>榜单</h1>
  <div class="base">
    <div class="base_jr">
      <div class="base_cr">
        <list>
          <template #title>
            {{ this.hot.name }}
          </template>
          <template #cont>
            {{ this.hot.description }}
          </template>
          <template #picture>
            <img src="" alt="" ref="pic_left">
          </template>
          <template #char>
            <ul>
              <li v-for="(item,index) in this.hot.tracks">{{index+1}}-{{ item.name }}</li>
            </ul>
          </template>
        </list>
      </div>
      <div class="base_cr">
        <list>
          <template #title>
            {{ this.newsong.name }}
          </template>
          <template #cont>
            {{ this.newsong.description }}
          </template>
          <template #picture>
            <img src="" alt="" ref="pic_center">
          </template>
          <template #char>
            <ul>
              <li v-for="(item,index) in this.newsong.tracks">{{index+1}}-{{ item.name }}</li>
            </ul>
          </template>
        </list>
      </div>
      <div class="base_cr">
        <list>
          <template #title>
            {{ this.origin.name }}
          </template>
          <template #cont>
            {{ this.origin.description }}
          </template>
          <template #picture>
            <img src="" alt="" ref="pic_right">
          </template>
          <template #char>
            <ul>
              <li v-for="(item,index) in this.origin.tracks">{{index+1}}-{{ item.name }}</li>
            </ul>
          </template>
        </list>
      </div>      
    </div>
  </div>
</template>

<script>
import key from './components/keyEle.vue'
import list from './components/listTitle.vue'
import hot from '../data/hotSong.js'
import newsong from '../data/newSong.js'
import origin from '../data/originSong.js' 
export default {
  name: 'App',
  components: {
    key,
    list,
    hot,
    newsong,
    origin,
  },
  data(){
    return{
      hot:'',
      newsong:'',
      origin:'',
    }
  },
  created(){
    this.hot = hot
    this.newsong = newsong
    this.origin = origin
    console.log(hot)
  },
  mounted(){
    //console.log(this.$refs.img);
    //console.log(this.arr.length)
    const ele = this.$refs.pic_left
    ele.src = hot.coverImgUrl
    const ele_one = this.$refs.pic_center
    ele_one.src = newsong.coverImgUrl
    const ele_two = this.$refs.pic_right
    ele_two.src = origin.coverImgUrl
    //console.log(ele)
  }
}
</script>
<style>
h1{
  padding-bottom: 0px;
  border-bottom: 3px solid;
  width: 1300px;
  border-image: -webkit-linear-gradient(to bottom,black , rgba(214, 211, 211, 0.53) , #ffffff)
}
img{
  width: 160px;
  height: 160px;
}
li{
  list-style:none;
}
.base_jr{
  display: flex;
  width: 1300px;
  justify-content:space-between;
}
.base{
 display: flex; 
}
</style>
