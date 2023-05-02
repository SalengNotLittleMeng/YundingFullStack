<template>
  <div class="app">
    <!-- 热门歌手 -->
    <ListItem>
      <template #listName>
        <h2>热门歌手</h2>
      </template>

      <template #listItem>
        <div class="listItemDetail">
          <div class="listItemDetSmall" v-for="item in artists">
            <img :src="item.picUrl">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </template>
    </ListItem>

    <!-- 榜单 -->
    <ListItem>
      <template #listName>
        <h2>榜单</h2>
      </template>

      <template #listItem>
        <div class="threeLists">
          <!-- 热歌榜 -->
          <div class="newSongList">
            <ListItem>
              <template #listName>
                <h2>{{ newSongs.name }}</h2>
                <p>{{ newSongs.description }}</p>
                <img :src="newSongs.coverImgUrl" alt="">
              </template>
              <template #listItem>
                <div class="listSongDetail">
                  <div class="listSongDetSmall1" v-for="(item,index) in newSongs.tracks">
                    <span>{{ index+1 }} 、 {{ item.name }}</span>
                    <img :src="item.picUrl">
                  </div>
                </div>
              </template>
            </ListItem>
            
          </div>
          <!-- 新歌榜 -->
          <div class="hotSongList">
            <ListItem>
              <template #listName>
                <h2>{{ hotSongs.name }}</h2>
                <p>{{ hotSongs.description }}</p>
                <img :src="hotSongs.coverImgUrl" alt="">
              </template>
              <template #listItem>
                <div class="listSongDetail">
                  <div class="listSongDetSmall1" v-for="(item,index) in hotSongs.tracks">
                    <span>{{ index+1 }} 、 {{ item.name }}</span>
                    <img :src="item.picUrl">
                  </div>
                </div>
              </template>
            </ListItem>
          </div>
          <!-- 原创榜 -->
          <div class="originSongList">
            <ListItem>
              <template #listName>
                <h2>{{ originSongs.name }}</h2>
                <p>{{ originSongs.description }}</p>
                <img :src="originSongs.coverImgUrl" alt="">
              </template>
              <template #listItem>
                <div class="listSongDetail">
                  <div class="listSongDetSmall1" v-for="(item,index) in originSongs.tracks">
                    <span>{{ index+1 }} 、 {{ item.name }}</span>
                    <img :src="item.picUrl">
                  </div>
                </div>
              </template>
            </ListItem>
          </div>
        </div>
      </template>
    </ListItem>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue'
import artists from '../data/artist.js'
import hotSongs from '../data/hotSong.js'
import newSongs from '../data/newSong.js'
import originSongs from '../data/originSong.js'

export default {
  name: 'App',
  components: {
    ListItem
  },
  data(){
    return {
      artists,
      hotSongs,
      newSongs,
      originSongs
    }
  }
  // computed:{
  //   songMessage(){
  //     return (this.index+1) + '-' + this.songItem.name
  //   }
  // }
}
</script>

<style>
  .listItemDetail {
    display: flex;
    justify-content: space-around;
    width: auto;
    height: 140px;
  }
  .listItemDetSmall {
    width: 100px;
    height: 140px;
    /* border: 3px red solid; */
  }
  .listItemDetSmall img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .listItemDetSmall p {
    display: block;
    margin: auto;
    text-align: center;
  }
  .threeLists {
    display: flex;
    justify-content: space-around;
    width: auto;
    /* height: 800px; */
  }
  .threeLists div {
    width: 430px;
    /* border: 3px blue solid; */
    position: relative;
  }
  .threeLists img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    position: absolute;
    right: 10px;
    top: 10px;
    /* float: right; */
  }
  .threeLists p {
    display: block;
    width: 300px;
    height: 80px;
  }
  .listSongDetail {
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .listSongDetail img {
    width: 30px;
    height: 30px;
    right: 30px;
    top: 0px;
    object-fit: cover;
  }
  
</style>
