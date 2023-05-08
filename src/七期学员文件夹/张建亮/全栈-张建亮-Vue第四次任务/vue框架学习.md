#  vue框架学习

document.querySelector('video').playbackRate = 0.1

简介:一套用于构建用户界面的渐进式JavaScript框架

## vue官网使用

- API:进行查询
- 风格指南:让代码更优雅
- Cookbook:编码技巧

## Vue导入

#### 1、CDN引入

```html
<!-- 默认最新代码 -->
<script src="https://unpkg.com/vue@next"></script>
```

#### 2、下载VueJavaScript文件，本地引入

#### 3、通过npm包管理工具安装使用

#### 4、直接通过Vue CLI创建项目（脚手架）

**CLI**:命令行界面（command-line interface）

 **webpack**:项目打包方式 编译好的项目源码=>部署到服务器上直接使用

**npm**：node package mangager nodejs 包管理工具

#### 5、直接通过Vue Vite创建项目（脚手架）

##### 从零开始

- `npm init -y`快速初始化包信息

- `"license":MIT`协议，通过GENERATE LICENSE生成（安装插件后）

- `npm i vite -D`安装开发环境下的依赖

- `npm i vue`安装vue

- `npm i @vitejs/plugin-vue -D`安装插件，使浏览器可以编译.vue文件

- vite配置文件，文件名`vite.config.js`

  ```js
  import { defineConfig } from 'vite'
  import Vue from '@vitejs/plugin-vue'
  
  export default defineConfig({
      plugins:[Vue()]
  })
  ```


##### 用官方的

```
 npm init vue@latest
 > cd <your-project-name>
> npm install
> npm run dev
```

当你准备将应用发布到生产环境时，请运行：

```
> npm run build
```

此命令会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本。

## Vue实例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初识vue</title>
    <!-- 引入Vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
        <h1>Hello！{{name}}!</h1>
    </div>

    <script>
        Vue.config.productionTip = false // 阻止vue在启动时生成生产提示
        new Vue({
            el:'#root', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
            data:{ //data用于存储数据，数据共el所指定的容器去使用
                name:'JOJO'
            }
        })
    </script>
</body>
</html>
```



### 创建

```js
import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})

```

### 根组件

我们传入 `createApp` 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。

如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

```js
import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp(App)
```



### 挂载应用

```html
<div id="app"></div>
```

```js
app.mount('#app')
```

该方法接收一个“**容器**”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将**不会**被视为应用的一部分。

### DOM 中的根组件模板

当根组件没有设置 `template` 选项时，Vue 将自动使用容器的 `innerHTML` 作为模板。



## 模板语法

### 文本

数据绑定最常见的形式就是使用"Mustache"语法(双大括号)的文本插值

```html
<span>Message:{{msg}}</span>
```

通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
<span v-once>不会改变:{{msg}}</span>
```



### 原始HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 [`v-html` 指令](https://v2.cn.vuejs.org/v2/api/#v-html)：

```html
    <div id="app">
        <p v-html="name">hh</p>
        <p v-text="name">hh</p>
    </div>
```

```javascript
var app = new Vue({
    el: "#app",
    data: {
        name: "<h1>周杰伦</h1>"
    }
})
```

![image-20230323141600677](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230323141600677.png)

### Attribute

Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 [`v-bind` 指令](https://v2.cn.vuejs.org/v2/api/#v-bind),为HTML标签动态绑定属性

语法:

```html
<div v-bind:id="dynamicId"></div>
//简写
<div :id="dynamicId"></div>
```

可以绑定布尔型attribute，依据 true / false 值来决定 attribute 是否应该存在于该元素上。



也可以动态绑定包含多个attribute的JavaScript对象：

```html
<div v-bind="objectOfAttrs"></div>
```

```js
data() {
  return {
    objectOfAttrs: {
      id: 'container',
      class: 'wrapper'
    }
  }
}
```



### JavaScript表达式

对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="`list-${id}`"></div>
```

> ​	只能绑定单个表达式,语句和控制流不会生效

### 仅支持表达式

每个绑定仅支持**单一表达式**，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是是否可以合法地写在 `return` 后面。

```js
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}
```



## #响应式基础

### 数据和方法

当一个Vue实例被创建时,它将`data`对象中的所有的property加入到Vue的**响应式系统**中. 当这些property的值发生改变时,视图将会产生响应,即匹配更新为新的值.

### #DOM 更新时机

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只更新一次。

### #深层响应性

在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。



## 指令

指令(Directives)是代有`v-`前缀的特殊 attribute.  指令 attribute 的值预期是**单个 JavaScript 表达式** 

- v-bind：单向绑定解析表达式，可简写为:
- v-model：双向数据绑定
- v-for：遍历数组 / 对象 / 字符串
- v-on：绑定事件监听，可简写为@
- v-if：条件渲染（动态控制节点是否存存在）
- v-else：条件渲染（动态控制节点是否存存在）
- v-show：条件渲染 (动态控制节点是否展示)

- `v-text`指令：
  1. 作用：向其所在的节点中渲染文本内容
  2. 与插值语法的区别：`v-text`会替换掉节点中的内容，`{{xx}}`则不会。



- v-html指令：

  作用：向指定节点中渲染包含html结构的内容

  与插值语法的区别：

  1. v-html会替换掉节点中所有的内容，{{xx}}则不会
  2. v-html可以识别html结构
  3. 严重注意：v-html有安全性问题！！！

在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击
一定要在可信的内容上使用v-html，永远不要用在用户提交的内容上！！！

- `v-cloak`指令（没有值）：

1. 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉`v-cloak`属性
2. 使用css配合`v-cloak`可以解决网速慢时页面展示出`{{xxx}}`的问题

```html
	<style>
			[v-cloak]{
				display:none;
			}
	</style>
