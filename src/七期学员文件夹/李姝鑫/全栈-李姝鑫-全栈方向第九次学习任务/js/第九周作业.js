const time = document.getElementById('time');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.reginvolver.cn/common/time')
xhr.send()
xhr.onload = function () {
    if (xhr.status == 200) {
        time.innerHTML = `${xhr.response}`
    }
}

const zhanghao = document.getElementById('zhamghao')
const password = document.getElementById('password')
const register = doncument.getElementById('register')
register.onclick = function () {
    axios({
        method: 'post',
        url: 'https://api.reginvolver.cn/user/register',
        Headers: { "Content-type": "application/json" },
        data: {
            "zhanghao": `${zhanghao.value}`,
            "password": `${password.value}`,
        }
    })
    .then(function (response) {
        alert(response.data.msg)
        console.log("注册报文",response);
    })
        .catch(function (error) {
            console.log(error);
    })
}

const message = document.getElementById('message')
message.onclick = function () {
    axios({
        method: 'GET',
        url: 'https://api.reginvolver.cn//user/list',
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (response) {
            const getusers = document.getElementById('gets')
        response.data.data.records.array.forEach(element => {
            const show = document.createElement('div')
            getusers.appendChild(show);
            show.innerHTML = `${element.userId},${element.username}`
        });

            console.log("用户列表报文",response);
        })
}