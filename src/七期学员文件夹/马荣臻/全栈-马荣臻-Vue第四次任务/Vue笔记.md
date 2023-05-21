# Vue笔记

## MVVM模式

MVVM（Model-View-View Model）是一种软件架构设计模式。**MVVM的核心是View Model层**。

- 该层向上与视图层进行双向数据绑定
- 向下与Model层通过接口请求进行数据交互

View Model相当于观察者

Model为后台业务逻辑和数据库，对应data中的数据

View：模板

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/MVVM.png)

## 引入VUE

创建一个html文件，然后通过如下方式引入 Vue：

```vue
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

或者：

```vue
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

## 模板语法

### 插值语法

```vue
<body>
    <div id='root'>
        <h1>
    		{{name}}
		</h1>
    </div>
</body>
<script>
    //创建Vue实例
    new Vue({
		el:'#root',
        data:{
			name:'jack',
        }
    })
</script>
```

其中的{{name}}就是插值语法，会直接引用

### 指令语法

```vue
<body>
    <div id='root'>
        <h1>指令语法</h1>
        <a v-bind:href='url'></a>
        <a :href='url'></a>
        //两个a标签效果一致
    </div>
</body>
<script>
    new Vue({
		el:'#root',
        data:{
			url:'http://4399.com',
        }
    })
</script>
```

指令语法写在标签的尖括号里，"v-vind:"可以简写为“：”

## 数据绑定

```vue
<body>
    <div id='root'>
        单向数据绑定：<input type="text" v-bind:value="name"><br/>
		双向数据绑定：<input type="text" v-model:value="name"><br/>
        
        <!-- 简写-->
		单向数据绑定：<input type="text" :value="name"><br/>
		双向数据绑定：<input type="text" v-model="name"><br/>
    </div>
</body>
<script>
    //创建Vue实例
    new Vue({
		el:'#root',
        data:{
			url:'http://4399.com',
        }
    })
</script>
```

v-model只能应用在表单类元素（输入类）上

如以下例子是错误的：

```vue
<h2 v-model:x="name">你好啊</h2>
```

## el和data的两种写法

### el

```vue
<script>
    const v = new Vue({
		el:'#root'
		//第一种写法，写的时候就指定
		data:{
			name:'张三',
		}
})
    v.$mount('#root')
    //第二种写法
    //$mount是原型方法，mount意为挂载
</script>
```

### data

```vue
<script>
	new Vue({
		el:'#root',
        //第一种写法：对象式
        data:{
			name："尚硅谷",
        }
        //第二种写法：函数式
        data:function(){
			return {
                name:'尚硅谷',
            }
    	}
    })
</script>
```

Vue组件中的data必须是函数式，否则会报错

## Object.defineProperty方法

### 基础配置项

```js
let number = 18
let person = {
	name:'张三',
	sex:'男',
}
Object.defineProperty(person,"age",{
	value:18	
})
//三个参数：给哪个对象添加属性名，添加的属性名字，配置项
```

使用该方法与直接在对象中添加键值对不同，**使用该方法添加的属性不可以被枚举**

如果想让属性可以枚举，则需要添加enumerable属性：

```js
let number = 18
let person = {
	name:'张三',
	sex:'男',
}
Object.defineProperty(person,"age",{
	value:18,
    enumerable:true
    //该配置项控制属性是否可以枚举，默认值是false
})
```

**此时属性虽可以枚举**，**但是不可以被修改**

若想要属性可以被修改，可以添加配置项writable

此外，还有控制属性是否可以被删除的配置项configurable

```js
Object.defineProperty(person,'age',{
	 value:18,
	 enumerable:true, //控制属性是否可以枚举，默认值是false
	 writable:true, //控制属性是否可以被修改，默认值是false
	 configurable:true //控制属性是否可以被删除，默认值是false
})
```

### 高级配置项

```js
let number = 18
let person = {
	name: '张三',
	sex: '男',
}
Object.defineProperty(person, 'age', {
	// value:18,
	// enumerable:true, //控制属性是否可以枚举，默认值是false
	// writable:true, //控制属性是否可以被修改，默认值是false
	// configurable:true //控制属性是否可以被删除，默认值是false

	//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
	get() {
		console.log('有人读取age属性了')
		return number
	},

	//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
	set(value) {
		console.log('有人修改了age属性，且值是', value)
		number = value
	}

})
```

###### 附：输出对象中key的方法：

- console.log(Object.keys(person))

- ```js
  for (let key in person){
  	console.log(person[key])
  }
  ```

