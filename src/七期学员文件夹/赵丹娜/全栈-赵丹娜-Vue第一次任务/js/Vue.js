const app = Vue.createApp({
    data() {
        return {
            word: '',
            list: [],
            redColor: "red"
        }
    },
    methods: {
        add() {
            this.list.push(this.word)
            this.word = ''
        },
        del() {
            this.list.splice(this.list.length - 1)
        },
    }
})
app.mount("#app")