```



- `v-once`指令：

1. `v-once`所在节点在初次动态渲染后，就视为静态内容了
2. 以后数据的改变不会引起`v-once`所在结构的更新，可以用于优化性能

- `v-pre`指令：

1. 跳过其所在节点的编译过程。
2. 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译





### 动态参数

从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数

```html
<a v-on:[eventName]="doSomething"> ... </a>
```

在这个示例中，当 `eventName` 的值为 `"focus"` 时，`v-on:[eventName]` 将等价于 `v-on:focus`。

> 在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部**强制转为小写**，还有**空格和引号**，在 HTML attribute 名称中都是不合法的

### 修饰符

修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定

![指令语法图](https://typora--image1.oss-cn-beijing.aliyuncs.com/directive.69c37117.png)





## 计算属性和侦听器

### 计算属性

对于任何复杂逻辑，都应当使用**计算属性**，**不要在 getter 中做异步请求或者更改 DOM**

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

结果：

Original message: "Hello"

Computed reversed message: "olleH"



### 计算属性与方法

我们可以通过调用方法达到与上述相同的效果

```html
<p>Reversed message: "{{ reversedMessage() }}"</p>
```

```js
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

但是,计算属性是**基于它们的响应式依赖进行缓存的**, 只有相关响应式发生改变时它们才会重新求值,相比之下,当每次触发重新渲染时,调用方法总会再次执行该函数

### 计算属性和侦听属性

所谓 侦听器(watch)，就是 当数据发生变化时，及时做出响应处理。注意：当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的

```html
<div id="demo">{{ fullName }}</div>
```

侦听属性

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```



计算属性

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

- 监听器还可以监听数组 / 对象。
- 监听器使用不宜过多，因为会造成性能下降。
- 允许异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前,设置中间状态。这些都是计算属性无法做到的。



### 计算属性的setter

get对应的方法称为getter，负责获取值，**它不带任何参数**。set对应的方法为setter，**负责设置值**，在它的函数体中，一切的return都是无效的。

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：

```js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
```



### 侦听器

当需要在数据变化时**执行异步或开销较大**的操作时，这个方式是最有用的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>监视属性</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>今天天气好{{info}}!</h2>
        <button @click="changeWeather">点击切换天气</button>
    </div>

    <script>
        Vue.config.productionTip = false 

        new Vue({
            el:'#root', 
            data:{ 
                isHot:true,
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽' 
                }
            },
            methods:{
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
            watch:{
                isHot:{
                    immediate:true, //初始化时让handler调用一下
                    //handler什么时候调用？当isHot发生改变时
                    handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
                }
            }
        })
    </script>
</body>
</html>
```

监视属性watch：

1. 当被监视的属性变化时，回调函数自动调用，进行相关操作
2. 监视的属性必须存在，才能进行监视

1. 监视有两种写法：
   1. 创建Vue时传入watch配置
   2. 通过`vm.$watch`监视

```
vm.$watch('isHot',{
	immediate:true,
	handler(newValue,oldValue){
		console.log('isHot被修改了',newValue,oldValue)
	}
})
```



- 深度监视：
  1. Vue中的watch默认不监测对象内部值的改变（一层）
  2. 在watch中配置`deep:true`可以监测对象内部值的改变（多层）
  
- 及时回调: 

  1. `immediate: true` 选项，能强制回调函数立即执行

- 回调的刷新时机

  当你更改了响应式状态，它可能会同时触发 Vue 组件更新和侦听器回调。

  默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。

  如果想在侦听器回调中能访问被 Vue 更新之后的DOM，你需要指明 flush: 'post' 选项：
  

#### 监听属性简写

```html
<script type="text/javascript">
	Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
    const vm = new Vue({
        el:'#root',
        data:{
            isHot:true,
        },
        computed:{
            info(){
                return this.isHot ? '炎热' : '凉爽'
            }
        },
        methods: {
            changeWeather(){
                this.isHot = !this.isHot
            }
        },
        watch:{
            //正常写法
            isHot:{
                 deep:true,
				handler(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue)
				}
			}, 
            //简写
            isHot(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue,this)
			}
        }
    })

    //正常写法
    created(){
    vm.$watch('isHot',{
         deep:true,
        handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
        }
    })}
    //简写
    created(){
    vm.$watch('isHot',function(newValue,oldValue){
        console.log('isHot被修改了',newValue,oldValue,this)
    })}
</script>
```









## Class与Style绑定

```html
<div id="root">
    <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
    <div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>

    <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
    <div class="basic" :class="classArr">{{name}}</div> <br/><br/>

    <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
    <div class="basic" :class="classObj">{{name}}</div> <br/><br/>

    <!-- 绑定style样式--对象写法 -->
    <div class="basic" :style="styleObj">{{name}}</div> <br/><br/>

    <!-- 绑定style样式--数组写法 -->
    <div class="basic" :style="styleArr">{{name}}</div>
</div>

<script type="text/javascript">
	Vue.config.productionTip = false
		
    const vm = new Vue({
        el:'#root',
        data:{
            name:'尚硅谷',
            mood:'normal',
            classArr:['atguigu1','atguigu2','atguigu3'],
            classObj:{
                atguigu1:false,
                atguigu2:false,
            },
            styleObj:{
                fontSize: '40px',
                color:'red',
            },
            styleObj2:{
                backgroundColor:'orange'
            },
            styleArr:[
                {
                    fontSize: '40px',
                    color:'blue',
                },
                {
                    backgroundColor:'gray'
                }
            ]
        },
        methods: {
            changeMood(){
                const arr = ['happy','sad','normal']
                const index = Math.floor(Math.random()*3)
                this.mood = arr[index]
            }
        },
    })
</script>
```



### class样式：

- 写法：`：class="xxx"`，xxx可以是字符串、对象、数组
- 字符串写法适用于：类名不确定，要动态获取
- 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定
- 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用

