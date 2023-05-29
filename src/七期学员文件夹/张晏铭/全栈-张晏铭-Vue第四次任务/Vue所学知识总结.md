# Vue所学知识总结：

**（Vue的本质就是一个JavaScript库，我们可以把它理解成一个已经帮助我们封装好的库。）**

### 	

### 	1.Vue与DOM的最主要区别就是：原生DOM为命令式编程(即怎么做)，而Vue为声明式编程(即做什么)。

### 	2.Vue的源码来源：

```html
<script src="https://unpkg.com/vue@next"></script>
```

​		(或者直接复制网址打开并复制Vue源码进行手动引入。)

### 	3.Vue内部的部分指令：

```vue
1. v-once => 会让vue只渲染所设计的标签以及子元素‘一次’，即最开始的初值。。。


2. v-pre => 用于跳过元素和它的子元素的编译过程，显示最原始的Mustache标签。。


3. v-cloak => 斗篷效果，配合css使用 [v-cloak]{ }，vue渲染完成后自动删除
											(常用于防止未渲染完时Mustache标签泄漏)


4. v-memo = ["属性名"] => 只有当属性名'所代表的属性'发生变化时，此元素'整体'才会重新渲染。。
											(个别影响整体)

```

### 4.Vue动态元素绑定指令（v-bind）：

```vue
v-bind => 用于绑定一个或多个属性值，或者向另一个组件传递props值，其中 ‘ : ’ 为v-bind的语法糖形式。
  
v-bind可以使元素进行动态绑定(直接绑定数据，或者绑定函数并利用return返回值(函数存在于methods中))：
			 class、style的动态绑定中对象语法以及数组语法都有v-bind的身影，还可以直接赋值一个对象，对			  象在data中赋值
					(style语法与class相似，此处以class为例)。
			 
			 动态class之对象语法  {  } 的使用，可以写入多个对象，”属性名必须是布尔值“。具体写法为 				 :class = "{active(类名): 布尔值(true为显示，false为不显示)}"
			 
   			 动态class之数组语法  [ ] 的使用，可以写入多个类名，亦可以写入对象语法或三元运算符。写法为
			 :class = "['active01','active02',{'active03': 布尔值}]"
```

### 5.Vue事件响应指令（v-on）：

```vue
v-on => 语法糖为 ' @ '(eg: v-on:click = @click)。
		 其常用于触发事件(固定和自定义)的条件以及所触发事件后的响应(调用methods或computed中的函数)
		  (eg: @click = "add(实参)" 

v-on还支持修饰符，相当于对事件进行了一些特殊的处理：
		v-on.stop -调用event.stopPropagation()。
		v-on.prevent -调用event.preventDefault()。
		v-on.capture -添加事件侦听器时使用capture模式。
		v-on.self-只当事件是从侦听器绑定的‘元素本身’触发时才触发回调。
		v-on.{keyAlias} -仅当事件是从特定键触发时才触发回调。
			eg:	● @keydown: 当用户按下键盘上的任意按键时触发,如果按住不放，会重复触发此事件。
				● @keyup: 当用户释放键盘上的按键时触发。
		v-on.once -只触发'一次'回调。
		v-on.left -只当点击鼠标左键时触发。
		v-on.right -只当点击鼠标右键时触发。
		v-on.middle -只当点击鼠标中键时触发。
		v-on.passive - { passive: true }模式添加侦听器
```

### 6.Vue条件渲染指令（v-if 	v-else 	v-else-if 	v-show）：

```vue
写法为	v-if = "数据对比(布尔值)" {v-else 	v-else-if 与 v-if 配合使用}
v-show与v-if作用相似，但其仍然有着本质区别:
	● v-if本身为惰性，当后方数据对比(布尔值)为false时,数据会被销毁或者甚至不会进行渲染。
    ● v-show本质为操控其元素的css样式(display),不会销毁元素,且其不能与v-else一起使用。 
```

### 7.Vue事件遍历指令（v-for）:

```vue
v-for可以遍历数组，对象，字符串以及数字。
对于对象：v-for = "(value,key,index) in object"
对于数组：v-for = "(element,index) in array"
对于数字：v-for = "ele in 10" => 会生成1-10

v-for还能通过设置key值来保证性能，key类似于一种id，会对已经遍历的元素进行检阅。
v-for设置key，当内容变化时会利用patch来检索已经拥有key的数据来做相应的局部变化以此使性能更好，不会重复渲染已经渲染过的元素。
	eg：v-for = "(ele,index) in array" :key = "index"
```

