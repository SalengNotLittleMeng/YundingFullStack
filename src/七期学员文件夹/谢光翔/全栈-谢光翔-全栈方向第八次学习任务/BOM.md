# BOM

BOM为我们提供了一组对象，通过这组对象可以完成对浏览器的各种操作。

BOM对象：

Window 代表浏览器窗口

Navigator 浏览器对象，可以用来识别浏览器

Location 浏览器的地址栏信息

History 浏览器的历史记录

Screen 屏幕信息

### 1.Navigator

navigator.userAgent 通过userAgent可以判断用户浏览器的类型

navigator.platform 通过platform可以判断浏览器所在的系统平台类型

navigator.online 判断是否联网

### 2.Location

location.assign()跳转到一个新的地址

location.replace(）跳转到一个新的地址（无法通过回退按钮回退)

location.reload() 刷新页面

location. href 获取当前地址

### 3.History

history.back() 与在浏览器点击后退按钮相同

history.forward() 与在浏览器中点击按钮向前相同

history.go(参数) 前进后退功能，参数如果是1前进一个页面，如果是-1后退一个页面，如果是N则前进或后退N个页面

history.length() 保存历史记录的数量

### 4.Screen

screen.height、screen.width：设备的分辨率