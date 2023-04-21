<template>

  <div class="hello">
    <span>总价:{{totalPrice}}
      当前选中的书籍是:{{who}}</span>
    <!--------------------- 表格 ----------------------------------->
   <div class="nav">
    <!-- 第一行表头 -->
    <div class="nav-head">
      <div>序号</div>
      <div>书名</div>
      <div>价格</div>
      <div>购买数量</div>
      <div>操作</div>
    </div>
    <!-- 以下为遍历的数据 -->
 <!-- 遍历子组件 -->

    <Children  :bookItem='item' @delBook='delBook' @moreOne='moreOne' @decreaseOne='decreaseOne'  @changeColor='changeColor' 
     v-for="item in bookList" :key='item.id'   :class="pointerId == item.id?'orange':'gray'"  />

    
  
    <!-- /*注意一定是:class,之后的东西被理解成一个js表达式*/ -->
    <button class="add-btn" @click="addBookItem">添加</button>

    <div class="form-nav">
      <input v-model='form.bookName' type="text" placeholder="请输入书名">
      <input v-model='form.price' type="text" placeholder="请输入价格">
      <input v-model='form.number' type="text" placeholder="请输入数量">
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components:{
    Children:()=>import('./Children')
  },
  data(){
    return{
      bookList:[
        {id:1,name:'Java程序设计',price:"126",number:2},
        {id:2,name:'你不知道的JS(上卷)',price:"78",number:2},
        {id:3,name:'你不知道的JS(中卷)',price:"76",number:2},
        {id:4,name:'你不知道的JS(下卷)',price:"64",number:2}
      ],
      pointerId:"",
      who:"",
      form:{
        bookName:"",
        price:"",
        number:"",
      },
      // active:"",
    }
  },
  methods:{
    changeColor(bookId){
      console.log(1)
      this.pointerId = bookId
      
    
    
  for(let index=0;index<=this.bookList.length-1;index++){//遍历一下子书单，从子组件传回来的id看与书单里面的id谁一样，一样的就对其进行操作
               if(bookId==this.bookList[index].id){
                this.who=this.bookList[index].name
                
                }
                
            }
    },
           
          
    addBookItem(){
      console.log('添加书本')
      if(this.form.bookName!=""&&this.form.price!=""&&this.form.price>0){
        const {bookName,price,number} = this.form
      this.bookList.push({
        id:this.bookList.length+1,
        name:bookName,
        price,
      
        number,//往数组之后再加一个元素然后
      }
      )}
      else{
        if(this.form.bookName==""){
          alert("书名不能为空")
        }
        else{
          alert("价钱不能是负数或为空")
        }
      }
    },
    delBook(delId){
        this.bookList = this.bookList.filter(item=>{
          return item.id !== delId
        })
    },
    decreaseOne(bookId){
      for(let index=0;index<=this.bookList.length-1;index++){//遍历一下子书单，从子组件传回来的id看与书单里面的id谁一样，一样的就对其进行操作
       if(bookId==this.bookList[index].id&&this.bookList[index].number>0){
           this.bookList[index].number--
        }
    }},
    moreOne(bookId){
       for(let index=0;index<=this.bookList.length-1;index++){//遍历一下子书单，从子组件传回来的id看与书单里面的id谁一样，一样的就对其进行操作
       if(bookId==this.bookList[index].id){
           this.bookList[index].number++;
        }
    }
    }
},
  
 computed:{
    totalPrice(){
      let totalPrice=0
      for(let i=0;i<this.bookList.length;i++){//再遍历一下书单
        totalPrice+=this.bookList[i].price*this.bookList[i].number
    }
     console.log(totalPrice)
     return totalPrice
    }
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.nav{
  width: 800px;
  display: flex;
  margin: auto;

  flex-direction: column;
}
.nav-head,.nav-item{
  height: 40px;
  line-height: 40px;
display: flex;
}
.nav-head>div,.nav-item>div{
  text-align: center;
  border: 1px solid #000;
}
.nav-head>div:nth-child(1),.nav-item>div:nth-child(1){
width: 280px;
}
.nav-head>div:nth-child(2),.nav-item>div:nth-child(2){
width: 380px;
}
.nav-head>div:nth-child(3),.nav-item>div:nth-child(3){
width: 200px;
}
.nav-head>div:nth-child(4),.nav-item>div:nth-child(4){
width: 240px;
}
.nav-head>div:nth-child(5),.nav-item>div:nth-child(5){
width: 200px;
}
.add-btn{
  width: 80px;
  height: 30px;
  margin-top: 20px;
}
.form-nav{
  display: flex;
 transform:translateX(-20px);
}
.form-nav input{
  width: 200px;
  height: 24px;
  border-radius: 5px;
  margin: 20px 0 0 10px;
}
.orange{
  background-color: coral;
}
.gray{
  background-color: cornsilk;
}

</style>
