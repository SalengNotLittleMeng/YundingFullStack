<script setup>
import {ref} from 'vue'
import artist from '../state/artist'
import hotSong from '../state/hotSong'
import newSong from '../state/newSong'
import originSong from '../state/originSong'
import singerList from './singerList.vue'
import songListHeader from './songListHeader.vue'
import songList from './songList.vue'
let artists = ref(artist)
let hotSongs = ref(hotSong)
let newSongs = ref(newSong)
let originSongs = ref(originSong)

</script>

<template>


    <h1>热门歌手</h1> 
    <hr>
    <div class="singers">
        <singerList v-for="(person,index) in artists">
            <template #name>{{ person.name }}</template>
            <template #img><img :src="person.altUrl" class="singer"></template> 
        </singerList>
    </div>
    <hr>

    <h1>榜单</h1>
    <hr>
    <div class="songList">
        <div class="list">
        <songListHeader>
            <template #name>{{ newSongs.name }}</template>
            <template #description>{{ newSongs.description }}</template>
            <template #cover><img :src="newSongs.coverImgUrl"></template>
        </songListHeader>
        <songList v-for="song,index in newSongs.tracks">
            <template #songs>{{index+1 + ' - ' + song.name }}</template>
            <template #songImg><img :src="song.picUrl" class="song" v-show="index < 3"></template>
        </songList>
        </div>

        <div class="list">
        <songListHeader>
            <template #name>{{ hotSongs.name }}</template>
            <template #description>{{ hotSongs.description }}</template>
            <template #cover><img :src="hotSongs.coverImgUrl"></template>
        </songListHeader>
        <songList v-for="song, index in hotSongs.tracks">
                <template #songs>{{ index + 1 + ' - ' + song.name }}</template>
                <template #songImg><img :src="song.picUrl" class="song" v-show="index < 3"></template>
        </songList>
        </div>

        <div class="list">
        <songListHeader>
            <template #name>{{ originSongs.name }}</template>
            <template #description>{{ originSongs.description }}</template>
            <template #cover><img :src="originSongs.coverImgUrl"></template>
        </songListHeader>
        <songList v-for="song, index in originSongs.tracks">
                <template #songs>{{ index + 1 + ' - ' + song.name }}</template>
                <template #songImg><img :src="song.picUrl" class="song" v-show="index < 3"></template>
        </songList>
        </div>
    </div>
</template>

<style scoped>

hr {
    border-width: 3px;
    border-color: black;
}

.singers {
    display: flex;
}

.singer {
    display: block;
    width: 90px;
    height: 90px;
}

.songList {
    display: flex;
    flex-direction: row;
}

.list {
    display: inline-block;
    margin-right:  180px;
}

img {
    width: 150px;
    height: 150px;
}

.song {
    display: inline-block;
    width: 60px;
    height: 60px;
}

</style>