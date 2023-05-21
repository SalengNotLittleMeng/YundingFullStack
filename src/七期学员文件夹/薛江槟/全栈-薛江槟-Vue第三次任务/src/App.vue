<template>
  <h1>热门歌手</h1>
  <childrenOne :lists="artist">
  </childrenOne>
  <h1>榜单</h1>
  <hr/>
  <div class="contente">
      
  <childrenTwo :lists="hotSong">
    <template>

    </template>
  </childrenTwo >

  <childrenTwo :lists="newSong">
    <template>

    </template>
  </childrenTwo >
  <childrenTwo :lists="originSong">
    <template>

    </template>
  </childrenTwo>
  </div>
  
</template>
<script>
import artist from "./data/artist.js"
import hotSong from "./data/hotSong.js"
import newSong from "./data/newSong.js"
import originSong from "./data/originSong.js"
import childrenOne from "./components/childrenOne.vue"
import childrenTwo from "./components/childrenTwo.vue"

export default {
  data () {
    return {
      artist,
      hotSong,
      newSong,
      originSong,
    }
  },
  created(){
    
  },
  components: {
   childrenOne,
    childrenTwo,
  }
}

</script>
<style scoped >
    .contente{
      display: flex;
      justify-content:space-around;

    }
</style>