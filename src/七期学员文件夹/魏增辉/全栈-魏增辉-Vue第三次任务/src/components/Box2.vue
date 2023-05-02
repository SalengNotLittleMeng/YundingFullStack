<template>
    <div class="FFF">



    <div class="FatherBox" >
        
        <div class="SongTitle">
            <slot>
                <h2>{{ DATAS.name }}</h2>
            </slot>
        </div>
        <div class="SongDes">
             <slot>
                <span>{{ DATAS.description }}</span>
             </slot>

        </div>
        <div class="SongPic">
            <slot>
                <img :src="DATAS.coverImgUrl" class="Img" >
            </slot>
        </div>
    -
        <div class="TheFirst" v-for="(item,index) in DATAS.tracks" :key="item.id">
            <p>{{ index }}-{{ item.name }}</p>
        </div>
    </div>


    </div>

</template>

<script>
     export default{
        props:["DATAS"]
     }
</script>

<style scoped>
    .Img{
        width: 100px;
    }
    .SongDes{
        width: 180px;
    }
    .SongPic{
        position: relative;
        bottom: 100px;
        left: 190px;
    }
</style>