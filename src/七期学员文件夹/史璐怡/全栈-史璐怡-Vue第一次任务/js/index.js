var word = new Vue({
    el: "#typecenter",
    data: {
        message: "",
        arr: ["hello", "Vue"]
    },
    methods: {
        getWords: function () {
            if (this.message) {
                this.arr.push(this.message);
            } else {
                alert("不可以添加空单词哦~");
            }
        },
        deleteWords: function () {
            if (this.arr.length > 0) {
                this.arr.splice(-1, 1);
            }
        }
    }
})