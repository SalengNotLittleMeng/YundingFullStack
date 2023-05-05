模块化、包管理器、Vue学习笔记

#### 1.模块化

缘由：**全局变量的灾难*大家的代码都在一个作用域，不同的人定义的变量可能会重复从而产生覆盖。

#####          优点：

1.安全的包装一个模块的代码，避免全局污染

2.唯一标识一个模块

3.优雅的将模块 api 暴露出去

4.方便的使用模块

#####          核心：

模块块化有两个核心：**导入和导出**。

###### （1）CommonJS

###### CommonJS 的导入：

var add = require('./add.js');
        var config = require('config.js');
        var http = require('http');

###### CommonJS 的导出：

`module.exports.add = function () {
      ...
}
    module.exports = function () {
      return ...
}`

###### （2）ES Module

##### 导出方式：

###### 1具名导出（普通导出），可以导出多个

###### 2默认导出，只能导出一个

`export const a = 1; // 具名，常用
export function b() {} // 具名，常用
export const c = () => {}  // 具名，常用
const d = 2;
export { d } // 具名
const k = 10
export { k as temp } // 具名

// export default 3 // 默认，常用
// export default function() {} // 默认，常用
// const e = 4;
// export { e as default } // 默认

const f = 4, g = 5, h = 6
export { f, g, h as default} // 基本 + 默认

// 以上代码将导出下面的对象
/*
{
	a: 1,
	b: fn,
	c: fn,
	d: 2,
	temp: 10,
	f: 4,
	g: 5,
	default: 6
}
*/`

##### ES Module导入方式(模块路径一定要加后缀.js)：

// 仅运行一次该模块，不导入任何内容
import "模块路径"
// 常用，导入属性 a、b，放到变量a、b中。a --> a, b --> b
import { a, b } from "模块路径"   
// 常用，导入属性 default，放入变量c中。default --> c
import c from "模块路径"  
// 常用，default->c，a->a, b->b
import c, { a, b } from "模块路径" 
// 常用，将模块对象放入到变量obj中
import * as obj from "模块路径" 


// 导入属性a、b，放到变量temp1、temp2 中
import {a as temp1, b as temp2} from "模块路径" 
// 导入属性default，放入变量a中，default是关键字，不能作为变量名，必须定义别名
import {default as a} from "模块路径" 
//导入属性default、b，放入变量a、b中
import {default as a, b} from "模块路径" 
// 以上均为静态导入

import("模块路径") // 动态导入，返回一个Promise，完成时的数据为模块对象

#### 2.了解常见的包管理器

##### 1.npm，yarn

npm常用命令：

npm -v查看npm版本

npm install 安装东西

npm uinstall 卸载东西

npm list查看安装的模块

项目有package.json文件时，npm install会自动安装项目依赖。

yarn常用命令：

yarn help帮助

yarn init初始化，自动创建yarn运行所需文件

yarn install或yarn 自动安装项目依赖

yarn add安装东西

yarn remove卸载东西

yarn up更新东西

##### 2.webpack打包

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。Webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。

###### 初始化项目

在使用webpack打包之前，我们首先要先创建一个项目

1.创建一个webpack文件夹，在该文件夹下打开终端，
执行命令：npm init-y

2.在webpack文件夹中创建一个src文件夹
        3.在src下创建：common.js文件

exports.info = function (str) {
    document.write(str);
}

###### 使用webpack进行JS打包

1、在webpack目录下创建配置文件webpack.config.js，内容如下

const path = require("path"); //Node.js内置模块
module.exports = {
    entry: './src/main.js', //配置入口文件
    output: {
        path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
        filename: 'bundle.js' //输出文件
    }
}
以上配置的意思是：读取当前项目目录下src文件夹中的main.js（入口文件）内容，分析资源依赖，把相关的js文件打包，打包后的文件放入当前目录的dist文件夹下，打包后的js文件名为bundle.js

2、在webpack目录下创建dist目录准备
        3、在webpack目录下打开终端执行编译命令（执行两个命令任意一个即可）

webpack #有黄色警告
webpack --mode=development #没有警告
#执行后查看bundle.js 里面包含了上面两个js文件的内容并惊醒了代码压缩
       4、在webpack目录下创建index.html，内容如下

<body>
	//引入bundle.js
    <script src="dist/bundle.js"></script>
</body>
     5 .在浏览器打开该网页，就能看到输出内容啦！

###### 使用webpack进行CSS打包

1、安装style-loader和 css-loader

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

Loader 可以理解为是模块和资源的转换器。

首先我们需要安装相关Loader插件，css-loader 是将 css 装载到 javascript；style-loader 是让 javascript 认识css

