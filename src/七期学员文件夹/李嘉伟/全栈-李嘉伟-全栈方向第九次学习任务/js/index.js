const time = document.getElementById('time')
const register = document.getElementById('register')
const username = document.getElementById('username')
const password = document.getElementById('password')
const list = document.getElementById('list')
const ul = document.getElementById('ul')

axios.defaults.baseURL = 'https://api.reginvolver.cn/'

//获取当前时间

function getTime() {
    axios({
    method: 'GET',
    url: '/common/time'
}).then((res) => {
    time.innerHTML = res.data
})
}

setInterval(getTime,1000)

//注册用户
register.addEventListener('click', function () {
    axios({
    method: 'POST',
    url: '/user/register',
    data: {
        'password': '995995a',
        'username': '9955'
    }
}).then((res) => {
    console.log(res);
})
})

//展示用户列表
list.addEventListener('click', function () {
    axios({
        method: 'GET',
        url: '/user/list',
    }).then((res) => {
        console.log(res.data.data.records);
        for (i = 0; i < res.data.data.records.length; i++){
            var li = document.createElement('li')
            ul.appendChild(li)
            li.innerHTML = res.data.data.records[i].username
        }
    })
})