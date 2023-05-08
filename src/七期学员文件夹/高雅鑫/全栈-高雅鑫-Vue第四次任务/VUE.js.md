# VUE.js

## API 风格[](https://cn.vuejs.org/guide/introduction.html#api-styles)

Vue 的组件可以按两种不同的风格书写：**选项式 API** 和**组合式 API**。

### 选项式 API (Options API)[](https://cn.vuejs.org/guide/introduction.html#options-api)

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted`。选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

![image-20230504171230993](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504171230993.png)

### 组合式 API (Composition API)[](https://cn.vuejs.org/guide/introduction.html#composition-api)

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [``](https://cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

下面是使用了组合式 API 与 `<script setup>` 改造后和上面的模板完全一样的组件：



![image-20230504171416198](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504171416198.png)

![image-20230504171810811](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504171810811.png)



## 一.**选项式 API** 

### 1.概述

渐进式javascript框架，用于**构建用户界面**的**渐进式js框架**；

基于html,css,js构建，提供了一套声明式的，组件化的编程模型；

帮助高效开发用户界面，无论任务简单还是复杂。

渐进式：在项目中可以一点点的引入和使用vue，不一定全部使用vue开发整个项目。

三大框架：Vue,React,Angular;

![image-20230403162454865](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403162454865.png)

![image-20230403163139060](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403163139060.png)

### 2.使用

![image-20230403163839067](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403163839067.png)

如何渲染

CDN引入

![image-20230403165658490](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403165658490.png)

本地引入

步骤： 1.创建app 2.挂载app 

### 3.例题讲解

插值语法：

```
{{title}}

```

![image-20230403171541954](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403171541954.png)

表格动态数据

![image-20230403172518906](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403172518906.png)

计数器

![image-20230403174447700](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403174447700.png)

重构版

重构了模板

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403175115896.png)



![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403175645168.png)

### 4.声明式编程和命令式编程

**命令式编程**

原生的计数器：

1.拿到元素 获取dom命令

2.监听点击 获取元素 监听按钮的点击

3.点击发生 counter++ 将最新的cout=nter设置在Dom上面 

**声明式编程**：

1.声明模板 h2 ->{{counter}}

2.声明data:counter - >0  

声明methods:increment:function

![image-20230403193036325](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403193036325.png)

### 5.MVVM模型

![image-20230403194444876](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403194444876.png)

### 6.语法

#### 1.data属性

![image-20230403195453614](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403195453614.png)

![image-20230403195637513](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230403195637513.png)

#### 2.methods属性

![image-20230404082658275](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404082658275.png)

this的指向

![image-20230404083133394](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404083133394.png)

Function.prototype.bind()

**`bind()`** 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

#### 3.模板语法

![image-20230404084211381](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404084211381.png)

##### 1.双大括号语法

![image-20230404084829943](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404084829943.png)

![image-20230404085111839](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404085111839.png)

可以写表达式 不可以写语句 要获得返回值

![image-20230404085354492](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404085354492.png)

##### 2.指令

###### v-once

元素及子元素 只渲染一次

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404090131859.png)

###### v-html和v-test

原始 HTML

双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 [`v-html` 指令](https://cn.vuejs.org/api/built-in-directives.html#v-html)：

。这里看到的 `v-html` attribute 被称为一个**指令**。指令由 `v-` 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 `rawHtml` 属性保持同步。

`span` 的内容将会被替换为 `rawHtml` 属性的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 `v-html` 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。

**![image-20230404090805465](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404090805465.png)**

![image-20230404090815237](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404090815237.png)

###### v-pre

以原始的形式展示

![image-20230404092325778](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404092325778.png)

###### v-cloak

![image-20230404092828106](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404092828106.png)

###### v-memo

v-once就一次以后都不 v-memo

![image-20230404093455011](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404093455011.png)

###### v-bind绑定属性

![image-20230404093857715](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404093857715.png)

![image-20230404094452703](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404094452703.png)

![image-20230404101318161](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404101318161.png)

![image-20230404104240312](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404104240312.png)

绑定class 对象语法

![image-20230404104402469](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404104402469.png)

![image-20230404104756640](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404104756640.png)

![image-20230404105811495](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404105811495.png)

![image-20230404110427858](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404110427858.png)

**![image-20230404110854043](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404110854043.png)**

![image-20230404111634647](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404111634647.png)

#### 4.事件绑定

##### 1.基本使用

![image-20230404142533448](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404142533448.png)

![image-20230404143023398](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404143023398.png)

##### 2.参数传递

![image-20230404144032368](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404144032368.png)

##### 3.绑定事件的修饰符

![image-20230404144434390](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404144434390.png)

![image-20230404144549223](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404144549223.png)

#### 5.条件判断（渲染）

##### 1.完成需求

![image-20230404145222687](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404145222687.png)

##### 2.条件v-if使用

![image-20230404150752397](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404150752397.png)

有键值对会展示，无则不展示

<template>的作用写条件渲染的语句

![image-20230404151849587](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404151849587.png)

![image-20230404152818436](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404152818436.png)

##### 3.v-show和v-if

![image-20230404153236852](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404153236852.png)

![image-20230404153331592](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404153331592.png)

#### 6列表渲染

##### 1.列表渲染

![image-20230404154726804](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230404154726804.png)

##### 2.其他类型

![image-20230404184652357](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404184652357.png)

![image-20230404184952960](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404184952960.png)

![image-20230404185142942](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404185142942.png)

![image-20230404185614202](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404185614202.png)

![image-20230404185937028](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404185937028.png)

##### 3.key属性

![image-20230404192356990](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404192356990.png)

![image-20230404192853823](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404192853823.png)

![image-20230404193338993](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404193338993.png)

虚拟DOM重要作用：**跨平台**

![image-20230404194803124](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404194803124.png)

![image-20230404194845044](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404194845044.png)

![image-20230404195103390](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404195103390.png)

![image-20230404195130434](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230404195130434.png)

在进行v-for循环的时候，要绑定一个key,这个key最好是id

#### 7.vue的computed

##### 1.复杂数据的处理方式_methods



![image-20230405102740288](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405102740288.png)

![image-20230405103633163](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405103633163.png)

##### 2.复杂数据的处理方式__computed

1.默认对应函数

2.简介，见名知意

3.有缓存

![image-20230405104442899](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405104442899.png)

![image-20230405104459641](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405104459641.png)

methodVS计算属性

![image-20230405104547699](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405104547699.png)

![image-20230405105024654](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405105024654.png)

##### 3.计算属性的set和get

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405105706898.png)

**set一般不写 一般只写get 常用语法糖的写法**

**![image-20230405105839679](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405105839679.png)**

#### 8.vue的watch侦听

##### 1.vue的data的watch

![image-20230405110454645](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405110454645.png)

![image-20230405110535557](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405110535557.png)

v-model实现双向绑定

![image-20230405111426007](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405111426007.png)

![image-20230405111514614](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405111514614.png)

##### 2.vue的watch侦听选项

默认watch监听不是深度监听

![image-20230405112122121](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405112122121.png)

只改变了属性 所以还是同一个对象

![image-20230405112227314](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405112227314.png)

![image-20230405112323171](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405112323171.png)

可以加一个immediate 表示第一次渲染直接执行一次监听器

![image-20230405112512150](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405112512150.png)

![image-20230405112603108](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405112603108.png)

##### 3.侦听器的其他写法

![image-20230405112902330](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405112902330.png)

##### 4.watch的$watch侦听

生命周期函数，当前的组件被创建时自动执行；一般在该函数中，会进行网络请求![image-20230405113500994](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405113500994.png)

#### 9.项目经验

1.使用v-for最好插入一个key

![image-20230405153258399](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405153258399.png)

2.在使用index时需要初始化

![image-20230405154315948](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405154315948.png)

3.reduce函数的用法

```vue
arr.reduce(callback,[initialValue])


