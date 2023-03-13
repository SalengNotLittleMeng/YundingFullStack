const logIn = document.getElementsByClassName("logIn")[0];
const success = document.getElementsByClassName("success")[0];
const email = document.getElementById("email");
const password = document.getElementById("password");
const log_in = document.getElementById("log_in");
const hint = document.getElementById("hint");
const avatar = document.getElementById("avatar");
const Name = document.getElementById("name");
const age = document.getElementById("age");
const strengths = document.getElementById("strengths");

log_in.onclick = function () {
    const reg = /^\w{1,}@(qq|163).(com|cn)$/;
    let result = reg.test(email.value);
    let flag = false;
    if (!email.value) {
        hint.innerText = "请输入邮箱";
    }
    else if (!password.value) {
        hint.innerText = "请输入密码";
    }
    else if (!result) {
        hint.innerText = "请输入正确的邮箱";
    }
    else {
        for (let user of msg) {
            if (user.email === email.value) {
                flag = true;
                if (user.password != password.value) {
                    hint.innerText = "请输入正确的密码"
                }
                else {
                    hint.innerText = "正在登录中...";
                    setTimeout(function () {
                        logIn.style.display = "none";
                        success.style.display = "block";
                        avatar.src = user.avatar;
                        Name.innerText = "姓名：" + user.name;
                        age.innerText = "年龄：" + user.age;
                        strengths.innerText = "特长: " + user.strengths;
                    }, 1000);
                }
            }
        }
        if (!flag) {
            hint.innerText = "用户不存在";
        }
    }
}

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