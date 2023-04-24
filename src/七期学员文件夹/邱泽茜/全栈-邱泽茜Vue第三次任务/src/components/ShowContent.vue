<template>
    <h3>
        <slot name="title"></slot>
    </h3>
    <div class="content">
        <slot name="artists"></slot>
        <slot name="list"></slot>
    </div>
    
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: () => []
        },
        artists: {
            type: Array,
            default: () => []
        },
    }
}
</script>
    
<style>
.content{
    display: flex;
    justify-content: space-around;
    border-top: 3px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 30px;
}
.artist{
    width: 100px;
    height: 135px;
    text-align: center;
    margin: 20px;
}
</style>