弹幕有提到这是数据双向绑定、数据劫持的底层原理

## 数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```js
let obj = {x:100}
let obj2 = {y:200}

Object.defineProperty(obj2,'x',{
	get(){
		return obj.x
	},
	set(value){
		obj.x = value
	}
})
```

## 条件渲染（判断）

### 条件判断

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

Vue还提供了v-else-if,充当 `v-if` 的“else-if 块”，可以连续使用：

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

#### 实例：

```vue
<body>
    <div id="app">
        <h1 v-if="awesome">Vue is awesome</h1>
        <h1 v-else>Oh no</h1>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                awesome: true/false
            }
        })
    </script>
</body>
```

### 复用

vue会尽可能高效的渲染元素，通常会复用已有元素而不是从头渲染。

#### 实例

```vue
<template v-if="loginType === 'username'">  <label>Username</label>  <input placeholder="Enter your username"></template><template v-else>  <label>Email</label>  <input placeholder="Enter your email address"></template>
```

以上代码在切换loginType将不会清除用户已经输入的内容。因为两个模板使用了相同的元素。\<input>标签不会被替换，仅仅是替换了它的placeholder。

### key

vue提供了一种方式来表达“这两个元素是完全独立的，不要复用他们”。只需要添加一个key即可

```vue
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

由于input标签添加了key属性，所以input不会被复用

## 列表渲染（循环）

用v-for把一个数组对应为一组元素

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

```vue
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
<script>
    var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
</script>
```

在 `v-for` 块中，我们可以访问所有父作用域的 property。`v-for` 还支持一个可选的第二个参数，即当前项的索引。

```vue
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<script>
    var example2 = new Vue({
        el: '#example-2',
        data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
    ]
  }
})
</script>
```

## 事件处理

### 监听事件

可以用v-on指令监听DOM事件，并在出发时运行一些JavaScript代码

示例：

```vue
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
<script>
    var example1 = new Vue({
        el: '#example-1',
        data: {
            counter: 0
        }
    })
</script>
```

### 事件处理方法

许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 `v-on` 指令中是不可行的。因此 `v-on` 还可以接收一个需要调用的方法名称。

```vue
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
<script>
	var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
</script>
```

## 其他指令

v-once

v-text

v-html

以html对拿到的数据进行解析

v-pre

v-pre用于跳过元素和它的子元素的编译过程，显示原始的Mustache标签:
跳过不需要编译的节点，加快编译的速度;

v-cloak

当js代码未执行时，会先显示{{}}，编译到具体语句才会进行替换。

v-cloak（斗篷）使得在编译前不显示{{}}

v-memo

## 内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：

```vue
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
<script>
	new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
</script>
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```js
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

### 事件修饰符

.stop 阻止事件继续传播
.prevent 阻止标签默认行为
.capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
.self 只当在 event.target 是当前元素自身时触发事件
.once 事件将只会触发一次
.passive 告诉浏览器你不想阻止事件的默认行为

# Vue组件开发（基础）

## 概念解析

组件

组件的定义：实现应用中局部功能代码(H5,C3,JS)和资源(视频音频)的集合

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%84.png)

## 模块与组件

非单文件组件：一个文件中包含n个组件

单文件组件：一个文件中只包含1个组件

## 非单文件组件

### VUE使用组件的三大步骤：

- 定义组件（创建组件）
- 注册组件
- 使用组件（写组件标签）

#### 一、如何定义一个组件

使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但是区别如下：

- 不要写el，所有组件都要经过vm管理，由vm中的el决定服务哪个容器
- data必须写成函数，避免组件被复用时，数据存在引用关系

#### 二、如何注册组件

- 局部注册：靠new Vue的时候传入components选项
- 全局注册：靠Vue.component('组件名',组件)

#### 三、编写组件标签

```vue
<school></school>
```

以尚硅谷课程中的例子为例

