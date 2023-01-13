<div align="center" ><font color="blue" size=20px>js知识点总结</font></div>

# 1.数组方法

## 1.1遍历数组

### 1.1.1循环

let arr=['a','b','c','d'];

for(let i = 0 ,len = arr.length；i<len ; i++){

consle.log(i);

console.log(arr[i]);

}

### 1.1.2forEach()

用法

forEach(element,index,array)//当前的元素(必选)  当前元素的索引(可选)  被遍历的数组(可选)

```javascript
let arr = ['a','b','c','d','e'];
arr.forEach((item,index,arr)=> {
 console.log(item); // a b c d e
 console.log(index); // 0 1 2 3 4
 console.log(arr); // ['a','b','c','d','e']
})
```

### 1.1.3for...in

<font color="brown" size="4">for…in循环可用于循环对象和数组</font>,也可以用来遍历json。

```javascript
let obj = {
 name: '王大锤',
 age: '18',
 weight: '70kg'
}
for(var key in obj) {
 console.log(key);  // name age weight
 console.log(obj[key]); // 王大锤 18 70kg
}
----------------------------
let arr = ['a','b','c','d','e'];
for(var key in arr) {
 console.log(key); // 0 1 2 3 4 返回数组索引
 console.log(arr[key]) // a b c d e
}
```

### 1.1.4for...of

<font color="blue" size="5">可循环数组和对象，推荐用于遍历数组。</font>

1.key()--对键名的遍历

2.value()--对键值的遍历

3.entries()--对键值对的遍历

```javascript
let arr = ['a','b','c'];
for (let item of arr) {
 console.log(item); // a b c
}
------------------------------
for (let [item, val] of arr.entries()) {
console.log(item + ':' + val); // 0:a 1：b 2：c

}
```

### 1.1.5map()

<font color="pink">使用方式和 forEach() 方法相同</font>,第二点

```javascript
var arr = [
{name:'a',age:'1'},  
{name:'b',age:'2'},  {name:'c',age:'3'}
];
arr.map(function(item,index) {
if(item.name == 'b') {
console.log(index)
// 1  
}
})
```

## 1.2增删改查

### 1.2.1增

push()

语法：arr.push(ele1,ele2,ele3...)

在arr的<font color="red">最后</font>添加一个或多个元素，<font color="red">返回新数组的长度</font>，**改变原数组**

unshift()

语法：arr.unshift(ele1,ele2,ele3...)

在arr的<font color="red">最开头</font>添加一个或多个元素，<font color="red">返回新数组的长度</font>，**改变原数组**

splice()

语法：splice(index,0,ele1,ele2,...);
从index位置开始向后截取arr，截取0个元素，从index位置开始，插入ele1,ele2,ele3…这些元素,返回新数组。**改变原数组**

concat()

语法:arr.concat(arr1,arr2…);
将一个或多个数组合并到arr中返回合并后的新数组**不改变原数组**

### 1.2.2删

shift()

删除arr的<font color="blue">第一个</font>元素，返回删除的这个元素

pop()

删除arr的<font color="blue">最后一个</font>元素，返回删除的这个元素

splice()

语法：arr.splice(index);

从index位置开始向后截取arr，截取的<font color="blue">所有元素</font>组成 新的一个数组返回，**改变原数组**

语法：arr.splice(index,num);

从index位置开始向后截取arr，截取的<font color="blue">num个元素</font>，组成 新的一个数组返回，**原数组改变**

slice()

语法：arr.slice(index);

从index位置开始向后截取arr，截取的<font color="blue">所有元素</font>组成 新的一个数组返回，**不改变原数组**

语法：arr.slice(startIndex,endIndex);

从index位置向后<font color="blue">截取到endIndex-1位置</font>，截取的所有元素组成新数组返回，**不改变原数组**

### 1.2.3改

splice()

语法：arr.splice(index,num,ele1,ele2…);

从index位置开始向后截取arr，截取num个元素，从index位置开始，插入ele1,ele2,ele3…这些元素,返回新数组。**改变原数组**

### 1.2.4查

indexOf(ele)

语法：arr.indexOf(ele);
从数组<font color="pink">开头</font>查找ele在arr中是否存在 ，如果存在返回所在下标，如果不存在返回-1

语法：arr.indexOf(ele,index);
<font color="pink">从index位置开始向后</font>查找ele在arr中是否存在 ，如果存在返回所在下标，如果不存在返回-1

语法：arr.lastIndexOf(ele);
<font color="pink">从后往前找</font>

