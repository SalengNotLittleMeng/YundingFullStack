# 前端工程化

## 一node.js：

1.nvm     ：node的多版本管理工具：
基本指令：

nvm install latest  下载最新node

nvm list           展示目前的node版本

nvm use         切换版本

2.全局对象

__dirname 当前目录

__filename 文件目录

process

![image-20230505195844253](D:/.typora图片/image-20230505195844253.png)  

## 二node.js的模块化

模块化开发：

将程序划分成一个个小的结构

每一个部分有自己的作用域

可维护性高

### 1.commonjs(社区)CJS

* 基本的用法:

  子模块导出 
  
  const aa = {a:1}
  
  module.exports=aa

​	   父模块导入

​	    ps:const aa=require("路径")

​	   导出时必须在定义的语句之后

* 实现的本质：

  exports是一个对象，导入的本质是一个引用赋值，赋值一个exports对象的地址，让两者指向同一个地址，一边的值发生改变时，都会改变掉。

* 开发中：

  moudle.exports = {}
  
  本质时创建了一个新的对象，但是exports此时已经不能再修改。可以通过moudle.exports来修改.
  
  内存本质

* node模块的加载过程

  ![image-20230505220808980](D:/.typora图片/image-20230505220808980.png)

### 2.ESmoudle(官方)

1.使用ES Moudle将 use strict

2.将其他js文件导出：（方法有三种）

注意：导出的是变量的引用，当变量修改时，你的值也会随时发生改变。

 （1）逐一导出

```js
export const name="lili";

export const age=18;
```

（2）统一导出

```js
export{  name,age,gneder};
//{}里面是属性名字
```

​	(3)起别名导出

```js
export{       name as fname,

   age as fage}
```

3.将其他js文件导入主要js文件：

​	(1)一般导入

```js
	import {name,age,gender}from './index/index.js ';
```

​	(2)起别名导入

```js
	import {name as fname,age  as fage,gender}from './index/index.js ';
```

​	(3)*导入   foo导入了整个模块

```js
		import * as foo from 'index.js'
```

4.结合export与import:

```js
export {name age }from 'index.js'
```

复杂却有用？

![image-20230201111210100](D:/.typora图片/image-20230201111210100.png)

5.defalut （默认导出）

export dafalut 一个模块只能有一个

6.import函数 （写在逻辑代码里面的）

![image-20230506111406603](D:/.typora图片/image-20230506111406603.png)

7.import.meta

8.ES Moudle解析流程：

![image-20230506112234965](D:/.typora图片/image-20230506112234965.png)

## 三包管理工具

### 分享代码：通过专业工具npm

1.npm包管理工具(Node Package Manager)

而目前， 前端项目也已经开始了使用

2.文件说明(配置文件)

package.json:记录项目名称，版本号，项目描述等等

private:     （设置是否私有）

main:设置程序的入口

scripts:以键值对的形式写出

dependencies:依赖的库的名称（生成与开发都需要的）

devDependencies:开发依赖  --save-dev

preDependencies:

3.version规范

![image-20230506153539343](D:/.typora图片/image-20230506153539343.png)

![image-20230506153740214](D:/.typora图片/image-20230506153740214.png)

engines:

browserslist:  

4全局 -g 开发 npm i webpack -D

5npm安装原理:

![image-20230506160252738](D:/.typora图片/image-20230506160252738.png)

6.npm常用的命令

npm uninstall package

npm cache clean

npm config get registry       查看npm镜像

npm config set registry https:// registry.npm.taobao.org                 切换为淘宝镜像

### yarn 命令

### cnpm工具

淘宝镜像



## 四npx以及pnpm

1.npx：
原理：直接到当前目录的node_moudles/.bin目录下面查找找到局部的webpack

2.pnpm

* performant npm(高效的npm...)

* 也是一个包管理工具

* 支持仓库多包，快速

* hard link and symbolic link:

  ![image-20230508151542541](D:/.typora图片/image-20230508151542541.png)

  文件的拷贝:copy foo.js foo_copy.js

  文件的硬链接：mklink /H aaa_hard.js aaa.js 固定的位置打开

​		  文件的软链接：mklink aaa_hard.js aaa.js    相当于快捷方式

​			

* pnpm做了什么？

![image-20230508153449950](D:/.typora图片/image-20230508153449950.png)

* 非扁平化的管理

  ![image-20230508160226202](D:/.typora图片/image-20230508160226202.png)

  

* 常见命令：去网站(pnpm.io)
* 节省非常多的空间，但是.pnpm会越来越大，硬链接会依然存在。
* 裁剪：pnpm store prune





## 五PATH模块

