alert('你好');
console.log(a);
document.write('hello');

变量中并不存储任何值，而是存储值的内存地址。
let a = 'hello';
console.log(a);

在JS中，使用const声明常量。常量只能声明一次，重复声明会报错。
一般声明常量会用纯大写 就表明其为常量
const PI = 3.14;
cosolen.log(PI);

数值(Number)
 --在JS中所有的整数和浮点数都是Number类型
 --JS中的数值并不是无限大的，当数值超过一定范围后会显示近似值
 --Infinity是一个特殊的数值 表示无穷(他已经表示不出来了)  也是一个字面值
 --小数计算也可能会不精确
 --NaN也是一个特殊的数值，表示非法的数值
let a = 1 - "a"; //NaN (Not a Number)

大整数(BigInt)
 --a = 999999999999999n  (使用n结尾)

其他进制的数字
 二进制  0b      a = 0b1010  当然打印还是统一的十进制
 八进制  0o
 十六进制  0x

typeof运算符
 --typeof用来检查不同的值的类型，它会根据不同的值返回不同的结果
 --检查返回给我们的其实是字符串
let b = 10;     console.log(typeof b);//number
let c = 10n;    console.log(typeof c);//bigint

字符串(String)
 --单引号或者双引号
 --转义字符 \
 --        \' 表示 '
 --        \" 表示 "