### 8.Vue中的部分options api：

```vue
●template元素可以当做不可见的包裹元素，并且最终template不会被渲染出来，以此template可以用来当作v-if、	   slot替换等等的载体。template会替换mount所指向的元素的内部内容，不赋值则使用原有内容并开始渲染。

●data中主要存放编写的数据，当开始渲染时，data中的所有数据将由proxy来代理。  (data(){return{}})

●methods主要用来存放回调函数(绑定事件)，当要用到data中的数据时要用到this.这里的this并不是代表window，	   因为页面渲染时data中的数据已经被proxy代理，所以this代表的是proxy进行代理的所有对象，这也就意味着	  methods中的函数不能使用箭头函数(箭头函数的this是window，无法读取data中的数据)  (method:{})
```

### 9.Vue中的计算属性computed：

```vue
对于任何包含响应式数据的‘复杂逻辑’，都应该使用computed。
计算属性computed拥有内部缓存，重复调用时可以提高性能，防止重复计算，可以提高性能。
语法糖写法:
computed:{
	fullname(){
		return this.firstname + this.lastname
	}
}
完整写法:
computed:{
	fullname:{
		get: function(){
			return this.firstname + this.lastname
		},
		set: function(value){
			this.secondname = value
		}
	}

}

computed的set语法一般不使用，因此语法糖写法只涉及到get，如果‘传入参数‘则会传到’set‘中进行处理。
```

### 10.Vue事件监听器（watch）：

```vue
watch监听的主要是props或者data中的数据,当所监听数据发生改变时就会进行函数的调用。
写法为：
watch:{
	//默认两个参数
	msg(newValue,OldValue){
	    console.log(newValue,oldValue)
	}
	//当监听数据为对象时我们拿到的会是代理对象
	obj(newValue,OldValue){
		//Vue内部自带的代理对象处理方法
		console.log(Vue.toRaw(newValue))
		//利用展开运算符
		console.log({...newValue})
	}
	//使用以上两种方法保证获取到原生对象
}

watch本身的默认监听为浅层监听，例如当数组append一个元素时watch不会监听到，这时就需要深层监听。
watch:{
	msg:{
		handler	(newValue,OldValue){
	    	console.log(newValue,oldValue)
		},
		deep:true,
		immediate:true, //页面第一次渲染时也监听
	}

}
```

### 11.Vue双向绑定（v-model）：

```vue
v-model可以实现数据之间的共同变化。
●当在input输入框中用到v-model = "msg",此时在输入框中输入内容，data中的msg也会相应变化。

其本质便是v-bind与@input的结合使用。
<input type="text" :value = "msg" @input = "msg = $event.target.value" />

●对于组件之间使用v-model也可以实现数据同步变化，本质为props与自定义事件的结合。
<my-input :model-value = "msg" @updata:model-value = "msg = $event"></my-input>
	对于不同组件v-model默认为modelValue，也可以自定义。
	写成<my-input v-model:counter = "msg"></my-input>
	这也就意味着props接收的为counter而不是默认的modelValue。

●当在多个复选框中使用v-model时需要给每一个复选框一个value值，返回的数据为value值。
●当在单个复选框中使用v-model时返回的数据为布尔值。
●当在单选框中使用v-model时也需要给每一个单选框一个value值。
```

### 12.Vue中组件化管理的方式：

```vue
Vue CLI的搭建方法：
vue create "项目名称"

Vite体系的搭建方法：
npm init vue@latest
```

### 13.Vue单个组件的模板：

```vue
<template>
	//在这个单组件中的内容
	<div>
        AppContent
    </div>
</template>

<script>
export default {
    //各种 option api
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
	//自定义样式
</style>
```

**scoped**起到一种限制样式作用域的功能，让此样式只在本组件中生效。

​							（本质是在每一个标签样式后增加了一个属性选择器）

### 14.父子组件之间的通信：

​		●父组件传递给子组件:**通过props属性**;
​		●子组件传递给父组件:**通过$emit触发事件**;

