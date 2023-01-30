//获取元素
const time = document.getElementById('time');
const account = document.getElementById('account');
const password = document.getElementById('password');
const sign = document.getElementById('sign');
const user = document.getElementById('user');
const allUser = document.getElementById('allUser')

axios.defaults.baseURL = 'https://api.reginvolver.cn/'

//获取当前时间
function getTime() {
    axios({
        url: '/common/time',
        method: 'GET',
    })
    .then((res) => time.innerHTML = `${res.data}`);
}

//每一秒获取一次
setInterval(getTime, 1000);

//注册用户
function SIGN() {
    axios({
        url: '/user/register',
        method: 'POST',
        date: {
            "password": "password",
            "username": "account",
        }
    })
    .then((res) => { console.log('注册报文',res) })
}

//查找用户列表
function FIND() {
    axios({
        url: '/user/list',
        method: 'GET',
        headers: {'Content-type': 'application/x-www-form-urlencoded'} ,
    })
        .then((res) => {
            console.log('用户信息列表报文', res);
            for (let i = 0; i < res.data.data.records.length; i++){
                var li = document.createElement('li');
                allUser.appendChild(li);
                li.innerHTML = res.data.data.records[i].username;
            }
    })
}