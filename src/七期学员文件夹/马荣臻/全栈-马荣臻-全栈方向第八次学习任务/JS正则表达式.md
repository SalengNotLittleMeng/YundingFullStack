# 正则表达式

## 简介

- 正则表达式可以定义一个规则

- 通过这个规则计算机可以检查一个字符串是否符合规则
- 或者将字符串中符合规则的内容提取出来
- 正则表达式也是一个对象，要使用正则表达式首先需要创建正则表达式的对象

## 创建

### 构造函数创建

```js
let reg = new RegExp()
//通过构造函数创建一个正则表达式的对象
```

- new RegExp()可以接收两个参数（字符串）
  - 1、模式（正则表达式），规定规则
  - 2、标识（匹配模式）

### 字面量创建

```js
let reg =/a/i
//使用字面量创建正则表达式：/正则/匹配模式	
```

## 使用

```js
reg.test(str);
//通过正则表达式检查一个字符串是否符合规则
```

- 符合规则返回true，不符合规则返回false	
- | 在正则表达式中表示或

```js
let re = /abc|bcd/
```

## 表示方法

- \[ ]表示或（字符集）
  - \[a-z]任意小写字母
  - \[A-Z]任意大写字母
  - \[a-zA-Z]任意字母
  - \[0-9]任意数字

```js
let re = /[abcdefg]/
let re = /[a-z]/
let re = /[a-zA-Z]/
let re = /[a-z]/i
//匹配模式i表示忽略大小写
```

- \[^] 表示除了
  - \[^a-z]除了小写字母

- ​	\.   表示除了换行符（\n,\r）以外的任意字符

- 其他字符集
  - \w任意单词字符<=>[a-zA-Z0-9_]
  - \W除了单词字符
  - \d任意数字
  - \D除了数字
  - \s空格
  - \S除了空格
  - \b单词边界
  - \B除了单词边界

- 开头和结尾
  - ^表示字符串开头
  - $表示字符串结尾

```js
let re = /^a/
//匹配开始位置的a
let re = /a$ /
//匹配结束位置的a
```

## 量词

- \{n}表示n个	

```js
let re = /a{3}/
re.test("aaaa")//true
```

- {n,m}表示n到m个

```js
let re = /^[a-z]{1,}$/
//第二个参数省略，表示一个以上
```

- +表示一个以上，相当于{1,}
- *表示任意数量
- ？0到1次 {0，1}

## 提取

- re.exec()
  - 获取字符串中符合正则表达式的内容

- g表示全局匹配

```
let re = /a[a-z]c/g
```

- ()可以起到分组的效果

## 字符串的正则方法

### 拆分字符串

split()可以根据正则表达式对字符串进行拆分

```js
let str = '孙悟空abc猪八戒adc沙和尚'
let result = str.split(/a[bd]c/)
console.log(result);
```

### 搜索字符串

search()

可以搜索符合正则表达式的内容第一次在字符串中出现的位置

```
result = str.search(/1[3-9]\d{9}/)
```

### 替换字符串

replace()

根据正则表达式替换字符串中的指定内容

```js
result = str.replace(/1[3-9]\d{9}/g,'哈哈哈');
```

### 匹配字符串

match()

根据正则表达式匹配字符串中符合要求的内容

```js
result = str.match(/1[3-9]\d{9}/g)
```

matchAll()

根据正则表达式匹配字符串中符合要求的内容(必须设置g 全局匹配)

返回的是迭代器