callback （执行数组中每个值的函数，包含四个参数）
 
    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）
    4、array （调用 reduce 的数组）
 
initialValue （作为第一次调用 callback 的第一个参数。）
```

reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

https://www.cnblogs.com/youmingkuang/p/14953134.html

什么是[回调函数](https://so.csdn.net/so/search?q=回调函数&spm=1001.2101.3001.7020)：

函数指针的调用，即是一个通过函数指针调用的函数；

如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，就说这是回调函数

![image-20230405161125835](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405161125835.png)

**需要设置初始值**

4.如果需要格式化 考虑methods 只需要改一个 把东西都封装到一起

5.禁用按钮 disabled

![image-20230405164034964](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405164034964.png)

6.在调用的时候要用this ,通过原型链去找

不可以直接用app 可以用this

![image-20230407164526286](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230407164526286.png)

7.想要让css在满足某种情况下实现的时候 考虑这种语法形式

```html
<h2 :class="{toomuch:allwords.length > 4}">
```

![image-20230407165849829](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230407165849829.png)

8.在输入框中输入点击enter实现功能可以通过keyup-enter实现

![image-20230407173312903](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230407173312903.png)

#### 10.双向绑定

##### 1.基本使用

![image-20230405175420758](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405175420758.png)

项目中一般输入的登录名，密码 ，及一些内容一般都是用v-model进行绑定

![image-20230405181142614](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405181142614.png)

![image-20230405181116345](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405181116345.png)

![image-20230405181228913](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405181229125.png)

##### 2.绑定textarea

![image-20230405182416444](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405182416444.png)

##### 3.绑定checkbox

1.单选框 true or false

2.多选框 属性值绑定的是一个数组  需要绑定到同一个model中去

![image-20230405184227709](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230405184227709.png)

##### 4.绑定radio

![image-20230406161534740](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406161534740.png)

##### 5.绑定select

![image-20230406162127019](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406162127019.png)

##### 6.v-model的值绑定

 在用v-for更新已渲染的元素列表的时候，会使用就地复用的策略；这就是说列表数据修改的时候，他会根据key值去判断某个值是否修改，如果修改了就重新渲染，不然就复用之前的元素。

   总结一下，就是通过key值来提升渲染的效率。

![image-20230406162932159](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406162932159.png)

![image-20230406163333429](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406163333429.png)

![image-20230406163410848](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406163410848.png)

![image-20230406163433717](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406163433717.png)

##### 7.v-model的修饰符

###### 1.lazy绑定chance事件

![image-20230406164144830](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406164144830.png)

###### 2.number自动将内容转换为数字

![image-20230406164415243](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406164415243.png)

![image-20230406164442573](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406164442573.png)

###### 3.trim去除首尾的空格

![image-20230406164822460](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406164822460.png)

![image-20230406164812298](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406164812298.png)

###### 4.使用多个修饰符

![image-20230406164859456](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230406164859456.png)

## 二.组件化基础——脚手架

### 1.认识组件化开发

![image-20230411151408044](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411151408044.png)

![image-20230411151742280](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411151742280.png)

![image-20230411152204102](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411152204102.png)

根组件

![image-20230411152823958](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411152823958.png)

![image-20230411152933810](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411152933810.png)

### 2.组件

#### 1.全局注册

![image-20230411153701024](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411153701024.png)

![image-20230411153714257](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411153714257.png)

![image-20230411153941738](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411153941738.png)

#### 2.组件的逻辑

![image-20230411181834270](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411181834270.png)

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411182121201.png)

![image-20230411182224040](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411182224040.png)

![image-20230411182354148](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411182354148.png)

#### 3.全局组件的特点与局部组件

##### 1.一旦注册成功，可以在任意局部组件的template中使用

![image-20230411182936170](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411182936170.png)

通常使用局部组件

![image-20230411183035438](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411183035438.png)

##### 2.局部组件的注册

1.创建app 2.组件在哪里被使用

![image-20230411183434426](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411183434426.png)

![image-20230411183622953](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411183622953.png)
**注册格式：**

![image-20230411183901034](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411183901034.png)

#### 4.vuE的开发模式

html的开发模式

![image-20230411184549803](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411184549803.png)

![image-20230411184616926](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411184616926.png)

![image-20230411185256993](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411185256993.png)

![image-20230411185457869](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411185457869.png)

![image-20230411185726210](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411185726210.png)

![image-20230411190020253](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230411190020253.png)

#### 5.VUE CLI脚手架

##### 配置

![image-20230412083421727](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412083421727.png)

![image-20230412084347794](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412084347794.png)

常用配置

![image-20230412085323155](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412085323155.png)

SERVE启用本地服务   build打包文件

![image-20230412085254117](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412085254117.png)

打包项目 启动服务

![image-20230412085535896](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412085535896.png)

![image-20230412085849979](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412085849979.png)

配置目标

![image-20230412090221316](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412090221316.png)

内部去caniuse网站调查（基本不配置）

.json是给vscode使用的 与我们无关

main.js要用这个符号![image-20230412090814434](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412090814434.png)

![image-20230412091120747](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412091120747.png)

##### 手动编写App和ProductItem组件

首先在.vue文件里写入后导出

![image-20230412091557751](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412091557751.png)

其次在main.js文件里导入

![image-20230412091634087](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412091634087.png)

全局注册

![image-20230412092405491](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412092405491.png)

这个里面的product item 是局部注册

![image-20230412092435938](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412092435938.png)

![image-20230412092446966](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412092446966.png)



按钮的加减

![image-20230412093612136](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412093612136.png)

![image-20230412092838734](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412092838734.png)

![image-20230412093049701](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412093049701.png)

![image-20230412093142989](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412093142989.png)

![image-20230412093214072](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412093214072.png)

![image-20230412093338431](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412093338431.png)

##### Vue文件中的jsconfig文件的作用

![image-20230412184732002](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412184732002.png)

![image-20230412184855239](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412184855239.png)

![image-20230412185039617](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412185039617.png)

**作用：给VScode 来读取，VScode在读取到其中的内容时，给我们代码更友好的提示**

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412185947015.png)

更改配置后需要重新运行

 使用 

```vue
npm run serve
```

命令行

![image-20230412191250669](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412191250669.png)

##### 不同版本对temlpate的处理

![image-20230412191626881](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412191626881.png)

![image-20230412191834859](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412191834859.png)

![image-20230412192043034](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412192043034.png)

![image-20230412192426401](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412192426401.png)

vue.不需要源码帮助完成，是由vue-loader.template ->createVNode过程

.js中的源码需要complate去完成  必须要引入这个文件

![image-20230412192823894](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412192823894.png)

![image-20230412193141574](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412193141574.png)

![image-20230412193341473](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412193341473.png)

##### vue文件style自己的作用域scoped

![image-20230412194019253](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412194019253.png)

![image-20230412194614380](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412194614380.png)

![image-20230412195124142](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412195124142.png)

![image-20230412195437532](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230412195437532.png)

![image-20230412195601307](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230412195601307.png)

##### vue项目的创建方式二--vite工具

![image-20230413175714949](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413175714949.png)

2.使用create-vue创建一个vue项目

![image-20230413180100375](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413180100375.png)

由于没有安装依赖 所以要这么做
![image-20230413180156771](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413180156771.png)

两种创建方法的区别

![image-20230413180813745](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413180813745.png)

#### 6.组件化——组件间的通信

##### 1.两种开发模式

![image-20230413183939174](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413183939174.png)

![image-20230413184521004](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413184521004.png)

![image-20230413184757222](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413184757222.png)

##### 2.组件通信——父子元素

![image-20230413185903134](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413185903134.png)

![image-20230413191012331](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413191012331.png)

子组件

![image-20230413191028823](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413191028823.png)

父组件

![image-20230413191144314](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413191144314.png)



设置默认值

![image-20230413191707201](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413191707201.png)

![image-20230413191638120](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413191638120.png)

###### props的对象语法

![image-20230413192106702](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413192106990.png)

**假如默认值其中的对象种类为对象  必须使用函数** 

![image-20230413193056572](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413193056572.png)

![image-20230413192550310](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413192550310.png)

![image-20230413193524836](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413193524836.png)

非props的Attribute

![image-20230413194205840](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413194205840.png)

当组件有单个根节点的时候，非prop的Attribute将自动添加到根节点的Attribute中去

![image-20230413194956035](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413194956035.png)

也可以这么绑定

![image-20230413195022463](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413195022463.png)

###### 子元素给父元素_自定义事件流程

![image-20230413210325371](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413210325371.png)

![image-20230413210435032](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413210435032.png)

![image-20230413201829056](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413201829056.png)

![image-20230413202252820](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413202252820.png)

![image-20230413202311066](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413202311066.png)

![image-20230413202321100](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230413202321100.png)

###### 案例：tab-control的封装

![image-20230419142056681](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230419142056681.png)

![image-20230419142129167](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419142129480.png)

最后版本：

![image-20230419143254008](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143254008.png)

![image-20230419143339088](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143339088.png)

![image-20230419143409197](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143409197.png)

![image-20230419143428916](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143428916.png)

   app.vue

![image-20230419143538609](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143538930.png)

![image-20230419143603114](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143603211.png)

![image-20230419143626425](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419143626425.png)

##### 3.插槽slot

###### 1.插槽的基本使用

![image-20230419144001546](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419144001546.png)

![image-20230419145330927](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419145330927.png)

![image-20230419145750775](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419145750775.png)

###### 2.默认内容

![image-20230419145825018](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419145825018.png)

###### 3.具名插槽

缩写 符号:

![image-20230419151639014](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419151639014.png)

![image-20230419150327848](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419150327848.png)

![image-20230419150427080](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419150427080.png)

默认匹配插槽  我们需要固定的话就 具名插槽

![=""](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419150647521.png)

![image-20230419150739318](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419150739318.png)

![image-20230419150944372](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419150944372.png)

###### 4.动态插槽名

![image-20230419151552350](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419151552350.png)

###### 5.渲染作用域

![image-20230419152045121](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419152045121.png)

![image-20230419152137082](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419152137082.png)

###### 6.作用域插槽（最难） 复习需要

父组件需要获得子组件的item 

![image-20230419153447319](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419153447319.png)

![image-20230419153523027](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419153523027.png)

![d](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419153732620.png)

###### 7.独占默认插槽的情形

![image-20230419154109906](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154109906.png)

![image-20230419154027617](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154027617.png)

如果默认和具名插槽都有的话 按照template来编写

**![image-20230419154201582](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154201582.png)**

最常见的写法：

![image-20230419154249444](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154249444.png)

复习：

![image-20230419154522230](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154522230.png)

![image-20230419154818753](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154818753.png)





![image-20230419154724408](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154724408.png)

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230419154756012.png)

##### 4.非父子通信

###### 1.provide和inject

![image-20230420141059319](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420141059319.png)

一般会用状态管理库 很少用这个

![image-20230420142224353](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420142224353.png)

![image-20230420142750212](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420142750212.png)

这个地方的message是export default里面的messsage

###### 2.处理相应式数据

computed自动收集依赖  通过inject自动注入没有自动捷报的过程

![image-20230420143417726](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420143417726.png)

![image-20230420143544078](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420143544078.png)

![image-20230420143730622](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420143730622.png)

###### 3.事件总线的基本使用

![image-20230420144613459](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420144613459.png)

安装第三方库

![image-20230420145332555](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420145332555.png)

![image-20230420150156265](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420150156265.png)



![image-20230420150125588](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420150125588.png)

![image-20230420145557390](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420145557390.png)

监听

![image-20230420150414595](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420150414595.png)

移除事件总线

![image-20230420150846792](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420150846792.png)

![image-20230420150935125](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420150935125.png)

###### 4.生命周期

![image-20230420152737916](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420152737916.png)

大部分组件不会被卸载

![image-20230420152928506](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420152928506.png)

![image-20230420152953062](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420152953062.png)

![image-20230420154330209](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420154330209.png)

**重要部分：**

1.created 发送网络请求  事件监听 this.$watch 此处无法获取 dom

2.mounted  当前的元素被挂载 获取并使用DOM

3.unmounted 进行回收 取消事件监听 

###### #组件生命周期函数的演练

![image-20230420155141573](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420155141573.png)

![image-20230420160131095](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230420160131095.png)

###### 5.$refs的使用

![image-20230421142651614](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421142651614.png)

![image-20230421142858649](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421142858649.png)

![image-20230421143115818](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421143115818.png)

###### 6.动态组件的基本使用

![image-20230421143600751](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421143600751.png)

三个组件更换

![image-20230421143954421](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421143954421.png)

![image-20230421144103541](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421144103541.png)

![image-20230421144220802](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421144220802.png)

![image-20230421144241734](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421144241734.png)

传递数据

![image-20230421144452501](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421144452501.png)

![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421144600457.png)

paylaod携带的数据

###### 7.keep-alive让组件保持存活状态

计数器案例

![image-20230421145129943](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421145129943.png)

在切换时仍然保存

需要在<script>中定义nameshuxingf 

![image-20230421145438938](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421145438938.png)

![image-20230421145510821](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421145510821.png)

![image-20230421145550322](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421145550322.png)

/a|b/  a或者b

![image-20230421145908311](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421145908311.png)

###### 8.webpack的封包

![image-20230421153253939](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421153253939.png)

###### 9.异步组建的使用

![image-20230421153725978](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421153725978.png)

![image-20230421153829709](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421153829709.png)

<img src="https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421153840830.png" alt="image-20230421153840830" style="zoom:25%;" />

###### 10.v-model的本质

![image-20230421154249711](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421154249711.png)

组件的v-model

![image-20230421154429450](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421154429450.png)

相当于为自己做的

![image-20230421154824177](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421154824177.png)

![image-20230421155102280](C:\Users\飞飞飞飞\AppData\Roaming\Typora\typora-user-images\image-20230421155102535.png)

![image-20230421155335211](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421155335211.png)

![image-20230421155251650](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421155251650.png)

![image-20230421160828078](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421160828078.png)

###### 11.认识mixin

![image-20230421164043562](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230421164043562.png)







# 组合式风格

## 一.VuE简介

## 单文件组件[](https://cn.vuejs.org/guide/introduction.html#single-file-components)

在大多数启用了构建工具的 Vue 项目中，我们可以使用一种类似 HTML 格式的文件来书写 Vue 组件，它被称为**单文件组件** (也被称为 `*.vue` 文件，英文 Single-File Components，缩写为 **SFC**)。顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里。单文件组件是 Vue 的标志性功能。如果你的用例需要进行构建，我们推荐用它来编写 Vue 组件。

## 基础

### 组件树

![image-20230504172140843](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504172140843.png)

### 应用配置

![image-20230504172432257](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504172432257.png)

### 动态参数

![image-20230504173129610](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504173129610.png)

### 修饰符

![image-20230504173215239](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504173215239.png)

## 响应式基础

### 声明响应式状态

我们可以使用 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive) 函数创建一个响应式对象或数组：

js

```
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

