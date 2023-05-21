<template>
<div class="content">
    <slot name="top">
        <div class="top">
            <h2>{{ lists.name }}</h2>
            <div class="img">
                <img :src="lists.coverImgUrl" style="width: 150px;">
            </div>
             <div class="text">
            <h4>{{ lists.description }}</h4>
        </div>
        </div>
    </slot>
    <slot name="middle">
        <div class="middle" v-for="(value,index) in lists.tracks" :key="value">
            {{ index+1+"  --  " }}{{ value.name }}
        </div>
    </slot>
</div>
</template>

<script>
export default {
    props: ["lists", "newWidth"],
}

</script>
<style scoped>
    .content{
        position: relative;
        display: block;
        width: 400px;
        border-bottom: 1px solid black;
    }
    .middle{
        font-size: 20px;
    }
    .top{
        border-bottom: 3px solid black;
        height: 200px;
    }
    .img{
        position: absolute;
        top:20px;
        right: 10px;
    }
    .text{
        width: 200px;
    }
</style>