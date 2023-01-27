// 获取时间
const time = document.getElementById('time')
function getTime() {
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'https://api.reginvolver.cn/common/time')
    xhr.send()
    xhr.onload = function () {
        if (xhr.status === 200) {
            // console.log(xhr.response)
            time.textContent = xhr.response
        }
    }
}
setInterval(getTime, 1000)

// 注册操作
const username = document.getElementById('username')
const password = document.getElementById('password')
const regist = document.getElementById('regist')
axios.defaults.baseURL = "https://api.reginvolver.cn"
regist.onclick = function () {
    axios({
        // method: 'post',
        url: '/user/register',
        method: 'POST',
        headers: { "Content-type": "application/json" },
        data: {
            username: `${username.value}`,
            password: `${password.value}`
        }
    }).then(res => {
        alert('注册成功！！')
        console.log('注册报文', res)
    })
}

// 获取用户列表操作
const getUserList = document.getElementById('getUserList')
const list = document.getElementById('list')
getUserList.addEventListener('click', function () {
    axios({
        url: '/user/list',
        method: 'GET',
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    }).then((res) => {
        console.log('用户信息列表报文：', res)
        for (let i = 0; i < res.data.data.records.length; i++) {
            const li = document.createElement('li')
            list.appendChild(li)
            list.lastElementChild.innerHTML = res.data.data.records[i].username
        }
    })
})