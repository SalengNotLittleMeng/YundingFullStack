<template>
  <div>
    <!-- 歌手 -->
    <div class="title">热门歌手</div>
    <slot name="content">
      <div class="nav">
        <div v-for="(item, index) in artist" :key="index" class="avator">
          <div>
            <img :src="item.picUrl" :alt="item.altUrl" />
          </div>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </slot>
    <div class="title" style="margin-top: 24px">榜单</div>
   <slot name="bottom">
     <div class="nav">
      <!-- 三个歌单 -->
      <div v-for="(item, index) in songList" :key="index" class="left">
        <div class="row-nav">
          <div class="desc-nav">
            <div class="title">{{ item.name }}</div>
            <div class="desc">
              {{ item.description }}
            </div>
          </div>
          <div class="img-nav">
            <img :src="item.coverImgUrl" alt="" />
          </div>
        </div>
        <div class="song-nav">
          <div
            v-for="(childItem, childIndex) in item.tracks"
            :key="childIndex"
            class="song-item"
          >
            <div>
              <img :src="childItem.picUrl" alt="" />
            </div>
            <div>
              <div style="font-size: 14px">{{ childItem.name }}</div>
              <div style="font-size: 12px; color: grey">歌手:未知</div>
            </div>
          </div>
        </div>
      </div>
    </div>

   </slot>
  </div>
</template>

<script>
import artist from "./staticJs/artist";
import hotSong from "./staticJs/hotSong";
import newSong from "./staticJs/newSong";
import originSong from "./staticJs/originSong";
export default {
  data() {
    return {
      artist,
      songList: [hotSong, newSong, originSong],
    };
  },
};
</script>

<style>
.nav {
  width: 100%;
  display: flex;
}

.left,
.middle,
.right {
  width: 30%;
  height: 200px;
  margin-right: 24px;
}

.avator {
  margin-right: 30px;
  width: 80px;
  height: 130px;
}
.avator > div:nth-child(1) {
  width: 80px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
}
.avator > div:nth-child(1) > img {
  width: 80px;
  height: 100px;
  object-fit: contain;
}
.title {
  font-weight: bolder;
  font-size: 24px;
  text-align: left;
}
.row-nav {
  display: flex;
  justify-content: space-between;
}
.desc-nav {
  width: 60%;
}
.row-nav .desc {
  font-size: 12px;
}
.row-nav .img-nav {
  width: 30%;
  border-radius: 6px;
  overflow: hidden;
}
.img-nav img {
  width: 100px;
  height: 100px;
  object-fit: fill;
}
.song-item {
  display: flex;
  align-items: center;
}
.song-item > div:nth-child(1) {
  margin: 12px 0 0 12px;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
}
.song-item > div:nth-child(1) img {
  width: 60px;
  height: 60px;
}
.song-item > div:nth-child(2) {
  text-align: left;
  margin-left: 8px;
}
</style>