模板字符串  使用 ` 来表示模板字符串
 --模板字符串可以嵌入变量
let d = "今天天气真不错" 两个引号必须在同一行，里面的字符串不能换行
let e = `今天天气真不错` 这样可以换行和空格 跟多行注释类似
 --                  let name = "孙悟空";
 --                  let str = `你好，${name}`;
 --                  console.log(str);
 --      let f = 10;
 --      console.log(`f = ${f}`)

布尔值(Boolean)
 --布尔值主要用来进行逻辑判断
 --布尔值只有两个 true 和 false

空值(Null)
 --使用typeof检查一个空值时返回object

未定义(Undefined)
 --当声明一个变量而没有赋值时，它的值就是Undefined

符号(Symbol)
 --用来创建一个唯一的标识
 let a = Symbol() // 调用Symbol()创建了一个符号

JS中原始值一共有七种:
 1.Number 2.Bigint 3.String 4.Boolean 5.Null 6.Undefined 7.Symbol

类型转换
 转换为字符串 2:
     1. 调用toString()方法将其他类型转换为字符串
           -->调用xxx的yyy方法 :  xxx.yyy()
          let a = 10;
          console.log(typeof a, a);
          a = a.toString(); //重新开辟出一个转换后的值后将其地址给a
          console.log(typeof a, a);
          2. 调用String()函数将其他类型转换为字符串//其可以对boolean和null和undefined起作用
               a = String(a);
               转换为数值 4:
               -- 如果字符串不是合法数字，则转换为NaN
               -- 如果字符串是空串""或纯空格串" "，则转换成0
               --true转换为1 false转换为0
               --null转换为0 undefined转换为NaN
               专门用来将字符串转换为数值的两个方法 :
         1. parseInt() -- 将一个字符串转换为一个整数
                 其解析时，会自左向右读取一个字符串，直到读取到字符串里所有的有效数字 123.1就只能转换成123
         2. parseFloat() -- 将一个字符串转换为浮点数
                 其解析时，原理同上。
              转换为布尔值:
          调用Boolean()函数
             1- 0 和 NaN 转换为false
             -- 其余是true
             2- 空串转换为false
             -- 其余是true(包括空格)
             3-null和undefined都转换为false
             --对象通常都会转换为true

运算符  (JS是一门弱类型语言，当进行运算时，会自动进行类型转换来完成运算)
             注意 :
                 算术运算时，除了字符串的加法，其他运算的操作数是非数值时，都会转换成数值然后再运算
     算术运算符
         --除法运算符：x / y 会有小数 也可能给近似值
         --指数运算符：x ** y  (a = 10 ** 2)  表示10的2次方  (a = 9 ** .5)  表示开方
         --加法运算符:   如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。
                          -- 'a' + 'bc' // "abc"
                        如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。
                        在此可以利用其进行(隐式)类型转换，任意类型+一个空串来将其转换成字符串      true + '' //加一个空串
                          --  1 + 'a' // "1a"
                              false + 'a' // "falsea"
                        加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。
                          -- '3' + 4 + 5 // "345"
                              3 + 4 + '5' // "75"
                        除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。
                          --1 - '2' // -1
                            1 * '2' // 2
                            1 / '2' // 0.5
     赋值运算符      类似于C语言
            ??=  表示空赋值
                 只有当变量的值为null或undefined时才会对变量进行赋值
     1元的 ±
            + 正号   不会改变数值的符号 (隐式类型转换)
            - 负号   可以对数值进行符号位取反
                 let b = '123'
                 b = +b // b = Number(b)
          逻辑运算符
                  ! 逻辑非
                      --如果对一个非布尔值进行取反，它会先将其转换为布尔值然后取反，可以利用这个特点隐式转换(!!)
                  && 逻辑与
                      --如果第一个值为false，则直接返回第一个值
                      --如果第一个值为true，则返回第二个值
                  || 逻辑或
                      --如果第一个值为true，则直接返回第一个值
                      --如果第一个值为false，则返回第二个值
          比较运算符
                  这里需要注意与NaN的比较。任何值（包括NaN本身）与NaN比较，返回的都是false。
                  1 <= NaN // false  '1' <= NaN // false  NaN <= NaN // false
          相等运算符
                  JavaScript 提供两种相等运算符：==和===。
                  简单说，它们的区别是相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较。
                          需要注意的是，NaN与任何值都不相等（包括自身）。另外，正0等于负0。
                          NaN === NaN  // false   +0 === -0 // true
                          undefined === undefined // true   null === null // true
                          'true' == true // false  等同于 Number('true') === Number(true)  等同于 NaN === 1
                          '\n  123  \t' == 123 // true  因为字符串转为数字时，省略前置和后置的空格
         代码块
          使用{}来创建代码，代码块可以用来对代码进行分组，同一个代码块中的代码，要么都执行要么都不执行
          let 和 var
                  --在JS中，使用let声明的变量具有块作用域
                          在代码块中声明的变量无法在代码块外部访问
                  --使用var声明的变量不具有块作用域

prompt()函数可以用来获取用户输入的内容
 --字符串
let a =  （+） prompt("请输入: ")
 a = +a    //类型转换

对象
let obj = Object()
obj.name = "孙悟空"
obj.if = "哈哈" //不建议
obj.let = "嘻嘻"//不建议
obj["213213@#$%^"] = "hhhh"//不建议
使用symbol作为属性名，通常是那些不希望被外界访问的属性
let mySymbol = Symbol()
获取这种属性时，也必须使用symbol
obj[mySymbol] = "通过symbol添加的属性"
console.log(obj[mySymbol])
let str = "address"
obj[str] = "花果山"//等价于obj["address"]
以上，使用[]去操作属性，可以使用变量  .不能使用变量 obj.str是表示添加str属性的xxx属性值

枚举
for-in语句(for-in的循环体会执行多次，每次执行时，都会将一个属性名赋值给我们所定义的变量)
let obj = {
  name: "孙悟空",
  age: 18,
  gender: "男",
  address: "花果山",
[Symbol()]:"测试属性"//符号添加的属性不会被枚举
}
for (let propname in obj) {
   console.log(propname, obj[propname])
}

创建一个函数对象     函数也可以成为一个对象的属性
 --   function fn(){

​     }
调用函数
 --  fn()
函数的定义方式：
 1.函数声明
​     function fn(){

​     }
 2.函数表达式
​     const fn = function(){

}
 3.箭头函数
     () =>{         const fn = () =>{

​     }                         }