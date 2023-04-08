let id = 1
        const app1 = Vue.createApp({
            template: `
            <input v-model="message" @keyup.enter="addTodo"><h2>你要输入的单词是：{{message}}</h2>
            <form @submit.prevent= "addTodo" style = "display:inline"><button>添加</button></form><button @click="removeTodo" id="delete">删除</button>
            <div :class = "todos.length>=5?'ban':'noBan'">鳖加辣！单词数量太多了</div>
            <div id="list" :class = "todos.length>=5?'exceed':''">单词列表：</div>
            <ul :class = "todos.length>=5?'exceed':''">
                <li v-for = "todo in todos" :key = "todo.id">{{todo.text}}
                    </li>
            </ul>`,
            data() {
                return {
                    message: '',
                    todos: [
                        { id: id++, text: 'hello' },
                        { id: id++, text: 'vue' }
                    ]
                }
            }, methods: {
                addTodo() {
                    this.todos.push({ id: id++, text: this.message })
                    this.message = ''
                },
                removeTodo() {
                    this.todos.splice(-1, 1);
                },
            }
        })
        app1.mount("#tip")