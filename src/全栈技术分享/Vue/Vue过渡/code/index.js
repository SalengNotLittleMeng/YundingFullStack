class myVue {
    constructor(obj) {
        this.data = obj.data
        this.updataFun = obj.updata
        let { created } = obj
        let { mounted } = obj
        console.log('组件被创建')
        created && created()
        console.log('组件被挂载')
        mounted && mounted.call(this)
    }
    updata() {
        console.log('Vue调用了更新的方法')
        this.updataFun()
    }
}

let vm = new myVue({
    created() {
        console.log('这个是传入的created方法')
    },
    mounted() {
        console.log('这个是传入的mounted方法', this.data.num)

    },
    updata() {
        console.log('这是传入的updata方法')
    },
    data: {
        num: 1
    }
})
vm.updata()

new Vue({
    el: '#list-demo',
    data: {
        items: [1, 2, 3, 4, 5],
        nextNum: 6,
        msg: ''
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0
            let index = el.dataset.index
                // 页面加载时先展示5个
            if (index < 5) {
                //设置动画延迟， 实现按续插入的效果
                el.style.animationDelay = el.dataset.index * 0.3 + 's'
            }
        },
        afterEnter: function(el) {
            el.style.opacity = 1
            if (['1', '2', '3', '4', '5'].indexOf(el.innerText) != -1) {
                return
            }
            this.msg = el.innerHTML + '被加入'
        },
        afterLeave: function(el) {
            this.msg = el.innerHTML + '被删除'
        },
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
        sort: function() {
            this.items = this.items.sort((a, b) => { return a - b })
            this.msg = '进行了排序'
        }
    }
})