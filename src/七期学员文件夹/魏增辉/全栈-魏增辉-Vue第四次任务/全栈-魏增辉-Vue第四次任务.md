## commonJS

### 简述

​	node——commonJS在服务器端的代表性实现，Browserify——commonJS在浏览器中的实现，webpack——具备对commonJS的支持和转换

### 具体使用

​	node中的每个js文件都是一个单独的模块，并且包括exports,module.exports,require；exports和module.exports负责对模块中的内容进行输出，而require函数可以导入其他模块（自定义，系统，第三方库）中的内容。

### exports导出

​	bar.js进行导出

```javascript
const name = 'mingming'
exports.name = name
```

​	main.js进行导入

```javascript
const bar = require('./bar');
console.log(bar.name);
```

main中的bar变量等于exports对象，require通过各种查找方式找到exports，然后将exports对象赋值给bar变量，bar变量就是exprots对象

### module.exports导出

​	Node所使用的exports本质上就是module.exports；module才是真正的实现者。module对象的exports属性是exports对象的一个引用；—>module.exports = exports = main中的bar。

### require导入

​	一.require(X) X为核心模块，例如：path,http。直接返回核心模块，并且停止查找。

​	二.X以./ ../  / 开头查找文件

## ES Module

模块化系统，使用import和export关键字，编译期的静态分析，以及动态引用方式。

export——导出

import——导入

并且使用严格模式：use strict

在浏览器中直接使用esmodule时，必须在文件后加上后缀名.js

```javascript
import{name,age,sayhello} from "./foo.js"
```

打开对应的html时，如果html中有使用模块化的代码，必须开启一个服务来打开。

```javascript
//导出方式一
export{
  name,
  age,
  sayhello
}
```

```javascript
//导出方式二 导出时给标识符起别名
export{
	name as fname,
	age,
	sayhello
}
```

```javascript
//引入方式一
import{name,age,sayhello} from "./foo.js"
```

```javascript
//引入方式二 导入时给标识符起别名
import{name as fname,age,sayhello} from "./foo.js"
```

```javascript
//引入方式三 导入时给整个模块起别名
import * as foo from "./foo.js"
```

### import和export的联合使用

```javascript
//优化一
export{name,age,sayhello} from './foo.js'
```

```javascript
//优化二
export * from './foo.js'
```

### default用法

 默认导出，导出export时不需要名字，导入时不需要使用{}，可自己指定名字。

**一个模块中只能有一个默认导出**

逻辑导入模块的实现

```javascript
const importPromise = import("./foo.js")
importPromise.then(res =>){
                   console.log(res.name,res.age)
                   }
```

