#  Vue

==官方文档：[Vue.js - 渐进式 JavaScript 框架 | Vue.js (vuejs.org)](https://cn.vuejs.org/)==

==vscode代码片段快捷键：vueapp==

## 导入

### 认识Vue

Vue 是一款用于构建用户界面的渐进式 JavaScript 框架。

- 全称是`Vue.js`或`Vuejs`
- 它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型
- 帮助你高效地开发用户界面，无论任务是简单还是复杂

渐进式框架：

- 表示我们可以在项目中一点点来引入和使用`vue`，而不一定需要全部使用vue来开发整个项目（即不需要整个项目都是使用vue，而可以同时使用其他框架）

前端：

- 目前最流行的三大框架：Vue、React、Angular

  

---



### 使用vue

vue的本质：

- 就是一个JS的库
- 在项目中可以引入并使用它

---



### 安装vue

1. 在页面中通过CDN的方式引入
2. 下载vue的JS文件，并且自己手动引入
3. 通过npm包管理工具安装使用
4. 直接通过Vue CLI创建项目，并使用它

#### CDN引入

```html
<script src="http://unpkg.com/vue@next"></script> 
```

链接为vue源码

> [BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务](https://www.bootcdn.cn/)

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230403111215101.png" alt="image-20230403111215101" style="zoom:67%;" />

缺点：

- 在CDN服务器上，加载需要时间



#### 本地引用

将vue.js源码放在文件中（cv），script直接引入该文件

优点：

- 已下载，不需要加载，效率高

---



### vue体验

#### 动态展示

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230403113516796.png" alt="image-20230403113516796" style="zoom:67%;" />

- 插值语法：通过在template中`{{变量名}}`的方式传递data中的数据
- data：需要以函数形式，数据要作为该函数的返回值返回，即数据需要写在data中的函数的返回值中
- 逗号



#### 展示列表数据

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230403120202287.png" alt="image-20230403120202287" style="zoom: 67%;" />

- `<li v-for="item in 数组名">{{item}}</li>`：即遍历数组，并将其中的数据依次插入到列表中
- data中的数据以数组形式保存



#### 计数器

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230404170213442.png" alt="image-20230404170213442" style="zoom: 67%;" />

- 绑定事件
- `methods`：对象，其中保存绑定的数据

---



### 模板重构

将vue中`template`的部分写到其挂载的元素中去

---



### 思想

#### 命令式编程与声明式编程

##### 命令式编程

原生js的模式

需要将每一步要执行的行为详细写出 告知浏览器

关注“how to do”，自己来完成整个how的过程

##### 声明式编程

vue（react、angular、小程序等）的模式

只需要将需要的数据写好，剩余的基本步骤均由vue来完成（在`createApp`中传入对象声明需要的内容，模板`template`、数据`data`、方法`methods`）

关注“what to do”，由框架（机器）来完成“how”的过程

##### 总结

其本质是一样的，都是操作DOM

只是编程的模式发生了改变



#### MVVM模型

MVC和MVVM都是一种软件的体系结构

- MVC是`model-view-controller`的简称，是在前期被使用的非常框架的架构模式，如：ios、前端

  所有通信都是单向的

  <img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230404174103.png" style="zoom:67%;" />

- MVVM是`model-view-viewModel`的简称，是目前非常流行的架构模式

  数据在`model`中

  它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。

  <img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230404174027.png" style="zoom:67%;" />

---



### options api

#### data属性

- data属性是传入一个函数，并且需要该函数返回一个对象

- - 在vue2.x中，也可以传入一个对象
  - 在vue3.x中，必须传入一个函数，否则直接保存


- data返回的对象会被vue的响应式系统劫持，之后对该对象的修改或访问都会在劫持中被处理
  - 所以我们在`template`或app中通过`{{counter}}`访问counter，可以从对象中获取数据
  - 因此我们在修改counter的值的时候，app中的`{{counter}}`也会发生改变
  - data的数据发生改变时，页面会重新渲染



#### methods属性

methods属性是一个对象，通常我们会在这个对象中定义很多的方法：

- 这些方法可以被绑定到模板中
- 在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性

为什么不能使用箭头函数：

- 我们在methods中要使用data来返回对象中的数据：
  - 因此this是必须有值的，并且应该可以通过this获得data中返回对象中的数据
- 这个this不能是window：
  - 不能是window，因为window中我们无法获得data返回对象中的数据
  - 但是如果我们使用箭头函数，那么这个this就会是window了
- 为什么是window呢：
  - this在自己的上层作用域中查找this
  - 最终刚好找到的是script中作用域中的this，即window

- > 官方文档：
  >
  > 注意，不应该使用箭头函数来定义methods函数（eg：plus:()=>this.a++），理由是箭头函数绑定了父级作用域的上下文，所以this将不会按照期望指向组件实例，this.a将是undefined

不使用箭头函数的情况下，this到底指向的是什么：

- 事实上vue的源码中就是对methods中的所有函数进行了遍历，并且通过bind绑定了this



#### computed属性

##### 复杂的data数据处理方式

在模板中可以直接通过**插值语法**显示一些data中的数据

但是在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示：

- 在模板中使用表达式，可以非常方便的实现，但是设计它们的初衷是用于简单的运算
- 在模板中放入太多的逻辑会让模板过重和难以维护
- 并且如果多个地方都使用到，那么会有大量重复的代码

将逻辑抽离出去：

- 可以，其中一种方式是将逻辑抽取到一个**method**中，放到methods的options中

  但是，这种做法有一个直观的弊端，就是所有的data使用过程都会变成一个方法的调用

- 另外一种方式就是使用计算属性**computed**

##### computed计算属性使用

什么是计算属性：

- > 对于**任何**包含**响应式数据**的**复杂**逻辑，你**都**应该使用计算属性

- 计算属性将被混入到组件实例中
  - 所以getter和setter的this上下文自动地绑定为组件实例

用法：

- 选项：computed
  - 类型：`{[key:string]:Function | {get:Function,set:Function}}`

计算属性默认对应的是一个函数

##### computed和method区别

计算属性是有缓存的

- 计算属性会基于它们的依赖关系进行缓存
- 在数据不发生变化时，计算属性是不需要重新计算的
- 但是如果以来的数据发生变化，在使用时，计算属性依然会重新进行计算（是性能的优化）

##### computed的set和get

是computed的完整写法



#### watch属性

##### 使用

用于声明在数据更改时调用的侦听回调。

什么是侦听器：

- 开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到了template中
- 当数据变化时，template会自动更新来显示最新的数据
- 但是在某些情况下，我们希望在代码逻辑中侦听某个数据的变化，这时候就需要使用侦听器watch来使用了

详细信息

`watch` 选项期望接受一个对象，其中键是需要侦听的响应式组件实例属性 (例如，通过 `data` 或 `computed` 声明的属性)——值是相应的回调函数。该回调函数接受被侦听源的**新值**和**旧值**。

用法如下：

- 选项：watch

- 类型：`{[key:string]:string | function |object |array}`

- 参数：默认有两个`newValue`和`oldValue`，若想获取被侦听源的**新值**和**旧值**，此两参数即可实现

- 获取原始对象：当为对象类型时 直接使用上两个参数获取的是proxy（即代理），可通过

  - ```vue
    console.log(...newValue)
    ```

  - ```vue
    console.log(Vue.toRaw(newValue))
    ```

除了一个根级属性，键名也可以是一个简单的由点分隔的路径，例如 `a.b.c`。注意，这种用法**不支持**复杂表达式——仅支持由点分隔的路径。如果你需要侦听复杂的数据源，可以使用命令式的 [`$watch()`](https://cn.vuejs.org/api/component-instance.html#watch) API。

值也可以是一个方法名称的字符串 (通过 `methods` 声明)，或包含额外选项的对象。当使用对象语法时，回调函数应被声明在 `handler` 中。

##### 侦听器watch选项使用

额外的选项包含：

- **`immediate`**：在侦听器创建时立即触发回调。第一次调用时，旧值将为 `undefined`。
- **`deep`**：如果源是对象或数组，则强制深度遍历源，以便在深度变更时触发回调。详见[深层侦听器](https://cn.vuejs.org/guide/essentials/watchers.html#deep-watchers)。
- **`flush`**：调整回调的刷新时机。详见[回调的触发时机](https://cn.vuejs.org/guide/essentials/watchers.html#callback-flush-timing)及 [`watchEffect()`](https://cn.vuejs.org/api/reactivity-core.html#watcheffect)。
- **`onTrack / onTrigger`**：调试侦听器的依赖关系。详见[侦听器调试](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html#watcher-debugging)。

声明侦听器回调时避免使用箭头函数，因为它们将无法通过 `this` 访问组件实例。

###### deep选项

template是深度监听，watch默认不是深度监听：

- 在默认情况下，watch知识在侦听info的**引用**变化，对**内部属性**的变化是不会做出反应的

- 这时候可以使用一个deep选项做一个更深层次的侦听

- ```vue
  deep:true
  ```

###### immediate选项

希望一开始是就会立即执行一次

- 这个时候可以使用immediate选项

- 这个时候无论后面数据是否有变化，侦听的函数都会有限执行一次

- ```vue
  immediate:true
  ```

##### 侦听器watch其他写法

`info.name`



















---

---

---

---



## 基础

### 模板语法

#### 基础

==快捷键：`vueapp`==

![image-20230404215250611](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230404215250611.png)

react的开发模式：

- react使用的jsx，所以对应的代码都是编写的**类似于js**的一种语法
- 之后通过babel将jsx编译成 `react.createElement`函数调用

vue也支持jsx的开发模式：

- 但是在大多数情况下，使用**基于HTML**的模板语法
- 在模板中，允许开发者以声明式的方式将DOM和底层组件实例的数据绑定在一起
- 在底层的实现中，vue将模板`编译成虚拟DOM渲染函数`

---



#### Mustache插值语法

也叫双大括号语法

- data返回的对象是由添加到vue的响应式系统中
- 当data的数据改变时，对应的内容也会发生改变

可使用：

- 文本（data中的属性）
- js表达式
- 三元运算符
- 调用methods中的函数

不可使用：

- 不可定义语句

---

---



### 常见的基本指令

#### 概述

vue官网可看，在api选项中

指令写在类似属性的位置，eg：

```html
<h2 v-text>我是标题</h2>
```



##### v-once

表示只会渲染一次

当值改变时，值发生变化，但该变化并不会渲染到页面上

该指令具有继承性，外部使用此指令时，内部同时遵从该指令



##### v-text

作用与插值语法类似

```html
<h2>{{message}}</h2>
<h2 v-text="message"></h2>
```

但插值语法更灵活

```html
<h2>aaa {{message}} aaa</h2>
<h2 v-text="message">aaa</h2>
//message="hello vue"

//输出结果
aaa hello vue aaa
hello vue
```



##### v-html

默认情况下，如果我们展示的内容本身是html的，那么vue并不会对其进行特殊的解析

- 即内容是html语法，如`content=<span>hhh</span>`
- 如果我们希望这个内容被vue可以解析出来，那么可以使用v-html来展示，eg：`<span v-html="content"></ span>`



##### v-pre

用于跳过元素和它的子元素的编译过程，显示原始的mustache标签

- 跳过不需要编译的节点，加快编译的速度
- 类似于展示转义符本身时，要在其前再加一个转义符，否则无法显示



##### v-cloak

浏览器渲染过程：

1. 解析html，先将这些元素展示给用户
2. 解析script，再将对应的操作翻回去改变html

因此当脚本执行较慢时，展示给用户的首先会是html，之后才能变成真正想要展示的页面

因此就需要斗篷，即v-cloak，将html遮住，渲染完成后（即组件实例准备完毕后）将斗篷摘取（vue自动）

v-cloak需要**与css配合使用**，eg：

```html
<head>
	<style>
    	[v-claok]{
        	display:none;
    	}
	</style>
</head>
<body>
    <h2 v-cloak>{{message}}</h2>
    
    <script>
    </script>
</body>
```



##### v-memo

仅支持3.2+版本

缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。举例来说：

template

```html
<div v-memo="[valueA, valueB]">
  ...
</div>
```

当组件重新渲染，如果 `valueA` 和 `valueB` 都保持不变，这个 `<div>` 及其子项的所有更新都将被跳过。实际上，甚至虚拟 DOM 的 vnode 创建也将被跳过，因为缓存的子树副本可以被重新使用。

正确指定缓存数组很重要，否则应该生效的更新可能被跳过。`v-memo` 传入空依赖数组 (`v-memo="[]"`) 将与 `v-once` 效果相同。

---



#### v-bind绑定属性

前面的一系列指令，主要是将值插入到**模板内容**中

但是不了内容需要动态来决定之外，某些**属性**也希望能动态绑定，如：

- 动态绑定a元素的href属性
- 动态绑定img元素的src属性

绑定属性我们用v-bind：

- **用途：**动态的绑定一个或多个 attribute，也可以是组件的 prop。

- **缩写：**`:` 或者 `.` (当使用 `.prop` 修饰符)
- **期望：**`any (带参数) | Object (不带参数)`
- **参数：**`attrOrProp (可选的)`
- **修饰符：**
  - `.camel` - 将短横线命名的 attribute 转变为驼峰式命名。
  - `.prop` - 强制绑定为 DOM property。3.2+
  - `.attr` - 强制绑定为 DOM attribute。3.2+

##### 绑定基本属性

- **语法：**

  ```html
  <img v-bind:scr="imgUrl" alt="">
  //imgUrl是写在data中的数据
  
  //语法糖（即简写，省去v-bind，仅留下:）
  <img :scr="imgUrl" alt="">
  ```

  

##### 绑定全局属性

###### 绑定class

在开发中，有时我们的元素class也是动态的，如：

- 当数据为某个状态时，字体显示红色
- 当数据另一个状态时，字体显示黑色

绑定class有两种语法：

- 对象语法

- 数组语法

- ```html
  <div :class="{ red: isRed }"></div>
  <div :class="[classA, classB]"></div>
  <div :class="[classA, { classB: isB, classC: isC }]"></div>
  ```

**对象语法**

可以传给`:class={}`一个或多个对象

值为布尔值

动态绑定的clss可以和普通class同时使用

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230405203844133.png" alt="image-20230405203844133" style="zoom:67%;" />

**数组语法**

可以把一个数组传给`:class`，用以启用一个class列表



###### 绑定style

动态绑定style，需要在后面跟上对象类型

键值对需要是一个整体，可在其外加单引号

```HTML
<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
```



###### 绑定属性名

`:[name]=`



###### 绑定对象

直接将对象中的键值对都绑定，而不用一个一个手动绑定

常用于给组件传参

```HTML
<h2 v-bind="info">hhh</h2>
//info在data中
//info:{name:"111",age:18,height:1.88}
```

---



#### v-on绑定事件

给元素绑定事件监听器。

可以绑定多个事件：直接写，或将方法放在对象中

- **缩写：**`@`（=`v-on:`）
- **期望的绑定值类型：**`Function | Inline Statement | Object (不带参数)`
- **参数：**`event` (使用对象语法则为可选项)
  - 如果在绑定事件的时候，没有传递任何的参数，那么event对象而会被默认传递进来
  - 明确参数
  - 明确参数+event：在模板中想要明确获取event——`$event`
- **修饰符：**
  - 修饰符相当于对事件进行了一些特殊的处理
  - `.stop` - 调用 `event.stopPropagation()`。阻止事件冒泡
  - `.prevent` - 调用 `event.preventDefault()`。阻止默认行为
  - `.capture` - 在捕获模式添加事件监听器。
  - `.self` - 只有事件从元素本身发出才触发处理函数。
  - `.{keyAlias}` - 只在某些按键下触发处理函数。
  - `.once` - 最多触发一次处理函数。
  - `.left` - 只在鼠标左键事件触发处理函数。
  - `.right` - 只在鼠标右键事件触发处理函数。
  - `.middle` - 只在鼠标中键事件触发处理函数。
  - `.passive` - 通过 `{ passive: true }` 附加一个 DOM 事件。

---



#### vue的条件渲染

##### 基础

在某些情况下，我们需要根据当前的条件决定某些元素或组件是否渲染，这个时候我们要进行条件判断了

vue提供了以下指令来进行条件判断：

- v-if
- v-else
- v-else-if
- v-show

##### v-if

空对象是true，因此用：

```html
v-if="Object.keys(info).length"
```

v-if的渲染原理：

- v-if是惰性的
- 当条件为false时，其判断的内容完全不会被渲染或会被销毁掉
- 当条件为true时，才会真正渲染条件块中的内容



##### template元素

用于包裹，不会渲染

可以当作不可见的包裹元素，并在v-if上使用

仅支持vue3以上

将多个指令（多个元素）包裹起来，在外层写判断内部继承较为简单

- 但用div包裹，浏览器就要多渲染一个，影响性能
- 因此用template包裹，仅起到包裹作用，并不渲染



##### v-show

v-show与v-if的用法看起来时一致的，也是根据一个条件来决定是否显示元素或者组件

区别：

- 用法上
  - v-show不支持template
  - v-show不可以与v-else一起使用

- 本质：
  - v-show无论是否需要显示到浏览器上，它的DOM实际都是存在的，只是通过CSS的`display`属性来进行切换
  - v-if条件为false时，其对应的元素压根不会被渲染到DOM中（惰性）

- 选择：
  - 如果我们的元素需要在显示与隐藏之间频繁的切换，那么使用v-show
  - 如果不会频繁地发生切换，那么使用v-if

---



#### v-for遍历

##### 基础

在真实开发中，我们往往会从服务器拿到一组数据，并且需要对其渲染 

- 可以使用v-for来完成
- v-for类似于JS中的for循环，可以用于遍历一组数据

v-for的基本格式是`item in 数组`：

- 数组通常是来自data或prop，也可以是其他方式
- item是我们给每项元素起的一个别名，可自定义

在遍历数组时疆场需要拿到数组的索引：

- 如果需要索引，可以使用格式：`(item,index) in 数组`

##### v-for列表渲染

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230406145903814.png" alt="image-20230406145903814" style="zoom:80%;" />

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230406150102012.png" alt="image-20230406150102012" style="zoom:80%;" />



##### v-for支持的类型

可迭代对象都支持：

- 数组
- 对象
- 字符串
- 数字
- ……

v-for也支持遍历**对象**，并支持一二三个参数：

- 一个参数：`value in object`
- 两个参数：`(value,key) in object`
- 三个参数：`(value,key,index) in object`

也支持遍历**数字**：

- ```html
  <ul>
      <li v-for="item in 数字"></li>
  </ul>
  ```

- 表示从1遍历到该数字



##### template元素

支持

与模板上的 `v-if` 类似，你也可以在 `<template>` 标签上使用 `v-for` 来渲染一个包含多个元素的块。例如：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```



##### 数组更新的检测

可以直接将数组修改为一个新的数组（更改引用关系）；或通过一些数组的方法，修改数组中的元素；或返回一个新数组，将旧的数组替换为新的

###### 变更方法

**不能改变原数组的方法是不能侦听的**，不改变原数组即返回新数组（要想侦听要将新数组赋值）

Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。

这些变更方法包括：

- `push()`：增加尾部元素
- `pop()`：删除尾部元素
- `shift()`：删除头部元素
- `unshift()`：添加头部元素
- `splice()`：添加或删除数组中指定位置的元素
- `sort()`：将原数组排序
- `reverse()`：将原数组颠倒

###### 替换一个数组

变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些不可变 (immutable) 方法，例如 `filter()`，`concat()` 和 `slice()`，这些都不会更改原数组，而总是**返回一个新数组**。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：

```javascript
this.items = this.items.filter((item) => item.message.match(/Foo/))
```

你可能认为这将导致 Vue 丢弃现有的 DOM 并重新渲染整个列表——幸运的是，情况并非如此。Vue 实现了一些巧妙的方法来最大化对 DOM 元素的重用，因此用另一个包含部分重叠对象的数组来做替换，仍会是一种非常高效的操作。



##### v-for的key属性

Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

默认模式是高效的，但**只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。

为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个**唯一**的 `key` attribute（通过v-bind绑定）：

```html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

当你使用 `<template v-for>` 时，`key` 应该被放置在这个 `<template>` 容器上：

```html
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
```

注意

`key` 在这里是一个通过 `v-bind` 绑定的特殊 attribute。请不要和[在 `v-for` 中使用对象](https://cn.vuejs.org/guide/essentials/list.html#v-for-with-an-object)里所提到的对象属性名相混淆。

**推荐**：

- **在任何可行的时候为 `v-for` 提供一个 `key` attribute，除非所迭代的 DOM 内容非常简单** (例如：不包含组件或有状态的 DOM 元素)，或者你想有意采用默认行为来提高性能。
- 绑定的key为**id**（服务器传来的自带的）

- `key` 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 `v-for` 的 key。

key的作用：

- 有key的操作：
  - 根据key找到之前的VNode进行复用
  - 没有Vnode可以复用，再创建新的VNode

- 没有key的操作：
  - diff算法，后续VNode复用性就不强



##### VNode

先理解html元素创建出来的VNode

VNode的全称是`virtual node`，也就是虚拟节点

事实上，无论是组件还是元素，它们最终在vue中表现出来的都是一个个VNode

VNode本质上是一个JS对象

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230406154702265.png" alt="image-20230406154702265" style="zoom:80%;" />



##### 虚拟DOM

如果我们不只是一个简单的div，而是有一大堆元素，那么它们应该会形成一个VVNode Tree

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230406190424.png)

一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为**挂载** (mount)。

如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为**更新** (patch)，又被称为“比对”(diffing) 或“协调”(reconciliation)。

虚拟 DOM 带来的主要收益是它让开发者能够灵活、声明式地创建、检查和组合所需 UI 的结构，同时只需把具体的 DOM 操作留给渲染器去处理。

虚拟DOM用途：

- 方便跨平台：虚拟DOM是JS对象，只要对其做合适的解析，就能渲染到不同的平台上，包括（浏览器、移动端、ios、桌面的一些控件、VR设备等）
- 进行diff算法



##### v-for的diff算法

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230406190737.png)

vue对于列表的更新是如何实现的：

- vue事实上会对于有key和没有key调用两个不同的方法
- 有key，就使用`patchKeyedChildren`方法
- 没有key，那么就使用`patchUnkeyedChildren`方法

---



#### v-model双向绑定表单

表单提交时和用户交互的重要手段

这些要求我们可以在代码逻辑中获取到用户提交的数据，我们通常会使用v-model指令来完成：

- v-model指令可以在表单 input、textarea以及select元素上创建双向数据绑定
- 它会根据控件类型自动选取正确的方法来更新元素
- 尽管有些神奇，但v-model本质上不过是语法糖，它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理

原理是背后有两个操作：

- v-bind绑定value属性的值
- v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性值

##### 双向绑定

手动绑定

![image-20230408140959911](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230408140959911.png)



##### 基本绑定

```vue
<input type="text" v-model="message">
```



##### 其他绑定

- textarea
- checkbox
  - 单选
  - 多选
- radio
- select
  - 单选
  - 多选



##### 值绑定



##### 修饰符

- lazy
- number
- trim

---

---

---



### 组件化

#### 脚手架与项目结构

##### vue组件化开发思想

如果将一个页面中所有的处理逻全部做在一起，处理起来就会非常负复杂，而且不利于后续的管理以及扩展

如果将一个页面拆分成一个个小的功能，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了

组件化的核心思想是**对组件进行拆分，拆分成一个个小的组件，再将这些组件组合嵌套在一起，最终形成我们的应用程序**

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230411195412.png)

---



##### 注册组件

组件是对象

**两种：**

- 全局组件：在其他任何组件中都可以使用的组件
- 局部组件：只有在注册的组件中才能使用的组件

###### 全局组件

- 全局组件需要使用我们全局创建的app来注册组件

**步骤：**

1. 通过`component`方法传入组件名、组件对象即可注册一个组件
2. 之后，就可以在app组件的`template`中直接使用这个组件

```vue
//1.创建app（组件：app组件（根组件））
const app = Vue.createApp({})

//2.开发product-item的组件
//传入的模板可以直接写在组件中，也可以通过`<template id="item"></template>`与`template:"#item"`配合来完成
const productItem = {
	template:``
}

//3.注册product-item的组件
app.component("product-item",productItem)

//挂载
app.mount("#app")
```

**组件内部的逻辑：**

- 组件内部与app（根组件）一样，可以使用option api以及对应的模板语法

**组件的名称：**

- 使用`kebab-case`（短横线分隔符）
  - 当使用此方法定义一个组件时，你也必须在引用这个自定义元素时使用`kebae-case`
  - 此方法更常用
- 使用`PascalCase`（大驼峰标识符）
  - 当使用此方法定义一个组件时，引用时两种命名方法都可以使用（html不区分大小写）

**不足：**

- 全局组件往往是在应用程序一开始就会全局组件完成，这就意味着如果某些组件我们并没有用到，也会一起被注册
  - 比如我们注册了A,B,C三个全局组件
  - 在开发中我们只是用了A和B，如果C没有用到但是我们依然在全局进行了注册，那么就意味着类似于`webpack`这种打包工具在打包我们的项目时，我们依然会对其打包
  - 这样最终打包的JS包就会有关于C的内容，用户在下载对应的JS时也会增加包的大小



###### 局部组件

因此在开发中我们通常使用组件时采用的都是**局部注册**：

- 局部注册时在我们需要使用到的组件中，通过`components`的option api来进行注册
- 该`components`选项对应的时一个对象，对象中的键值对是：`组件的名称:组件对象`



---



##### vue的开发模式解析

![image-20230412172955295](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230412172955295.png)

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230412173400.png)

**单文件的特点：**

- 在这个单文件组件中，我们可以获得非常多的特性：
- - 代码的高亮；
  - `ES6`、`CommonJS` 的模块化能力；
  - 组件作用域的 `CSS`；
  - 可以使用预处理器来构建更加丰富的组件，比如 `TypeScript`、`Babel`、`Less`、`Sass` 等；

**如何支持 SFC：**

- SFC：单文件组件
- 如果我们想要使用这一SFC（`.vue` 文件），比较**常见的是两种方式**：
  1. **使用 `Vue CLI` （本质上还是依赖 `Webpack` 的）来创建项目**
     - 即脚手架
     - 项目会默认帮助我们配置好所有的配置选项，可以在其中直接使用 `.vue` 文件；
     - 无论是后期我们做项目还是在公司进行开发，通常都会采用vue CLI的方式来完成
  2. 自己**使用 `Webpack` 或 `Vite` 或 `rollup` 这类打包工具**，
     - 对代码文件进行打包处理；

来源：[Vue 的开发模式 - 掘金 (juejin.cn)](https://juejin.cn/post/7022212018471960584)

---



##### Vue CLI脚手架

在真实开发中，我们通常会使用脚手架来创建一个项目，vue的项目我们使用的就是vue的脚手架

脚手架其实是建筑工程中的一个概念，在我们软件工程中也会将一些帮助我们搭建项目的工具称为脚手架

**安装：**

```
npm install @vue/cli -g
```

(-g表示全局安装，可以在任何时候都通过vue的命令来创建项目)

**在vscode中使用：**

1. 打开终端：`ctrl`+`
2. `vue create 文件名`：创建文件
3. 配置
4. `npm run serve`：开始运行
5. 编写源码



---



##### vue的项目目录分析

- public：项目的一些资源

- src：所有的源代码（在这里编写你的源码）

  - src/browerlist：

    - 进行浏览器适配

    - 由浏览器决定是否要将高版本ES、css转化为低版本的

  - src/jsconfig：

    - 给vscode使用

  - src/gitignore：
    - git的忽略文件

![在这里插入图片描述](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20200301173631986.png)

----



##### jsconfig.js作用

给vscode来进行读取，vscode在读取到其中的内容时，给我们的代码更加友好的提示

当文件放得非常深时，在书写该文件的相对路劲时就会很复杂，可读性也大大降低。此时可以通过**配置路径别名**来解决，即在`vue.config.js`中进行webpack配置

![image-20230413204629080](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230413204629080.png)

但配置后，vscode不能读出此别名指向什么，因此需要在`jsconfig.js`文件中设置该路径，使得vscode可以识别该路径别名所指向的文件，从而**提供更友好的提示**

![image-20230413205255617](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230413205255617.png)

---



##### 脚手架使用tips

组件是`.vue`文件，最终要将`.vue`汇总到`main.js`文件中：

- 导入：汇总时要将组件导入，即在`main.js`文件中`import 组件名 from 组件所在的.vue文件`
- 导出：导入需要导出，即在`.vue`文件中的script部分加`export default {}`

注册组件：

- 全局注册：在`main.js`文件中
- 局部注册：在`.vue`文件中

---



##### 补充知识

###### 引入vue文件版本的不同

![image-20230413203413023](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230413203413023.png)



###### 单文件vue style有自己的作用域 scoped

新增一个代码片段 是vue的片段 快捷键为`vue`



###### vite创建一个vue项目

- vue CLI（基于webpack）

  ```
  vue create 文件名
  
  npm run serve
  ```

- （基于vite）

  ```
  npm init vue@latest
  
  npm run dev
  ```

  1. 安装一个本地工具：create-vue
  2. 使用create-vue创建一个vue项目

---

---



#### 组件间通信

##### vue组件的嵌套关系

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230415163431.png)

---



##### 父子组件之间通信的方式

- 父组件传递给子组件：通过`props`属性
- 子组件传递给父组件：通过`$emit`触发事件

---



##### 父组件传递子组件props

通过`props`属性

定义：

- `props`是你可以在组件上注册一些自定义的`attribute`
- 父组件给这些`attribute`赋值，子组件通过`attribute`的名称获取到对应的值

作用：

- 接收父组件传递过来的属性（父组件在使用子组件时添加的属性）

语法：

- 数组语法

  - 缺点①：无法判断传入的数据类型
  - 缺点②：没有默认值

- 对象语法

  - 数据类型（type）：表示两种类型都可时，eg：`[String,Number]`

  - 默认值（default）：**当为对象时，必须通过函数返回**，eg：`() => ({ name:"jake" })`

  - 必传值（required）：为ture时则该参数必须传递，不传递会报错，此时一般不设定默认值

  - eg：

    ```vue
    <script>
    props :{
    	name: {
    		type: String,
    		default: "我是默认值",
           required:ture
    	}
    }
    </script>
    ```

例如：

- 父组件(App.vue)：

  注意这些数据一定是**通过v-bind绑定**
  
  ```vue
  <ShowItem :name="aaaa" :age="18"/>
  ```

  子组件(ShowItem.vue)：
  
  ```vue
  <template>
  	<div>
          <h2>{{name}}</h2>
          <h2>{{age}}</h2>
      </div>
  </template>
  
  <script>
  	export default {
          props:["name","age"]
      }
  </script>
  ```

---



##### 非props的attribute

定义：

- 当我们传递给一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为非props的attribute
- 常见的包括class、style、id属性等

如果当前的属性是一个非props的attribute，那么该属性会默认添加到子组件的根元素

---



##### 子组件传递父组件

什么情况下：

- 当子组件有一些事情发生的时候，比如在组件中发生了点击，父组件需要切换内容
- 子组件有一些内容想要传递给父组件的时候 

让子组件发出去一个自定义事件，第一个参数是自定义事件的名称，第二个参数是传递的can'shu

---

---



#### 插槽Slot

##### 认识插槽作用

插槽可以让一些相似性较高，但差异性也不小的组件拥有了可以被复用的可能，插槽的灵活运用可以大幅提高组件的复用性和程序的可维护性。

在开发中，我们经常会封装一个个可复用的组件：

- 前面我们会通过`props`传递给组件一些数据，让组件来进行展示
- 但是为了让这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的div、span等这些元素
- 比如某种情况下我们使用组件，希望组件显示的是一个按钮，某种情况下我们使用组件希望显示的是一张照片
- 我们应该让**使用者可以决定某一块区域到底存放什么元素**

这个时候我们就可以来定义插槽slot：

- 插槽的使用过程其实就是**抽取共性、预留不同**
- 我们会将共同的元素、内容依然在组件内进行封装
- 同时会将不同的元素使用slot作为展位，让外部决定到底显示什么样的元素

---



##### 插槽基本使用

如何使用slot：

- vue中将< slot>元素作为承载分发内容的出口

- 在封装组件中，使用特殊的元素< slot>就可以为封装组件开启一个插槽

- 该插槽插入什么内容取决于父组件如何使用

  ![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230419200003.png)

---



##### 插槽的默认内容

有时候我们希望在使用插槽时，如果没有插入对应的内容，那么我们显示一个默认的内容：

- 当然这个默认的内容只会在没有提供插入的内容时，才会显示
- 只需要在< slot>< /slot>之间写上想要的默认值即可

---



##### 具名插槽使用

具名插槽：

- 给插槽起一个名字，< slot>元素有一个特殊的 arrtribute : name
- 一个不带name的slot，会带有隐含的名字 default

子组件：

```vue
<slot name="aaaa"></slot>
```

父组件：

（注意是冒号而不是等号）

```vue
<template v-slot:aaaa>
	
</template>
```



**缩写**

语法糖：#

```vue
<template #aaaa></template>
```



---



##### 动态插槽名

```vue
<template v-slot:[变量名]></template>
#在data中返回该变量名的值即可
```



---



##### 作用域插槽使用

**渲染作用域：**

- 父级模板里的所有内容都是在父级作用域内编译的

  （即其所使用的数据都是该作用作用域的，即使后续要作为插槽，使用的也是自己本身的元素，而不是子元素中的）

- 子模版里的所有内容都是在子作用域中编译的

**核心：**

- 将子组件中的数据传递给父组件来使用

**有时希望插槽可以访问到子组件中的内容：**

- 当一个组件被用来渲染一个数组元素时，我们使用插槽，并且希望插槽中没有显示每项的内容
- 这个vue给我们提供了作用域插槽

<img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230420195747605.png" alt="image-20230420195747605" style="zoom:67%;" />

![image-20230420195842358](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230420195842358.png)

---



##### 全局事件总线使用

实现**非父子非祖父子**之间共享数据

![image-20230421171034700](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230421171034700.png)

![image-20230421171045691](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230421171045691.png)

![image-20230421171056283](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230421171056283.png)

---



##### 依赖注入Provide/Inject

Provide/Inject用于**非父子是祖父子**之间共享数据：

- 比如有一些深度嵌套的数据，子组件想要获得父组件的部分内容
  - 在这种情况下，如果我们仍然将props沿着组件链逐级传递下去，就会非常的麻烦

在这种情况下，我们可以使用Provide/Inject：

- 无论层级结构有多深，父组件都可以作为其所有子组件的依赖提供者
- 父组件有一个`provide`选项来提供数据
- 子组件有一个`inject`选项来开始使用这些数据

实际上，你可以将依赖注入看作是“long range props”，除了：

- 父组件不需要知道哪些子组件使用它`provide`的`property`
- 子组件不需要知道`inject`的`property`来自哪里

---

---



#### 额外知识

##### 组件的生命周期

###### 什么是vue的生命周期

Vue 实例从开始创建、初始化数据、编译模板、挂载Dom和渲染、更新和渲染、卸载等一系列过程，这是 Vue 的生命周期

![1091f2f1ece5b05acf7c11b882d56726.png](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/1091f2f1ece5b05acf7c11b882d56726.png)

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230421173744.png)



###### vue生命周期的八个钩子函数

**beforeCreat()：**

- 组件被创建之前
- 创建前 在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在此生命周期执行的时候，data和methods中的数据都还没有初始化。
- 不能在这个阶段使用data中的数据和methods中的方法

**created()：**

- 组件被构建完成
- 被创建 data 和 methods都已经被初始化好了，可以调用了
- 可做：
  1. 发送网络请求，请求数据
  2. 监听eventBus事件
  3. 监听watch数据

**beforeMount()：**

- 组件template准备被挂载
- 挂载前在内存中已经编译好了模板了，但是还没有挂载到页面中，此时页面还是旧的

**mounted()：**

- 组件template被挂载，从虚拟DOM生成真实DOM
- 已挂载 Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行
- 可做：
  1. 获取DOM
  2. 使用DOM

**beforeupdate()：**

- 数据发生改变，界面还没变，准备更新虚拟DOM和DOM
- 更新前 页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步

**updated()：**

- 更新DOM
- 更新 页面显示的数据和data中的数据已经保持同步了，都是最新的

**beforeUnmount()：**

- 在一个组件实例被卸载之前调用
- 销毁前 Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁

**unmount()：**

- 在一个组件实例被卸载之后调用
- 被销毁 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。



###### vue生命周期的作用是什么

它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成**好的逻辑**



###### 第一次页面加载会触发哪几个钩子

第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

![](https://aaaaeeen.oss-cn-beijing.aliyuncs.com/20230421173826.png)



###### DOM渲染在哪个周期中已经完成

mounted



###### 简述每个周期具体适合哪些场景

- beforecreate : 可以在这加个loading事件，在加载实例时触发
- created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
- mounted : 挂载元素，获取到DOM节点
- updated : 如果对数据统一处理，在这里写上相应函数
- beforeDestroy : 可以做一个确认停止事件的确认框
- nextTick : 更新数据后立即操作dom



###### created和mounted的区别

- created：在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
- mounted：在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

---



##### 组件中的ref引用

某些情况下，我们在组件中想要直接获取到元素对象或者子组件实例：

- 在vue开发中我们不推荐进行原生DOM操作

  - 即不要主动地获取DOM，并且进行DOM操作

  - （原生JS会对原生DOM操作，是因为原生JS是命令式编程；

       而vue不进行原生DOM操作，是因为vue是声明式编程）

- 这个时候，我们可以给元素或组件绑定一个`ref`的`attribute`属性，eg：`ref="btn"`

- 然后通过`this.$refs.btn`来获取















---



##### 动态组件的的使用



---



##### keep-alive组件



----



##### 异步组件的使用



---



##### 组件的v-model



----



##### 组件的混入Mixin



---

---

---



### composition API

#### 从option API到composition API

- option API：将对同一个数据的不同操作放在不同的API中，同时不同的数据又会使用相同的API（即在对应的属性中编写的对应的功能模块）

  - 缺点①：当我们实现某一个功能的时候，这个功能对应的代码逻辑会被拆分到各个属性当中
  - 缺点②：当我们的组件变得更大更复杂的时候，逻辑关注点列表就会增长，那么同一个功能的逻辑就会被拆分的很分散

  <img src="https://aaaaeeen.oss-cn-beijing.aliyuncs.com/image-20230507174230451.png" alt="image-20230507174230451" style="zoom:67%;" />

- composition API：只通过一个`setup()`函数，对同一个数据的所有操作都在这里完成
  - 好处①：将对同个数据的操作放在一起，便于对其做**维护**
  - 好处②：都写在一起，因此可以直接将其抽取出去，将之**封装**在函数中
  - **从对象式编程转换为函数式编程（趋势）**

---

---



#### setup()函数

##### 参数

- 第一个参数：`props`
- 第二个参数：`context`























































