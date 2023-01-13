# JS学习内容——零碎知识点

## 1.给HTML用JS插入图片

```javascript
<body>
    <img id="photo">
    <script>
        var photo=document.getElementById("photo");
		photo.src=obj.属性;
	</script>
</body>
```

或

```javascript
<body>
    <img id="photo">
    <script>
        var photo=document.getElementById("photo");
		photo.innerHTML='<img src="images/1.jpg"  width="45px" height="45px">';
	</script>
</body>
```

## 2.正则表达式验证邮箱

本次作业

```javascript
let a = /^[A-Za-z0-9_]+@(qq|163)\.(com|cn)$/g;
        let b = a.test(loginname);
```

常用

```

```

## 3.深复制和浅复制

### 浅复制

仅仅复制变量的地址，所以复制后的内容发生改变时，原来被复制的也会发生改变

方法：

1.for..in..只是循环第一层

2.object.assign方法

3.直接用=赋值

### 深复制

在堆内存离开辟一个新的内存为复制的东西存放值，就是深拷贝。

方法：

1.递归拷贝所有的层级属性

2.通过json实现深拷贝（无法实现对对象的深拷贝，会显示undefined)

3.通过jQuery的extend方法实现深拷贝

```javascript
var array = [1,2,3,4];
var newArray = $.extend(true,[],array); // true为深拷贝，false为浅拷贝
```

4.lodash函数库实现深拷贝

```javascript
let result = _.cloneDeep(test)
```

## 4.排序

### 1.冒泡排序

比较相邻的两个元素，然后根据大小来决定是否交换他们的位置

多次排序，像一个气泡一样，可以升序，可以降序

第一次排序一共要排arr.length-1次 以后再每次-1

**所以i<arr.length-1-i(i从0开始)**

### 2.选择排序

取出一个元素，然后将其他元素和该元素进行比较，如果其他元素比该元素小则改元素小则交换两个元素的位置

![image-20221230163905294](https://tallgao.oss-cn-beijing.aliyuncs.com/image-20221230163905294.png)