1.内置方法:(require(path)

* 从路径中提取一些信息：

* 拼接路径：

path.join(path1,path2)

* **返回绝对路径:**

path.resolve(path1,path2)

![image-20230508225507008](D:/.typora图片/image-20230508225507008.png)

## 六webpack(重要)

  webpack is a static moudle bundle for  javascript applications

​	webpack?

   打包bundle，静态的static,模块化的moudle,现代的modern。

 webpack 

webpack cli 最好使用局部的webpack

###  开始打包

1. 入口一般必须为index.js

2.传入参数自定义入口：npx webpack -entry 路径

3.自定义打包后的名字:  --output

​    4.webpack.config.js:配置文件（更方便打包到自定义目录）

​	moudle.export = {

​		entry:'',

​		output:{

​			filename:'',

​			path:''(必须是绝对路径,使用path.resolve(__dirname,'now'))

},

}

5.![image-20230509123646234](D:/.typora图片/image-20230509123646234.png)

### 深入webpack

1.webpack形成的依赖图

从入口开始，形成依赖图，遍历图结构，打包一个个模块。（不同的文件使用不同的loader进行解析）

2.webpack的css以及loader的使用

配置loader来解析css文件etc：（webpack

```javascript
module:{

	rules:[
        {
            test:/.css$/,
            use:[
                {loader:"css-loader"}//只负责解析css
                {loader:"style-loader"}    //解析时从下向上进行解析,因此这两个需要翻转顺序
            ]
            
        }，
        {
        	generator:{
                //ext:扩展名
                //哈希值
                filename:"[name].png"
                filename:"[name][ext]"
                filename:"img/[name]_[hash:8][ext]"
                
            }
        }，
        
    ]

}
```

style-loader:(不会将css抽取到独立的文件里面)

简写：如果loader只有一个直接写loader:"css-loader"

​			如果只有一个属性为Loader,直接写use：["css-loader","style-loader"]

3.less文件处理：

LESS 并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。

less-loader



 4.postcss-loader:

功能：添加浏览器前缀，css样式重置

postcss-preset-env\

5.webpack打包图片:(png,jpg)

内置文件处理：

asset moudle type（资源模块类型），下有几个模块：

* type:"asset/inline"

  对图片使用base64编码，然后将编码后的原码放入对应的js文件中

  缺点：js文件变大，可能阻塞后面文件的解析

* type:"asset/resource"

  需要n次网络请求

* type:"asset"

  自适应配置文件

  ![image-20230511145458991](D:/.typora图片/image-20230511145458991.png) 

  1 kb =1024 byte

  maxsize的默认单位是字节

​	

6.对babel处理:

* babel是什么？babel是一个工具链，在浏览器中将es6+语法转化为向后兼容的js

​			想要使用es6+,typeScript,react都需要babel

* babel的安装：

  npm install babel-loader

* 插件的使用:

  1.使用npm下载插件

  2.配置插件:

  options:{

  plugins:[

  ​	"@label/plugin-transform-arrow-functions"

  ]

  }

  略显麻烦，因此：

  抽取到babel.config.js

* 预设preset

  presets:[

    "@babel/preset-env"

  ]



7.对vue的处理：

test:/\.vue$/

loader :vue-loader



8.对文件路径的解析：

* resolve用于设置模块如何被解析
* ![image-20230513065550656](D:/.typora图片/image-20230513065550656.png)

* resolve.extensions:["",""] //自己添加扩展名

* 别名:alias

* {

    		utils:path.resolve(__diername,./src/utils)

  }

9.some Plugin

* cleanWebpackPlugin

  外部文件引入时写法：

  ```js
  const {cleanWebpackPlugin} =
        require("clean-webpack-plugin")
  
  
  module.export = {
      plugins:[
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugiin({
          
         	title:'',
          template:
          })
      ]
  }
  
  
  ```

  

* HtmlWebpackPlugin

* DefinePlugin

  webpack内置插件，直接从webpack引入

  里面定义全局变量，可以用于各地方

10.webpack.config.js的配置



## 搭建本地服务器

1.三种方式

![image-20230515173125743](D:/.typora图片/image-20230515173125743.png)

2.webpack-dev-server(开发阶段)

webpack serve --config webpack.config.js

3.HMR(模块热替换)

* 在运行中，只替换、添加、删除模块，而不刷新整个页面。

* devServer:{

   hot:true

  }

* 指定模块开启hot

  if(module.hot){

    module.hot.accept("main.js",()=>{

  ​                   

  })

  }

4.devServe的配置

 devServer:{

​		hot:true,

​		port:8888,

​		host:"0.0.0.0",

​		compress:

} .etc