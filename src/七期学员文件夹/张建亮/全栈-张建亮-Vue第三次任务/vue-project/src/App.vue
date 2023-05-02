<template>
  <div class="container">

    <category title="热门歌手" >
      <ul class="artist">
        <ol class="artist" v-for="(item, index) in this.artist" :key="index"><img :src=item.picUrl alt="">{{ item.name }}
        </ol>
      </ul>
    </category>
    <p class="title">&nbsp 榜单</p>
    <template class="song">

      <category :title=this.newSong.name class="newSong">
        <template v-slot:description>
          <div class="description">
            <p>{{ this.newSong.description }}</p>
            <img :src=this.newSong.coverImgUrl alt="">
          </div>
        </template>
        <template class="content" v-slot:list>
          <ol type="1">
            <li v-for="(item, index) in this.newSong.tracks" :key="index">{{ item.name }}</li>
          </ol>
        </template>
      </category>

      <category :title=this.hotSong.name class="hotSong">
        <template class="description" v-slot:description>
          <div class="description">
            <p>{{ this.hotSong.description }}</p>
            <img :src=this.hotSong.coverImgUrl alt="">
          </div>
        </template>
        <template class="content" v-slot:list>
          <ol type="1">
            <li v-for="(item, index) in this.hotSong.tracks" :key="index">{{ item.name }}</li>
          </ol>
        </template>
      </category>

      <category :title=this.originSong.name class="originSong">
        <template class="description" v-slot:description>
          <div class="description">
            <p>
              {{ this.originSong.description }}</p>
            <img :src=this.originSong.coverImgUrl alt="">
          </div>
        </template>
        <template v-slot:list>

          <ol type="1">
            <li v-for="(item, index) in this.originSong.tracks" :key="index">{{ item.name }}</li>
          </ol>
        </template>
      </category>
    </template>
  </div>
</template>


<script>
import artist from './message/artist'
import hotSong from './message/hotSong'
import newSong from './message/newSong'
import originSong from './message/originSong'
import { defineAsyncComponent } from 'vue';
//定义异步组件
const category = defineAsyncComponent({
  loader: () => import(/*webpackChunkName= 'list'*/ './components/category.vue'),
  delay: 200,
}
)
export default {
  name: 'App',
  //加载异步组件
  components: {
    category
  },
  //mixins导入数据
  mixins: [artist, hotSong, newSong, originSong],

  data() {
    return {
      artist: artist,
      newSong: newSong,
      hotSong: hotSong,
      originSong: originSong,
      
    }
  },
  
}


</script>


<style>
.container {
  max-width: 1800px;
  margin: 0 auto;
  justify-content: space-around;
}

.song {
  display: flex;
  justify-content: space-around;

}

ul.artist {
  display: flex;
  justify-content: center;

}

ol.artist {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.artistStyle {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  text-align: center;
  margin: 0 auto;

}

img {
  width: 100px;
  height: 100px;
}

.song .newSong {
  width: 400px;
  border-radius: 5%;
}

.song .hotSong {
  width: 400px;
  border-radius: 5%;
}

.song .originSong {
  width: 400px;
  border-radius: 5%;
}

.description {
  display: flex;
  border-top: solid white;
  border-bottom: solid white;
  height: 100px;
}

.title {
  font-size: 40px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  opacity: 0.8;
}</style>