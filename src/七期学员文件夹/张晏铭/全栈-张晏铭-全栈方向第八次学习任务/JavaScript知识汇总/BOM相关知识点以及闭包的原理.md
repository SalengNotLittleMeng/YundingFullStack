# BOM相关知识点：

​	-BOM主要用于**对浏览器的各种操作**。

​	-BOM对象：

​			-Window  => 代表浏览器的窗口(即全局对象)

​			-Navigator => 浏览器的对象(主要用来识别浏览器)

​			**-Location => 浏览器的地址栏信息**

​			**-History => 浏览器的历史记录**

​			-Screen => 屏幕的信息 

```javascript
location = "http://bilibili.com/" 	
	//可以直接给location赋值

location.assign = "http://bilibili.com/"	
	//与直接赋值的原理相同,但并不会直接跳转.可以用于登录时的操作 “可回退”

location.replace = "http://bilibili.com/"
	//与直接赋值的原理相同,但并不会直接跳转.可以用于登录时的操作 “但是不可回退”

location.reload( )
	//刷新页面,可以用来登录页面时信息输入错误的情况下的操作
	//注：可以传入true来强制清除缓存并刷新。


history.back( )
	//回退到上一次的页面

histroy.forward( )
	//前进到上次的页面

history.go( )
	//可回退可前进,back与forward的结合体。
			//例如传入-1就是回退到上一次的页面,1就是前进。
```

# 闭包(隐藏一些不想让他人所访问的内容)：

闭包就是能访问到**外部函数作用域中变量**的函数

​			*构成闭包的条件:

​						1.**函数的嵌套**

​						2.内部函数要引用外部函数中的变量

​						3.内部函数要作为**返回值返回**



```javascript
function fn(){
    let num = 10
    return () => {
        console.log("num = ", ++num)
    }
}

fn() //只调用一次是将会显示内部函数,因为外部函数return的是内部函数整体,因此要调用两次函数

fn()()  //当我们调用函数时num = 11

/* 当我们在外部函数外部添加console.log(num)时将会报错,因为num并没有在全局定义,这就达到了闭包的目的*/
```

![QQ图片20230111095743](https://roninz.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720230111095743.png)

其主要原理就是运用了**函数的局部作用域**的特征, 以及会在**外部查找所需数据**的特点

​					这同时也保证了**闭包之间的相互独立**互不影响。

