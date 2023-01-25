//给time绑定事件
function getTime(){
    var xhr = new XMLHttpRequest()  //实例化XMLHttpRequest 对象
    const time = document.getElementById('time');
    xhr.open("GET",  'https://api.reginvolver.cn/common/time', false);  
    //open方法的async参数如果为false，表示要求同步响应，当状态改变时会立即调用onreadystatechange 属性指定的回调函数。
    xhr.send();  //发送请求
    setTimeout(() => {
        time.innerHTML = xhr.responseText;
}, 1000)
}
setInterval(getTime, 1000);


//获取html中的元素
const accountNumber=document.getElementById('accountNumber');
const password=document.getElementById('password');
const register=document.getElementById('register');
const getUser=document.getElementById('getUser');

//注册用户的方式，通过axios的post方法进行创建
//通过添加点击的事件，将输入的信息保存并且进行下次显示在桌面上
register.onclick = function () {
axios({
    url: 'https://api.reginvolver.cn/user/register',
    method: 'POST',
    data: {
        username: `${accountNumber.value}`,
        password: `${password.value}`,
    },
    headers: { 'content-type': 'application/json' }
}).then(res=>{
    console.log('注册报文：',res)
})
.catch((err) => {})
}

//查找用户列表，通过添加事件，将用户注册的信息进行添加
getUser.addEventListener('click', function () {
axios({
    url: 'https://api.reginvolver.cn/user/list',
    method: 'GET',
}).then(res=>{
console.log('用户信息列表报文：', res);
//通过循环将列表在页面中显示出来
//res.data指的是响应的所有事件，而用户获得的数据·则是通过records返回
for (let i = 0; i < res.data.data.records.length; i++) {
    //因为li标签并没有在html页面中显示，所以需要通过创建元素的方式进行在页面中显示
    const li = document.createElement('li');
    biglist.appendChild(li);
    biglist.lastElementChild.innerHTML = res.data.data.records[i].username;
}
}).catch((err)=>{})
})