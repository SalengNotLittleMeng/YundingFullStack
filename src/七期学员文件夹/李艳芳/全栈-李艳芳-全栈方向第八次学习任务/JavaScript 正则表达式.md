## 一、创建正则表达式

正则表达式（regular expression简称reg）

—正则表达式用来定义一个规则

—通过这个规则计算机可以检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来

—正则表达式也是JS中的一个对象，所以要使用正则表达式，需要先创建正则表达式的对象

**创建方法：**

**1、 **new RegExp( ) 可以接收两个参数（字符串）：1.正则表达式 a（专业名称为 模式 ，即正则表达式的规则）2.匹配模式 i（专业名称为 标识 ）

let reg = new RegExp ("a"，"i") // 通过构造函数来创建一个正则表达式的对象，好处是函数中的 a 可以用来传变量，即可以动态地生成正则表达式

**2、** reg = /a/i    

// 使用字面量来创建正则表达式，该方法只能传入固定的字面量 a ： /正则/匹配模式

**ps： **两种方法在控制台输出的结果都是 /a/i

**注意： **在函数字符串向正则表达式转义时会省略掉一个 \ ，所以要写两个 \ \ ，控制台输出会显示一个 \ 。例如：

reg = new RegExp ( "\ \ w " ) 等价于 reg = / \w / ，结果都是 / \w /

**ps：** typeof reg 的结果为 'object'

**举例：**

```js
//通过正则表达式检查一个字符串是否符合规则
reg = new RegExp("a") // /a/表示检查一个字符串中 是否含有a
let str = "a"
//.test()意思是用前面的reg测试检查后面传入的参数str是否相符,若相符则返回 true,若不一致则返回false
let result = reg.test(str) //true
result = reg.test("b") //false
result = reg.test("abc") //true
result = reg.test("bcabc") //true
console.log(result);
```

**ps:** 这两者效果一样：reg = /a/ 与 reg = new RegExp("a")

## 二、正则表达式的语法

**1、 **在正则表达式中大部分字符都可以直接写

```js
let re = /ab/  // ab必须连在一起且前后位置不变
let result = re.test('ab-c') // true
let result = re.test('acb') // false
```

**2、** | 在正则表达式中表示 或，而且符号前后为整体

```js
let re = /abc|bcd/
let result = re.test('ab') // false
let result = re.test('bcd') // true
```

**3、**[ ] 表示 或（字符集）

/ [ab] / 表示 a 或 b

/ [a-z] / 表示任意小写字母

/ [A-Z] / 表示任意的大写字母

/ [a-zA-Z] / 表示任意的字母，这种情况等价于 / [a-z] /i ，匹配模式 i 表示忽略大小写

/ [0-9] / 表示任意数字

**4、**[^] 表示除了

[^a-z] 表示除了小写字母，即有无小写字母以外的东西

5、[.] 表示除了换行符（\n  ，\r）以外的任意字符

**ps：** 表示任意字符 . 

**6、 **在正则表达式中使用 \ 作为转义字符

```js
re = /\./ //表示 . 
let result = re.test('.') //true
console.log(result)
```

**7、 **其他的字符集

\w 表示任意的单词字符 等价于 [ A-Za-z0-9_ ]

\W 表示除了单词字符 等价于 [ ^A-Za-z0-9_ ]

\d 表示任意数字 [0-9]

\D 表示除了数字 [ ^ 0-9 ]

\s 表示空格 

\S 表示除了空格 

\b 表示单词边界

\B 表示除了单词边界

**8、 **开头和结尾

^ 表示字符串的开头         $ 表示字符串的结尾

```js
re = /^a/ //匹配在开始位置的a
let result = re.test('abc') //true
let result = re.test('ba') //false
console.log(result)
```

```js
re = /a$/ //匹配结束位置的a
let result = re.test('a') //true
let result = re.test('abc') //false
```

```js
re = /^a$/ //只匹配字母a，完全匹配，要求字符串必须和正则完全一致
let result = re.test('aaa') //false
let result = re.test('a') //true
console.log(result)
```

