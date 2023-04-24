<template>
  <div id="app">
    <h2>热门歌手</h2>
    <hr/>
    <div class="artistlist">
      <ArtistList v-for="(item, index) in artists" :key="index">
        <template #picture>
          <img :src="item.picUrl">
        </template>
        <template #name>{{ item.name }}</template>
      </ArtistList>
    </div>
    <hr id="small">
    <h2>榜单</h2>
    <hr/>
    <div class="list">
      <div class="listcontent">
        <ListHeader>
          <template #ListName>{{ newSongs.name }}</template>
          <template #ListInfo>{{ newSongs.description }}</template>
          <template #ListPic>
            <img :src="newSongs.coverImgUrl">
          </template>
        </ListHeader>
        <ListContent v-for="(item,index) in newSongs.tracks" :key="index">
          <template #ListContent>{{ index+1 }} - {{ item.name }}</template>
        </ListContent>
        <hr id="small">
      </div>
      <div class="listcontent">
        <ListHeader>
          <template #ListName>{{ hotSongs.name }}</template>
          <template #ListInfo>{{ hotSongs.description }}</template>
          <template #ListPic>
            <img :src="hotSongs.coverImgUrl">
          </template>
        </ListHeader>
        <ListContent v-for="(item, index) in hotSongs.tracks" :key="index">
            <template #ListContent>{{ index + 1 }} - {{ item.name }}</template>
        </ListContent>
        <hr id="small">
      </div>
      <div class="listcontent">
        <ListHeader>
          <template #ListName>{{ originSongs.name }}</template>
          <template #ListInfo>{{ originSongs.description }}</template>
          <template #ListPic>
            <img :src="originSongs.coverImgUrl">
          </template>
        </ListHeader>
        <ListContent v-for="(item, index) in originSongs.tracks" :key="index">
          <template #ListContent>{{ index + 1 }} - {{ item.name }}</template>
        </ListContent>
        <hr id="small">
      </div>
    </div>
    <hr id="small">
  </div>
</template>

<script setup>
import { ref } from 'vue';
import artist from './data/artist'
import newSong from './data/newSong';
import hotSong from './data/hotSong';
import originSong from './data/originSong';
const artists = ref(artist)
const newSongs = ref(newSong)
const hotSongs = ref(hotSong)
const originSongs = ref(originSong)
import ArtistList from './components/ArtistList..vue'
import ListHeader from './components/ListHeader.vue'
import ListContent from './components/ListContent.vue'

</script>

<style scoped>
hr {
  border-width: 2px;
  border-color: black;
}

.artistlist {
  display: flex;
  justify-content: space-between;
}

img {
  width: 100px;
  height: 100px;
}

.list {
    display: flex;
    justify-content: space-between;
}

.listcontent{
  margin:0 15px;
  flex: 1
}

.listcontent img {
  width: 200px;
  height: 200px;
}

#small {
  border-width: 1px;
  border-color: black;
}
</style>