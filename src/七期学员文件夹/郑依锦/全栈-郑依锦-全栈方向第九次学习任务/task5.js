const time = document.querySelector('.time span');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const register = document.querySelectorAll('button')[0];
const getList = document.querySelectorAll('button')[1];

axios.defaults.baseURL = "https://api.reginvolver.cn/";

setTimeout(function current_time() {
    axios({
        url: '/common/time',
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(response => {
        time.innerText = `${response.data}`;
    });
    setTimeout(current_time, 1000);
}, 1000);

register.onclick = function () {
    if (!username.value) {
        alert("请输入账号")
    } else if (!password.value) {
        alert("请输入密码")
    } else {
        axios({
            url: '/user/register',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: `${username.value}`,
                password: `${password.value}`
            },
        }).then(response => {
            const res = JSON.stringify(response);
            console.log(`注册报文：${res}`);
        })
    }
}

let flag = 0;
getList.onclick = function () {
    flag = !flag;
    if (flag) {
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        axios({
            url: '/user/list',
            method: 'GET',
            headers: { 'Content_Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            const res = JSON.stringify(response);
            console.log(`获取用户信息列表报文：${res}`);
            let list = response.data.data.records;
            for (ele of list) {
                const li = document.createElement('li');
                li.innerText = ele.username;
                ul.appendChild(li)
            }
        })
    }
    if (!flag) {
        // const ul = document.querySelector('ul');
        document.body.removeChild(document.body.lastChild);
    }
}