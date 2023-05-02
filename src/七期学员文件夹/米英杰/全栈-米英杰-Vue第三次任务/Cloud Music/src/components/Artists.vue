<template>
    <div class="artists-box">
        <div class="artist" v-for="artist of artists" :key="artist">
            <slot name="artist" v-bind="artist"></slot>
        </div>
    </div>
</template>

<script>
import artists from '../../data/artist';
export default {
    data() {
        return {
           artists,
        }
    }
}
</script>

<style>
.artists-box{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.artist {
    width: 60px;
    text-align: center;
}

.artist img {
    width: 60px;
}
</style>