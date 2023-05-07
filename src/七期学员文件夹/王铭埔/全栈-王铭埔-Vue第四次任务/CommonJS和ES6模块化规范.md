## CommonJS和ES6模块化规范

CommonJS规范规定，每一个JS文件就是一个模块，有自己的作用域；在一个模块中定义的变量、函数等都是私有变量，对其他文件不可见。

```js
// number.js
let num = 1
function add(x) {
    return num + x
}
```

在上面的number.js中，变量num和函数add就是当前文件私有的，其他文件不能访问。同时CommonJS规定了，每个模块内部都有一个`module`变量，代表当前模块；这个变量是一个对象，它的`exports`属性（即`module.exports`）提供对外导出模块的接口。

```js
// number.js
let num = 1
function add(x) {
    return num + x
}
module.exports.num = num
module.exports.add = add
```

这样我们定义的私有变量就能提供对外访问；加载某一个模块，就是加载这个模块的`module.exports`属性。

js模块的导出与导入有两种方式：一种是commonjs规范 , 一种是es6规范

**使用环境**

CommonJS模块的require语法是同步的，导致CommonJS模块规范只适合用在服务端。因为如果在浏览器端使用同步的方式加载一个模块，需要有网络来决定快慢，响应时间可能会很长。

ES6模块无论在浏览器端还是服务端都是可以使用的，但是在服务端，还需要遵循一些特殊的规则才能使用。

**输出方式不同**

- CommonJS输出的是一个值的**拷贝**
- ES6模块输出的是值的**引用**

**运行时加载和编译时加载**

- CommonJS模块是**运行时加载**
- ES6模块是**编译时输出接口**

## ES Module使用

### **使用方式一**

构建如下目录结构

```text
├── caculator.js
├── index.js
└── package.json
```

**package.json**

重点是将 type 设置为 module 来支持 ES Modules

```text
{
  "name": "esm-project",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  ...
}
```

**caculator.js**

```text
export function add (a, b) {
  return a + b;
};
```

**index.js**

```text
import { add } from './caculator.js';

console.log(add(4, 2)); // 6
```

**运行**

与当前的 v14.3.0 不同的是在 v12.17.0 中使用 ESM 运行时仍然会触发一个 experimental 警告信息。

```text
$ n run v12.17.0 index.js     
(node:6827) ExperimentalWarning: The ESM module loader is experimental.
6

$ n run v14.3.0 index.js
6
```

## 包管理器的认识了解

简单来说， 包管理器（Package Manager）（或软件包管理器）是一种工具，它允许用户在操作系统上安装、删除、升级、配置和管理软件包。

复用别人写好的代码，管理包之间的依赖关系

| npm常用命令：                                             |
| :-------------------------------------------------------- |
| npm -v查看npm版本                                         |
| npm install 安装东西                                      |
| npm uinstall 卸载东西                                     |
| npm list查看安装的模块                                    |
| 项目有package.json文件时，npm install会自动安装项目依赖。 |
| yarn常用命令：                                            |
| yarn help帮助                                             |
| yarn init初始化，自动创建yarn运行所需文件                 |
| yarn install或yarn 自动安装项目依赖                       |

## webpack打包

## 常见的loading和插件

- loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。