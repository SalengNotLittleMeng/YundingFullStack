let btn = document.getElementById('button')
let email = document.getElementById("email");
let password = document.getElementById("password");
let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: 33333
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: 11111
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: 222222
},
]
function check(expression) {
    let reg = /^[A-Za-z0-9_]+@(qq|163)\.(com|cn)$/g
    return reg.test(expression)
}
btn.onclick = function () {
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    if (!check(email.value)) {
        alert('输入的格式不正确');
        return;
    }
    for (let i = 0; i < msg.length; i++) {
        if (msg[i].email == email.value) {
            if (msg[i].password == password.value) {
                shows(i);
                return;
            } else {
                alert("输入的密码不正确");
                return;
            }
        }
    }
    alert("账号不存在");
}

//展示信息的函数
function shows(i) {
    let obj = msg[i]
    document.getElementById('loginni').style.visibility = 'visible'
    document.getElementById('img').src = obj.avatar
    document.querySelector('.name').innerText = obj.name
    document.querySelector('.age').innerText = obj.age
    document.querySelector('.strength').innerText = obj.strengths
}
