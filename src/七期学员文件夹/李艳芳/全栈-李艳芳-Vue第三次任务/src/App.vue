<template>
  <div class="app">
    <h1>热门歌手</h1>
      <hr>
      <content>
      <template v-slot:artistList>
        <div class="artist">
        <div class="artistList" v-for="item in Artist" :key="item">
            <img :src="item.picUrl" :alt="item.altUrl" class="artistImg">
            <h5>{{ item.name }}</h5>
        </div>
        </div>
      </template>
      </content>
      <hr>
      <h1>榜单</h1>
      <hr>
      <div class="list">
        <content>
          <template v-slot:newList>
            <div class="new">
              <div class="title">
                <div class="left">
                  <h2>{{ NewSong.name }}</h2>
                  <span class="des">{{ NewSong.description }}</span>
                </div>
                <div class="right">
                  <img :src="NewSong.coverImgUrl" class="img">
                </div>
              </div>
              <hr>
              <div class="newList" v-for="(item,index) in NewSong.tracks">
                <h4>{{ index + 1 }} - {{ item.name }}</h4>
              </div>
              <hr>
            </div>
          </template>
        </content>
        <content>
          <template v-slot:hotList> 
            <div class="hot">
              <div class="title">
                <div class="left">
                  <h2>{{ HotSong.name }}</h2>
                  <span class="des">{{ HotSong.description }}</span>
                </div>
                <div class="right">
                  <img :src="HotSong.coverImgUrl" class="img">
                </div>
              </div>
              <hr>
              <div class="hotList" v-for="(item,index) in HotSong.tracks">
                <h4>{{ index + 1 }} - {{ item.name }}</h4>
              </div>
              <hr>
            </div>
          </template>
        </content>
        <content>
          <template v-slot:originList>
            <div class="origin">
              <div class="title">
                <div class="left">
                  <h2>{{ OriginSong.name }}</h2>
                  <span class="des">{{ OriginSong.description }}</span>
                </div>
                <div class="right">
                  <img :src="OriginSong.coverImgUrl" class="img">
                </div>
              </div>
              <hr>
              <div class="originList" v-for="(item,index) in OriginSong.tracks">
                <h4>{{ index + 1 }} - {{ item.name }}</h4>
              </div>
              <hr>
            </div>
          </template>
        </content>
      </div>
      <hr>
  </div>
</template>

<script>
import content from "./components/Content.vue";

import Artist from "./components/data/artist.js";
import HotSong from "./components/data/hotSong.js";
import NewSong from "./components/data/newSong.js";
import OriginSong from "./components/data/originSong.js";

  export default{
    components: {
      content
    },
    data () {
      return {
        Artist,
        HotSong,
        NewSong,
        OriginSong
      }
    }
  }
</script>

<style scoped>
.artist,.list{
    display: flex;
    flex-direction: row;
}
.artistList{
    flex:1;
    text-align: center;
}
.artistImg{
  width:120px;
  height:100px
}
.new,.hot,.origin{
  flex:1;
  width:450px;
  margin:0 25px
}
.title{
  display: flex;
  flex-direction: row;
}
.left{
  flex: 2;
}
.right{
  flex:1;
  width:50px;
  height:150px;
}
.img{
  width:100%;
  height:100%;
}
</style>