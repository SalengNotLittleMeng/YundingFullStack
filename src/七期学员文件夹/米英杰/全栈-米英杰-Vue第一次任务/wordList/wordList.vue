<script>
let index = 5
export default {
    data() {
        return {
            wordList: [
                {
                    id:1,
                    word:'hello'
                },
                {
                    id: 2,
                    word:'Vue'
                },
                {
                    id: 3,
                    word:'hi'
                },
                {
                    id: 4,
                    word:'Xirealm'
                }
            ],
            tip: "别加啦！单词太多了！",
            newWord:'',
        }
    },
    methods: {
        increaseWord() {
            this.wordList.push({
                id:index,
                word: this.newWord
            })
            index++
        },
        deleteWord() {
            this.wordList.pop()
        }
    },
    computed: {
        numberJudge() {
            return this.wordList.length>=5
        }
    }
}
</script>

<template>
    <div>
        <input :value="newWord" @input="event=>newWord=event.target.value" type="text" @keyup.enter ="increaseWord()">
        <p class="screen">你要输入的单词是：{{ newWord }}</p>
        <button @click = "increaseWord()">添加</button>
        <button @click = "deleteWord()">删除</button>
        <p v-if="numberJudge" class = "redFont">{{ tip }}</p>
        <ul :class = "{redFont: numberJudge}">
            单词列表：
            <li v-for="word in wordList" :key="word.id">{{ word.word }}</li>
        </ul>
    </div>
</template>