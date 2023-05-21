<template>
  <div class="container">
    <headline>
      <template v-slot:headline>
        <h2>热门歌手</h2>
      </template>
      <template v-slot:content>
      <singer :singers="singers">
        <template v-slot:singer="props">
          <div class="names">{{ props.item.name }}</div>
        </template>
        <template v-slot:picture="props">
          <img :src="props.item.picUrl">
        </template>
      </singer>
    </template>
    </headline>

    <headline>
      <template v-slot:headline>
        <h2>榜单</h2>
      </template>
      <template v-slot:content>
        <div class="contentA">
        <headline>
            <template v-slot:headline>
              <div class="name">{{ newSong.name }}</div>
            </template>
            <template v-slot:coverImg>
              <img :src="newSong.coverImgUrl" class="coverImgUrl">
            </template>
            <template v-slot:descrip>
              <div class="description">{{ newSong.description }}</div>
            </template>

            <template v-slot:content>
          <div class="tracks">
            <list>
              <template v-slot:songs>
                <div v-for="(item, index) in newSong.tracks" :key="item">{{ index + 1 }} - {{ item.name }}</div>
              </template>
            </list>
          </div>
        </template>
      </headline>
      </div>
      <div class="contentA">
          <headline>
              <template v-slot:headline>
                <div class="name">{{ hotSong.name }}</div>
              </template>
              <template v-slot:coverImg>
                <img :src="hotSong.coverImgUrl" class="coverImgUrl">
              </template>
              <template v-slot:descrip>
                <div class="description">{{ hotSong.description }}</div>
              </template>

              <template v-slot:content>
            <div class="tracks">
              <list>
                <template v-slot:songs>
                  <div v-for="(item, index) in hotSong.tracks" :key="item">{{ index + 1 }} - {{ item.name }}</div>
                </template>
              </list>
            </div>
          </template>
        </headline>
        </div><div class="contentA">
          <headline>
              <template v-slot:headline>
                <div class="name">{{ originSong.name }}</div>
              </template>
              <template v-slot:coverImg>
                <img :src="originSong.coverImgUrl" class="coverImgUrl">
              </template>
              <template v-slot:descrip>
                <div class="description">{{ originSong.description }}</div>
              </template>

              <template v-slot:content>
            <div class="tracks">
              <list>
                <template v-slot:songs>
                  <div v-for="(item, index) in originSong.tracks" :key="item">{{ index + 1 }} - {{ item.name }}</div>
                </template>
              </list>
            </div>
          </template>
        </headline>
        </div>
      </template>
    </headline>
  </div>
</template>
<script>
import headline from "./headline.vue"
import list from './list.vue';
import singer from './singer.vue';
import artist from './data/artist';
import hotSong from './data/hotSong';
import originSong from './data/originSong';
import newSong from './data/newSong';

export default {
  components: { headline, list, singer },
  data() {
    return {
      singers: artist,
      hotSong,
      originSong,
      newSong
    }
  }
}
</script>

<style>
.container {
  margin: auto;
  width: 1200px;
}

img {
  width: 100px;
}

.names {
  text-align: center;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

.contentA {
  width: 315px;
}

.coverImgUrl {
  float: right;
  width: 150px;
}

.description {
  font-size: 18px;
  width: 180px;
}

.tracks {
  margin-top: 16px;
  font-size: 20px;
}

.bottomhr {
  position: relative;
  top: 450px;
  border-top: 2px solid;
}
</style>