### style样式：

- `:style="{fontSize: xxx}"`其中xxx是动态值
- `:style="[a,b]"`其中a、b是样式对象



## 条件渲染

### v-if

`v-if`指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值(真值)的时候被渲染。

### v-else

一个 `v-else` 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则它将不会被识别。

### v-else-if

和 `v-else` 类似，一个使用 `v-else-if` 的元素必须紧跟在一个 `v-if` 或一个 `v-else-if` 元素后面。

```html
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



### v-show

```html
<h1 v-show="ok">Hello!</h1>
```

`v-show` 会在 DOM 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 CSS 属性。

v-if与v-show

`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。



## 列表渲染

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本列表</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>人员列表（遍历数组）</h2>
			<ul>
				<li v-for="(p,index) in persons" :key="index">
					{{p.name}}-{{p.age}}
				</li>
			</ul>

			<h2>汽车信息（遍历对象）</h2>
			<ul>
				<li v-for="(value,k) in car" :key="k">
					{{k}}-{{value}}
				</li>
			</ul>

			<h2>遍历字符串</h2>
			<ul>
				<li v-for="(char,index) in str" :key="index">
					{{char}}-{{index}}
				</li>
			</ul>
			
			<h2>遍历指定次数</h2>
			<ul>
				<li v-for="(number,index) in 5" :key="index">
					{{index}}-{{number}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					],
					car:{
						name:'奥迪A8',
						price:'70万',
						color:'黑色'
					},
					str:'hello'
				}
			})
		</script>
    </body>
</html>
```

`v-for`指令：

1. 用于展示列表数据
2. 语法：`<li v-for="(item, index) in xxx" :key="yyy">`，其中key可以是index，也可以是遍历对象的唯一标识
3. 可遍历：数组、对象、字符串（用的少）、指定次数（用的少）

同时使用 `v-if` 和 `v-for` 是**不推荐的**，因为这样二者的优先级不明显。



### 通过Key管理状态

Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。

默认模式是高效的，但**只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。

为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 `key` attribute：

```html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```



### 列表过滤

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表过滤</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<ul>
				<li v-for="(p,index) of filPersons" :key="index">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false

			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					]
				},
				computed:{
					filPersons(){
						return this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
					}
				}
			})
		</script>
	</body>
</html>
```



### 列表排序

```html
<body>
    <div id="root">
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <button @click="sortType = 2">年龄升序</button>
		<button @click="sortType = 1">年龄降序</button>
		<button @click="sortType = 0">原顺序</button>
        <ul>
            <li v-for="(p,index) of filPersons" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    
    <script>
        new Vue({
            el:'#root',
            data:{
                persons:[
                    {id:'001',name:'马冬梅',age:30,sex:'女'},
				    {id:'002',name:'周冬雨',age:45,sex:'女'},
				    {id:'003',name:'周杰伦',age:21,sex:'男'},
				    {id:'004',name:'温兆伦',age:22,sex:'男'}
                ],
                keyWord:'',
                sortType:0,//0代表原顺序，1代表升序，3代表降序
            },
            computed:{
                filPersons(){
                    const arr = this.persons.filter((p)=>{
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                    if(this.sortType){
                        arr.sort((p1, p2)=>{
                            return this.sortType ===1 ? p2.age-p1.age : p1.age-p2.age
                        })
                    }
                    return arr
                }
            }
        })
    </script>
</body>
```



### Vue数据监视

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue数据监视</title>
		<style>
			button{
				margin-top: 10px;
			}
		</style>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h1>学生信息</h1>
			<button @click="student.age++">年龄+1岁</button><br/>
			<button @click="addSex">添加性别属性，默认值：男</button> <br/>
			<button @click="addFriend">在列表首位添加一个朋友</button> <br/>
			<button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button><br/>
			<button @click="addHobby">添加一个爱好</button> <br/>
			<button @click="updateHobby">修改第一个爱好为：开车</button><br/>
			<button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
			<h3>姓名：{{student.name}}</h3>
			<h3>年龄：{{student.age}}</h3>
			<h3 v-if="student.sex">性别：{{student.sex}}</h3>
			<h3>爱好：</h3>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h3>朋友们：</h3>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				student:{
					name:'tom',
					age:18,
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					//Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				},
				addFriend(){
					this.student.friends.unshift({name:'jack',age:70})
				},
				updateFirstFriendName(){
					this.student.friends[0].name = '张三'
				},
				addHobby(){
					this.student.hobby.push('学习')
				},
				updateHobby(){
					this.student.hobby.splice(0,1,'开车')
				},
				removeSmoke(){
					this.student.hobby = this.student.hobby.filter((h)=>{
						return h !== '抽烟'
					})
				}
			}
		})
	</script>