```vue
<body>

    <!-- 准备一个容器-->
    <div id="root">
        <div>{{school}}</div>
        <school></school>
        <student></student>
    </div>
    <div id="app">
        {{message}}
    </div>
    <script>
        var app = new Vue({
            //element的缩写，挂载元素
            el: "#app",
            data: {
                message: "Hello Vue"
            }
        })
        Vue.config.productionTip = false
        //第一步：创建school组件
        const school = Vue.extend({
            //el:'#root',
            template: `
            	<div>
        			<h2>{{schoolName}}</h2>
                    <h2>{{address}}</h2>
        		</div>
            `,
            data() {
                return {
                    schoolName: '尚硅谷',
                    address: '北京'
                }
            }
        })
        //第一步：创建student组件
        const student = Vue.extend({
            //el:'#root',
            template: `
            	<div>
        			<h2>{{studentName}}</h2>
                    <h2>{{age}}</h2>
        		</div>
            `,
            data() {
                return {
                    studentName: '张三',
                    age: 18
                }
            }
        })
        //第一步：创建hello组件
        const hello = Vue.extend({
            template: `
            	<div>
        			<h2>你好啊！</h2>
        		</div>
            `,
            data() {
                return {
                    name: 'Tom'
                }
            }
        })

        //第二步：注册组件（局部注册）
        new Vue({
            el: '#root',
            components: {
                school: school,
                student: student,
            }
        })
        //第二步：注册组件（全局注册）
        //Vue.component('组件名字',组件在哪)
        Vue.component('hello', hello)
    </script>
</body>
```

#### 几个注意点

1. 关于组件名

   - 一个单词组成

     - 第一种写法（首字母小写）：school
     - 第二种写法（首字母大写）：School

   - 多个单词组成

     - 第一种写法（kebab-case命名）：my-school
     - 第二种写法（CamelCase命名）：MySchool（需要脚手架支持）

   - 备注：

     - 组件名尽可能回避HTML中已经有的元素名称

     - 可以使用name配置项指定组件在开发者工具中呈现的名字

     - ```vue
       const s = Vue.extend({
       	name:'xxx',
       	template:xxx,
       	data(){
       	}
       })
       ```

2. 关于组件标签

   - 第一种写法：\<school>\</school>
   - 第二种写法\<School/>
   - 备注：不使用脚手架时，\<school/>会导致后续组件不能渲染

3. 一个简写方式

   - const school = Vue.extend(options)
   - 可简写为：const school = options

#### 组件的嵌套

子组件在父组件中注册

```vue
<script>
    const student = Vue.extend({
		template:`
			<div>
        		<h2>{{name}}</h2>
        		<h2>{{age}}</h2>
        	</div>
		`
        data(){
			return {
				name:'张三',
                age:18
            }
    	}
    })
	const school = Vue.extend({
        template:`
        	<div>
        		<h2>{{name}}</h2>
        		<h2>{{address}}</h2>
        		<student></student>
        	</div>
        `
        components:{
			student
    	}
    })	
    
    //一定要创建vm
    new Vue({
        el:'#root',
        components:{
			school:school,
        }
    })
</script>
```

- 子组件要写在父组件之前
- 子组件在父组件中注册
- 要在父组件的temple中添加子组件标签

- app组件：一人之下（vm），万人之上（其他组件）

#### VueComponent

1. school组件本质上是一个名为VueComponent的构造函数，是Vue.extend生成的

2. 我们只需要写\<school>\</school>，Vue解析时会帮我们创建school组件的实例对象。即Vue帮我们执行的：new VueComponent(options)。

3. 每次调用Vue.extend，返回的都是一个全新的VueComponent

4. this指向

   1. 组件配置中：

      data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是【VueComponent实例对象】

   2. new Vue(options)配置中：

      data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是【Vue实例对象】

5. VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）

   Vue的实例对象，以后简称vm

#### 一个重要的内置关系

VueComponent不能写el，data必须是函数式

Vue可以写el，data可以是函数，可以是对象



## 单文件组件

单文件组件以.vue结尾

vue文件中可以写template、script、style标签

### 暴露

- 通过关键字import引入暴露的文件

- 三种暴露方法

  - ```js
    export const school = Vue.extend({})
    ```

  - ```js
    const school = Vue.extend({})
    export {school}
    ```

  - ```js
    export default school
    //常用
    ```

- 默认暴露可以使用简写形式

  - 引用：import ??? from ???

- 分别暴露或统一暴露：import {???} from ???

## Vue脚手架（Vue CLI）

### 初始化脚手架

Vue脚手架是Vue官方提供的标准化开发工具

#### 具体步骤

- 第一步（仅第一次执行）：全局安装@vue/cli

  - 前置步骤：为了下载速度，配置npm淘宝镜像，在cmd中输入以下代码

  - ```
    npm config set registry https://registry.npm.taobao.org
    ```

  cmd命令行执行以下代码：

  ```
  npm install -g @vue/cli
  ```

- 第二步：**切换到你要创建项目的目录**，然后使用命令创建项目

  - ```
    vue create xxxx
    ```

