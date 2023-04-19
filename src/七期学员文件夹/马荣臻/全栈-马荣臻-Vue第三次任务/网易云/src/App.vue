<template>
  <div>
    <list title="热门歌手">
      <template #content>
        <div class="list">
          <div v-for="item in artist" :key="item.name">
            <img :src="item.picUrl" alt="" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </template>
    </list>
    <list title="榜单">
      <template #content>
        <div class="list">
          <list title="新歌榜">
            <template #titleContent>
              <div class="description">
                <p>{{ hotSong.description }}</p>
                <img :src="hotSong.coverImgUrl" alt="" class="cover" />
              </div>
            </template>
            <template #content>
              <div v-for="(item, index) in hotSong.tracks" :key="item.name">
                <p>{{ index + 1 }} - {{ item.name }}</p>
              </div>
            </template>
          </list>
          <list title="热歌榜">
            <template #titleContent>
              <div class="description">
                <p>{{ newSong.description }}</p>
                <img :src="newSong.coverImgUrl" alt="" class="cover" />
              </div>
            </template>
            <template #content>
              <div v-for="(item, index) in newSong.tracks" :key="item.name">
                <p>{{ index + 1 }} - {{ item.name }}</p>
              </div>
            </template>
          </list>
          <list title="原创榜">
            <template #titleContent>
              <div class="description">
                <p>{{ originSong.description }}</p>
                <img :src="originSong.coverImgUrl" alt="" class="cover" />
              </div>
            </template>
            <template #content>
              <div v-for="(item, index) in originSong.tracks" :key="item.name">
                <p>{{ index + 1 }} - {{ item.name }}</p>
              </div>
            </template>
          </list>
        </div>
      </template>
    </list>
  </div>
</template>

<script>
import list from "./components/list";
import artist from "./assets/data/artist.js";
import hotSong from "./assets/data/hotSong.js";
import newSong from "./assets/data/newSong.js";
import originSong from "./assets/data/originSong.js";

export default {
  name: "App",
  data() {
    return {
      artist,
      hotSong,
      newSong,
      originSong,
    };
  },
  components: {
    list,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}

* {
  margin: 0;
  padding: 0;
  text-align: left;
}

img {
  height: 30px;
  width: 30px;
}

p {
  font-size: 10px;
}

.list {
  display: flex;
  margin: 10px;
}

.list * {
  flex: 1;
}

.description {
  display: flex;
  margin-bottom: 5px;
}

.cover {
  display: inline;
  width: 100px;
  height: 100px;
  flex: 0;
}
</style>
