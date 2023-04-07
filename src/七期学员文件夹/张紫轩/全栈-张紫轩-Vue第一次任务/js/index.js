const app = Vue.createApp({
    data() {
        return {
            inputword: "",
            wordList: [],
            isActive: false
        }
    },
    methods: {
        inputForWord() {
            if (this.inputword) {
                this.wordList.push(this.inputword);
                if (this.wordList.length > 5) {
                    this.isActive = true
                }
            }
            else {
                alert("输入信息为空")
            }
        },
        displayWord() {
            this.message = this.inputForWord;
        },
        delectForWord() {
            this.wordList.pop()
            if (this.wordList.length <= 5) {
                this.isActive = false;
            }
        }
    }
})
app.mount("#app")