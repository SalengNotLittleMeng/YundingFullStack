const app = Vue.createApp({

    data() {
        return {
            allwords: ["语文", "数学"],
            newword: "",
        }
    },

    methods: {
        /*getallwords(allwords,callback) {
            queryallwords(allwords).then((res) => {
                if (allwords) {
                    callback(allwords);
                }
            })
        },//无法调用return中的数据*/
        addword() {
            //getallwords(allwords,callback)
            /*if (app.allwords === undefined) {
                app.allwords = []
            }*/
            /*功能未实现for (const i = 0; i < this.allwords.length - 1; i++){
                if (this.newword!=this.allwords[i]) {
                    this.allwords.push(add.value)
                }
                else {
                    return allwords
                }
            }*/

            this.allwords.push(add.value)
            this.changestate(allwords)
            newword: ""
            return this.allwords
        },
        deleteword() {
            this.allwords.pop()
            this.changestate(allwords)
            newword: ""
            return this.allwords
        },
        /*changestate(allwords) {
            if (this.allwords.length > 4) {
                this.warning.style.visibility = visible
                this.warning.syle.color=red
            }
            else {
                this.warning.style.visibility = hidden
            }
        },*/
    }

})
app.mount("#app")