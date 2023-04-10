//1.创建app
const app = Vue.createApp({
    data(){
        return{
            message:'',
            list:[],
        }
    },
    methods:{
        add(message){
            this.list[this.list.length] = this.message
        },
        del(){
            this.list.splice(this.list.indexOf(this.list),1);
        }
    },
})
//2.挂载app
app.mount("#app");