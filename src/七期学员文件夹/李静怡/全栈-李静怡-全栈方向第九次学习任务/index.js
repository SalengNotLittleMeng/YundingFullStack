const user = document.getElementById("user");
const password = document.getElementById("password");
const register = document.getElementById("register");
const users = document.getElementById("users");

//获取当前时间(xhr)
function getTime() {
    const time = document.getElementById("time");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.reginvolver.cn/common/time');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            time.textContent = xhr.response;
        }
    }
}
setInterval(getTime, 1000); // 重复1s后重新获取时间


//axios
//注册用户
register.onclick = function () {
    axios({
        method: 'POST',
        baseURL :"https://api.reginvolver.cn",
        url: '/user/register',
        headers: { "Content-type": "application/json" },
        data: {
            username: `${user.value}`,
            password: `${password.value}`,
        }
    })
    .then(result => {
        alert(result.data.msg);
        console.log("注册用户报文", result);
    })
    .catch(() => {
        console.log("出错了！");
    })
}

//查找用户列表
users.onclick = function () {
    axios({
        method: 'GET',
        baseURL :"https://api.reginvolver.cn",
        url: '/user/list',
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
    .then(result => {
        result.data.data.records.forEach(element => {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = `${element.userId}
            ${element.username}`;
        });
        console.log("用户列表报文", result);
    })
    .catch((err) => {
        console.log("出错了！", err);
    })
}