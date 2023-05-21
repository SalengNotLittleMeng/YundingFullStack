<template>
    <div>
        <h2>热门歌手</h2>
        <div class = "top">
        <div v-for="(item) in artist" :key="item" class = "imgs">
            <img  ref = "img" src = "" alt="">
            <div>{{item.name}}</div>
        </div>
        </div>
        <h2>榜单</h2>
        <div class = "msg">
            <slot name = "left">
                <span></span>
            </slot>
            <slot name = "center">
                <span></span>
            </slot>
            <slot name = "right">
                <span></span>
            </slot>
        </div>
    </div>

</template>

<script>
import artist from '../data/artist.js'

export default {
    created () {
        this.artist = artist
    },

    data () {
        return {
            artist: '',
        }
    },

    mounted () {
        console.log(this.$refs.img);
        const count = this.$refs.img
        let special = 0
        count.forEach((ele) => {
            ele.src = this.artist[special].picUrl
            ele.alt = this.artist[special].altUrl
            special++
        });
    }

}
</script>

<style scoped>

img {
    width: 60px;
    height: 60px;
}

.imgs {
    display:inline-block ;
    margin:0 20px 0 20px ;
    text-align: center;
}

.top {
    border-top: 3px solid black ;
    padding: 10px 0 5px 0;
    border-bottom:2px solid black ;
    width: 1000px;
}

.msg {
    border-top: 3px solid black ;
    border-bottom:2px solid black ;
    width: 1000px;
    height: 600px;
    display: flex;
    flex-direction: row;
}



</style>