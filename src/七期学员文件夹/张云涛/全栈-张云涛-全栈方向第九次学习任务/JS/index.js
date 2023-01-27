// 设置默认baseurl
axios.defaults.baseURL = 'http://api.reginvolver.cn'
// 获取显示时间的盒子
const time = document.getElementById("time");
const text = document.getElementById("text");
// 获取用户名和密码输入框
const userName = document.getElementById("name");
const pwd = document.getElementById("pwd");
// 获取注册按钮和用户列表按钮
const register = document.getElementById("register");
const fetch = document.getElementById("fetch");
// 获取时间
function getTime() {
    axios({
        url: '/common/time',
        method: 'GET',
    })
        .then((res) => text.textContent = `${res.data}`);
}
// 每秒获取一次时间
setInterval(getTime, 1000);
// 点击注册按钮发送注册请求
register.addEventListener("click", () => {
    axios({
        url: '/user/register',
        method: 'POST',
        data: {
            password: `${pwd.value}`,
            username: `${userName.value}`
        },
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
        alert(res.data.msg);                     //提示注册信息
        console.log(res);                        //控制台打印响应报文
    })
})
// 点击获取用户列表
fetch.addEventListener("click", () => {
    axios({
        url: '/user/list',
        method: 'GET',
    })
        .then((res) => {
            // 创建盒子存放用户信息
            const msg = document.createElement("div");
            // 创建列表显示用户信息
            const ul = document.createElement("ul")
            const body = document.getElementsByTagName("body")[0]
            body.appendChild(msg);
            msg.innerHTML = "<span>ID</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> userName</span > "
            msg.appendChild(ul)
            // 循环创建li并将用户信息放入其中
            res.data.data.records.forEach(element => {
                const li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `${element.userId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    ${element.username}`;
            });
            // 10s后删除用户列表
            setTimeout(() => msg.remove(), 10000);
            // 打印响应报文
            console.log(res);
        })
})