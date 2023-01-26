const name1 = document.getElementById('name_na');
const password = document.getElementById('password_pa');
const register = document.getElementById('register');
const getId = document.getElementById('getId');
const time = document.getElementById("getTime");
const xhr = new XMLHttpRequest();
function getTime() {
    xhr.open("get", "https://api.reginvolver.cn/common/time");
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            time.textContent = '当前时间：' + xhr.response;
        }
    }
}
setInterval(getTime, 1000);
register.onclick = function () {
    axios({
        url: '/user/register',
        baseURL: 'https://api.reginvolver.cn/',
        method: 'POST',
        data: {
            password: `${password.value}`,
            username: `${name1.value}`
        },
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
        alert(res.data.msg);
        console.log(res);
    })
}
getId.onclick = function () {
    axios({
        url: "/user/list",
        baseURL: 'https://api.reginvolver.cn/',
        method: "GET",
    })
        .then((res) => {
            const ul = document.getElementById('ul');
            res.data.data.records.forEach((id) => {
                var li = document.createElement('li');
                li.innerText = `${id.username}`
                ul.appendChild(li);
            })
            console.log(res);
        } )
}