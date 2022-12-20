# 一.二级菜单代码重构

## 	 思路：

​		1.HTML，CSS基本样式的实现（==display:none==)

​		2.JS面向对象

​			创建一个类Menu及其中包含的方法![](E:\流程.png)

​				

​		3.获取一级二级菜单（ `querySelectorAll()`方法 ）

​			转换为数组（Array.from ()方法）

​		4.点击事件监听

​		5.获取容器，执行函数



# 二.滚动监听组件

###  	知识点：

#### 		1.<u>生成滚动条  （ overflow: scroll ）</u>

​			**overflow属性**：**对溢出内容的处理**

​					属性值：（1） visible（默认值）：使溢出内容展示 

​								    （2） hidden：隐藏溢出内容且不出现滚动条 

​      							  （3） scroll：隐藏溢出容器的内容，溢出的内容可以通过滚动呈现 

​								    （4） auto：与scroll没啥区别 



####           2.<u>点击标题跳转到对应文本区域  （锚点）</u>

​			**锚点：实现页内或跨页跳转**

​			==页面内跳转==：（1） 先设置一个锚点链接    （href属性前加==#==）

```html
                     <a href="#HTML">@HTML</a>
```

​                                             在页面中需要的位置设置锚点 

```HTML
					 <a name="HTML"></a>
```

​											（ a标签中要写一个==*name属性*==，属性值要与锚点链接中的href的属性值一样，不加#

​                                                 标签中按需填写相应的文字，一般不写内容）

​				

​									（2）先设置锚点链接

​											 在要跳转到的位置的标签中添加一个==*id属性*==，属性值与href的属性值一样，不加#   

```HTML
				    <h4 id="HTML">HTML</h4>
```

​												（不需要单独添加一个a标签）



​                 ==跳转到其他页面==： 

```HTML
           <a href="file:///……跳转页面的路径……/index.html">跳转到其他页面</a>
```

​                ==跳转到其他页面的指定位置==：	  在路径后面加上指定属性名称

```HTML
           <a href="file:///……跳转页面的路径……/anchor.html#node2">跳转到其他页面的指定位置</a>
```



####      <u>3.事件监听</u>

​		**（1）行内绑定**

​				 在<u>HTML的标签</u>中通过==onclick属性==进行绑定，绑定方式：on+事件名，在将所触发的事件赋值给该属性

```HTML
       <button onclick="alert('123');">点击</button>
```

​		**（2）传统事件绑定方法**

```javascript
window.onload=function(){
    alert("页面加载完毕");
}
document.getElementById("btn").onclick=function(){
    alert("按钮被点击");
}
document.onmousemove=function(){
    console.log("鼠标在移动");
}
```

​				<u>特点</u>：事件名称前一点要加==on== ，如：onclick ，onload

​							兼容主流浏览器，包括低版本的IE

​							当同一个元素绑定多个事件时，只有最后一个事件会被添加

​       **（3）addEventListener()方法**

```javascript
		element.addEventListener(event, function, useCapture)
```

​          ==参数值：==      **event 必须**。字符串，指定事件名。

​                                注意: ==不要使用 “on” 前缀==。 例如，使用 “click” ,而不是使用 “onclick”

​								**function 必须**。指定要事件触发时执行的函数。

​                                        当事件对象会作为第一个参数传入函数。 事件对象的类型取决于特定的事件。

​                                          例如，“click” 事件属于 MouseEvent(鼠标事件) 对象。

​                                **useCapture 可选。**布尔值，指定事件是否在捕获或冒泡阶段执行。



​                       **event事件**：    click     当用户点击某个对象时调用的事件句柄 

​												 mousedown     鼠标按钮被按下 

​												 scroll      当文档被滚动时发生的事件 

​												 unload    用户退出页面 

​												 input        元素获取用户输入时触发 

​												 transitionend     当一个 CSS 动画完成时 



​        **移除监听事件**： emoveEventListener() 方法 



#### 	   <u>4. scrollTop属性</u> 

​				 **代表在有滚动条时，滚动条向下滚动的距离**   也就是元素顶部被遮住部分的高度 

​				 在没有滚动条时scrollTop==0恒成立。单位px，可读可设置。 （检测滚动条滚动后的位置）![](E:\top.png)

​             **scrollHeight**    代表包括当前不可见部分的元素的高度 

​			 **scrollLeft**          对象的最左边到对象在当前窗口显示的范围内的左边的距离．

​                                          即是在出现了==横向滚动条==的情况下，滚动条拉动的距离．



### 作业思路

​        