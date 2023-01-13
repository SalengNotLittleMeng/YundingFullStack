# JavaScript（数组）

### 1.数组（Array）

* 数组也是一种复合数据类型，在数组中可以储存多个不同类型的数据

* 数组中储存的是有序的数据，数组中的每一个数据都有一个唯一的索引，可以通过索引来操作获取数据

* 数组中储存的数据叫做元素

* 索引（index）一组大于等于0的整数

* **创建数组**

  注意：**任何类型的值都可以成为数组中的元素**

  创建数组时，尽量要确保数组中存储的数据类型是相同的

  通过Array（）来创建数组，也可以通过[]来创建数组

  ```js
  const arr = new Array()
  //定义一个数组的同时赋值
  const arr2 = [1,2,3,6]  //数组字面量
  
  
  console.log(arr)
  console.log(arr2)
  ```

* **向数组中添加元素**

  语法：数组[索引] = 元素

```js
arr[0] = 10
arr[1] = 22

//构成非连续数组，使用数组时，应该避免非连续数组，因为它的性能不好
arr[99] = 99
```

* **读取数组中的元素**

  语法：

  * 数组[索引]

  * 如果读取了一个不存在的元素，不会报错，而是返回undefined

* console.log(typeof arr)     //Object

* **获取数组长度**

  ```js
  arr.length
  /*
  	获取的实际值就是数组的最大索引 + 1
  	向数组最后添加元素：数组[数组.length] = 元素
  	length是可以修改的，改大了，有空属性元素，改小了多余的元素消失
  ```

  

### 2. 数组的遍历

**遍历数组简单理解，就是获取到数组中的每一个元素**

```js
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

// for循环
// 从前往后遍历
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
//从后往前遍历
for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i])
}
```

```js
/*
	定义一个Person类，类中有两个属性name和age
	   然后创建几个Person对象将其添加到数组中
	   
	   遍历数组，并打印未成年人的信息
*/
class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

const personArr = [
    new Person("孙悟空",18),
    new Person("沙和尚",38),
    new Person("红孩儿",8),
]

for(let i=0; i<personArr.length; i==){
    if(personArr[i].age<18){
    	console.log(personArr[i])
	}
}
```

#### for-of语句用来遍历可迭代的对象

* **语法：**

  for(变量 of 可迭代的对象){

  ​	语句...

  }

* 执行流程：

  * for-of循环体会执行多次，数组中有几个元素就会执行几次
  * 每一次执行时都会将一个元素赋值给变量

```js
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

for(let value of arr){
	console.log(value)
}

for(let value of "hello"){
    console.log(value)
}
```

### 3.数组的方法一(全部非破坏性方法)

* **Array.isArray()**

  用来检查一个对象是否是数组

```js
console.log(Array.isArray({ name: "孙悟空"}))  //false
console.log(Array.isArray([1,2,30])) //true
```

* **arr.at()**

  可以根据索引获取数组中的指定元素

  at 可以接收负索引作为参数

```js
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

console.log(arr.at(-1)) // 唐僧（倒数第一个）
console.log(arr[arr.length-1])  // 等价
```

* **concat（）**

  用来连接两个或多个数组

  非破坏性方法，不会影响原数组，而是返回一个新的数组

```js
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]
const arr2 = ["白骨精","蜘蛛精","玉兔精"]

let result = arr.concat(arr2,["牛魔王","铁扇公主"])

console.log(result)
console.log(arr2)
```

* **indexOf() 和 lastIndexOf()**

  **indexOf()**

  * 获取元素在数组中第一次出现的索引
  * 参数：
    1. 要查询的元素
    2. 查询的起始位置

  **lastIndexOf()**

  * 获取元素在数组中最后一次出现的位置

  **返回值**

  * 找到了返回元素的索引
  * 没有找到返回 -1

```js
const arr = ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"]

let result = arr.indexOf("沙和尚",3)  //返回4
let result = arr.lastIndexOf("沙和尚",3)  //返回2
let result = arr.indexOf("白骨精")  //返回 -1
```

* **join（）**
  * 将一个数组中的元素连接为一个字符串
  * ["孙悟空","猪八戒","沙和尚","唐僧","沙和尚"] ---》”孙悟空，猪八戒，沙和尚，唐僧，沙和尚“
  * 参数：指定一个字符串作为连接符，默认为，连接

```js
result = arr.join("") 
result = arr.join("@") 
```

* **slice()**
  * 用来截取数组（非破坏性方法）
  * 参数：
    1. 截取的起始位置（包括该位置）
    2. 截取的结束位置（不包括该位置）
    3. 第二个参数可以省略不写，如果省略则会一直截取到最后
    4. 索引可以是负值
    5. 如果将两个参数全部省略，则可以对数组进行浅拷贝（浅复制）

```js
const arr = ["孙悟空","猪八戒","沙和尚","唐僧"]

result = arr.slice(0,2) // ["孙悟空","猪八戒"]
result = arr.slice(1,3)  // ["猪八戒","沙和尚"]
result = arr.slice(1,-1)  // ["猪八戒","沙和尚"]
result = arr.slice()

console.log(result)
```

### 4. 对象的复制

* **slice()**

```js
const arr = ["孙悟空","猪八戒","沙和尚"]

// 如何去复制一个对象，复制必须要产生新的对象
// 当调用slice时，会产生一个新的数组对象，从而完成对数组的复制
const arr3 = arr.slice()
arr3[0] = "唐僧" // arr数组内容不会改变

console.log(arr)
console.log(arr3)
```

* **...（展开运算符）**
  1. 可以将一个数组中的元素展开到另一个数组中或者作为函数的参数传递
  2. 通过它也可以对数组进行浅复制

