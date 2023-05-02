<template>
    <div>
      <contents>
        <template #left>
          <span class = "list">
            <div class = "list_top">
              <span>
                <h1>{{newSong.name}}</h1>
                <span  ref = "list_top_content">{{newSong.description}}</span>
              </span>
              <img src= "" alt="" ref = "list_top_img01">
            </div>
            <div class = "list_content">
              <ul>
                <li v-for = "(item) in newSong.tracks" :key="item">{{item.name}}</li>
              </ul>
            </div>
          </span>
        </template>
        <template #center>
          <span class="list">
            <div class = "list_top">
              <span>
                <h1>{{hotSong.name}}</h1>
                <span  ref = "list_top_content">{{hotSong.description}}</span>
              </span>
              <img src= "" alt="" ref = "list_top_img02">
            </div>
            <div class = "list_content">
              <ul>
                <li v-for = "(item) in hotSong.tracks" :key="item">{{item.name}}</li>
              </ul>
            </div>
          </span>
        </template>
        <template #right>
          <span class="list">
            <div class = "list_top">
              <span>
                <h1>{{originSong.name}}</h1>
                <span  ref = "list_top_content">{{originSong.description}}</span>
              </span>
              <img src= "" alt="" ref = "list_top_img03">
            </div>
            <div class = "list_content">
              <ul>
                <li v-for = "(item) in originSong.tracks" :key="item">{{item.name}}</li>
              </ul>
            </div>
          </span>
        </template>

      </contents>
    </div>
</template>

<script>
import contents from './components/contents.vue'
import newSong from './data/newSong.js'
import hotSong from './data/hotSong.js'
import originSong from './data/originSong.js'
export default {
    components: {
      contents,
    },

    created () {
      this.newSongImg = newSong.coverImgUrl
      this.hotSongImg = hotSong.coverImgUrl
      this.originSongImg = originSong.coverImgUrl
    },

    data () {
      return {
        newSong,
        newSongImg:'',
        hotSong,
        hotSongImg:'',
        originSong,
        originSongImg:'',
      }
    },

    mounted () {
      this.$refs.list_top_img01.src = this.newSongImg
      this.$refs.list_top_img02.src = this.hotSongImg
      this.$refs.list_top_img03.src = this.originSongImg
    }
}
</script>

<style scoped>

.list {
  width: 300px;
  margin: 0 35px;
  display: flex;
  flex-direction: column;
}

.list_top {
  flex: 1;
  display: flex;
  border-bottom: 3px solid black;
}

.list_content {
  flex: 4;
}

img {
    width: 80px;
    height: 80px;
    transform: translateY(20px);
}

span {
  font-size: 12px;
}

h1 {
  margin: 20px 0 0 0;
}

li {
  font-size: 20px;
  list-style: count;
}

ul {
  border-bottom: 1px solid black;
}

</style>