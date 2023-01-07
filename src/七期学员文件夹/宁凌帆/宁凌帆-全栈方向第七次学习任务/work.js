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
let inputWeb = document.querySelector('.inputWeb');
let email = document.querySelector('.email');
let inputEmail = document.querySelector('#email');
let password = document.querySelector('.password');
let inputPassword = document.querySelector('#password');
let button = document.querySelector('button');
let logWeb = document.querySelector('.logWeb');
let message = document.querySelector('.message');
let messageChild = document.querySelectorAll('p');
button.onclick = function () {
    if (inputEmail.value == '') {
        alert('未输入邮箱!');
    }
    if (inputPassword.value == '') {
        alert('未输入密码!');
    }
    const reg = /^[a-zA-Z1-9]{1,}@(qq|163)(.com|.cn)$/;
    let result1 = reg.test(inputEmail.value);
    if (result1 == false) {
        alert('您输入的邮箱不合法，请重新输入');
    }
    let flag = false;
    for (let user of msg) {
        if (user.email == inputEmail.value) {
            flag = true;
            if (user.password == inputPassword.value) {
                inputWeb.style.display = 'none';
                logWeb.style.display = 'block';
                messageChild[0].innerHTML = '姓名：' + user.name;
                messageChild[1].innerHTML = '年龄：' + user.age;
                messageChild[2].innerHTML = '特长：' + user.strengths;
            }
            else {
                alert('您输入的密码错误，请重新输入');
            }
        }
    }
    if (!flag) {
        alert('抱歉，您输入的用户不存在');
    }
}