</html>
```

数组修改方法:

- `push()`: 可向数组的末尾添加一个或多个元素，并返回新的长度。

- `pop()`:数组最后一位元素删除并返回数组的最后一个元素。

- `shift()`:用于把数组的第一个元素从其中删除，并返回第一个元素的值。

- `unshift()`:可向数组的开头添加一个或更多元素，并返回新的长度。

- `splice(index,howmany,item1, …, itemX)`:方法向/从数组中添加/删除项目，然后返回被删除的项目
  第一个参数：表示从哪个索引位置（index）添加/删除元素
  第二个参数：要删除的项目数量。如果设置为 0，则不会删除项目。
  第三个参数：可选。向数组添加的新项目。

  例:1. splice(1);保留前一个元素之后的全部删除，splice(2);保留前两个元素之后的全部删除

  2. splice(2, 1) 从索引位置(index:2)删除，删除一个元素

  3. splice(1,2,‘a’,‘b’) 从索引位置(index:1)删除，删除2个元素，并添加2个新元素来替代被删除的元素
  4. splice(1,0,‘a’)从索引位置(index:1)添加，添加一个元素

  

- `sort()`:对原列表进行排序，如果指定参数，则使用比较函数指定的比较函数。
  arr.sort(sortby) 可选。规定排序顺序。必须是函数。

- `reverse()`:颠倒数组中元素的顺序。

也有一些不可变 (immutable) 方法，例如 `filter()`，`concat()` 和 `slice()`，这些都不会更改原数组，而总是**返回一个新数组**

- filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
- concat() 方法用于连接两个或多个数组。
- slice() 方法可从已有的数组中返回选定的元素。
- split() 方法用于把一个字符串分割成字符串数组。



## 事件处理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件的基本用法</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2>hello,{{name}}</h2>
        <button v-on:click="showInfo1">点我提示信息1</button>
        <button @click="showInfo2($event,66)">点我提示信息2</button>
    </div>

    <script>
        Vue.config.productionTip = false 
        new Vue({
            el:'#root', 
            data:{
                name:'JOJO'
            },
            methods:{
                showInfo1(event){
                    console.log(event)
                },
                showInfo2(evnet,num){
                    console.log(event,num)
                }
            }
        })
    </script>
</body>
</html>
```

1. 使用`v-on:xxx`或`@xxx`绑定事件，其中xxx是事件名
2. 事件的回调需要配置在methods对象中，最终会在vm上
3. methods中配置的函数，==不要用箭头函数！==否则this就不是vm了 
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象
5. `@click="demo`和`@click="demo($event)"`效果一致，但后者可以传参



### 事件修饰符

- stop 阻止事件继续传播(阻止事件冒泡)
- prevent 阻止标签默认行为(比如取消a标签的自动跳转)
- capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
- self 只当在 event.target 是当前元素自身时触发处理函数
- once 事件将只会触发一次
- passive 告诉浏览器你不想阻止事件的默认行为
  

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<script type="text/javascript" src="../js/vue.js"></script>
		<style>
			*{
				margin-top: 20px;
			}
			.demo1{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- 阻止默认事件 -->
			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

			<!-- 阻止事件冒泡 -->
			<div class="demo1" @click="showInfo">
				<button @click.stop="showInfo">点我提示信息</button>
			</div>

			<!-- 事件只触发一次 -->
			<button @click.once="showInfo">点我提示信息</button>

			<!-- 使用事件的捕获模式 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div>

			<!-- 只有event.target是当前操作的元素时才触发事件 -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div>

			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕 -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods:{
				showInfo(e){
					alert('同学你好！')
				},
				showMsg(msg){
					console.log(msg)
				},
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
			}
		})
	</script>
</html>
```



### 案件修饰符

```html
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />
```



Vue中常用的按键别名：

- 回车：enter
- 删除：delete (捕获“删除”和“退格”键)
- 退出：esc
- 空格：space
- 换行：tab (特殊，必须配合keydown去使用)
- 上：up
- 下：down
- 左：left
- 右：right

系统按键修饰符

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发

配合keydown使用：正常触发事件

```html
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
```



#### `exact`修饰符

允许控制触发一个事件所需的确定组合的系统按键修饰符。

```html
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```



鼠标修饰符

- `.left`
- `.right`
- `.middle`



## 表单输入绑定

手动连接值绑定和更改事件监听器：

```html
<input
  :value="text"
  @input="event => text = event.target.value">
```

`v-model` 指令：

```html
<input v-model="text">
```

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>收集表单数据</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<form @submit.prevent="demo">
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区：
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:0,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}
		})
	</script>
</html>
```





- 若：<input type="text"/>，则v-model收集的是value值，用户输入的内容就是value值

- 若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value属性

- 若：<input type="checkbox"/>

  - 没有配置value属性，那么收集的是checked属性（勾选 or 未勾选，是布尔值）

  - 配置了value属性：
    v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
    v-model的初始值是数组，那么收集的就是value组成的数组

    

  - `v-model` 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。它将**始终将当前绑定的 JavaScript 状态视为数据的正确来源**。你应该在 JavaScript 中使用`data` 选项来声明该初始值。

### 修饰符

### `.lazy`:失去焦点后再收集数据

默认情况下，v-model同步输入框的值和数据。可以通过这个修饰符，转变为在change事件再同步。

```html
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
```



### `.number`

自动将用户的输入值转化为数值类型

### `.trim`

自动过滤用户输入的首尾空格



## #生命周期钩子

每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。



### 注册周期钩子

比如`mounted`钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：

