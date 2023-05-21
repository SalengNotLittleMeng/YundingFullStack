<template>
  <div class="container">
    <h2>热门歌手</h2>
    <hr class="hr">
    <Children :singers="singers">
      <template v-slot:singer="abc" >
        <div class="names">{{ abc.item.name }}</div>
      </template>
      <template v-slot:picture="abc">
        <img :src="abc.item.picUrl">
      </template>
    </Children>
    <h2>榜单</h2>
    <hr class="hr">
    <div class="mainContainer">
      <div class="main">
        <FirstList>
          <template v-slot:names>
            <div class="name">{{ newSong.name }}</div>
          </template>
          <template v-slot:coverImg>
            <img :src="newSong.coverImgUrl" class="coverImgUrl">
          </template>
          <template v-slot:descrip>
            <div class="description">{{ newSong.description }}</div>
          </template>
        </FirstList>
        <div class="tracks">
          <Lists>
            <template v-slot:songs>
              <div  v-for="(item,index) in newSong.tracks" :key="item">{{ index+1 }} - {{ item.name }}</div>
            </template>
          </Lists>
        </div>
      </div>
      <div class="main">
        <FirstList>
          <template v-slot:names>
            <div class="name">{{ hotSong.name }}</div>
          </template>
          <template v-slot:coverImg>
            <img :src="hotSong.coverImgUrl" class="coverImgUrl">
          </template>
          <template v-slot:descrip>
            <div class="description">{{ hotSong.description }}</div>
          </template>
        </FirstList>
        <div class="tracks">
          <Lists>
            <template v-slot:songs>
              <div  v-for="(item,index) in hotSong.tracks" :key="item">{{ index+1 }} - {{ item.name }}</div>
            </template>
          </Lists>
        </div>
      </div>
      <div class="main">
        <FirstList>
          <template v-slot:names>
            <div class="name">{{ originSong.name }}</div>
          </template>
          <template v-slot:coverImg>
            <img :src="originSong.coverImgUrl" class="coverImgUrl">
          </template>
          <template v-slot:descrip>
            <div class="description">{{ originSong.description }}</div>
          </template>
        </FirstList>
        <div class="tracks">
          <Lists>
            <template v-slot:songs>
              <div  v-for="(item,index) in originSong.tracks" :key="item">{{ index+1 }} - {{ item.name }}</div>
            </template>
          </Lists>
        </div>
      </div>
    </div>

    <hr class="bottomhr">
  </div>
</template>
<script>
import FirstList from './FirstList.vue';
import Lists from './Lists.vue';
import Children from './children.vue';
import artist from './data/artist';
import hotSong from './data/hotSong';
import originSong from './data/originSong';
import newSong from './data/newSong'

  export default{
    components: { Children, FirstList, Lists },
    data(){
      return{
        singers:artist,
        hotSong,
        originSong,
        newSong
      }
    }
}
</script>
<style scoped>
.container{
    margin: auto;
    width: 1200px;
  }
  .mainContainer{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  img{
    width: 100px;
  }
  .names{
    text-align: center;
  }
  hr{
    width: 1200px;
  }
  .hr{
    border-top: 3px solid ;
  }
  .name{
    font-size: 20px;
    font-weight: 600;
  }
  .coverImgUrl{
    position: absolute;
    width: 150px;
    left: 200px;
    top: 10px;
  }
  .description{
    font-size: 18px;
    position: absolute;
    width: 180px;
  }
  .main{
    position: relative;
  }
  .tracks{
    left: 20px;
    font-size: 20px;
    position: absolute;
    top: 200px;
  }
  .bottomhr{
    position: relative;
    top: 450px;
    border-top: 2px solid;
  }
</style>