includes();(**ES6新增**)

语法：arr.includes(val);
方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的`includes`方法类似。该方法属于ES7，但Babel转码器已经支持。

## 1.3常见方法

### 1.3.1Array.isArray()

用来检查一个对象是否是数组

是返回true

不是返回false

### 1.3.2at()

at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

### 1.3.3join()

join() 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

join(separator)

指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略，数组元素用逗号（`,`）分隔。如果 `separator` 是空字符串（`""`），则所有元素之间都没有任何字符。

返回值

一个所有数组元素连接的字符串。如果 `arr.length` 为 0，则返回空字符串。

### 1.3.4reverse()

反转数组

### 1.3.5sort()

sort用来对数组进行排序（会对改变原数组）

sort默认会将数组升序排列

 **注意：sort默认会按照Unicode编码进行排序，所以如果直接通过sort对数字进行排序可能会得到一个不正确的结果**

参数：

可以传递一个回调函数作为参数，通过回调函数来指定排序规则

​              (a, b) => a - b 升序排列

​              (a, b) => b - a 降序排列

### 1.3.6reduce()

可以用来将一个数组中的所有元素整合为一个值

 参数：

​            1. 回调函数，通过回调函数来指定合并的规则

​            2. 可选参数，初始值

### 1.3.6bind

通3过bind返回的函数，this由bind第一个参数决定（无法修改）

bind() 是函数的方法，可以用来创建一个新的函数

​          bind可以为新函数绑定this

​           bind可以为新函数绑定参数

箭头函数没有自身的this，它的this由外层作用域决定，也无法通过call apply 和 bind修改它的this ,箭头函数中没有arguments

# 2.字符串的方法

## 2.1简介

字符串其本质就是一个字符数组

​          "hello" --> ["h", "e", "l", "l", "o"]

​          字符串的很多方法都和数组是非常类似的

## 2.2方法

str.**length**

 获取字符串的长度

 str[**index**]

 获取指定位置的字符

str.**at**() 

根据索引获取字符，可以接受负索引

str.**charAt**()

根据索引获取字符

str.**concat**()

用来连接两个或多个字符串

str.**includes**()

用来检查字符串中是否包含某个内容

​                有返回true

​                没有返回false

str.**indexOf**()

str.**lastIndexOf**()

查询字符串中是否包含某个内容

str.**startsWith**()

检查一个字符串是否以指定内容开头

str.**endsWith**()

检查一个字符串是否以指定内容结尾

str.**padStart**()

通过添加指定的内容，使字符串保持某个长度

str.**replace**()

使用一个新字符串替换一个指定内容

str.**replaceAll**()  

使用一个新字符串替换所有指定内容

str.**slice**()

对字符串进行切片

str.**substring**()

截取字符串

str.**split**()

用来将一个字符串拆分为一个数组

str.**toLowerCase**()

将字符串转换为小写

str.**toUpperCase**()

将字符串转换为大写

str.**trim**()

去除前后空格

str.**trimStart**()

str.**trimEnd**()

去除结束空格

# 3.对象

## 3.1创建

1》

```javascript
let obj = Object()
 obj.name = "孙悟空"
 obj.age = 18
 obj.gender = "男"
```

2》

```javascript
class Person{
  constructor(name, gender, age) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  hobby(){
    return "我的爱好是打乒乓球，打游戏等等";
  }
  speciality() {
    return "我的特长是乐观";
  }
}
const my = new Person("***", 17, "*");
```

3》

```javascript
function persion(first,last,age,eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
```

<font color="red">删除属性</font>

 delete obj.name

## 3.2封装

```javascript
class Person {
                #name
                #age
                #gender

                constructor(name, age, gender) {
                    this.#name = name
                    this.#age = age
                    this.#gender = gender
                }
                sayHello() {
                    console.log(this.#name)
                }
                // getter方法，用来读取属性
                getName(){
                    return this.#name
                }
                // setter方法，用来设置属性
                setName(name){
                    this.#name = name
                }
                getAge(){
                    return this.#age
                }
                setAge(age){
                    if(age >= 0){
                        this.#age = age
                    }
                }
                get gender(){
                    return this.#gender
                }
                set gender(gender){
                    this.#gender = gender
                }
            }
            const p1 = new Person("孙悟空", 18, "男")
```



## 3.3解构

const obj = { name: "孙悟空", age: 18, gender: "男" }

1）let {name:a, age:b, gender:c, address:d="花果山"} = obj

2）({ name, age, gender } = obj)
