<template>
    <show-content :titles="titles" :artists="artists">
        <template v-slot:title>
            {{ titles[0] }}
        </template>
        <template v-slot:artists>
            <div class="artist" v-for="artist in artists" :key="artist">
                <img id="artistImg" :src="artist.picUrl" :alt="artist.altUrl">
                <p>{{ artist.name }}</p>
            </div>
        </template>
    </show-content>
    <show-content :titles="titles" :newSongs="newSongs" :hotSongs="hotSongs" :originSongs="originSongs">
        <template v-slot:title>
            {{ titles[1] }}
        </template>
        <template v-slot:list>
            <song-list>
                <template v-slot:listTitle>
                    {{ newSongs.name }} 
                </template>
                <template v-slot:listDescription>
                    {{ newSongs.description }}
                </template>
                <template v-slot:listImage>
                    <img id="rinkingImg" :src="newSongs.coverImgUrl">
                </template>
                <template v-slot:songList>
                    <div class="list" v-for="(item, index) in newSongs.tracks" :key="item">
                        {{ index + 1 }} - {{ item.name }}
                    </div>
                </template>
            </song-list>
            <song-list>
                <template v-slot:listTitle>
                    {{ hotSongs.name }}
                </template>
                <template v-slot:listDescription>
                    {{ hotSongs.description }}
                </template>
                <template v-slot:listImage>
                    <img id="rinkingImg" :src="hotSongs.coverImgUrl">
                </template>
                <template v-slot:songList>
                    <div class="list" v-for="(item, index) in hotSongs.tracks" :key="item">
                        {{ index + 1 }} - {{ item.name }}
                    </div>
                </template>
            </song-list>
            <song-list>
                <template v-slot:listTitle>
                    {{ originSongs.name }}
                </template>
                <template v-slot:listDescription>
                    {{ originSongs.description }}
                </template>
                <template v-slot:listImage>
                    <img id="rinkingImg" :src="originSongs.coverImgUrl">
                </template>
                <template v-slot:songList>
                    <div class="list" v-for="(item, index) in originSongs.tracks" :key="item">
                        {{ index + 1 }} - {{ item.name }}
                    </div>
                </template>
            </song-list>
        </template>
    </show-content>
</template>

<script>
import ShowContent from "./components/ShowContent.vue"
import SongList from "./components/SongList.vue";
import artist from "./data/artist";
import hotSong from "./data/hotSong";
import newSong from "./data/newSong";
import originSong from "./data/originSong";

export default {
    name: "App",
    components: {
        ShowContent,
        SongList
    },
    data() {
        return {
            titles: ["热门歌手", "榜单"],
            artists: artist,
            hotSongs: hotSong,
            newSongs: newSong,
            originSongs: originSong
        }
    },
    methods: {
        showArtist() {
            console.log(artist)
            console.log(artist.artist)
        }
    }
}
</script>

<style>
#artistImg {
    width: 85px;
    height: 85px;
}
#rinkingImg{
    width: 100px;
    height: 100px;
    margin-top: 20px;
}
</style>