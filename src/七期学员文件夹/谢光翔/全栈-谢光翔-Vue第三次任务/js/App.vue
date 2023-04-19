<script setup>
    import artist from '../data/artist';
    import artList from './myList.vue';
    import newSong from '../data/newSong';
    import hotSong from '../data/hotSong';
    import originSong from '../data/originSong';
</script>

<template>
  <h3>热门歌手</h3>
  <hr>
  <artList :list-content="artist" :ul-show="true" :ul-display="true" v-slot="slotProps">
    <div id="singer">
        <img :src="slotProps.content.picUrl">
        <span>{{ slotProps.content.name }}</span>
    </div>
  </artList>
  <hr>
  <h3>榜单</h3>
  <div id="songs">
    <div class="song_head_wrapper">
      <artList :list-content="newSong">
      <template v-slot:top="topProp">
        <div class="songHead">
            <img :src="topProp.content.coverImgUrl">
            <span>{{ topProp.content.name }}</span>
            <p>{{ topProp.content.description }}</p>
        </div>
      </template> 
    </artList>
    <artList :list-content="newSong.tracks" :ul-show="true">
      <template v-slot:default="slotProps">
        {{ slotProps.index+1 }}-{{ slotProps.content.name }}
      </template> 
    </artList>
    </div>
    <div class="song_head_wrapper">
      <artList :list-content="hotSong">
      <template v-slot:top="topProp">
        <div class="songHead">
            <img :src="topProp.content.coverImgUrl">
            <span>{{ topProp.content.name }}</span>
            <p>{{ topProp.content.description }}</p>
        </div>
      </template> 
    </artList>
    <artList :list-content="hotSong.tracks" :ul-show="true">
      <template v-slot:default="slotProps">
        {{ slotProps.index+1 }}-{{ slotProps.content.name }}
      </template> 
    </artList>
    </div>
    <div class="song_head_wrapper">
      <artList :list-content="originSong">
      <template v-slot:top="topProp">
        <div class="songHead">
            <img :src="topProp.content.coverImgUrl">
            <span>{{ topProp.content.name }}</span>
            <p>{{ topProp.content.description }}</p>
        </div>
      </template> 
    </artList>
    <artList :list-content="originSong.tracks" :ul-show="true">
      <template v-slot:default="slotProps">
        {{ slotProps.index+1 }}-{{ slotProps.content.name }}
      </template> 
    </artList>
    </div>
  </div>
</template>

<style>
    #singer img{
        width:60px;
        height: 60px;
        display: block;
    }
    #songs{
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    .song_head_wrapper{
      width: 33.3%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .songHead {
      width: 95%;
    }
    .songHead img{
      width: 80px;
      float: right;
    }
    .songHead span{
      font-weight: bold;
      font-size: 20px;
    }
</style>