还有其他一些钩子，会在实例生命周期的不同阶段被调用，最常用的是 [`mounted`](https://cn.vuejs.org/api/options-lifecycle.html#mounted)、[`updated`](https://cn.vuejs.org/api/options-lifecycle.html#updated) 和 [`unmounted`](https://cn.vuejs.org/api/options-lifecycle.html#unmounted)。

所有生命周期钩子函数的 `this` 上下文都会自动指向当前调用它的组件实例。注意：避免用箭头函数来定义生命周期钩子，因为如果这样的话你将无法在函数中通过 `this` 获取组件实例。

![组件生命周期图示](https://typora--image1.oss-cn-beijing.aliyuncs.com/lifecycle.16e4c08e.png)



![在这里插入图片描述](https://typora--image1.oss-cn-beijing.aliyuncs.com/f9354e10221d4e6c905f04fb66c17698.png)





1. beforeCreate( 创建前 )

这个时候，在实例被完成创建出来，el和data都没有初始化，不能访问data、method，一般在这个阶段不进行操作

2. created

这个时候，vue实例中的data、method已被初始化，属性也被绑定，但是此时还是[虚拟dom](https://so.csdn.net/so/search?q=虚拟dom&spm=1001.2101.3001.7020)，真是dom还没生成，$el 还不可用。这个时候可以调用data和method的数据及方法，created钩子函数是最早可以调用data和method的，故一般在此对数据进行初始化。

3. beforeMount（挂载前）

此时模板已经编译完成，但还没有被渲染至页面中（即为虚拟dom加载为真实dom），此时el存在则会显示el。在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，**一般可以在这里做初始数据的获取**。
当vue实例中，el为挂载目标，未对el进行定义，则this.el显示undefined，但页面中存在template也能识别挂载目标，因为template可以被看成占位符。如果对其进行定义则显示<div id="app"></div>，故所以，beforeMount读取不了真实的el，在mounted才能读取到真实的el，因为el只有渲染完成后才会存在。这里讲的el是真实的el。在真实的el之前存在前，在beforeMount中的其实是页面中的#app，是挂载的目标。

4. Mounted（挂载后）

此时模板已经被渲染成真实DOM，用户已经可以看到渲染完成的页面，页面的数据也是通过双向绑定显示data中的数据。 这实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的躺在我们的内存中，一动不动。


```vue
<template>
  <div id="app">
    <span :model="msg"></span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'msg',
    }
  },
  beforeCreate() {
    console.log('----beforeCreate----')
    console.log(this.msg) //msg
    console.log(this.$el) //undefined
  },
  created() {
    console.log('----created----')
    console.log(this.msg)
    console.log(this.$el)
  },
  beforeMount() {
    console.log('----beforeMount----')
    console.log(this.msg)
    console.log(this.$el)
  },
  mounted() {
    console.log('----mounted----')
    console.log(this.msg)
    console.log(this.$el)
  },
}
</script>
```

![image-20230403145922089](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230403145922089.png)



5. beforeUpdate

更新前状态（view层的数据变化前，不是data中的数据改变前），重新渲染之前触发，然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染。只有view上面的数据变化才会触发beforeUpdate和updated，仅属于data中的数据改变是并不能触发。


6. updated

数据已经更改完成，dom也重新render完成。

```vue
<template>
  <div id="app">
    <div style="height:50px"
         ref="spanRef">{{msg}}</div>
    <button @click="clickBtn"></button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'msg',
    }
  },
  methods: {
    clickBtn() {
      this.msg = 'newMsg'
    },
  },
  beforeUpdate() {
    console.log('----beforeUpdate----')
    console.log(this.$refs.$el)
    console.log(this.msg) //msg
  },
  updated() {
    console.log('----updated----')
    console.log(this.$refs.$el)

    console.log(this.msg) //msg
  },
}
</script>
```

7. beforeDestroy

销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等…’)

8. destroyed

销毁后 （Dom元素存在，只是不再受vue控制）,卸载watcher，事件监听，子组件。



### 总结

常用的生命周期钩子：

1. `mounted`：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等初始化操作
2. `beforeDestroy`：清除定时器、解绑自定义事件、取消订阅消息等收尾工作

关于销毁Vue实例：

1. 销毁后借助Vue开发者工具看不到任何信息
2. 销毁后自定义事件会失效，但原生DOM事件依然有效
3. 一般不会在`beforeDestroy`操作数据，因为即便操作数据，也不会再触发更新流程了





## 模板引用

获取DOM

```html
<input ref="input">
```

`ref` 是一个特殊的 attribute，和 `v-for` 章节中提到的 `key` 类似。它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。



### 访问模板引用

挂载结束后引用都会被暴露在 `this.$refs` 之上：

```vue
<script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template>
```

注意，你只可以**在组件挂载后**才能访问模板引用。如果你想在模板中的表达式上访问 `$refs.input`，在初次渲染时会是 `null`。这是因为在初次渲染前这个元素还不存在



###  `v-for` 中的模板引用

当在 `v-for` 中使用模板引用时，相应的引用中包含的值是一个数组：

vue

```vue
<script>
export default {
  data() {
    return {
      list: [
        /* ... */
      ]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
```



### #函数模板引用

除了使用字符串值作名字，`ref` attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到**元素引用**作为其第一个参数：

```html
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
```

注意我们这里需要使用动态的 `:ref` 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 `el` 参数会是 `null`。



### 组件上的ref

如果你为组件添加了 ref 属性并设置属性值标识了该引用，那么通过 $refs 你将能够获得该组件对应的 Vue 实例对象，这意味着父组件对子组件的每一个属性和方法都拥有有完全的访问权。这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。大多数情况下，你应该首先使用标准的 props 和 emit 接口来实现父子组件交互。

例：在点击父组件中的 **button** 元素后，通过模板引用将子组件中的 **.box** 元素背景颜色进行修改。

```html
<template>
  <div class="container">
    <!-- 为子组件添加 ref 引用并将该引用标识为 Child -->
    <Child ref="Child"></Child>
    <button @click="transfer()">Transfer</button>
  </div>
</template>

<script>
// 导入组件
import Child from '@/components/Child.vue';

export default {
  // 注册组件
  components: {
    Child
  },
  // 定义事件处理函数
  methods: {
    transfer() {
      // 获取子组件中的 $refs，并通过
      // 子组件的 ref 引用对 .box 进行 DOM 操作
      this.$refs.Child.$refs.boxRef.style.backgroundColor = 'pink';
    }
  }
}
</script>

<style>

</style>
```

```html
<template>
  <div class="container">
    <!-- 为 .box 元素添加 ref 引用并将该引用标识为 refBox -->
    <div class="box" ref="boxRef"></div>
  </div>
</template>

<script>
export default {

}
</script>

// 为 style 元素添加 scoped 属性
// 防止出现样式冲突
<style scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: dodgerblue;
  cursor: pointer;
}
</style>
```



`expose` 选项可以用于限制对子组件实例的访问：

```js
export default {
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar'
    }
  },
  methods: {
    publicMethod() {
      /* ... */
    },
    privateMethod() {
      /* ... */
    }
  }
}
```



#### $nextTick

Vue 实例对象（组件）在运行阶段存在生命周期 beforeUpdate 及 updated。在 VueJS 中的响应式状态发生变化时，将进入 updated 生命周期，DOM 节点将在此时期中发生更新。

在上一个示例中，我们修改数据 visible 使输入框得以显示。但在修改数据 visible 时，组件的生命周期还处于 beforeUpdate 生命周期，此时 DOM 节点尚未更新，因此无法通过 this.$refs.user 获取到相关的 DOM 对象。



当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个 tick 才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。

$nextTick() 可以在响应式状态发生改变后立即使用，你可以传递一个回调函数或者 await 返回的 Promise 作为 $nextTick() 的参数。$nextTick() 函数会在 DOM 更新完成后执行参数所关联的代码块。

```html
<template>
  <div class="container">
    <!-- 
      当 v-if 的属性值对应的布尔值为 
      false 时，该元素将被隐藏 
    -->
    <div class="input" v-if="visible">
      <!-- 添加 ref 引用，便于后续该输入框获得焦点 -->
      <input type="text" placeholder="请输入您的账号" ref="user">
      <input type="password" placeholder="请输入您的密码"> 
    </div>
    <!-- 
      当 .input 元素的 v-if 的属性值对应的
      布尔值为 false 时，显示 button 元素
    -->
    <button @click="convert()" v-else>Login</button>
  </div>
</template>

<script>
export default {
  // 定义数据
  data() {
    return {
      visible: false
    }
  },
  // 定义事件处理函数
  methods: {
    convert() {
      // 在点击 Login 按钮后显示输入框
      this.visible = true;
      // 在 DOM 更新后使账号输入框获得焦点
      this.$nextTick(() => {
        this.$refs.user.focus();
      })
    }
  }
}
</script>

// 为 style 元素添加 scoped 属性
// 防止出现样式冲突
<style scoped>
input{
  display: block;
  margin-top: 15px;
  width: 250px;
  height: 26px;
}
</style>
```







## #组件基础

### 定义组件

当使用构建步骤时，我们一般会将 Vue 组件定义在一个单独的 `.vue` 文件中，这被叫做[单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html) (简称 SFC)

### 使用组件

```html
<script>
import ButtonCounter from './ButtonCounter.vue'

export default {
  components: {
    ButtonCounter
  }
}
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```

若要将导入的组件暴露给模板，我们需要在 `components` 选项上[注册](https://cn.vuejs.org/guide/components/registration.html)它。这个组件将会以其注册时的名字作为模板中的标签名。

每一个组件都维护着自己的状态，是不同的 `count`。这是因为每当你使用一个组件，就创建了一个新的**实例**。



### #传递props

props的基本用法是父组件给子组件传输数据和验证

1.在父组件中的data中定义值
2.**在子组件中使用props声明要引用哪个值**
3.父组件的template中要在子组件标签上绑定

props可以用数组或对象声明

```js
export default {
  props: ['foo'],
  created() {
    // props 会暴露到 `this` 上
    console.log(this.foo)
  }
}
```

```js
export default {
  props: {
    title: String,
    likes: Number
  }
}
```



# 深入组件

### 注册

### 全局注册

我们可以使用 [Vue 应用实例](https://cn.vuejs.org/guide/essentials/application.html)的 `app.component()` 方法，让组件在当前 Vue 应用中全局可用。

缺点

1. 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。
2. 全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现

```js
import { createApp } from 'vue'

const app = createApp({})

app.component(
  // 注册的名字
  'MyComponent',
  // 组件的实现
  {
    /* ... */
  }
)
```



### 局部注册

局部注册需要使用 `components` 选项：

局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用

```html
<script>
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  }
}
</script>

<template>
  <ComponentA />
</template>
```

> ​	请注意：**局部注册的组件在后代组件中并不可用**。在这个例子中，`ComponentA` 注册后仅在当前组件可用，而在任何的子组件或更深层的子组件中都不可用。



## Props 声明

props 需要使用 [`props`](https://cn.vuejs.org/api/options-state.html#props) 选项来定义：

```js
export default {
  props: ['foo'],
  created() {
    // props 会暴露到 `this` 上
    console.log(this.foo)
  }
}
```

除了使用字符串数组来声明 prop 外，还可以使用对象的形式：

```js
export default {
  props: {
    title: String,
    likes: Number
  }
}
```

### 传递 prop 的细节

#### Prop 名字格式

如果一个 prop 的名字很长，应使用 camelCase 形式

组件名推荐`PlacalCase`因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。



### 单向数据流

所有的 props 都遵循着**单向绑定**原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况

### Prop校验

### Boolean类型转换













## 组件（非官方）

### 概念

组件是可复用的Vue实例。封装标签，样式和js代码

组件化：封装的思想，把页面上可重用的部分封装为组件，从而方便项目的开发和维护

**一个页面， 可以拆分成一个个组件，一个组件就是一个整体, 每个组件可以有自己独立的 结构 样式 和 行为(html, css和js)**



### 基础使用

> ​	目标：每个组件都是一个独立的个体，代码里体现为一个独立的.vue文件
>
> 1. 组件内template只能有一个根标签
> 2. 组件内data必须是一个函数,独立作用域

步骤:

1. 创建组件 components/Pannel.vue
2. 注册组件
   - 全局

```js
import Vue from 'vue'
import 组件对象 from 'vue文件路径'

Vue.component("组件名", 组件对象)
```

全局注册PannelG组件名后, 就可以当做标签在任意Vue文件中template里用

单双标签都可以或者小写加-形式, 运行后, 会把这个自定义标签当做组件解析, 使用组件里封装的标签替换到这个位置

```html
<PannelG></PannelG>
<PannelG/>
<pannel-g></pannel-g>
```

- 局部

```js
import 组件对象 from 'vue文件路径'

export default {
    components: {
        "组件名": 组件对象
    }
}
```

3. 使用:直接将组件名当标签使用



### scoped作用

> ​	目的:解决多个组件样式名相同,冲突问题

需求: [div标签](https://so.csdn.net/so/search?q=div标签&spm=1001.2101.3001.7020)名选择器, 设置背景色

问题: 发现组件里的div和外面的div都生效了

解决: 给Pannel.vue组件里style标签上加scoped属性即可,使组件内的样式只在当前vue组件生效,在style上加入scoped属性, 会在此组件的标签上加上一个随机生成的data-v开头的属性

![image-20230404105040441](C:%5CUsers%5C86132%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230404105040441.png)



### 组件通信

因为每个组件的变量和值都是独立的

父: 使用其他组件的vue文件

子: 被引入的组件(嵌入)



#### 父向子

child：

```html
<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'intro']
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
```

father：

```html
<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <Product title="好吃的口水鸡" price="50" intro="开业大酬宾, 全场8折"></Product>
    <Product title="好可爱的可爱多" price="20" intro="老板不在家, 全场1折"></Product>
    <Product title="好贵的北京烤鸭" price="290" :intro="str"></Product>
  </div>
</template>

<script>
// 1. 创建组件 (.vue文件)
// 2. 引入组件
import Product from './components/MyProduct'
export default {
  data(){
    return {
      str: "好贵啊, 快来啊, 好吃"
    }
  },
  // 3. 注册组件
  components: {
    // Product: Product // key和value变量名同名 - 简写
    Product
  }
}
</script>

<style>

</style>
```



#### 组件中v-for的使用

```html
<template>
  <div>
    <MyProduct v-for="obj in list" :key="obj.id"
    :title="obj.proname"
    :price="obj.proprice"
    :intro="obj.info"
    ></MyProduct>
  </div>
</template>

<script>
// 目标: 循环使用组件-分别传入数据
// 1. 创建组件
// 2. 引入组件
import MyProduct from './components/MyProduct'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  // 3. 注册组件
  components: {
    // MyProduct: MyProduct
    MyProduct
  }
};
</script>

<style>
</style>
```



### 单项数据流

![在这里插入图片描述](https://img-blog.csdnimg.cn/5a5b33109b434041919d3a94ec3bfb62.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Yeg5L2V5b-D5YeJ,size_20,color_FFFFFF,t_70,g_se,x_16)

**props的值不能重新赋值**, 对象引用关系属性值改变, 互相影响



#### 

### 组件中的自定义事件:

例：父传给子一个函数，子调用函数，把参数传回去

语法：

- 父：@自定义事件名 = “父method函数”

```html
<template>
  <div>
    <!-- 目标: 子传父 -->
    <!-- 1. 父组件, @自定义事件名="父methods函数" -->
    <MyProduct v-for="(obj, ind) in list" :key="obj.id"
    :title="obj.proname"
    :price="obj.proprice"
    :intro="obj.info"
    :index="ind"
    @subprice="fn"
    ref="aaa"></MyProduct>
  </div>
</template>

<script>

import MyProduct from './components/MyProduct_sub'
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  components: {
    MyProduct
  },
  methods: {
    fn(inde, price){
      // 逻辑代码
      this.list[inde].proprice > 1 && (this.list[inde].proprice = (this.list[inde].proprice - price).toFixed(2))
    }
  }，
    mounted:{
    setTimeout(()=>{
        this.$ref.aaa.$on('subprice',this.fn)
        //也可以使用ref绑定自定义事件
    })
}
};
</script>

<style>
</style>
```



- 子：this.$emit("自定义事件名",传值) - 执行父method里的函数代码

```html
<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <button @click="subFn">宝刀-砍1元</button>
  </div>
</template>

<script>
import eventBus from '../EventBus'
export default {
  props: ['index', 'title', 'price', 'intro'],
  methods: {
    subFn(){
      this.$emit('subprice', this.index, 1) // 子向父
      eventBus.$emit("send", this.index, 1) // 跨组件
    }
  }
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
```

父自定义事件和方法, 等待子组件触发事件给方法传值



父：@自定义事件名 = “父method函数”

也可以ref使用绑定事件

```
<Dome ref = "demo"/>
......
mounted(){
this.$ref.xxx.$on('事件名',回调函数)
}
```

子：this.$emit("自定义事件名",传值) - 执行父method里的函数代码

- $emit : 创建自定义事件
- $on ('事件名',method): 绑定自定义事件
- $off('事件名') :解绑自定义事件(单个) 
- $off(['事件名1','事件名2']) :解绑自定义事件(多个) (写成数组)
- $off() :解绑自定义事件(所有) 

组件上也可以绑定原生DOM事件,需要使用native修饰符

### 组件可以通过`emits`选项显式来声明它要触发的事件

```js
export default {
    emits: ['inFocus','submit']
}
```









### 全局事件总线（globalEventBus）

1. 一种组件间的通信方式，适用于任意组件间的通信

2. 安装全局事件总线：

   ```js
   new Vue({
       ......
       beforeCreate(){
       Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前的vm
   }
   })
   ```

3. 使用事件总线

   接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件本身

   ```vue
   methods(){
   demo(data)
   }
   ......
   mounted(){
   this.$bus.$on('xxxx',this.demo)
   }
   ```

   提供数据：`this.$bus.$emit('xxxx',数据)`

4. 在beforeDestroy钩子中，用$off去解绑当前组件所用到的组件



### todo案例

1. 组件化编码

​	（1).拆分静态组件：按功能拆分组件，命名不要与HTNL冲突

​	（2). 实现动态组件： 考虑好数据的存放位置

​		-	一个组件在用：放在自身即可

​		-	一些组件在用: 放在共同的父组件上（状态提升）				

​		(3).实现交互：从绑定事件开始

2. prop适用于：

- 父组件 ==> 子组件 通信
- 子组件 ==> 父组件 通信 （父先给子一个函数）

3. 使用v-model注意：v-model绑定的值不能是props传过来的值，因为props是不可修改的
4. props传过来的若是对象类型的值，修改对象的属性时Vue不会报错，但不推荐



## 原型关系

![image-20230417153032791](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230417153032791.png)



##  slot插槽

### 1. 默认插槽

```html
父：
<Category>
<div>html结构</div>
</Category>
子：
<template>
<div>
    <slot>插入默认内容</slot>
    </div>
</template>
```



### 2.具名插槽

```html
父:
<Category>
<template slot="center">
    <div>
        html结构1
    </div>
    </template>
    <template v-slot:fooetr>
    <div>
        html结构1
    </div>
    </template>
</Category>
子：
<template>
<div>
    <slot name="center">插槽默认内容</slot>
    <slot name="footer">插槽默认内容</slot>
    </div>
</template>
```



- 当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 `<template>` 节点都被隐式地视为默认插槽的内容。

### 3.作用域插槽

#### 默认

```html
父：
<script>
import MyComponent from './MyComponent.vue'
  
export default {
  components: {
    MyComponent
  }
}
</script>

<template>
	<MyComponent v-slot="slotProps">
  	{{ slotProps.text }} {{ slotProps.count }}
  </MyComponent>
</template>

子：
<script>
export default {
  data() {
    return {
      greetingMessage: 'hello'
    }
  }
}
</script>

<template>
  <div>
  	<slot :text="greetingMessage" :count="1"></slot>
	</div>
</template>
```







### 动态插槽名

```html
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```







## 异步组件

![image-20230421094303963](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230421094303963.png)





![image-20230421180425812](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230421180425812.png)





![image-20230421175133990](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230421175133990.png)





ES模块动态导入：

```js
import { defineAsyncComponent } from 'vue'

const AsyncComo = defineAsyncComponent(()=>
import('./component/Myponent.vue'))

//可以全局注册
app.component('MyComponent',defineAsyncComponent(()=>
 import('./components/MyComponent.vue')                       ))

//也可以局部注册
<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    AdminPage: defineAsyncComponent(() =>
      import('./components/AdminPageComponent.vue')
    )
  }
}
</script>

<template>
  <AdminPage />
</template>
```



#### 高级选项

```js
const AsyncCom = defineAsyncComponent({
    loader:()=> import('./Foo.vue')
    //加载异步时使用的组件
    loadingComponent: LoadingComponent,
    //加载组件前的延迟时间，默认为 200ms
    delay: 200,
    //加载失败后展示的组件
    errorComponent：errorComponent，
    //timeout时间限制，超时后也会显示报错组件，默认值是Infinity
    timeout:3000
})
```

## mixins

一个混入对象·可以包含任意组件选项（如data，methods），当组件使用混入对象时，所有混入对象的选项将被混入进入该组件本身的选项

### 基本使用

定义一个混入对象`.js`

```js
let mixin = {
  created() {
    console.log("我是mixin里面的created!")
  },
  methods: {
    hello() {
      console.log("hello from mixin!")
    }
  }
}
 
export default mixin
```



使用

```vue
<template>
  <div class="home">
    <span>This is a Home page</span>
  </div>
</template>
 
<script>
import myMixins from "../mixins";   //导入混入（mixin）
export default {
  name: 'Home',
  mixins: [myMixins]     //使用混入（mixin）
}
</script>
```



- 当组件与混入对象含有同名选项时，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先（例如两者对同一个函数进行了定义）



### 全局混入

注：一旦使用全局混入，它将影响之后每一个创建的Vue实例

在main.js中通过Vue.mixin()引入混入对象即可全局使用（作用于该Vue实例下的所有组件）

```js
import mixin from './mixins';
Vue.mixin(mixin)
```



## 透传Attributes

### Attribute继承

“透传Attribute”是指传递给一个组件，却没有被该组件声明为`prop`或·`emits`的attribute或者v-on事件监听器

当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上

### 深层组件继承

如果你**不想要**一个组件自动地继承 attribute，你可以在组件选项中设置 `inheritAttrs: false`。



## 依赖注入

### Provide（提供）

```js
export default {
  provide: {
    message: 'hello!'
  }
}
```



如果我们需要提供依赖当前组件实例的状态 (比如那些由 `data()` 定义的数据属性)，那么可以以函数形式使用 `provide`：

```js
export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    // 使用函数的形式，可以访问到 `this`
    return {
      message: this.message
    }
  }
}
```





### Inject（注入）

注入会在组件自身的状态**之前**被解析，因此你可以在 `data()` 中访问到注入的属性：

```js
export default {
  inject: ['message'],
  data() {
    return {
      // 基于注入值的初始数据
      fullMessage: this.message
    }
  }
}
```



### 和响应式数据配合使用

为保证注入方和供给方之间的响应性链接，我们需要使用 [computed()](https://cn.vuejs.org/api/reactivity-core.html#computed) 函数提供一个计算属性：

```vue
<script>
import Child from './Child.vue'
import { computed } from 'vue'

export default {
  components: { Child },
  data() {
    return {
      message: 'hello'
    }
  },
  provide() {
    return {
      message: computed(() => this.message)
    }
  }
}
</script>

<template>
  <input v-model="message">
  <Child />
</template>
```



**CommonJS模块化规范**、**ES Module使用**、**了解常见的包管理器**、**webpack打包**、**webpack常见的loading与插件**。

![image-20230506175825001](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230506175825001.png)





## node.js

![image-20230506180047350](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230506180047350.png)



![image-20230506181349499](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230506181349499.png)



![image-20230506181526485](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230506181526485.png)



![image-20230506203016247](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230506203016247.png)



![image-20230506203323106](https://typora--image1.oss-cn-beijing.aliyuncs.com/image-20230506203323106.png)

























































































































































