响应式对象其实是 [JavaScript Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，其行为表现与一般对象相似。不同之处在于 Vue 能够跟踪对响应式对象属性的访问与更改操作。

要在组件模板中使用响应式状态，需要在 `setup()` 函数中定义并返回。

```
import { reactive } from 'vue'

export default {
  // `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 })

    // 暴露 state 到模板
    return {
      state
    }
  }
}
```

template

```
<div>{{ state.count }}</div>
```

![image-20230505144228306](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505144228306.png)

当使用单文件组件（SFC）时，我们可以使用 `<script setup>` 来大幅度地简化代码。

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

<script setup> 中的顶层的导入和变量声明可在同一组件的模板中直接使用。你可以理解为模板中的表达式和 <script setup> 中的代码处在同一个作用域中。

### DOM 更新时机[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing)

当你更改响应式状态后，DOM 会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只更新一次。

若要等待一个状态改变后的 DOM 更新完成，你可以使用 [nextTick()](https://cn.vuejs.org/api/general.html#nexttick) 这个全局 API：

js

```
import { nextTick } from 'vue'

function increment() {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}
```

在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。

### 响应式代理 vs. 原始对象[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-proxy-vs-original-1)

值得注意的是，`reactive()` 返回的是一个原始对象的 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，它和原始对象是不相等的：

js

```
const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false
```

只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 **仅使用你声明对象的代理版本**。

为保证访问代理的一致性，对同一个原始对象调用 `reactive()` 会总是返回同样的代理对象，而对一个已存在的代理对象调用 `reactive()` 会返回其本身：

js

```
// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true
```

这个规则对嵌套对象也适用



![image-20230505145106466](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505145106466.png)

具体参考：https://juejin.cn/post/7060864025373966343

![image-20230505145712553](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505145712553.png)

### `reactive()` 的局限性[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive)

`reactive()` API 有两条限制：

1. 仅对对象类型有效（对象、数组和 `Map`、`Set` 这样的[集合类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#使用键的集合对象)），而对 `string`、`number` 和 `boolean` 这样的 [原始类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 无效。

2. 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：

   js

   ```
   let state = reactive({ count: 0 })
   
   // 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）
   state = reactive({ count: 1 })
   ```

![image-20230505150234458](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505150234458.png)

## 用 `ref()` 定义响应式变量[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-variables-with-ref)

`reactive()` 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。为此，Vue 提供了一个 [`ref()`](https://cn.vuejs.org/api/reactivity-core.html#ref) 方法来允许我们创建可以使用任何值类型的响应式 **ref**：

js

```
import { ref } from 'vue'

