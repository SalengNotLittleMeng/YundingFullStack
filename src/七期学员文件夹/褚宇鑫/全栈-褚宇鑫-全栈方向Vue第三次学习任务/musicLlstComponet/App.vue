<template>
    <div class="content">
        <h1>热门歌手</h1><hr>
        <div class="header">
            <div
            v-for="(item, index) in artists" 
            :key="index"
            @click="getCurrentItem(index)"
            :class="{active:index == currentIndex}" >
                <musiclist style="text-align: center;">
                    <div>
                        <img :src="item.picUrl" :alt="item.altUrl">
                        <span id="artist-name">{{ item.name }}</span>
                    </div>
                </musiclist>
            </div>
        </div>
        <hr>
        <h1>榜单</h1>
        <hr>
        <div class="song">
            <div class="newsong">
                <div class="head">
                    <div class="description">    
                        <h2>{{ newSong.name }}</h2>
                        <span>{{ newSong.description }}</span>
                    </div>
                    <img :src="newSong.coverImgUrl" alt="">
                </div>
                <hr>
                <div class="list">
                    <ol>
                        <li v-for="(item, index) in newSong.tracks" :key="index">
                            <musiclist>
                                <span>{{ index+1 }} - {{ item.name }}</span>
                            </musiclist>
                        </li>
                    </ol>
                </div>
                <hr>
            </div>

            <div class="hotsong">
                <div class="head">
                    <div class="description">    
                        <h2>{{ newSong.name }}</h2>
                        <span>{{ newSong.description }}</span>
                    </div>
                    <img :src="hotSong.coverImgUrl" alt="">
                </div>
                <hr>
                <div class="list">
                    <ol>
                        <li v-for="(item, index) in hotSong.tracks" :key="index">
                            <musiclist>
                                <span>{{ index+1 }} - {{ item.name }}</span>
                            </musiclist>
                        </li>
                    </ol>
                </div>
                <hr>
            </div>

            <div class="originsong">
                <div class="head">
                    <div class="description">    
                        <h2>{{ originSong.name }}</h2>
                        <span>{{ originSong.description }}</span>
                    </div>
                    <img :src="originSong.coverImgUrl" alt="">
                </div>
                <hr>
                <div class="list">
                    <ol>
                        <li v-for="(item, index) in originSong.tracks" :key="index">
                            <musiclist>
                                <span>{{ index+1 }} - {{ item.name }}</span>
                            </musiclist>
                        </li>
                    </ol>
                </div>
                <hr>
            </div>

        </div>
        <hr>
    </div>
</template>

<script>
    import artists from '../data/artist'
    import hotSong from '../data/hotSong'
    import newSong from '../data/newSong'
    import originSong from '../data/originSong'
    import musiclist from './musiclist.vue'
    export default{
        components:{
            musiclist
        },
        data(){
            return{
                artists,
                hotSong,
                newSong,
                originSong,
                currentIndex:-1,
            }
        },
        methods:{
            getCurrentItem(index){
                this.currentIndex = index
            }
        }
        
    }
</script>

<style scoped>
    h2{
        margin: 0px;
    }
    .content{
        width: 1200px;
        margin: auto;
    }
    .header{
        display: flex;
        justify-content: space-around;
    }

    .active{
        color: skyblue;
        font-weight: 900;
        border-bottom: 3px solid red;
    }
    /* #artist-name{
        text-align: center;
    } */

    img{
        display: block;
        width: 80px;
        height: 80px;
    }

    .song{
        display: flex;
        justify-content: space-around;
    }

    .song > div{
        /* flex: 1; */
        width: 350px;
        height: 500px;
    }

    ol{
        padding-left: 15px;
        list-style: none;
    }

    /* li{
        
    } */


    .head{
        display: flex;
        justify-content: space-between;
    }

    .description{
        width: 200px;
        height: 120px;
    }

    .head > img{
        width: 120px;
        height: 130px;
    }
</style>