```vue
//父组件
<template>

//子组件通过自定义事件传回数据，父组件接收到数据后再进行函数的回调
//通过v-bind传入动态数据或直接传入静态数据
<component :msg = "msg" @add = "addCount"></component>
	<div>
    	{{counter}}
    </div>
</template>

<script>
//父组件导入子组件后还需要通过components来进行注册
import component from "./component.vue"
export default {
    components:{
    	component,    
    },
    
    data(){
        return{
        	msg:'我是父组件数据',
        	counter: 0,            
        }

    },
    
    methods:{
        addCount(count){
            this.counter += count
        }
    }
}
</script>

//子组件
<template>

	<div>
    	{{msg}}
	</div>

	<button @click = "add(1)">
        +1
    </button>

</template>

<script>
export default {
    //emits option api 可以保证后续项目整合时代码不会重复，并提高代码阅读性
    emits:["add"],
    
    //props数组语法（方便但不严谨，不推荐）
    props:["msg"],
    
    //props对象语法（推荐）
    props:{
        msg:{
            type:String,
            default:"我是默认值",
            
            //必传属性，默认为false
            require:true,
        }
    },
    methods:{
        add(count){
            this.$emit("add",count)
        }
    }
}
</script>
```

​		● Props是你可以在组件上注册一些**自定义的attribute;**
​		●父组件给这些attribute赋值，子组件通过attribute的名称获取到对应的值; .

### 15.Vue中slot插槽的使用：

​		● Vue中将<slot> 元素作为承载分发内容的出口;
​		●在封装组件中，使用特殊的元素<slot>就可以为封装组件开启一个插槽;
​		●该插槽插入什么内容**取决于父组件如何使用**; 

```vue
//父组件
<template>

<component>
    //插槽使用时利用template包裹后进行操作，若未覆盖slot插槽将显示默认内容
    //多个插槽使用时需要在子组件给每个插槽一个name(命名)，父组件再通过v-slot:或#来进行一对一使用
    <template #left>我是传入内容</template>
	
	<template #middle>我是传入内容</template>
	
	<template #right>
		<button>
            我是传入内容
        </button>
	</template>
	
	//slot传回的数据将整体存放在一个对象中，在父组件中需要给这个对象整体命名(props),再视情况引用
	<template v-slot:transfer = "props">
		{{props.msg}}  //将显示123
		{{props.abc}}  //将显示acd
	</template>

</component>

</template>

<script>
//父组件导入子组件后还需要通过components来进行注册
import component from "./component.vue"
export default {
    components:{
    	component,    
    },
}
</script>

//子组件
<template>
	<div class = "all">
        	<div class = "left">
        		<slot name = "left">我是默认内容</slot>
    		</div>
        	
        	<div class = "middle">
        		<slot name = "middle">我是默认内容</slot>
    		</div>	
        	<div class = "right">
        		<slot name = "right">我是默认内容</slot>
    		</div>
        	<div class = "transfer">
                //slot利用v-bind传回动态数据或者直接传回静态数据
                <slot :msg = "msg" abc = "acd"></slot>
    		</div>
    </div>
</template>

<script>

export default {

    data(){
        return{
			msg:'123'            
        }

    },
    
    methods:{

    }
}
</script>
```

### 16.Vue中povide与inject，eventBus：

​		**(主要用于非父子组件之间的通信)**

```vue
//Provide与Inject用于非父子组件之间共享数据

//传递数据的组件
<template>

</template>

<script>
//实现数据实时更新的前提
import { computed } from "vue"
    
export default {
    data(){
        return{
        msg:'123',
        msg2:'我是动态数据',            
        }
    },
    provide(){
        return{
            adb:'acd',
            
            //传出的仅是静态数据
            msg:this.msg,
            
            //利用computed计算属性令数据实时更新
            msg2:computed(()=>{
                return this.msg2
            }),
        }
    }
}
</script>

//接收数据的组件
<template>
	<div>
        {{msg2}} //将显示‘我是动态数据’.
    </div>
</template>

<script>
export default {
    //注入会在组件自身的状态之前被解析，因此我们可以在 data() 中访问到注入的属性：
    inject:["adb","msg","msg2"]
    data(){
        return{
     		adb:this.adb,
            msg:this.msg,
            msg2:this.msg2
        }
    },
}
</script>
```

