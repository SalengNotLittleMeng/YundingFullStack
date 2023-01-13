# JS内置对象

## 函数

### 回调函数

一个函数的参数也可以是函数

如果将函数作为参数传递，那么我们就称中国函数为回调函数（callback ）

```js
result = folter(personArr,a => a.name ==="孙悟空")
```

### 高阶函数

如果一个函数的参数或返回值是函数，则称这个函数为高阶函数

可以通过高阶函数来动态的生成一个新函数

## 闭包

在某个函数中使用某个变量，不想让外部的赋值影响到数值

```js
function outer(){
	let num = 0
	return () => {
		num++
		console.log(num)
	}
}
```

可以利用函数作用域，来隐藏不希望被外部访问到的变量

闭包就是能访问到外部函数作用域中变量的函数

### 构成闭包的要件

1. 函数的嵌套
2. 内部函数要引用外部函数中的变量
3. 内部函数要作为返回值返回

### 闭包的生命周期

1. 闭包在外部函数调用时产生，外部函数每次调用都会产生一个全新的闭包
   1. 假设fn1于fn2指向同一闭包函数，fn1与fn2互不干扰
2. 闭包在内部函数丢失时消耗
   1. 如果指向闭包的函数都指向了别的东西，闭包会被回收

### 注意事项

- 闭包主要用来隐藏一些不希望被外部访问的内容，这意味着闭包需要占用一定的内存空间
- 相较于类来说，闭包比较浪费内存空间（类可以用原型而闭包不能）
  - 需要执行次数较少时，使用闭包
  - 需要大量创建，使用类

## 递归函数

### 递归

- 调用自身的函数
- 递归的作用和循环是基本一直

### 要件

1. 基线条件——递归的终止
2. 递归条件——如何对问题进行拆分

```js
function jieCheng(num){
	//基线条件
    if(num === 1){
        return 1
    }
    //递归条件
    //num!=(num-1)!*num
    return jieCheng(num-1)*num
}
```

- 递归的思路比较清晰简洁，而循环的执行性能比较好

## 数组的方法

### sort()

sort用来对数组进行排序（会改变原数组）

sort默认会将数组升序排序

##### 注意：sort默认以Unicode编码进行排序，所以直接通过sort对数字进行排序可能会得到一个不正确的结果

#### 参数

可以传递一个回调函数作为参数，通过回调函数来指定排序规则

```js
(a,b) => a-b //升序排列
(a,b) => b-a //降序排列
arr.sort((a,b) => a-b)
```

### forEach()

- 用来遍历数组
- 需要一个回调函数作为参数，这个参数会被调用多次
  - 数组中有几个元素，回调函数就会调用几次
  - 每次调用，都会将数组中的数据作为参数传递
- 回调函数有三个参数
  - element当前的元素
  - index当前元素的索引
  - array被遍历的数组

```js
arr.forEach((element,index,array) => {
	console.log(array)
})
```

### filter()

- 将数组中符合条件的元素保存到新数组中返回
- 需要一个回调函数作为参数，会为每一个元素去调用回调函数，并根据返回值来决定是否将元素添加到新数组中

```js
let reult = arr.filter(ele => ele>5)
```

### map()

- 根据当前数组生成一个新的数组
- 需要一个回调函数作为参数，回调函数的返回值会成为新的元素
- 非破坏性方法

```js
result = arr.map(ele => "<li>"+ ele +"</li>")
```

### reduce()

- 可以用来将一个数组中的所有元素整合为一个值

```js
arr = [1,2,3,4,5,6,7,8]
arr.reduce((a,b) => {
    /*
    	第一次执行，a=1,b=2
    	第二次执行：a=3,b=3
    	第三次执行：a=6,b=4
    	……
    */
	console.log(a,b);
	return a+b;
})
```

## 可变参数

### arguments

- arguments是函数中又一个隐含数组
- arguments是一个类数组对象（伪数组）
- arguments用来储存函数的实参
  - 无论用户是否定义形参，实参都会储存到arguments对象中
  - 可以通过该对象直接访问实参

```js
function sum(){
    //通过arguments可以不受参数数量限制，更加灵活的创建函数
	let result = 0;
	for(let num of arguements){
		result +=num
	}
	return result
}
```

### 可变参数

在定义函数时可以将参数指定为可变参数

- 可变参数可以接收任意数量参数，并统一储存到一个数组中返回
- 可变参数的作用和arguments基本一致，但是也具有一些不同点：
  - 可变参数的名字可以自己指定
  - 可变参数是一个数组
  - 可变参数可以配合其他参数一起使用，此时需要把可变参数写在最后
    - 如（a,b,...num）

```js
function sum(...num){
	return num.reduce((a,b) => a+b,0)
}
```

## call和apply

调用函数除了通过 函数（）这种形式意外，还可以通过其他的方式来调用函数

- 比如，我们可以通过调用函数的call()和apply()来调用函数
  - 函数.call()
  - 函数.applty()

