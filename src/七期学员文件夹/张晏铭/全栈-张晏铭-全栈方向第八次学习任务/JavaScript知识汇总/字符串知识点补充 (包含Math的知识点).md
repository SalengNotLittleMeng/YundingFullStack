# 字符串知识点补充：



#### **字符串其本质就是一个字符数组（字符串的很多方法都和数组是非常类似的)**



```javascript
//属性和方法:

str.length
	-获取字符串的长度

str[] 
	-获取指定位置的字符

str.at() (实验方法)
	-根据索引获取字符，可以接受"负索引"

const str3 = str1.concat(str2)
	-用来连接两个或多个字符串

str.includes()
	-用来检查字符串中是否"包含"某个内容(有返回true,没有返回false)

str.index0f()
str.lastIndex0f()
	-查询字符串中是否包含某个内容

str.startsWith()
	-检查一个字符串是否以指定内容开头

str.endsWith()
	-检查一个字符串是否以指定内容结尾

str.padStart()
	-通过在开头添加指定的内容，使字符串"保持某个长度"
	-两个参数：第一个表示字符串长度,第二个表示想要替补空缺的内容
//eg: let str = "100"  
//	  console.log(str.padStart(10,1))  
		/* 字符串100前方将出现”7个1“来保证长度为10 */


str.padEnd()
	-通过在结尾添加指定的内容，使字符串"保持某个长度"


str.replace()
	-使用一个新字符串"替换一个"指定内容
	-两个参数：第一个表示想要替换的内容,第二个表示新的内容。
//eg: let str = "hello myself"  
//	  console.log(str.replace("myself","yourself")) 
		/* 结果将变为”hello yourself“ */
str.replaceAll()
	-使用一个新字符串"替换所有"指定内容


str.slice() //   [a,b)
	-对字符串进行切片
str.substring() // 与slice作用相同,但其前后范围可颠倒,会自动识别  eg:(2,3) 可以写成 (3,2)
	-截取字符串


str.split() 
	-用来将一个字符串拆分为一个数组
	-一个参数：表示想要"以什么为拆分点"
//eg: let str = "aa@db@cb@ad"
//	  console.log(str.split("@"))   
		/*如果不写入拆分点,将会以一个单位为一个拆分点。结果将变为[a,a,@,d,b,...] */
		/* 结果将显示为[aa,db,cb,ad] */


str.toLowerCase()
	-将字符串转换为小写
str.toUpperCase()
	-将字符串转换为大写


str.trim() 
	-去除前后空格
str.trimStart()
	-去除开始空格
str.trimEnd()
	-去除结束空格
//eg: let str = "    abc"
//	  console.log(str.trim())  
		/* 结果将为"abc",空格将自动被去除 */
```

# Math的魅力：

**Math中为我们提供了数学运算相关的一 些常量和方法**

```javascript
//常量:
Math.PI圆周率

//方法:
Math.abs()
    -求一个数的绝对值

Math.min()
    -求多个值中的最小值
	-括号内填入"需要判断的数字"   //无法填入数组。。。

Math.max()
    -求多个值中的最大值

Math.pow()
    -求x的y次幂
	-两个参数：第一个表示为底数即x,第二个表示为幂。
//eg: Math.pow(4,2) === 16

Math.sqrt() // 类似于 Math.pow(   , 0.5)
    -求一个数的平方根

Math.floor() //eg：1.99999,	1.1,	1.2,	1.909	"都会取成1"
    -向下取整

Math.ceil() //与floor相反 1.99999,	1.1,	1.2,	1.909 "都会取成2"
    -向上取整

Math.round() //顾名思义.
    -四舍五入取整

Math.trunc() //不管小数位大小,直接取整
    -直接去除小数位


Math.random() 
	//虽说生成 0 - 1 的随机数但是并不会生成0和1,"即均为开区间"。
	-生成一个0 - 1之间的随机数

//eg: 想要生成1 - 6 的随机数(包括1和6)  /* 方法的配合使用 */
    // console.log(   Math.round((Math.random()*5 + 1))   )
```