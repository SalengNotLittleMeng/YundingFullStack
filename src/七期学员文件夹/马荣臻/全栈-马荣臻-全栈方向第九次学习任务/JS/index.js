const time = document.getElementById('time');
const xhr = new XMLHttpRequest();
var register = document.getElementById("register");
var getUserList = document.getElementById('getUserList');
var userList = document.getElementById('userList');

//设置计时器，每隔一秒更新时间

setInterval(function () {
    xhr.open("GET", 'https://api.reginvolver.cn/common/time');
    xhr.responseType = '';
    xhr.send();
    //获取响应后显示时间
    xhr.onload = function () {
        time.innerHTML = `当前时间：${xhr.responseText}`
    }
}, 1000)

//注册点击事件，判断账号密码是否符合要求，再进行请求

register.addEventListener('click', function () {
    var account = document.getElementById('account').value;
    var pwd = document.getElementById('pwd').value;
    if (account.length < 4) {
        alert("账户名称需至少4位")
        return 0;
    }
    if (pwd.length < 4) {
        alert("密码长度需至少6位");
        return 0;
    }
    axios({
        url: 'https://api.reginvolver.cn/user/register',
        method: 'POST',
        data: {
            "password": `${account}`,
            "username": `${pwd}`,
        }
    }).then(function (res) {
        console.log("注册报文", res);
    })
})

//点击后获取用户列表，新建li元素赋值显示

getUserList.addEventListener('click', function () {
    axios({
        url: 'https://api.reginvolver.cn/user/list',
        method: 'GET',
    }).then(function (res) {
        console.log('用户信息列表报文：', res);
        for (let i = 0; i < res.data.data.records.length; i++) {
            const li = document.createElement('li');
            userList.appendChild(li);
            userList.lastElementChild.innerHTML = res.data.data.records[i].username;
        }
    })
})