const count = ref(0)
```

`ref()` 将传入参数的值包装为一个带 `.value` 属性的 ref 对象：

js

```
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

和响应式对象的属性类似，ref 的 `.value` 属性也是响应式的。同时，当值为对象类型时，会用 `reactive()` 自动转换它的 `.value`。

![image-20230505150705738](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505150705738.png)

**简言之，`ref()` 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。这个功能很重要，因为它经常用于将逻辑提取到 [组合函数](https://cn.vuejs.org/guide/reusability/composables.html) 中。**

### ref 在模板中的解包[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref-unwrapping-in-templates)

当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 `.value`

请注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， `object` 是顶层属性，但 `object.foo` 不是。

![image-20230505150858544](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505150858544.png)

需要注意的是，如果一个 ref 是文本插值（即一个 `{{ }}` 符号）计算的最终值，它也将被解包。因此下面的渲染结果将为 `1`：

template

```
{{ object.foo }}
```

这只是文本插值的一个方便功能，相当于 `{{ object.foo.value }}`。

### ref 在响应式对象中的解包[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref-unwrapping-in-reactive-objects)

当一个 `ref` 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样：

js

```
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1
```

如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：

```
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1
```

只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包。当其作为[浅层响应式对象](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive)的属性被访问时不会解包。

如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包。当其作为[浅层响应式对象](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive)的属性被访问时不会解包。

#### 数组和集合类型的 ref 解包[](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref-unwrapping-in-arrays-and-collections)

跟响应式对象不同，当 ref 作为响应式数组或像 `Map` 这种原生集合类型的元素被访问时，不会进行解包。

js

```
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
```

















## 一.自定义指令

除了 Vue 内置的一系列指令 (比如 `v-model` 或 `v-show`) 之外，Vue 还允许你注册自定义的指令 (Custom Directives)。

我们已经介绍了两种在 Vue 中重用代码的方式：[组件](https://cn.vuejs.org/guide/essentials/component-basics.html)和[组合式函数](https://cn.vuejs.org/guide/reusability/composables.html)。组件是主要的构建模块，而组合式函数则侧重于有状态的逻辑。另一方面，自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。

一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。下面是一个自定义指令的例子，当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦：****

```
<script setup>
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus />
</template>
```

**假设你还未点击页面中的其他地方，那么上面这个 input 元素应该会被自动聚焦。该指令比 `autofocus` attribute 更有用，因为它不仅仅可以在页面加载完成后生效，还可以在 Vue 动态插入元素后生效。**



在 `<script setup>` 中，任何以 `v` 开头的驼峰式命名的变量都可以被用作一个自定义指令。在没有使用 `<script setup>` 的情况下，自定义指令需要通过 `directives` 选项注册：

```
export default {
  setup() {
    /*...*/
  },
  directives: {
    // 在模板中启用 v-focus
    focus: {
      /* ... */
    }
  }
}
```

将一个自定义指令全局注册到应用层级也是一种常见的做法：

```
const app = createApp({})

// 使 v-focus 在所有组件中都可用
app.directive('focus', {
  /* ... */
})
```

**只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用 `v-bind` 这样的内置指令来声明式地使用模板，这样更高效，也对服务端渲染更友好。**



```
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```

### 钩子参数

指令的钩子会传递以下几种参数：

- `el`：指令绑定到的元素。这可以用于直接操作 DOM。
- `binding`：一个对象，包含以下属性。
  - `value`：传递给指令的值。例如在 `v-my-directive="1 + 1"` 中，值是 `2`。
  - `oldValue`：之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
  - `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
  - `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
  - `instance`：使用该指令的组件实例。
  - `dir`：指令的定义对象。
- `vnode`：代表绑定元素的底层 VNode。
- `prevNode`：之前的渲染中代表指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。

```
<div v-example:foo.bar="baz">
{//bingding参数是这样一个对象
  arg: 'foo',
  modifiers: { bar: true },
  value: /* `baz` 的值 */,
  oldValue: /* 上一次更新时 `baz` 的值 */
}
```

和内置指令类似，自定义指令的参数也可以是动态的。举例来说：

template

```
<div v-example:[arg]="value"></div>
```

这里指令的参数会基于组件的 `arg` 数据属性响应式地更新。

### 简化形式[](https://cn.vuejs.org/guide/reusability/custom-directives.html#function-shorthand)

对于自定义指令来说，一个很常见的情况是仅仅需要在 `mounted` 和 `updated` 上实现相同的行为，除此之外并不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令，如下所示：

template

```
<div v-color="color"></div>
```

js

```
app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
})
```

### 对象字面量

ipt 对象字面量。别忘了，指令也可以接收任何合法的 JavaScript 表达式。

template

```
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```

js

```
app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})
```

### 在组件上使用[](https://cn.vuejs.org/guide/reusability/custom-directives.html#usage-on-components)

当在组件上使用自定义指令时，它会始终应用于组件的根节点，和[透传 attributes](https://cn.vuejs.org/guide/components/attrs.html) 类似。

template

```
<MyComponent v-demo="test" />
```

template

```
<!-- MyComponent 的模板 -->

<div> <!-- v-demo 指令会被应用在此处 -->
  <span>My component content</span>
</div>
```

需要注意的是组件可能含有多个根节点。当应用到一个多根组件时，指令将会被忽略且抛出一个警告。和 attribute 不同，指令不能通过 `v-bind="$attrs"` 来传递给一个不同的元素。总的来说，**不**推荐在组件上使用自定义指令。

## 二.插件

插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码。下面是如何安装一个插件的示例：

js

```
import { createApp } from 'vue'

const app = createApp({})

app.use(myPlugin, {
  /* 可选的选项 */
})
```

一个插件可以是一个拥有 `install()` 方法的对象，也可以直接是一个安装函数本身。安装函数会接收到安装它的[应用实例](https://cn.vuejs.org/api/application.html)和传递给 `app.use()` 的额外选项作为参数：

js

```
const myPlugin = {
  install(app, options) {
    // 配置此应用
  }
}
```

1. 通过 [`app.component()`](https://cn.vuejs.org/api/application.html#app-component) 和 [`app.directive()`](https://cn.vuejs.org/api/application.html#app-directive) 注册一到多个全局组件或自定义指令。
2. 通过 [`app.provide()`](https://cn.vuejs.org/api/application.html#app-provide) 使一个资源[可被注入](https://cn.vuejs.org/guide/components/provide-inject.html)进整个应用。
3. 向 [`app.config.globalProperties`](https://cn.vuejs.org/api/application.html#app-config-globalproperties) 中添加一些全局实例属性或方法
4. 一个可能上述三种都包含了的功能库 (例如 [vue-router](https://github.com/vuejs/vue-router-next))。

### 如何编写一个插件 

我们可以试着写一个简单的 `i18n` ([国际化 (Internationalization)](https://en.wikipedia.org/wiki/Internationalization_and_localization) 的缩写) 插件。

<script setup> 
    import { inject } from 'vue'  
    const i18n = inject('i18n')  console.log(i18n.greetings.hello) 
</script>

```vue
// plugins/i18n.js
export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}
```

```js
import i18nPlugin from './plugins/i18n'

app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})
```

### Transition

- `<Transition>` 会在一个元素或组件进入和离开 DOM 时应用动画。本章节会介绍如何使用它。
- `<TransitionGroup>` 会在一个 `v-for` 列表中的元素或组件被插入，移动，或移除时应用动画。我们将在[下一章节](https://cn.vuejs.org/guide/built-ins/transition-group.html)中介绍。

除了这两个组件，我们也可以通过其他技术手段来应用动画，比如切换 CSS class 或用状态绑定样式来驱动动画。这些其他的方法会在[动画技巧](https://cn.vuejs.org/guide/extras/animation.html)章节中展开。

`<Transition>` 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的元素或组件上。进入或离开可以由以下的条件之一触发：

- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件
- 改变特殊的 `key` 属性

```
<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
```

```
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
```

![image-20230504155847101](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504155847101.png)

#### CSS 过渡 class

一共有 6 个应用于进入与离开过渡效果的 CSS class。



![image-20230504155934161](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504155934161.png)

![image-20230504160006271](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504160006271.png)

#### 为过渡效果命名

我们可以给 `<Transition>` 组件传一个 `name` prop 来声明一个过渡效果名：

template

```
<Transition name="fade">
  ...
</Transition>
```

对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 `v` 作为前缀。比如，上方例子中被应用的 class 将会是 `fade-enter-active` 而不是 `v-enter-active`。这个“fade”过渡的 class 应该是这样：

```
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

#### CSS 的 transition

`<Transition>` 一般都会搭配[原生 CSS 过渡](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)一起使用，正如你在上面的例子中所看到的那样。这个 `transition` CSS 属性是一个简写形式，使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和[速度曲线](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)。

下面是一个更高级的例子，它使用了不同的持续时间和速度曲线来过渡多个属性：

```
<Transition name="slide-fade">
  <p v-if="show">hello</p>
</Transition>
```

```
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
```

#### CSS 的 animation

[原生 CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)和 CSS transition 的应用方式基本上是相同的，只有一点不同，那就是 `*-enter-from` 不是在元素插入后立即移除，而是在一个 `animationend` 事件触发时被移除。

```
<Transition name="bounce">
  <p v-if="show" style="text-align: center;">
    Hello here is some bouncy text!
  </p>
</Transition>//template
```

```
.bounce-enter-active {//css
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
```

#### 自定义过渡 class

你也可以向 `<Transition>` 传递以下的 props 来指定自定义的过渡 class：

- `enter-from-class`
- `enter-active-class`
- `enter-to-class`
- `leave-from-class`
- `leave-active-class`
- `leave-to-class`

你传入的这些 class 会覆盖相应阶段的默认 class 名。这个功能在你想要在 Vue 的动画机制下集成其他的第三方 CSS 动画库时非常有用，比如 [Animate.css](https://daneden.github.io/animate.css/)：

```
<!-- 假设你已经在页面中引入了 Animate.css -->
<Transition
  name="custom-classes"
  enter-active-class="animate__animated animate__tada"
  leave-active-class="animate__animated animate__bounceOutRight"
>
  <p v-if="show">hello</p>
</Transition>
```

#### 同时使用 transition 和 animation[](https://cn.vuejs.org/guide/built-ins/transition.html#using-transitions-and-animations-together)

Vue 需要附加事件监听器，以便知道过渡何时结束。可以是 `transitionend` 或 `animationend`，这取决于你所应用的 CSS 规则。如果你仅仅使用二者的其中之一，Vue 可以自动探测到正确的类型。

然而在某些场景中，你或许想要在同一个元素上同时使用它们两个。举例来说，Vue 触发了一个 CSS 动画，同时鼠标悬停触发另一个 CSS 过渡。此时你需要显式地传入 `type` prop 来声明，告诉 Vue 需要关心哪种类型，传入的值是 `animation` 或 `transition`：

template

```
<Transition type="animation">...</Transition>
```

#### 深层级过渡与显式过渡时长[](https://cn.vuejs.org/guide/built-ins/transition.html#nested-transitions-and-explicit-transition-durations)

尽管过渡 class 仅能应用在 `<Transition>` 的直接子元素上，我们还是可以使用深层级的 CSS 选择器，在深层级的元素上触发过渡效果。

```
<Transition name="nested">
  <div v-if="show" class="outer">
    <div class="inner">
      Hello
    </div>
  </div>
</Transition>
```

```
/* 应用于嵌套元素的规则 */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

/* ... 省略了其他必要的 CSS */
```

我们甚至可以在深层元素上添加一个过渡延迟，从而创建一个带渐进延迟的动画序列：

```
/* 延迟嵌套元素的进入以获得交错效果 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
```

css。默认情况下，`<Transition>` 组件会通过监听过渡根元素上的**第一个** `transitionend` 或者 `animationend` 事件来尝试自动判断过渡何时结束。而在嵌套的过渡中，期望的行为应该是等待所有内部元素的过渡完成。

在这种情况下，你可以通过向 `<Transition>` 组件传入 `duration` prop 来显式指定过渡的持续时间 (以毫秒为单位)。总持续时间应该匹配延迟加上内部元素的过渡持续时间：

template

```
<Transition :duration="550">...</Transition>
```

```
/* 延迟嵌套元素的进入以获得交错效果 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
```

如果有必要的话，你也可以用对象的形式传入，分开指定进入和离开所需的时间：

template

```
<Transition :duration="{ enter: 500, leave: 800 }">...</Transition>
```

![image-20230504162102434](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504162102434.png)



#### JavaScript 钩子[](https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks)

你可以通过监听 `<Transition>` 组件事件的方式在过渡过程中挂上钩子函数：

```
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <!-- ... -->
</Transition>
```

```
// 在元素被插入到 DOM 之前被调用
// 用这个来设置元素的 "enter-from" 状态
function onBeforeEnter(el) {}

// 在元素被插入到 DOM 之后的下一帧被调用
// 用这个来开始进入动画
function onEnter(el, done) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done()
}

// 当进入过渡完成时调用。
function onAfterEnter(el) {}
function onEnterCancelled(el) {}

// 在 leave 钩子之前调用
// 大多数时候，你应该只会用到 leave 钩子
function onBeforeLeave(el) {}

// 在离开过渡开始时调用
// 用这个来开始离开动画
function onLeave(el, done) {
  // 调用回调函数 done 表示过渡结束
  // 如果与 CSS 结合使用，则这个回调是可选参数
  done()
}

// 在离开过渡完成、
// 且元素已从 DOM 中移除时调用
function onAfterLeave(el) {}

// 仅在 v-show 过渡中可用
function onLeaveCancelled(el) {}
```

在使用仅由 JavaScript 执行的动画时，最好是添加一个 `:css="false"` prop。这显式地向 Vue 表明可以跳过对 CSS 过渡的自动探测。除了性能稍好一些之外，还可以防止 CSS 规则意外地干扰过渡效果。

```
<Transition
  ...
  :css="false"
>
  ...
</Transition>
```

这种情况下对于 `@enter` 和 `@leave` 钩子来说，回调函数 `done` 就是必须的。否则，钩子将被同步调用，过渡将立即完成。

#### 可复用过渡效果[](https://cn.vuejs.org/guide/built-ins/transition.html#reusable-transitions)



得益于 Vue 的组件系统，过渡效果是可以被封装复用的。要创建一个可被复用的过渡，我们需要为 `<Transition>` 组件创建一个包装组件，并向内传入插槽内容：

![image-20230504163357426](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504163357426.png)

![image-20230504163559201](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504163559201.png)

#### 出现时过渡

如果你想在某个节点初次渲染时应用一个过渡效果，你可以添加 `appear` prop：

template

```
<Transition appear>
  ...
</Transition>
```

#### 元素间过渡[](https://cn.vuejs.org/guide/built-ins/transition.html#transition-between-elements)

除了通过 `v-if` / `v-show` 切换一个元素，我们也可以通过 `v-if` / `v-else` / `v-else-if` 在几个组件间进行切换，只要确保任一时刻只会有一个元素被渲染即可：

template

```
<Transition>
  <button v-if="docState === 'saved'">Edit</button>
  <button v-else-if="docState === 'edited'">Save</button>
  <button v-else-if="docState === 'editing'">Cancel</button>
</Transition>
```

#### 过渡模式

#### 组件间过渡[](https://cn.vuejs.org/guide/built-ins/transition.html#transition-between-components)

`<Transition>` 也可以作用于[动态组件](https://cn.vuejs.org/guide/essentials/component-basics.html#dynamic-components)之间的切换：

template

```
<Transition name="fade" mode="out-in">
  <component :is="activeComponent"></component>
</Transition>
```

![image-20230504165038950](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230504165038950.png)

https://play.vuejs.org/#eNqtksFugzAMhl/F4tJNKtDLLoxWKnuDacdcUnC3SCGJiMmEqr77EkgLbXfYYZyI8/v77dinZG9M5npMiqS0dScMgUXqzY4p0RrdEZzAfnEp9fc7HuEMx063sPIZq6viTbdmHy+yfDwF5K2guhFUUcBUnkNvcelBGrjTooHaC7VCRXBAoT6hQTRyAH2w2DlsmKq1sgS8JuEwUCfxdgF7Gqt5ZqrMp+58X/5A2BrJCcOJSskPKP0v+K8UyvQENBjcsqTjjdAsAZe2ukHpI3dm/q5wXPZBPFqxZAf7gCrzGfufDlVwqB4cPjqurCChFSjeBvGRN+iTA9afdE+pUD43FjG/bSHsb667Mr9qJot89vCBMl8+oiotDTL8ZsE39UnYpRN0fQlK5A5jEE6BSVdiAdrwWtAAm+zFAnKLr0ydA3pJDDt0x/PrMrJifgGbKdFPfCwpWU+TuWz5omzfVCNcfJJ5geL8pqtFn5E07u7fSHFOj6TzDyUDNEM=

#### 动态过渡[](https://cn.vuejs.org/guide/built-ins/transition.html#dynamic-transitions)

`<Transition>` 的 props (比如 `name`) 也可以是动态的！这让我们可以根据状态变化动态地应用不同类型的过渡：

template

```
<Transition :name="transitionName">
  <!-- ... -->
</Transition>
```

这个特性的用处是可以提前定义好多组 CSS 过渡或动画的 class，然后在它们之间动态切换。

你也可以根据你的组件的当前状态在 JavaScript 过渡钩子中应用不同的行为。最后，创建动态过渡的终极方式还是创建[可复用的过渡组件](https://cn.vuejs.org/guide/built-ins/transition.html#reusable-transitions)，并让这些组件根据动态的 props 来改变过渡的效果。掌握了这些技巧后，就真的只有你想不到，没有做不到的了。

# 前端工程化

## 一.前端模块化

### 1.commonjs

![image-20230505155023486](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505155023486.png)

![image-20230505155753806](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505155753806.png)

![image-20230505155829266](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505155829266.png)

![image-20230505155912080](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505155912080.png)

### 2.可以实现的本质

本质

![image-20230505160424790](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505160424790.png)

![image-20230505160345857](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505160345857.png)

相当于保存了对象的指针

![image-20230505164627294](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505164627294.png)



![image-20230505165028903](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505165028903.png)

module.erports和exports默认是相等的，但是实际上新建了一个对象了已经

![image-20230505165143116](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505165143116.png)

![image-20230505165311487](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505165311487.png)

![image-20230505165323643](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505165323643.png)

### 3.require查找模块细节

![image-20230505172035236](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505172035236.png)

![image-20230505171654783](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505171654783.png)

![image-20230505172254789](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505172254789.png)

![image-20230505172831287](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505172831287.png)

![image-20230505173231461](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505173231461.png)

![image-20230505174052143](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505174052143.png)

深度优先算法

### 4.amd和CMD

![image-20230505175107044](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505175107044.png)

![image-20230505175316686](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230505175316686.png)

![image-20230506145433676](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506145433676.png)

### 5.代码结构组件

#### ES module

![image-20230506150013523](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506150013523.png)

![image-20230506151001874](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506151001874.png)

##### 导入

只能在模块的顶部使用

![image-20230506152949775](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506152949775.png)

![image-20230506153004758](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506153004758.png)

![image-20230506153152551](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506153152551.png)

![image-20230506151100477](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506151100477.png)

![image-20230506151330691](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506151330691.png)

![image-20230506151348638](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506151348638.png)

##### 导出

推荐优化一

![image-20230506151806742](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506151806742.png)

![image-20230506151744283](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506151744283.png)

##### default

![image-20230506152151312](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506152151312.png)

一个里面只可以有一个默认导出

##### 解析过程

![image-20230506153520911](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506153520911.png)

![image-20230506153839328](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506153839328.png)

![image-20230506153956131](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506153956131.png)

![image-20230506154129322](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506154129322.png)

#### 代码共享方案

![image-20230506160446419](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506160446419.png)

![image-20230506160524158](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506160524158.png)

##### 包管理npm

![image-20230506160631637](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506160631637.png)

![image-20230506160743674](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230506160743674.png)

![image-20230507090240280](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507090240280.png)

![image-20230507090346953](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507090346953.png)

![image-20230507090400267](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507090400267.png)

![image-20230507090742494](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507090742494.png)

###### 常见属性

![image-20230507090726452](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507090726452.png)

![image-20230507091024443](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507091024443.png)

![image-20230507092005420](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507092005420.png)

###### 版本管理

![image-20230507092924422](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507092924422.png)

![image-20230507093039155](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507093039155.png)

![image-20230507093319609](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507093319609.png)

![image-20230507093701169](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507093701169.png)

分享时两个文件都要分享

![image-20230507094347613](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507094347613.png)

###### install 原理

![image-20230507094801226](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507094801226.png)

###### yarn工具

![image-20230507095448152](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507095448152.png)

![image-20230507095709598](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507095709598.png)

###### cnpm

![image-20230507100216738](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507100216738.png)

![image-20230507100414218](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507100414218.png)

##### webpack使用

![image-20230507131753144](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507131753144.png)

![image-20230507133032582](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507133032582.png)

![image-20230507133607753](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507133607753.png)

![image-20230507133623408](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507133623408.png)

![image-20230507132131285](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507132131285.png)

npx在安装npm过程中就安装好了

npm run built

![image-20230507102601706](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507102601706.png)

![image-20230507102634598](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507102634598.png)

![image-20230507103848696](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507103848696.png)

###### 发布自己的包

![image-20230507104312037](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507104312037.png)

###### 创建局部的webpack

![image-20230507135839906](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507135839906.png)

![image-20230507135928300](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507135928300.png)

###### 依赖图

![image-20230507141959694](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507141959694.png)

![image-20230507140059752](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507140059752.png)

###### CSS常用处理



![image-20230507144737473](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507144737473.png)

![image-20230507145534284](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507145534284.png)

![image-20230507145350741](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507145350741.png)

![image-20230507143818570](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507143818570.png)

###### 打包图片

![image-20230507151753070](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507151753070.png)

![image-20230507152709775](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507152709775.png)

###### 常用命令

![image-20230507105052773](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507105052773.png)

##### 插件的使用

![image-20230507154647461](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507154647461.png)

###### babel

![image-20230507155620052](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507155620052.png)



###### ![image-20230507154231380](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507154231380.png)

###### clean插件

![image-20230507160406630](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507160406630.png)

![image-20230507160030736](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507160030736.png)

###### html插件



![image-20230507161725021](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507161725021.png)

![image-20230507161755919](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507161755919.png)

###### define插件

![image-20230507162732619](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507162732619.png)

![image-20230507162750656](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507162750656.png)

##### 模式设置

![image-20230507163558125](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507163558125.png)

##### 开启本地服务器

![image-20230507164533184](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507164533184.png)

![image-20230507165354325](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507165354325.png)

##### HMR

![image-20230507170139569](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507170139569.png)

![image-20230507170122128](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507170122128.png)

![image-20230507170825913](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507170825913.png)

##### pnpm

![image-20230507105907412](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507105907412.png)

###### 硬链接和软连接

![image-20230507110759549](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507110759549.png)

![image-20230507111632552](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507111632552.png)



![](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507111632552.png)

###### 常见命令

![image-20230507111922745](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507111922745.png)

![image-20230507112529372](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507112529372.png)



![image-20230507112706843](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507112706843.png)



##### node内置模块

![image-20230507114030123](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507114030123.png)

![image-20230507114633760](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20230507114633760.png)

