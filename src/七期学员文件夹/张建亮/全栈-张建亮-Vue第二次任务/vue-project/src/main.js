import { createApp } from 'vue'
import App from './App.vue'

//import './assets/main.css'

createApp(App).mount('body')


// import { computed, createApp } from 'vue'

// const app = createApp({
//     data() {
//         return {
//             parentMessage: 'Parent',
//             items: [{ message: 'Foo' }, { message: 'Bar' }],
            
//         }
//     },
//     components: {
//         App
//     },
//     props: ['title']
// })


//app.mount('#app')

// const vm = createApp({

//     data() {
//         return {
//             persons: [
//                 { 'id': '001', 'name': '张三', 'age': '18' },
//                 { 'id': '002', 'name': '李四', 'age': '19' },
//                 { 'id': '003', 'name': '王五', 'age': '20' }
//             ]
//         }

//     },
//     methods: {
//         add() {
//             const p = { 'id': '004', 'name': '老刘', 'age': '40' }
//             this.persons.unshift(p)
//         }
//     }
// })
// vm.mount('#root')
