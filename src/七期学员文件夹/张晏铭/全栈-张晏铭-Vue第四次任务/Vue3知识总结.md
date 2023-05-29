# Vue3知识总结：

### 	vue3语法中做出的改变便是将option api 转化为 composition api (即对象式编程转化为函数式编程)

​	  **而实现这一转变的重要前提便是使用setup函数(它可以用来替代之前所编写的大部分其他选项)**



#### 1.Vue3中的响应式数据(ref与reactive)：	

```vue
<template>
	<！--  默认情况下ref在使用时vue会自动对其解包(取出其中的value)   -->
	<h2>
        {{count}}
    </h2>
	<button @click = "increment">
        +1
    </button>

	<h2>
        name:{{word.name}} - age:{{word.age}}
    </h2>
	<button @click = "modify">
        更改名字
    </button>

</template>

<script>
    import { ref,reactive } from "vue"
	
    export default {
        setup() {
            const count = ref(100)
            const word = reactive({
                name:'zym',
                age:18
            })
            
            function increment() {
                count.value++
            }
            
            function modify() {
                word.name = 'cd'
            }
            
            return {
                count,
                word,
                increment,
                modify
            }
        }
    }
    
</script>
```

**Reactive可以响应式的原因：**

​	●这是因为当我们使用reactive函数处理我们的数据之后，数据**再次被使用时就会进行依赖收集**

​	●当数据发生改变时，所有收集到的依赖都是进行对应的响应式操作(比如更新界面) ;

​	●事实上，我们编写的**data选项**，也是在内部交给了**Reactive函数将其编程响应式对象的;**



**Ref与Reactive的区别：**

​	●Ref主要用来处理**简单数据或者从网络中获取的数据**

​	●Reacive用于处理**复杂类型的数据**（主要是相互之间有联系的数据）



**Reactive的值的解构问题：**

（值被解构后会变成普通的值，失去响应性，toRefs函数可以解决此问题）

```vue
<script>
	setup() {
       const word = reactive({
              name:'zym',
              age:18
          })
       
       const { name, age } = toRefs(word)
       
       //解构单个值时使用toRef。
       const name = toRef(word,"name")
       
       return {
           word
       }
    }
</script>
```



#### 2.Vue3中的ref其余的API：

■unref
	■如果我们想要获取一个ref引用中的value,那么也可以通过unref方法:
		●如果参数是-一个ref,则返回内部值，否则返回参数本身;
		●这是val = isRef(val) ? val.value : val 的语法糖函数;

■isRef
		●判断值是否是一个ref对象。

■shallowRef
		●创建一个浅层的ref对象;

■triggerRef
		●手动触发和shallowRef相关联的副作用:



#### **3.Vue3中computed函数的使用：**

```vue
<template>
	<div>
        {{fullname}}  //显示出zym 18
    </div>
</template>

<script>
	import {computed} from "vue"
    export default {
        setup() {
            const word = reactive({
                name:'zym',
                age:18
            })
            
            //精简写法，默认为get
            const fullname = computed(()=>{
                return word.name + " " + word.age
            })
            
            //完整写法
            const fullname = computed({
                set:function(newvalue) {
                    
                },
                get:function() {
                  	return word.name + " " + word.age
                }
            })
            
            return {
                word,
                fullname
            }
            
        }
    }
</script>
```



#### 4.Vue3中通过ref获取元素：

```vue
<template>
	<button ref = "btn1">
        +1
    </button>
</template>

<script>
	import { ref } from "vue"
    export default {
        setup() {
            const btn1 = ref()
            
            console.log(btn1.value)  //打印出	<button ref = "btn1"> +1 </button>
            
            return {
                btn1
            }
        }
    }
</script>
```



#### 5.Vue3中的生命周期：

```vue
<script>
	import { onMounted } from "vue"
    export default {
        setup() {
            onMounted(()=>{
                console.log("mounted")
            })
        }
    }
</script>
```

##### setup除 created 与 beforecreate 其余均与Vue2中的option API的生命周期相同，需要在首字母前加上 “on”

##### **（原因是setup函数本身就是围绕created 与 beforecreate 生命周期钩子运行的，因此不需要再setup函数中定义它们）**



#### 6.Vue3中provide与inject的使用：

```vue
<script>
	import { provide, ref } from "vue"
    export default {
        setup() {
            const name = ref("zym")
            
            //provide传递响应式数据
            provide("name",name)
            
            //静态数据的传递
            provide("age",18)
            
            return {
                name
            }
        }
    }
</script>


<template>
	<h2>
        {{nameCopy}} - {{ageCopy}}  //显示zym-18
    </h2>
</template>

<script>
	import { inject } from "vue"
    export default {
        setup() {
            //inject 第二个参数为默认值
			const nameCopy = inject("name", "cd")
            const ageCopy = inject("age")
            
            return {
                nameCopy,
                ageCopy
            }
        }
    }
</script>
```



#### 7.Vue3中watch与watchEffect的使用：

```vue
<script>
	import { watch,watchEffect } from "vue"
    export default {
        setup() {
            const name = ref("zym")
         	const age = ref(18)
            
            watch(name,(newValue,oldValue) => {
                console.log(newValue,oldValue)
            },{
                deep:true,
                immediate:true
            })
            
            
            //watchEffect函数会监听所有响应式数据，一旦其中一个发生变化便回调函数
            //其刚开始便会渲染一次。
            const stopWatch = watchEffect(()=>{
                console.log("响应式数据发生变化。",name.value,age.value)
            })
            
            //暂停watchEffect监听某个响应式数据的方法（利用返回值回调函数）：
            if(age.value >= 60) {
                stopWatch()
            }
            
            return {
                name,
                age
            }
            
        }
    }
</script>
```

​		两者之间的区别：

​				●watch必须指定监听的数据源，watchEffect会自动监听会响应的数据

​				●watch监听到改变后，可以拿到改变前后两个数据

​				●watchEffect默认刚开始就会执行一次

#### 8.Vue3setup语法糖：

```vue
<script setup>
	//使用语法糖后导入子组件可以不用注册直接使用
</script>
```



#### 9.Vue3声明props与emits（ defineProps()  defineEmits() ）：

```vue
<script setup>
	const props = defineProps({
        name:{
            type:string,
            default:"默认内容"
        },
        
        age: {
            type:age,
            default:0
        }
        
    })
    
    const emits = defineEmits(["transfer"])
    function add(thing) {
        emits("transfer",thing)
    }
    
</script>
```



#### 10.Vue3 setup语法糖中父组件使用子组件实例的方法：

​		（使用语法糖后其组件实例是关闭的，无法直接通过ref或者￥parent来调用实例）

```vue
//父组件
<template>
	<child ref="childRef"></child>
</template>

<script setup>
	import child form ""
    const childRef = ref()
    console.log(childRef.value.foo())
</script>

//子组件
<script setup>
	function foo() {
        console.log("子组件方法被调用")
    }
    
    //利用defineExpose来讲实例暴露出去。
    defineExpose({
        foo
    })
    
</script>
```

