<template>
    <div class="oneList">
        <div class="top">
            <div class="words">
                <div class="listTitle">
                    <slot name="listTitle"></slot>
                </div>
                <div class="description">
                    <slot name="listDescription"></slot>
                </div>
            </div>
            <div class="listImage">
                <slot name="listImage"></slot>
            </div>
        </div>
        <slot name="songList"></slot>
    </div>
</template>

<script>
export default {
    props: {
        hotSongs: {
            type: Object,
            default: () => ({})
        },
        newSongs: {
            type: Object,
            default: () => ({})
        },
        originSongs: {
            type: Object,
            default: () => ({})
        },
    }
}
</script>

<style>
.top{
    width: 340px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
}
.oneList{
    width: 340px;
    height: 400px;
}
.words{
    margin-top: 10px;
    width: 200px;
    height: 130px;
    font-size: 13px;
    color: black;
}
.listTitle{
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
}
.listImg{
    width: 100px;
    height: 100px;
}
</style>