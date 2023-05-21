const app = Vue.createApp({
    data: function(){
        return{
            newWord: "",
            items:[],
        }
    },
    methods:{
        addWord(newWord){
            this.items.push(newWord)
        },
        deleteWord(){
            this.items.pop()
        }
    },
})
app.mount("#app")