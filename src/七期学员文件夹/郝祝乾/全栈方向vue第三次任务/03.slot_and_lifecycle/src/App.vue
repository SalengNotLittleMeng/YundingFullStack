<template>
  <div class="app">

    <list-head style="width:900px;" title="热门歌手">
      <row-list>
        <artist v-for="item in artistData" :name="item.name" :altUrl="item.altUrl" :imgUrl="item.picUrl"></artist>
      </row-list>
    </list-head>
    <br>
    <list-head style="width:900px;" title="榜单">
      <row-list>
        <list-head style="width:280px;" v-for="list in lists" :title="list.name">
          <template #title="titleProp" >
          <div>{{ titleProp.title }}
          <br>
          <div style="width: 150px;height: 80px;overflow:hidden;font-weight: 100;font-size: 8px;">{{ list.description }}</div>
          
          </div>

          </template>
          <template v-slot:other>
            <img :src="list.coverImgUrl" style="width:100px;height: 100px;margin: 2px;">
          </template>
          <col-list>
          <song-item v-for="(song,index) in list.tracks" :name="song.name" :index="index+1"></song-item>
          </col-list>
        </list-head>
      </row-list>
    </list-head>
  </div>
</template>

<script>
import ListHead from './components/ListHead.vue';
import ColList from './components/ColList.vue';
import RowList from './components/RowList.vue';
import artist from './components/ArtistItem.vue';
import SongItem from './components/SongItem.vue';

import artistData from './data/artist.js';
import newSongData from './data/newSong.js';
import hotData from './data/hotSong.js';
import originSongData from './data/originSong.js';

export default {
  components: {
    ListHead,
    ColList,
    RowList,
    artist,
    SongItem,
  },
  data() {
    return {
      artistData,
      lists: [
        newSongData,
        hotData,
        originSongData,
      ]
    }
  }
}
</script>

<style>
* {
  border: 0;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
}

.app {
  width: 900px;
  margin:30px auto;
}
</style>
