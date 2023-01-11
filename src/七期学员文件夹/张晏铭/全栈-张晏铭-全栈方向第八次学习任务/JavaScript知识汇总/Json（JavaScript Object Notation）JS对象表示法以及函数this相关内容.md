## Json（JavaScript Object Notation）JS对象表示法：

**JS对象序列化后会换一个字符串，这个字符串我们称其为JSON字符串**

**（ JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。）**

-编写JSON的注意事项:

#####  	1.JSON字符串有 两种类型:

 		JSON对象{ }

​		 JSON数组[ ]

 

​	  2.JSON字 符串的**属性名**必须使用**双引号**引起来



##### 	 3.JSON中 可以使用的属性值(元素)

​	 	-数字(Number)
 		**-字符串(String) 必须使用双引号**
​		 -布尔值(Boolean)
​		 -空值(Null)
​		 -对象(Object { })
​		 -数组(Array [ ])

#####  	4.JSON的格式和JS对象的格式基本上一致的，

 注意: **JSON字符串**如果属性是最后一个，**则不要再加 逗号**

```javascript
const obj = {name: "zym",age: 18 }

//JSON.stringify( )会将一个对象转化为字符串
const str = JSON.stringify(obj) // str = {"name":"zym","age": 18}

//JSON.parse( )会将一个JSON格式的字符串转化为JS对象
const obj2 = JSON.parse(str)

//也可以自己手写JSON字符串,但并不常用		(记住要使用单引号包起来)
const str = '{"name":"yun","age": 18}'
```

##### 	  5.JSON解析类似于一种**深复制**(即JSON.parse( ))



## 函数this的相关内容：

**根据函数调用方式的不同，this的值也不同:**

   1.以函数形式调用，this是window

2. 以方法形式调用，this是调用方法的对象
3. 构造函数中，this是新建的对象
4. 箭头函数没有自己的this，**由外层作用域决定**
5. 通过call和apply调用的函数， 它们的**第一个参数就是函数的this** **“(可以修改)”**
6. 通过bind返回的函数，**this由bind第一个参数决定   “(无法修改)”**



调用函数除了通过**函数(  )**这种形式外，还可以通过其他的方式来调用函数
					比如，我们可以**通过调用函数的call(  )，apply(  )以及bind(  )来个方法来调用函数**

其主要区别就是他们可以**通过传入参数来改变函数的this**



5.函数.call(  )
   函数.apply(  )

​			-call和apply除了可以调用函数，还可以用来**指定函数中的this**

​			-call和apply的**第一个参数，将会成为函数的this**
​					--通过call方法调用函数，函数的实参直接在“**第一个参数后”一个一个的列出来**
​					--通过apply方法调用函数，函数的实参需要通过**一 个数组**传递

```javascript
const obj = {name:"孙悟空"}
function fn(a,b){
   	console.log(a,b,this)
}
fn.call(obj,1,2)  
fn.apply(obj,[1,2])
//返回结果均为a = 1, b = 2, “this = obj”
//唯一不同的一点是传入参数时的方式不同，一个直接传入，一个放入数组内传入。
```



6.函数.bind( )是函数的方法，可以用来创建一个新的函数

​		-bind可以**为新函数绑定this(无法修改)**

​		-bind可以为新函数绑定参数

```javascript
const obj = {name:"孙悟空"}
function fn(a,b){
   	console.log(a,b,this)
}

fn.bind(obj,1,2) 
// 传入方式与call相同,结果也不变。

// "唯一的不同就是如果你再通过fn.call(obj2)将会报错(无法修改函数this)”
```



#### **注意：**

​			**箭头函数没有自身的this。**

​					-**它的this由外层作用域决定**，也**无法通过call apply和bind修改它的this**

​					-箭头函数中**没有arguments**   (主要用于**可变参数**的相关内容)