npm install --save-dev style-loader css-loader 
      2、修改webpack.config.js，内容如下

const path = require("path"); //Node.js内置模块
module.exports = {
    entry: './src/main.js', //配置入口文件
    output: {
        path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
        filename: 'bundle.js' //输出文件
    },
    module: {
        rules: [  
            {  
                test: /\.css$/,    //打包规则应用到以css结尾的文件上
                use: ['style-loader', 'css-loader']
            }  
        ]  
    }
}
3、在src文件夹下创建style.css，内容随意，这里就给个网页背景

body{
    background:green;
}
4、修改main.js
在第一行引入style.css

require('./style.css');
5、浏览器中查看index.html
因为引入了css文件，需要先删除dist文件夹中的bundle.js，再重新打包该文件夹，然后再打开index.html

再打开网页，就能看到js中输出的文字和设置的网页背景了

##### 3.webpack常见的loading与插件

Webpack是一个强大的打包工具，可以将多个文件打包成一个压缩的JS文件，可以有效地减小文件体积和请求次数

######    webpack使用：

1.yarn init

2.安装依赖：webpack、webpack-cli（yarn add -D webpack webpack）

3.在项目中创建src目录，在其中编写代码(入口文件命名为index.js)

4.项目完成后用npx webpack或yarn webpack进行打包

webpack的文件模块化规范要使用前端规范，导出用：

```javascript
export default{
    
}
```

导入用：

```
import a from './a.js'
```

打包后项目会整理在一个叫做dist的文件夹中。

配置文件webpack.config.js:

```js
const path = require('path');
 module.exports = {
   entry: './src/index.js',//设置入口文件
   output: {//设置打包输出
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],//添加Loader
      },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,//图像
        type: 'asset/resource',
      },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',//字体
      },
    ],
  },
 };
```

loader:

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

所以如果我们需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader，他们做两件不同的事情，css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们，style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。

以下需要在js文件中import对应文件

css:npm install --save-dev style-loader css-loader

图像：配置webpack.config.js文件

字体：配置webpack.config.js文件，在css文件中导入：

```css
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'),
    url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
 .hello {
   color: red;
  font-family: 'MyFont';
   background: url('./icon.png');
 }
```

json:直接导入即可。



###### 插件：

插件在 webpack 的配置信息 plugins 选项中指定，用于完成一些 loader 不能完成的工作。

```bash
npm install --save-dev html-webpack-plugin
```

修改**webpack.config.js**：

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

该插件会用新的index.js文件替换我们写的index.js文件。

 BannerPlugin 插件，用于在文件头部输出一些注释信息。

```
npm install --save-dev BannerPlugin 
```

在webpack.config.js文件中的plugins中插入新建插件对象即可。

#### 3.Vue组合式

Vue组合式语法使用：

```vue
<script setup>
    
</script>
```

这样就可以使用组合式语法了。

组合式常用：

```vue
<script setup>
import {ref,computed} from 'vue';
    
const a=ref(0);
const b=ref({name:"haha"});
const props=defineProps(["f","g"]);
function fn(a,b,c){}
const c=computed(()=>{
    return 1+1;
})
</script>
```

#### 4.vue自定义指令

自定义指令的使用：

```vue
<script setup>
import {directive} from 'vue';
const myDirective=directive('my-directive',{
    //这里写入钩子函数
})
const vHaha={//变量名需要驼峰命名，且以v开头
    //钩子函数
}
</script>
<template>
	<div v-my-directive="haha" v-haha="aa"></div>
</template>
```

钩子函数有几种，他们的区别是被调用的时间不同，以及传的参数会有差异。这里引用官方文档给出的函数及参数解释：

```vue
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
```

- `el`：指令绑定到的元素。这可以用于直接操作 DOM。
- `binding`：一个对象，包含以下属性。
  - `value`：传递给指令的值。例如在 `v-my-directive="1 + 1"` 中，值(value)是 `2`。
  - `oldValue`：之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
  - `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
  - `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
  - `instance`：使用该指令的组件实例。
  - `dir`：指令的定义对象。
- `vnode`：代表绑定元素的底层 VNode。
- `prevNode`：之前的渲染中代表指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。

#### 5.Vue插件

编写插件

```
export default{
install:(app,options)=>{//app是调用use方法的挂载的组件，options是参数
}
}
```

js文件使用插件：

```
import aa from './aa'
const app=createApp('')
app.use(aa,{参数})
```

provide、inject（需要import才能用）:

```
export default{
install:(app,options)=>{//app是调用use方法的挂载的组件，options是参数
	app.provide('haha', options)
}
}
```

```
const haha=inject('haha')//haha就是options中的东西
```