- call和apply除了可以调用函数，还可以用来指定函数中的this
- call和apply的第一个参数，将会成为函数的this
- 通过call方法调用函数，函数的实参直接在第一个参数后一个一个列出来
- 通过apply方法调用函数，函数的实参需要通过一个数组传递

```js
const obj = {name:'孙悟空'}
function fn(a,b){
	console.log(a,b,this);
}
fn.call(obj,a,b)
fn.apply(obj,[a,b])
```

## bind

bind()是函数的方法，可以用来创建一个新的函数

- bind可以为新函数绑定this
- bind可以为新函数绑定参数
- **箭头函数没有自身的this，它的this是由外层作用域决定的，也无法通过call,apply,bind修改它的this**
- **箭头函数中没有arguments**

```js
function fn(a,b,c){
	console.log("111",this)
	console.log(a,b,c)
}
const obj = {name:'孙悟空'}
const newFn = fn.bind(obj,10,20,30)
```



# 内建对象

## 解构赋值

### 数组

#### 变量多元素少

```js
let [d,e,f,g] = ["唐僧","白骨精","蜘蛛精","玉兔精"];
[d,e,f,g = g] = [1,2,3];
//g = g给g赋值了一个默认值
```

#### 变量少元素多

```js
let [n1,n2,...n] = [4,5,6,7];
```

#### 交换变量的值

```js
[a,b] = [b,a]
```

### 对象

以大括号开头会被解析为代码块

```js
let name,age,gender
({name,age,gender} = obj)
```

### 对象的序列化

- 序列化指将对象转化为一个可以储存的格式
  - 在JS中对象的序列化通常是将一个对象转化为字符串
- 序列化的用途（对象转化为字符串有什么用）：
  - 对象转换为字符串后，可以将字符串在不同的语言之间进行传递
    - 甚至可以对字符串进行读写操作，使得JS对象可以在不同的语言之间传递

- 如何进行序列化
  - 在JS中有一个工具类JSON，JS对象表示法
  - JS对象序列化后会换一个字符串，这个字符串我们称其为JSON字符串

```js
const obj = {
	name:"孙悟空",
	age:18,
}
const str = JSON.stringify(bnj)
//JSON.stringify()可以将一个对象转换为JSON字符串
const obj2 = JSON.parse(str)
//JSON.parse()可以将一个对象转换为JSON对象
```

- 编写JSON的注意事项

  - JSON字符串有两种类型：
    JSON对象{ }

    JSON数组[ ]

  - JSON字符串的属性必须使用双引号引起来

  - JSON中可以使用的属性值（元素）

    - 数字
    - 字符串（双引号）
    - 布尔值
    - 空值
    - 对象
    - 数组

  - JSON的格式和JS对象的格式基本上一致

### 用JSON进行深复制

```js
//对obj进行浅复制
const obj2 = Object.assign({},obj);
//对obj进行深复制
const obj3 = structuredClone(obj);
//利用JSON进行深复制
const str = JSON.stringify(obj);
const obj4 = JSON.parse(str);
const obj5 = JSON.parse(JSON.stringify(obj));
```

## Map

Map用来储存键值对结构的数据（key-value）

Object中存储的数据就可以认为是一种键值对结构

Map和Object的主要区别：

​	Object中的属性只能是字符串或符号

​	Map中任何类型的值都可以称为数据的key

### 创建

new Map()

### 属性和方法

- map.size()获取map中键值对的数量
- map.set(key,value)向map中添加键值对
- map.get(key)根据key获取值
- mao.delete(key)删除指定数据
- map.has(key)检查map是否包含指定键值对
- map.clear()删除全部键值对

## Set

- Set用来创建一个集合
- 功能和数组类似，不同点在于Set中不能储存重复的数组
- 使用方式：
  - 创建
    - new Set()
    - new Set([...])
  - 方法
    - size获取元素
    - add()添加元素
    - has()检查元素
    - delete()删除元素

## Math

Math一个工具类

Math中为我们提供了数学运算的一些常量和方法

常量：

- Math.PI 圆周率

方法：

- Math.abs()求绝对值
- Math.min()求最小值
- Math.max()求最大值
- Math.pow()求x的y次幂
- Math.sqrt()求平方根
- Math.floor()向下取整
- Math.ceil()向上取整
- Math.round()四舍五入
- Math.trunc()去除小数位
- Math.random生成0-1的随机数

## Date

JS中所有的和时间相关的数据都由Date对象来表示

对象的方法

- getFullYear()获取四位数年份
- getMonth()返回当前日期月份
- getDate()返回当前是几日
- getDay()返回是周几
- getTime()返回当前日期时间戳
- Date.now()获取时间戳

## 包装类

在JS中，可以创建原始值的对象

- 通过 new String () 可以创建String类型的对象
- 通过 new Number () 可以创建Number类型的对象
- 通过 new Boolean () 可以创建Boolean类型的对象

### 包装类

JS中有五个包装类

- String-->字符串包装为String对象
- Number-->数值包装为Number对象
- Boolean-->布尔值包装为Boolean对象
- BigInt-->大整数包装为BigInt对象
- Symbol-->符号包装为Symbol对象