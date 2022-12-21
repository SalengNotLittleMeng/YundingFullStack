let _Vue = null;
class Store {
    constructor(options) {
        const state = options.state || {}
        const mutations = options.mutations || {}
        const actions = options.actions || {}
        const getters = options.getters || {}
            // 直接调用Vue的响应式系统
            // state的实现
        this.state = _Vue.observable(state)
            // getter的实现
        this.getters = Object.create(null)
        Object.keys(getters).forEach((key) => {
                Object.defineProperty(this.getters, key, {
                    get: () => {
                        return getters[key].call(this, this.state)
                    },
                })
            })
            // mutations
        this.mutations = Object.create(null)
        Object.keys(mutations).forEach((key) => {
                this.mutations[key] = (params) => {
                    // 改变this指向 ，默认是要传入 state
                    mutations[key].call(this, this.state, params)
                }
            })
            //action
        this.actions = Object.create(null)
        Object.keys(actions).forEach((key) => {
                this.actions[key] = (params) => {
                    // 改变this指向 ，默认是要传入 store也就是 this
                    actions[key].call(this, this, params)
                }
            })
            // commit
        this.commit = (eventName, params) => {
            this.mutations[eventName](params)
        }
        this.dispatch = (eventName, params) => {
            this.actions[eventName](params)
        }
    }
}

Store.install = function(Vue) {
        _Vue = Vue;
        _Vue.mixin({
            beforeCreate() {
                if (this.$options.store) {
                    _Vue.prototype.$store = this.$options.store
                }
            }
        })
    }
    // export default {
    //     install,
    //     Store
    // }