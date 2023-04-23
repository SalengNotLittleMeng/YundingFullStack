<template>
   <div class="Title">
    <h1 class="title">热门歌手</h1>
   </div>
   <Box1 :DATAS = "artist"></Box1>
   
   <div>
    <h1>榜单</h1>
   </div>
   <div class="Ending">
   <Box2 :DATAS = "hotSong"></Box2>
   <Box2 :DATAS = "newSong"></Box2>
   <Box2 :DATAS = "originSong"></Box2>
   </div>
</template>

<script>
import artist from "../data/artist.js"
import hotSong from "../data/hotSong.js"
import newSong from "../data/newSong.js"
import originSong from "../data/originSong.js"
import Box1 from "./components/Box1.vue"
import Box2 from "./components/Box2.vue"
export default {
  data(){
    return{
      artist,
      hotSong,
      newSong,
      originSong,
    }
  },

  components: {
    Box1,
    Box2,
  }
}
</script>

<style scoped>
      .Ending{
         margin: 0 auto;
         display: flex;
         justify-content: space-around;
         width: 1500px;
         border-style: solid;
        border-top-width: 5px;
        border-right-width: 0px;
        border-bottom-width: 5px;
        border-left-width: 0px;
      }
      h1{
        position: relative;
        left: 450px;
      }

</style>