- 第三步：切换到项目目录中

  - ```
    npm run serve
    ```

  - 结束后会有Local（本地）与Network（局域网）两个属性，分别对应两个网址，复制到浏览器

  - ctrl+c按两次停止项目运行

### 分析脚手架结构

（开头弹幕：千万注意！！！！要把组件名称改为双驼峰(SchoolMsg)这种，不然会报错！！！！！！！）

#### src

- main.js文件是整个项目的入口文件
- assets文件用来放静态资源
- app.vue单独放
- 所有程序员写出来的组件都放在components文件夹中
- **再次强调驼峰命名法**

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/%E8%84%9A%E6%89%8B%E6%9E%B6%E7%BB%93%E6%9E%84.png)

#### public

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/%E8%84%9A%E6%89%8B%E6%9E%B6html.png)

#### render

1. vue.js与vue.runtime.xxx.js的区别
   1. vue.js是完整版的Vue，包含：核心功能+模板解析器
   2. vue.runtime.xxx.js是运行版的Vue，只包含：新恒，没有模板解析器
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容

#### Vue修改默认配置

Vue脚手架隐藏了所有webpack相关的配置，若想查看具体的webpack配置，请执行：

```
vue inspect > output.js
```

- 文件包含所有脚手架的配置
- output.js只是输出配置，更改output文件不会影响实际配置
- 默认的五个东西不可以更改：public文件夹名、favicon.ico、index.html、src文件夹名、main.js

## ref属性

ref属性相当于原生HTML的id

```vue
<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>
<script>
	//引入School组件
	import School from './components/School'
	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>
```

- console.log(this)可以获取vc，顺着vc可以找到DOM元素
- 给哪个标签加ref，vc就收集哪个元素
- 如果给组件标签加ref，如sch，this.$refs.sch拿到的就是school的vc实例

## props配置

- 在data里把数据定死会使得组件不易复用
- 每次生成新组件的时候传入需要的参数，就可以用同一组件实现不同需求
- 在组件的script标签中，vm应当添加props配置

```vue
<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2>
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>
<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'我是一个尚硅谷的学生',
				myAge:this.age
			}
		},
		methods: {
			updateAge(){
				this.myAge++
			}
		},
		//简单声明接收
		// props:['name','age','sex'] 

		//接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值
			},
			sex:{
				type:String,
				required:true
			}
		}
	}
</script>
```

- type:类型
- default:默认值

- required:必须要传的

- required和default一般不会同时出现
- 尽可能地不要更改传入的数据
- props中的数据会被优先接收优先显示，所以可以在data中用“myAge:this.age”的形式接收参数，再对myAge进行更改

## 插槽

- 这个时候我们就可以来定义插槽slot:
  - 插槽的使用过程其实是抽取共性、预留不同;
  - 我们会将共同的元素、内容依然在组件内进行封装;
  - 同时会将不同的元素使用slot作为占位，让外部决定到底显示什么样的元素;
- 如何使用slot呢?
  -  Vue中将\<slot>元素作为承载分发内容的出口;
  -  在封装组件中，使用特殊的元素\<slot>就可以为封装组件开启一个插槽;
  -  该插槽插入什么内容取决于父组件如何使用;

### 动态插槽名

- 什么是动态插槽名呢?
  - 目前我们使用的插槽名称都是固定的;
  - 比如v-slot:left. v-slot:center等等;
  - 我们可以通过v-slot:[dynamicSlotName]方式动态绑定-一个名称;

## 渲染作用域

在Vue中有渲染作用域的概念：

- 父级模板里的左右内容都是**在父级作用域中编译**的
- 子模版里的所有内容都是**在子作用域中编译**的

## 非父子通信

### Provide和Inject

- Provide/nject用于非父子组件之间共享数据

  - 比如有一些深度嵌套的组件，子组件想要获取父组件的部分内容

  - 在这种情况下，如果我们仍然将props沿着组件链逐级传递下去，就会非常的麻烦

- 对于这种情况下，我们可以使用Provide和Inject

  - 无论层级结构有多深，父组件都可以作为其所有子组件的依赖提供者

  - 父组件有一一个provide选项来提供数据

  - 子组件有一个inject选项来开始使用这些数据;

- 实际上，你可以将依赖注入看作是"long range props",除了

  - 父组件不需要知道哪些子组件使用它provide的property

  - 子组件不需要知道inject的property来自哪里

### 处理响应式数据

我们先来验证一个结果: 如果我们修改了this.names的内容,那么使用length的子组件会不会是响应式的?