## 三、量词

1、 {m} 表示正好 m 个（有就行）

```js
let re = /a{3}/ // 若改为/^a{3}$/，则结果为false
let result = re.test('aaaa') //true
console.log(result)
```

 **ps:** {m} 只对离它最近的前一个字符有效，可以用 ( ) 表示多个字符的整体

```js
let re = /^(ab){3}$/
let result = re.test('ababab') //true
let result = re.test('aab') //false
console.log(result)
```

```js
let re = /^[a-z]{3}$/ //表示连续三个小写字母
let result = re.test('ababab') //false
let result = re.test('aab') //false
console.log(result)
```

2、 { m, } 表示至少 m 个

3、 { m,n } 表示 m 到 n 个3

4、 + 表示一个以上，相当于 {1,}

5、 * 表示任意数量的字符，有没有都行

6、 ？表示字符出现0到1次

## 四、获取内容

.exec( ) 表示获取字符串中符合正则表达式的内容

```js
let str = "abcaecafcacc"
//提取出str中符合axc格式的内容
let re = /a[a-z]c/i // 用i只匹配第一个
let result = re.exec(str) //['abc',index:0,input:'abcaecafcacc',group:undifined]
console.log(result)
```

```js
let str = "abcaecafcacc"
//提取出str中符合axc格式的内容
let re = /a[a-z]c/ig  // g表示全局匹配，但是一次只匹配一个 
let result = re.exec(str) //['abc',index:0,input:'abcaecafcacc',groups:undifined]
re.exec(str) //['aec',index:3,input:'abcaecafcacc',groups:undifined]  第二次匹配到第二个结果
re.exec(str) //['afc',index:6,input:'abcaecafcacc',groups:undifined]  第三次匹配到第三个结果
re.exec(str) //['acc',index:9,input:'abcaecafcacc',groups:undifined]  第四次匹配到第四个结果
re.exec(str) //null  表示该字符串已经匹配完成 
console.log(result)
```

分组匹配，加括号，显示匹配结果时遵循由前到后、由外层括号到内层括号显示结果

```js
let re = /a(([a-z])c)/ig 
let result = re.exec(str) //['abc','bc','b',index:0,input:'abcaecafcacc',groups:undifined]
result[0] //'abc' 表示整体的匹配结果
result[1] //'bc' 表示第一个括号（第一组）的匹配结果
result[2] //'b' 表示第二个括号（第二组）的匹配结果
console.log(result)
```

可以用循环语句遍历输出匹配结果

```js
let re = /a(([a-z])c)/ig 
let result = re.exec(str) 
while(result){ //表示result有值
    console.log(result[0],result[1],result[2])
    result = re.exec(str)
}
/*结果为 abc bc b
		aec ec e
		afc fc f
		acc cc c*/
```

## 五、字符串

str.split("@") 表示把字符串str根据@位置拆分并获取结果

```js
let str = "孙悟空abc猪八戒adc沙和尚"
let result = str.split(/a[bd]c/) // ['孙悟空'，'猪八戒'，'沙和尚']
console.log(result)
```

.search( ) 可以搜索符合正则表达式的内容第一次在字符串中出现的位置，括号内可以是正则表达式。与 indexof( ) 不同，indexof 后的括号内只能传字符串。search 只能用来搜索而不能获取

.replace( “ ”，“ ” ) 根据正则表达式替换字符串中的指定内容。用后面的替换前面的，前面的内容可以传正则表达式

.match( ) 根据正则表达式去匹配字符串中符合要求的内容。无需遍历多次取结果，一次就能全取完，但不能分组匹配

.matchAll( ) 根据正则表达式去匹配字符串中符合要求的内容（必须设置g 全局匹配）。它返回的是一个迭代器（for、of)

```js
let str
let result = str.matchAll(/ /g)
for(let item of result){
    console.log(item) //item就是匹配到的结果，可以是多个结果
}
```

