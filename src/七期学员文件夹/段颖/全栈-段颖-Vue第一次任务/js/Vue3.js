
        var count = 0
        Vue.createApp(
            {
                data() {
                    return {
                        "text": "",
                        "words": "",
                        "arr": [],
                        "zhezhao": false, 
                        "count": 0,
                        "active":""
                    }
                },
                methods: {
                    add() {
                        if (this.text != "") {
                            this.arr.push(this.text)
                            this.count = count++
                        }
                        this.text = ""
                    },
                    del() {
                        this.arr.pop()
                    }
                },
                computed: {
                    change() {
                        if (this.arr.length > 5) {
                            return true
                            

                        }
                        if (this.arr.length <= 5) {
                            return false
                            
                        }

                    },
                    fontColor(){
                        if (this.arr.length > 5) {
                            return true


                        }
                        if (this.arr.length <= 5) {
                            return false

                        }

                    }
                }

            }




        ).mount("#app")