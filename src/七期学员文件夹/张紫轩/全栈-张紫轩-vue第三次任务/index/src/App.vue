<template>
  <div>
    <h1> 热门歌手</h1>
    <hr width="1300px">
    <single>
      <template v-slot:top>
        <div class="topbox" v-for="item in artist" :key="item">
          <img :src="item.picUrl" :art="item.altUrl" width="100px" height="100px">
          <h6>{{ item.name }}</h6>
        </div>
      </template>
    </single>
    <hr width="1300px">
    <h1>榜单</h1>
    <hr width="1300px">
    <single>
      <template v-slot:medium>
        <div class="medium" v-for="item in list" :key="item" >
          <div class="box_left">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="box_right">
            <img :src="item.coverImgUrl" width="100px" height="100px">
          </div>
        </div>
      </template>
    </single>
    <single>
      <template v-slot:bottom>
        <div class="bottom" v-for="item in list" :key="item">
          <hr>
          <div  v-for="(value, index) in item.tracks" :key="value">
            <p class="p">{{ index+1 }} - {{ value. name }}</p>
          </div>
          <hr>
        </div>
      </template>
    </single>
    <hr  width="1300px">
  </div>
</template>

<script>
import artist from "./data/artist.js"
import hotSong from "./data//hotSong.js"
import newSong from "./data/newSong.js"
import originSong from "./data/originSong.js"
import single from "./component/single.vue"
export default {
  components: {
    single
  },
  data() {
    return {
      artist,
      hotSong,
      newSong,
      originSong,
      list:[ newSong, hotSong, originSong]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.topbox {
  margin-right: 20px;
}

.medium {
  margin: 10px 0;
  margin-right: 30px;
  display: flex;
}

.box_left {
  width: 290px;
  height: 100px;
}
.p{
  width: 390px;
  font-size: 23px;
}
.bottom{
  margin-right: 30px;
  height: 320px;
}
</style>