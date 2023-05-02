<template>
    <div class="App">
      <!-- 热门歌手 -->
      <BaseLayout>
        <template #header>
          <h2>热门歌手</h2>
        </template>
        <template #default>
          <Artists>
            <template #artist="artist">
              <img :src="artist.picUrl" alt="">
              <span>{{ artist.name }}</span>
            </template>
          </Artists>
        </template>
      </BaseLayout>
      <!-- 榜单 -->
      <BaseLayout>
        <template #header>
          <h2>榜单</h2>
        </template>
        
        <template #default>
          <div class="lists">
            <!-- 新歌榜 -->
            <baseLayout class="list-box">
              <template #header>
                <ListHeader>
                  <template #words>
                    <h2>{{ newSongs.name }}</h2>
                    <div class="description">{{ newSongs.description }}</div>
                  </template>
                  <template #listImg>
                    <img :src="newSongs.coverImgUrl" alt="" class="listImg">
                  </template>
                </ListHeader>
              </template>
              <template #default>
                <List>
                  <template #list>
                    <div class="song" v-for="(newSong, index) of newSongs.tracks" :key="newSong">
                      <span>{{ index + 1 }} - </span>
                      <span>{{ newSong.name }}</span>
                    </div>
                  </template>
                </List>
              </template>
            </baseLayout >
            <!-- 热歌榜 -->
            <baseLayout class="list-box">
              <template #header>
                <ListHeader>
                  <template #words>
                    <h2>{{ hotSongs.name }}</h2>
                    <div class="description">{{ hotSongs.description }}</div>
                  </template>
                  <template #listImg>
                    <img :src="hotSongs.coverImgUrl" alt="" class="listImg">
                  </template>
                </ListHeader>
              </template>
              <template #default>
                <List>
                  <template #list>
                    <div class="song" v-for="(newSong, index) of newSongs.tracks" :key="newSong">
                      <span>{{ index + 1 }} - </span>
                      <span>{{ newSong.name }}</span>
                    </div>
                  </template>
                </List>
              </template>
            </baseLayout >
            <!-- 原创榜 -->
            <baseLayout class="list-box">
              <template #header>
                <ListHeader>
                  <template #words>
                    <h2>{{ originSongs.name }}</h2>
                    <div class="description">{{ originSongs.description }}</div>
                  </template>
                  <template #listImg>
                    <img :src="originSongs.coverImgUrl" alt="" class="listImg">
                  </template>
                </ListHeader>
              </template>
              <template #default>
                <List>
                  <template #list>
                    <div class="song" v-for="(newSong, index) of newSongs.tracks" :key="newSong">
                      <span>{{ index + 1 }} - </span>
                      <span>{{ newSong.name }}</span>
                    </div>
                  </template>
                </List>
              </template>
            </baseLayout >
          </div>
        </template>
      </BaseLayout>
    </div>
</template>

<script>
import Artists from './components/Artists.vue';
import List from './components/List.vue';
import ListHeader from './components/ListHeader.vue';
import BaseLayout from './components/BaseLayout.vue';
import artists from '../data/artist';
import newSongs from '../data/newSong';
import hotSongs from '../data/hotSong';
import originSongs from '../data/originSong';

export default {
  components: {
    BaseLayout,
    Artists,
    ListHeader,
    List,
  },
  data() {
    return {
      artists,
      newSongs,
      hotSongs,
      originSongs,
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  .App{
    width: 1200px;
    margin: 100px auto;
  }

  .lists{
    display: flex;
    justify-content: space-between;
  }

  .list-box{
    width: 350px;
  }
</style>