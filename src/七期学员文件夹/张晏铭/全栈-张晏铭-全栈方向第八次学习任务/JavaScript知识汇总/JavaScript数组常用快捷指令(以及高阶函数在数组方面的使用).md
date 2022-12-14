# JavaScript数组常用快捷指令(以及高阶函数在数组方面的使用)：

#### 1.for-of语句可以用来遍历可迭代对象：

 --语法:
​ for(变量 of 可迭代的对象){
​ 语句…
​ }
​ --执行流程:
​ for-of的循环体会执行多次，数组中有几个元素就会执行几次，
​ **每次执行时都会将一个元素赋值给变量**

```javascript
const arr = [1,2,3,4,5]
for(let value of arr){
    console.log(value)
  }
```

#### 2.数组基础指令：

```javascript
Array.isArray()
//用来检查一个对象是否是数组
//eg:	Array.isArray(arr)


at()
//可以根据索引获取数组中的指定元素
//at可以接收负索引作为参数
//eg:	arr.at(0)

concat()
//用来连接两个或多个数组
//eg:  let brr = arr1.concat(arr2) 
```

#### 3.数组内与各元素相关的指令：

```javascript
index0f()
-获取元素在数组中第一次出现的索引
    -参数:1.要查询的元素2.查询的其实位置
"{找到了则返回元素的索引,没有找到返回-1}"


lastIndexOf()
-获取元素在数组中最后一次出现的索引


join()-将一个数组中的元素连接为一个字符串
		[1,2,3,4,5] -> "12345"
参数:
	指定一个字符串作为"连接符"


slice()   "[c,b)"
  -用来截取数组(非破坏性方法)
  -参数:
	1.截取的"起始"位置"(包括该位置)"
	2.截取的"结束"位置"(不包括该位置)"


push()
-向数组的"末尾"添加一个或多个元素，并返回新的长度


pop()
-删除并返回数组的最后一个元素 //注意pop是与push配合使用,它只能去影响“push的元素”


unshift()
-向数组的"开头"添加一个或多个元素，并返回新的长度


shift()
-删除并返回数组的第一个元素 //注意shift是与unshift配合使用,它只能去影响“unshift的元素”


splice()  //注意他是对数组的一种破坏,会改变数组内的元素
//粗略地说它可以说是与slice互补（本质并不同）
-可以"删除、插入、替换"数组中的元素
-参数:
1.删除的"起始位置"
2.删除的"数量"
3."要插入"的元素
-返回值:
	返回"被删除"的元素.
/*eg:  const arr =[1,2,3,4,5,6]
		arr.splice(0,2,10)  意思是从索引0处开始删除两个元素(1,2),并在删除位置加入“10” */
    
for-of遍历数组
//eg:
	for ( let vol of arr ) {
        console.log(vol)
	} 				//arr的每一个值都将会被赋值给vol
    
 reverse()
	-反转数组
```

#### 4.数组的浅复制(浅拷贝)与深复制(深拷贝)：

浅拷贝(shallow copy)
通常对对象的拷贝都是浅拷贝
-浅拷贝顾名思义，只对对象的浅层进行复制(只复制一层)
-如果对象中存储的数据是原始值，那么拷贝的深浅是不重要
-浅拷贝只会对对象本身进行复制，**不会复制对象中的属性(或元素)**

深拷贝(deep copy)
-深拷贝指不仅复制对象本身，**还复制对象中的属性和元素**
-因为性能问题，**通常情况不太使用深拷贝**

对象的复制

object.assign(目标对象,被复制的对象)
-将被复制对象中的属性复制到目标对象里，并将目标对象返回

```javascript
//浅拷贝的一种方式

slice()  //不标记范围的话将会截取全部数组，即进行浅复制

//浅拷贝的另外一种方式，也是最常用的最便利的

...(展开运算符)
//可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递
  const arr3 = [...arr]


//深拷贝
const arr3 = structuredClone(arr)  //专门用来深拷贝的方法

//对象的复制
const obj = {name:"zym",age:18}
const obj2 = {}
object.assign(obj2,obj)
//也可直接运用...(展开运算符)进行复制
```







#### 5.函数在数组内的应用：

```javascript
sort()  //“会破坏数组”
  - 用来对数组进行排序(会对改变原数组)
	  sort默认会将数组升序排列
(注:sort默认会按照Unicode编码进行排序，所以如果直接通过sort对数字进行排序可能会得到一个不正确的结果)
  -参数:
     一可以传递一个回调函数作为参数，通过回调函数来指定排序规则
			(a,b)=>a-b升序排列.	 //eg: arr.sort((a,b) => a-b)
			(a,b)=>b-a降序排列.


forEach()
	-用来遍历"数组"
	-它需要一个回调函数作为参数，这个回调函数会被调用多次
	//数组中有几个元素，回调函数就会调用几次。每次调用，都会将数组中的数据作为参数传递
	-回调函数中有三个参数:
		element当前的元素
		index当前元素的索引
		array被遍历的数组

//eg:  arr.forEach((a,b,c) => {console.log(a,b,c)})  
        /* 也可只获取一个数据，仅需改变箭头后的想要传达的参数即可 (一一对应) */


filter() //非破坏性方法，不会影响原数组
   -将数组中"符合条件的元素"保存到一个新数组中返回
   -需要一个回调函数作为参数，"会为每一个元素去调用回调函数"，并根据返回值来决定是否将元素添加到新数组中

//eg: const brr = arr.filter(a => a > 100) 
   		/* 即数组中的符合 >100的元素将被筛选出来放到新数组中 */


map()   //非破坏性方法不会影响原数组
	-根据当前数组生成一个"新数组"
	-需要一个回调函数作为参数,"回调函数的返回值会成为新数组中的元素"

//eg: const brr = arr.map(a => a*2)  
		/* 类似于对原数组的每个数据都乘以2并收纳到同一个数组内 */


reduce()
	-可以用来将一个数组中的所有元素整合为一个值
		-参数:
			1.回调函数，通过回调函数来指定"合并的规则"
			2."可选参数"，初始值

//eg: arr.reduce((a,b) => a+b,"想要添加的参数")  
         /* 箭头前方代表用数组中的数据给a,b赋值，后方代表对数据进行的操作（顺序进行的操作）*/
```

#### 6.数组的解构(关键在于数据的一一对应)：

```javascript
let [a,b,c] = [1,2,3]
//结果就是 a = 1; b = 2; c = 3.

let [a,b,...c] = [1,2,3,4,5,9,6,7]
//解构数组时,也可以用...来将后方多余的数据保存在同一个数组中。

//也可以用数组的解构原理来交换数值。
let a = 1000
let b = 2000
[a,b] = [b,a]   //前面的a,b代表着a,b这两个对象,而后面的a,b代表着a,b所代表的数据。
```

#### 补充：对象的解构：

对象的解构**与数组的解构相似,也需要数据一 一对应**

但其仍具有一些不同点：

```javascript
let obj = {name:"zym",age:18,gender:"nan"} 

let {name,age,gender} = obj 	//声明变量同时解构对象
let name,age,gender
;({name,age,gender} = obj)    
		/* 先声明变量再解构对象时,要给整体再加上一个括号，以保证JS对于代码的解读的正确性(JS会将{}开头的情况判定为一个独立代码块而导致无法正常执行代码) */

//最为重要的一点：
/*	 对象在解构时应该注意, "需要对应属性名相同", 不同将无法进行解构	 */
//例如我们可以利用这一特征 {target} = event.target 来获取触发事件的对象。

//没有的属性返回undefined
```