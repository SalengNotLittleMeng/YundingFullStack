# 自定义指令

## 初始

除了核心功能默认内置的指令 (v-model 和 v-show），Vue 也允许注册自定义指令,对普通 DOM元素进行底层操作，这时候就会用到自定义指令。

1. 分类

   全局自定义指令

   局部自定义指令

### 全局自定义指令

该指令用`Vue.directive`来注册（`main.js`）

```vue
//例如input自动聚焦的例子
Vue.directive('focus',{
//当绑定的元素插入DOM时
	inserted:function(el){
	//聚焦元素
	el.focus()
	}
})
```

### 局部自定义指令

在组建内设置directives属性（directives节点与data，created和methods同级）

```vue
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

注意：在使用时要在自定义的指令前加上`v-`,然后我们可以在模板中使用新的v-focus。

## 自定义指令的钩子函数

`bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

`inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

`update`：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。

`componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

`unbind`：只调用一次，指令与元素解绑时调用。

**钩子函数的参数：**

`el`：指令所绑定的元素，可以用来直接操作 DOM。
`binding`：一个对象，包含以下 property：
`name`：指令名，不包括 v- 前缀。
`value`：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
`oldValue`：指令绑定的前一个值，仅在 update 和componentUpdated 钩子中可用。无论值是否改变都可用。
`expression`：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
`arg`：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
`modifiers`：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
`vnode`：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
`oldVnode`：上一个虚拟节点，仅在 update 和componentUpdated 钩子中可用。
注意：除了el之外，其他参数都应该是只读的，切勿进行修改。

​           若是需要在钩子间共享数据，建议通过元素的dataset来进行。

# Composition-API

## setup函数

 setup是一个新的组件选项，作为组件中使用组合API的起点。在setup函数中this 还不是组件实例，this此时是undefined。在模版中需要使用的数据和函数，需要在setup返回。 

### **script setup语法糖**

```vue
<script setup></script>
```

1. 属性和方法无需返回，直接使用

   在添加了setup的script标签中，我们不必声明和方法，这种写法会自动将所有顶级变量、函数，均会自动暴露给模板（template）使用。

2. 组件自动注册

```vue
<template>
	<Child />
</template>
 
<script setup>
import Child from '@/components/Child.vue'
</script>
```

### 父子通讯

- 父传子：在setup种使用props数据 `setup(props){ props就是父组件数据 }`
- 子传父：触发自定义事件的时候emit来自 `setup(props,{emit}){ emit 就是触发事件函数 }`

父传子

```vue
<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
    <Son :money="money" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
    return { money }
  }
}
</script>
```

```vue
<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    // 获取父组件数据money
    console.log(props.money)
  }
}
</script>
```

子传父

```vue
<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
+    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)
    const updateMoney = (newMoney) => {
      money.value = newMoney
    }
    return { money , updateMoney}
  }
}
</script>
```

```vue
<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
    <button @click="changeMoney">花50元</button>
  </div>
</template>
<script>
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  // props 父组件数据
  // emit 触发自定义事件的函数
  setup (props, {emit}) {
    // 获取父组件数据money
    console.log(props.money)
    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
      emit('change-money', 50)
    }
    return {changeMoney}
  }
}
</script>
```

## ref()函数

作用：在JavaScript中，Proxy无法提供对原始值的代理，因此想要将原始值变成响应式数据，就必须对其做一层包裹，也就是ref。

```vue
<template>
    <h1>{{count}}</h1>
    <button @click="change_count">点我</button>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
    let count=ref(0);  //ref函数监听count的变化
    function change_count(){
      count.value+=1;
    }
    return {count,change_count}
  }
}
</script>
```

 在setup中定义的变量或方法，都必须通过return {xxx,xxx}暴露出去，外界才能使用
 ref函数仅能监听基本类型的变化，不能监听复杂类型的变化（比如对象、数组）

## reactive函数

在Vue中，reactive函数是一个用于创建响应式对象的函数。它接受一个普通的JavaScript对象作为参数，并返回一个响应式的代理对象。这个代理对象会拦截对原始对象的访问，从而实现响应式的效果。

使用reactive函数可以将一个普通的JavaScript对象转换为响应式对象，使其能够在数据发生变化时自动更新视图。例如：

```
import { reactive } from 'vue'

const state = reactive({
  count: 0
})

// 访问响应式对象的属性
console.log(state.count) // 输出 0

// 修改响应式对象的属性
state.count++

// 视图会自动更新，输出 1
console.log(state.count)
```

在上面的例子中，我们使用reactive函数创建了一个响应式对象state，它包含一个属性count。当我们修改count属性的值时，视图会自动更新。

需要注意的是，reactive函数只会对对象进行响应式转换，而不会对对象的属性进行深度响应式转换。如果需要对对象的属性进行深度响应式转换，可以使用ref函数或者嵌套使用reactive函数。