- 我们会发现对应的子组件中是没有反应的
  - 这是因为当我们修改了names之后，之前在provide中引入的this.names.length本身并不是响应式的

- 那么怎么样可以让我们的数据变成响应式的呢?
  - 非常的简单,我们可以使用响应式的一些API来完成这些功能，比如说computed函数;

- 注意:我们在使用length的时候需要获取其中的value
  - 这是因为computed返回的是一个ref对象， 需要取出其中的value来使用;

```vue
<script>
provide(){
	return {
		name:"why",
		age:"18",
        length:computed(()=>this.names.length)
	}
}
</script>

<div>
    <h2>
        {{name}} - {{age}} - {{length.value}}
    </h2>
</div>
```

## 全局事件总线

```shell
npm install hy-event-store
```

```js
export { HYEventBus } from 'hy-event-store'
const eventBus = new HYEventBus()
export default eventBus
```

```js
eventBus,on("whyEvent",(name,age,height) => {
	this.message=`name:${name},age:${age},height:${height}`
})
```

## 生命周期

- 每个组件都可能会经历从创建，挂载、更新、卸载等一 系列的过程
- 在这个过程中的某一个阶段, 我们可能会想要添加一些属于自己的代码逻辑(比如组件创建完后就请求一些服务器数据)
- Vue给我们提供了组件的生命周期函数

### 生命周期

1.又名：生命周期回调函数、生命周期函数、生命周期钩子。

2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。

3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

4.生命周期函数中的this指向是vm或组件实例对象。

### 具体过程

1. 创建Home组件
2. 将组件挂载到组件树（虚拟DOM）
3. 修i该data中的数据，更新Home组件
4. 卸载，有的组件不会被卸载

### 常用的生命周期钩子

1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

### 关于销毁Vue实例

1.销毁后借助Vue开发者工具看不到任何信息。

2.销毁后自定义事件会失效，但原生DOM事件依然有效。

3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

# Node.js

1.Node.js基础->服务器开发

npm/yarn/cnpm/npx/pnpm

2.webpack

3.Git

## Nodejs是什么

- Node.js是一个基于V8 JavaScript引擎的JavaScript运行时环境。
- 也就是说Node.js基于V8引擎来执行JavaScript的代码，但是不仅仅只有V8引擎: .
  - 前面我们知道V8可以嵌入到任何C + +应用程序中，无论是Chlome还是Node.js,事实上都是嵌入了V8引擎来执行JavaScript代码;
  - 但是在Chrome浏览器中，还需要解析、渲染HTML、CSS等相关渲染引擎,另外还需要提供支持浏览器操作的API、浏览器自己的事件循环等;
  - 另外,在Node.js中我们也需要进行一些额外的操作， 比如文件系统读/写、网络IO、加密、压缩解压文件等操作;

## 浏览器和Node.js区别

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CNode.js%E7%9A%84%E5%8C%BA%E5%88%AB.png)

## Node.js架构

- JavaScript代码会经过V8引擎，再通过Node js的Bindings,将任务放到Libuv的事件循环中
- libuv (Unicorn Velociraptor-独角伶盗龙) 是使用C语言编写的库
- libuv提供了事件循环、文件系统读写、网络IO、 线程池等等内容

## 传递参数

- 正常情况下执行一个node程序,直接跟.上我们对应的文件即可:
  - node index.js
- 但是，在某些情况下执行node程序的过程中,我们可能希望给node传递一些参数:
  - node index.js env=deve lopment coderwhy
- 如果我们这样来使用程序，就意味着我们需要在程序中获取到传递的参数:
  - 获取参数其实是在process的内置对象中的;
  - 如果直接打印这个内置对象，它里面包含特别的信息:
- argv属性是一个数组，里面包含了我们需要的参数;

## 关于argv

- 在C/C+ +程序中的main函数中，实际上可以获取到两个参数:
  - argc: argument counter的缩写，传递参数的个数;
  - argv: argument vector (向量、矢量)的缩写，传入的具体参数。
    - vector翻译过来是矢量的意思，在程序中表示的是-种数据结构。
    - 在C++. Java中都有这种数据结构，是- -种数组结构;
    - 在JavaScript中也是一个数组，里面存储一些参数信息;
- 我们可以在代码中，将这些参数信息遍历出来，使用:

```js
console.log(process.argv);
process.argv. forEach(item : => {
console.log(item);
}); 
```

## REPL

- REPL是Read-Eval-Print Loop的简称，翻译为“读取-求值-输出”循环
- REPL是一个简单的、交互式的编程环境;
