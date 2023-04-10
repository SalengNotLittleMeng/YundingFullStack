const app = Vue.createApp({
    data() {
        return {
            currentMsg: "",

            allMsg: [],

        }
    },
    methods: {
        Add() {
            if (this.currentMsg != "") {
                this.allMsg.push(this.currentMsg)
            }
            else {
                alert("请输入要添加的内容。。。")
            }
        },

        Delete() {
            this.allMsg.pop()
        }
    },

})
app.mount('#app')