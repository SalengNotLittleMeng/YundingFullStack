<script setup>
import {computed} from 'vue';
    const props=defineProps(["showLists"]);
    const is_much=computed(()=>{
        return props.showLists.length>5
    });
</script>
<template>
    <div :class="{ul_color:is_much}">
        <p v-if="is_much">鳖甲辣！单词数量太多了</p>
        <p>单词列表：</p>
        <ul>
            <li v-for="key in props.showLists">{{ key.word }}</li>
        </ul>
    </div>
</template>
<style>
.ul_color{
    color: red;
}
</style>