<template>
  <div class="block">
    <div>
      <h2>
        <slot name="title">标题</slot>
      </h2>
      <div class="content">
        <slot name="cont">内容</slot>
      </div>
    </div>
    <div class="pic">
      <slot name="picture"></slot>
    </div>
  </div>
  <div class="border"></div>
  <div class="charCont">
    <slot name="char"></slot>
  </div>
  <div class="border"></div>
</template>
<script>
export default{
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.block{
  width: 400px;
  height: 200px;
  display:flex;
}
.content{
  width: 170px;
  height: 110px;
  margin-top: -10px;
  font-size: small;
  color:darkgrey
}
.pic{
  justify-content:space-around;
  margin-top: 10px;
  margin-left: 70px;
}
.border{
  width: 400px;
  height: 2px;
  background-color:grey;
  margin-top: -15px;
}
.charCont{
  width: 400px;
  height: 450px;
  font-size:xx-large;
  color: darkgray;
}
</style>