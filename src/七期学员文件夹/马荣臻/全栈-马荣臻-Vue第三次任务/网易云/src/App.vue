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
          <!-- 以下是组件单元，通过slot与v-for实现三个榜单 -->
          <list v-for="unit in itemList" :key="unit.name" :title="unit.name">
            <!-- 以下是标题描述部分，包括简介、封面 -->
            <template #titleContent>
              <div class="description">
                <p>{{ unit.description }}</p>
                <img :src="unit.coverImgUrl" alt="" class="cover" />
              </div>
            </template>
            <!-- 以上是标题描述部分，包括简介、封面 -->
            <!-- 以下是歌曲列表 -->
            <template #content>
              <div v-for="(item, index) in unit.tracks" :key="item.name">
                <p>{{ index + 1 }} - {{ item.name }}</p>
              </div>
            </template>
            <!-- 以上是歌曲列表 -->
          </list>
          <!-- 以上是组件单元，通过slot与v-for实现三个榜单 -->
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
      itemList: [hotSong, newSong, originSong],
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
  margin: auto;
  max-width: 1000px;
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
  width: 100px;
  height: 100px;
  display: inline;
  margin-left: 5px;
  flex: 0;
}
</style>
