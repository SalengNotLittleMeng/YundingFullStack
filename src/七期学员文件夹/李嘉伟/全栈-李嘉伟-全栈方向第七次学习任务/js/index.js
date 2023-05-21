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

let reg = /^\w+@(qq|163)+\.(com|cn)$/;

let boxOne = document.querySelector('.boxOne')
let email = document.getElementById('email')
let password = document.getElementById('password');
let boxTwo = document.querySelector('.boxTwo');
let button = document.querySelector('button');
let name = document.querySelector('.name')
let age = document.querySelector('.age')
let strengths = document.querySelector('.strengths')
let photo = document.querySelector('.photo')


button.addEventListener('click', function () {
    if (reg.test(email.value)) {
        for (i = 0; i < msg.length; i++) {
            if (email.value == msg[i].email && password.value == msg[i].password) {
                boxOne.style.display = "none"
                boxTwo.style.display = "block"
                alert("密码正确，登录成功");
                photo.src = msg[i].avatar;
                name.innerText = "姓名：" + msg[i].name;
                age.innerText = "年龄：" + msg[i].age;
                strengths.innerText = "特长：" + msg[i].strengths;
                break;
            }
            else {
                alert("账号或密码错误,请重新输入");
                break;
            }
        }
    } else {
        alert("邮箱格式错误，请重新输入");
    }
})