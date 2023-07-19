// 简易双向绑定的实现
var obj = {}
Object.defineProperty(obj, 'vue', {
    get: function() {
        console.log('我被获取了')
    },
    set: function(val) {
        document.getElementById('input-box').value = val;
        document.getElementById('out-box').innerHTML = val;
    }
})
document.getElementById('vue-box').addEventListener('keyup', function(e) {
        obj.vue = e.target.value
    })
    // 双向绑定完整实现
class Vue {
    constructor(options) {
        this.$el = Vue.getEl(options.el);
        this.$data = options.data;
        // 实现数据响应式
        new Observe(this, this.$data);
        // 解析模板引擎
        new Compile(this, this.$el);
    }

    static getEl(selector) {
        return selector.nodeType == Node.ELEMENT_NODE ? selector : document.querySelector(selector)
    }
}

//对数据进行响应式处理
class Observe {
    constructor(vm, data) {
            this.vm = vm;
            this.data = data;
            // 如果是对象就进行深度遍历，将所有数据进行响应式处理
            this.observer(data);
            //创建代理
            this.dataProxy(vm, data);
        }
        //对数据进行深度遍历
    observer(data) {
            Object.keys(data).forEach(key => {
                this.reactive(data, key, data[key])
            })
        }
        //响应式函数
    reactive(obj, key, value) {
            typeof value == 'object' && this.observer(value)
            let _self = this
                //为每一个属性创建依赖容器，因为有可能一个属性会被多个地方依赖
                ,
                dep = new Dep();
            Object.defineProperty(obj, key, {
                get() {
                    //如果没有被添加订阅就添加
                    Dep.target && dep.subs.indexOf(Dep.target) <= -1 && dep.addSub(Dep.target)
                    return value;
                },
                set(newVal) {
                    if (value == newVal) { return }
                    typeof newVal == 'object' && _self.observer(newVal);
                    value = newVal;
                    // 当数据发生改变，就触发响应函数
                    dep.notify();
                }
            })
        }
        // 添加代理，让用户可以直接访问设置的数据而非对象中的数据
    dataProxy(obj, data) {
        Object.keys(data).forEach(key => {
            this.reactive(obj, key, data[key])
        })
    }
}
// 模板引擎，解析特殊符号
class Compile {
    constructor(vm, el) {
            this.el = el;
            // 接受传入的实例
            this.vm = vm;
            this.ready();
        }
        // 检验是否为自定义的指令
    static isDirect(attrName) {
        return /^v-/.test(attrName)
    }

    static isTextNode(node) {
            return node.nodeType == Node.TEXT_NODE && /^\s*[^\s]+\s*$/.test(node.textContent)
        }
        // 获取{{}}中的值
    static getVal(data, expOrFn) {
            expOrFn = /^\{\{(.+?)\}\}/.exec(expOrFn)[1];
            return expOrFn.split(".").reduce((data, cur) => {
                return data[cur];
            }, data);
        }
        // 设置{{}}中的值
    static setVal(data, expOrFn, value) {
        expOrFn = /^\{\{(.+?)\}\}/.exec(expOrFn)[1];
        expOrFn.split(".").reduce((data, cur, index, arr) => {
            if (index == arr.length - 1) {
                return data[cur] = value;
            }
            return data[cur];
        }, data);
    }

    //指令集
    static directSet = {
        model(vm, node, expOrFn) {
            new Watcher(vm, expOrFn, function(newVal) {
                node.value = newVal;
                Dep.target = null;
            })
            node.value = Compile.getVal(vm.$data, expOrFn);
            node.addEventListener('input', e => {
                Compile.setVal(vm.$data, expOrFn, e.target.value)
            })
        },
        text(vm, node, expOrFn) {
            new Watcher(vm, expOrFn, function(newVal) {
                node.textContent = newVal;
                Dep.target = null;
            })
            node.textContent = Compile.getVal(vm.$data, expOrFn);
        }
    }

    ready() {
        let fragment = this.node2fragment(this.el)
        this.compiler(fragment);
        this.el.appendChild(fragment);
    }

    //编译
    compiler(mountEl) {
        let childNodes = [...mountEl.childNodes];
        childNodes.forEach(node => {
            //获取不是文本节点或不是空文本的节点
            if (node.nodeType == Node.ELEMENT_NODE) {
                [...node.attributes].forEach(attr => {
                    let { name, value: expOrFn } = attr;
                    if (!Compile.isDirect(name)) { return }
                    Compile.directSet[name.split('-')[1]](this.vm, node, expOrFn)
                })
            }
            if (Compile.isTextNode(node)) {
                let expOrFn = node.textContent.trim();
                Compile.directSet['text'](this.vm, node, expOrFn)
            }
            node.childNodes.length > 0 && this.compiler(node)
        })
    }

    //将节点放到文档碎片流中
    node2fragment(el) {
        let fragment = new DocumentFragment(),
            child;
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment;
    }
}


/**
 * 依赖收集--->收集的就是订阅对象
 */
class Dep {

    static target = null;

    constructor() {
            this.subs = [];
        }
        //添加订阅者
        //谁用到这个数据，谁就是订阅者，反映在html中就是使用数据的这个dom元素
    addSub(watcher) {
            this.subs.push(watcher)
        }
        //通知所有订阅者
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

/**
 * 谁用到这个数据，谁依赖这个数据，谁就是订阅者
 * 订阅者-->更新视图
 */
class Watcher {
    constructor(vm, expOrFn, cb) {
            Dep.target = this;
            this.vm = vm;
            this.expOrFn = expOrFn;
            this.cb = cb;
            this.oldVal = Compile.getVal(vm.$data, expOrFn)
        }
        //更新视图
    update() {
        let value = Compile.getVal(this.vm.$data, this.expOrFn);
        if (this.oldVal != value) {
            this.cb(value);
        }
    }
}