```vue
//eventBus相关内容
//使用eventBus的前提是要先在项目中安装依赖 'npm i hy-event-store'

//安装完成后进行配置,首先先新创建一个js文件
import {HYEventBus} from 'hy-event-store'

const eventBus = new HYEventBus()

export default eventBus

//js文件中写入上述内容，然后在后续某个组件使用时进行import导入
 
//eventBus的核心内容 
 eventBus.$emit("名字", " 内容(实参) ")            
 eventBus.$on("相同的名字",(形参)=>{ 操作 })
 
//传递数据
<template>
	<button @click="sendMsg()">-</button>
</template>

<script>
export default {
//先导入eventBus的文件
import {eventBus} from "./eventbus.js"
    data(){
        return{
            
        }
    },
    methods:{
        sendMsg() {
            eventBus.$emit("aMsg", (想要传递的元素));
        }
    }
}
</script>

//接收数据
<template>
  <p>{{msg}}</p>
</template>

<script> 

export default {
//不论接收还是传递均要导入eventBus
import {eventBus} from "./eventbus.js"
  data(){
    return {
      msg: ''
    }
  },
  methods:{
      Msg(msg){
         this.msg = msg;
      }
  },
      
  mounted() {
    eventBus.$on("aMsg", this.Msg)
  },
      
  //监听事件的移除    
  unmounted(){
      eventBus.$off("aMsg", this.Msg)
  }
    
};
</script>
```

### 17.Vue中DOM的获取方法(DOM的获取在mounted api中进行)：

```vue
<template>
	<div class = "trial" ref = "trial"></div>
	<component ref = "banner"></component>
</template>

<script>
export default {
import component from './component.vue'
    components:{
    	component,
	},
    
    data(){
        return{
            
        }
    },
    
    methods:{
        
    },
    
    mounted(){
       console.log(this.$refs.trial)
        this.$refs.trial.textContent = "被添加内容"
        //执行结果为div.trial内部内容为 ‘被添加内容’
        
       //获取到banner的组件实例，意味着可以调用子组件的对象方法。 
       console.log(this.$refs.banner)
       this.$refs.banner.add()
        
       //获取子组件中的元素($el)
       console.log(this.$refs.banner.$el)
      
    },
}
</script>
```

### 18.Vue中动态组件的设置方法：

**动态组件默认会删除不相关的多余组件(即所有事物回归于0，重新开始渲染)**

**keep-alive标签保证组件不会被销毁，即被缓存，与component标签配合使用**

利用 activated() 与 deactivated()  option api来监听保持keep-alive的组件是否被切换。

```vue
component  标签:
<component is="组件名"></component>
//组件名是谁就显示那个组件的内容

//父组件
<template>

	//keep-alive默认对所有组件进行缓存
	//可以设定include属性来分离缓存与非缓存。前提是需要在子组件中设定name option api。
	//keep-alive还有exclude与max属性
	<keep-alive include = "cnt1">
			<component :is = "content"></component>
	</keep-alive>
	//按键点击后触发回调函数改变显示的组件
	<button @click = "change"></button>

</template>

<script>
import cnt1 from "./cnt1.vue"
export default {
    components:{
        cnt1,
        cnt2,
    },
    
    data(){
        return{
            content:'cnt1',
        }
    },
    
    methods:{
        change(){
            this.content = 'cnt2'
        }
    }
}
</script>

//子组件
<script>
export default {
    name: "cnt1",
    
    //确定保持活跃的组件被切回
    activated(){
        console.log("activated")
    },
    
    //确定保持活跃的组件被切换
    deactivated(){
        console.log("deactivated")
    },
    
}
</script>
```

### 19.Vue组件的分包处理：

```vue
利用defineAsyncComponent来进行组件之间的分包



<script>
//先从vue中引入
import {defineAsyncComponent} from "vue"

//之后对想要分包的组件进行处理
const AsyncCategory = defineAsyncComponent(() => import("想要分包的文件路径"))

export default {
    //还需要对其进行组件的注册.
    components:{
        Category:AsyncCategory
    }
}
</script>

//处理完成后直接npm run build 进行打包，就能保证组件分包。
```

### 20.Vue中Mixin的使用：

**Mixin类似于一种代码模板，可以减少代码工作量，减少代码重复率。**

```vue
//先创建一个js文件
const mixin = {
	created(){
		console.log("created")
	},
	methods:{
		sayHello(){
			console.log("hello,mixin")
		}
	}
}

export default mixin

//之后直接在组件中利用mixins option api引用即可
<script>
import mixins from "./mixins.js"

export default {
    mixins:["mixins"],
}
</script>
```

**Mixin的data默认情况下会与组件自身合并，数据冲突时以组件自身data为主，生命周期的函数都会执行，methods等对象选项数据冲突时以组件自身为主**