```js
const arr3 = [arr[0],arr[1],arr[2]]
// 等价于
const arr3 = [...arr]


function sum(a,b,c){
    return a + b + c 
}
const arr4 = [10,20,30]
let result = sum(arr4[0],arr4[1],arr4[2])
let result = sum(...arr4)
console.log(result)


const obj = { name:"孙悟空"，age:18 }
const obj3 = {address:"花果山",...obj,age:28}
```

* **Object.assign(目标对象，被复制的对象)**

  将被复制对象中的属性复制到目标对象中，并将目标对象返回

  ```js
  const obj = { name:"孙悟空"，age:18 }
  
  const obj2 = Object.assign({},obj)
  //等价于
  const obj2 = {} // 其中可以写内容，覆盖原有的
  Object.assign(obj2,obj)
  ```

  

### 5. 浅拷贝和深拷贝

* **浅拷贝（shallow copy）**

  1. 通常对对象的拷贝都是浅拷贝

  2. 浅拷贝顾名思义，只对对象的浅层进行复制（只复制一层）

  3. 如果对象中储存的数据是原始值，那么拷贝的深浅并不重要

  4. 浅拷贝只会对对象本身进行复制，不会复制对象中的属性（或元素）

  5. ```js
     //浅拷贝
     const arr = [{name:"孙悟空"},{name:"猪八戒"}]
     const arr2 = arr.slice()
     ```

     

* **深拷贝（deep copy）**

  1. 深拷贝指不仅复制对象本身，还复制对象中的属性和元素

  2. 因为性能问题，通常情况不太使用深拷贝

  3. ```js
     //深拷贝
     const arr = [{name:"孙悟空"},{name:"猪八戒"}]
     const arr3 = structuredClone(arr)
     console.log(arr)
     console.log(arr3)
     ```

     

### 6. 数组的方法二（破坏性方法）

* **push（）**

  * 向数组的末尾添加一个或多个元素，并返回新数组的长度

* **pop()**

  * 删除并返回数组的最后一个元素

  ```js
  const arr = ["孙悟空","猪八戒","沙和尚"]
  
  let result = arr.push("唐僧","白骨精")
  
  console.log(result)  // 5
  
  
  result = arr.pop()
  console.log(result)   //白骨精
  console.log(arr)   // ["孙悟空","猪八戒","沙和尚","唐僧"]
  ```

* **unshift**

  * 向数组的开头添加一个或多个元素，并返回新的长度

* **shift**

  * 删除并返回数组的第一个元素

  ```js
  const arr = ["孙悟空","猪八戒","沙和尚"]
  
  let result = arr.unshift("牛魔王")
  arr.shift()
  
  console.iog(result)
  ```

* **splice**
  * 可以删除，添加，插入，替换数组中的元素
  * 参数：
     		1. 删除的起始位置
     		1. 删除的数量
     		1. 要插入的元素
  * 返回值：返回被删除的元素
* **reverse（）**
  * 反转数组

### 7. 数组去重（练习）

1. 麻烦一点

```js
const arr = [1,2,1,3,2,2,4,5,5,6,]

        // 编写代码，去除数组中重复的元素

        // 分别获取数组中的元素
        for(let i=0; i<=arr.length;i++){
            // 获取当前值后边的所有值
            for(let j=i; j<arr.ength;j++){
                // 判断两个数是否相等
                if(arr[i] === arr[j]){
                    // 出现了重复元素，删除该重复元素
                    arr.slice(j,1)
                    /*
                        当arr[i]和arr[j]相同时，它会自动删除j位置的元素，然后j+1位置的元素，就会变成j位置的元素，而j位置已经比较过了，不会重复比较，所以会出现漏比较的情况

                        解决办法，当删除一个元素后，需要将该位置的元素再比较一遍
                    */
                    j--;
                }
            }
        }
console.log(arr)
```

2. 简单一点

   ```js
   console.log(arr)
   
           const arr = [1, 2, 1, 3, 2, 2, 4, 5, 5, 6]
   
           for (let i = 0; i <= arr.length; i++){
               const index = arr.indexOf(arr[i],i+1)
               if(index !== -1){
                   arr.slice(index, 1)
                   i--
               }
           }
           console.log(arr)
   ```

   

3. 最简单，并不破坏原数组

```js
console.log(arr)

        const arr = [1, 2, 1, 3, 2, 2, 4, 5, 5, 6]

        const newArr = []

        for(let ele of arr){
            if(newArr.indexOf(ele) === -1){
                newArr.push(ele)
            }
        }
        console.log(newArr)
```

### 8. 排序

有一份数组：

[9, 1, 3, 2, 8 ,0 ,5 ,7 ,6, 4]

对代码进行排序

```js
//冒泡排序，最慢的排序方式，数字少还好，数据大了不合适

const arr = [9, 1, 3, 2, 8 ,0 ,5 ,7 ,6, 4]

for(let j = 0;j<arr.length -1 ;j++){
    for(let i=0;i<arr.length - 1 -j;i++){
        // arr[i]前边的元素   arr[i+1]后边的元素
        if(arr[i]<arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
	}
}
console.log(arr)
```

```js
/*
	选择排序
		取出一个元素，然后将其他元素和该元素进行比较，如果其他元素比该元素小则交换两个元素的位置
*/


const arr = [9, 1, 3, 2, 8 ,0 ,5 ,7 ,6, 4]

for(let j = 0;j<arr.length ;j++){
    for(let i=j +1;i<arr.length;i++){
        // arr[i]前边的元素   arr[i+1]后边的元素
        if(arr[j]>arr[i]){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i = temp
        }
	}
}
console.log(arr)
```

