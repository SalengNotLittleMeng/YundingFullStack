<script setup>
    const props=defineProps(["listContent","ulShow","ulDisplay"]);
</script>

<template>
    <slot name="top" :content="props.listContent"></slot>
    <ul class="artist_li" :class="{artist_li_display:props.ulDisplay}" v-if="props.ulShow">
        <li v-for="artists,index in props.listContent">
            <slot :content="artists" :index="index"></slot>
        </li>
  </ul>
</template>

<style>
    .artist_li{
        width: 100%;
        height: auto;
        list-style: none;
        padding: 0;
    }
    .artist_li_display{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .artist_li li{
        font-weight: bold;
        line-height: 20px;
        margin: 0 5px;
    }
</style>