<template>
    <hr/>
    <div class="content">
        <div v-for="value in lists" :key="value" class="box">
            <div class="text">
            <slot name="singerName">{{ value.name }}
            </slot>
            </div>
            <div class="picture">
            <slot name="SingerPicture"><img :src="value.picUrl" style="width: 120px">
            </slot>
            </div>
        </div>
    </div>
    <hr/>
    
</template>
<script>
export default {
    props: ["lists"],
    data () {
        return {
            
        }
    }


}

</script>
<style scoped >
    .content{
        display: flex;
       justify-content: space-around;
    }
    .box{
        position: relative;
        height: 150px;
        width: auto;
    }
    .text{
        position: absolute;
        left: 25px;
        top:100px;
    }
</style>