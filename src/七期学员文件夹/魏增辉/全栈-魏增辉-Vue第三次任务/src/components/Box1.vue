<template>
    <div class="FatherBox">
        <div class="ShowingBox" 
             v-for="item in DATAS" 
             :key = "item.id">
            
            <div class="picture">
                <slot name = ""><img :src="item.picUrl" class="pic"></slot>
            </div>
            
            <div class="name">
                <slot> {{ item.name }}</slot>
            </div>


    </div>


    </div>
</template>

<script>
export default{
    props:["DATAS"],
}
</script>

<style scoped>
       .FatherBox{
               height: 130px;
               width: 1500px;
               display: flex;
               justify-content: space-around;
               border-style: solid;
               border-top-width: 5px;
               border-right-width: 0px;
               border-bottom-width: 5px;
               border-left-width: 0px;
               margin: 0 auto;
       }
       .pic {
        width: 100px;
       }
       .picture{
        width: 100px;
        margin: 10px;
       }
       .name{
         position: relative;
         text-align: center;

       }

</style>
