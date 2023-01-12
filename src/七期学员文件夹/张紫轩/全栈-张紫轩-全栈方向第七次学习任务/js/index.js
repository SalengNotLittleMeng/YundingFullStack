let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("error");
let icon = document.getElementById("icon");
let wi = document.getElementById("width");
let submit = document.getElementById("submit");
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
email.onfocus = function () {
    icon.style.display = "none";
    error.innerHTML = "";
}
email.onblur = function () {
    let re = /(.cn|.com)$/
    let re1 = /(@qq|@163)(.cn|.com)$/;
    let re2 = /^[^/.]{1,}(.cn|.com)$/
    if (email.value !== "") {
        if (!re.test(email.value)) {
            error.style.color = "red";
            wi.style.width = "330px";
            icon.innerHTML = "&#xe624;";
            icon.style.display = "block";
            error.innerHTML = "结尾为.com或.cn"
        }
        else if (!re1.test(email.value)) {
            error.style.color = "red";
            wi.style.width = "330px";
            icon.innerHTML = "&#xe624;";
            icon.style.display = "block";
            error.innerHTML = ".前为@qq或@163"
        }
        else if (!re2.test(email.value)) {
            error.style.color = "red";
            wi.style.width = "330px";
            icon.innerHTML = "&#xe624;";
            icon.style.display = "block";
            error.innerHTML = "仅包含一个小数点"
        }
        else {
            wi.style.width = "250px";
            icon.innerHTML = "&#xe629;";
            icon.style.display = "block";
            error.style.color = "green";
            error.innerHTML = "验证通过";
        }
    }
}
submit.onclick = function () {
    let temp1 = 1;
    let temp2 = 1;
    for (let str of msg) {
        if (str.email === email.value) {
            temp1 = 0;
            if (str.password == password.value) {
                temp2 = 0;
                if (str.name === "张三")
                    location.assign("zindex.html");
                if (str.name === "李四")
                    location.assign("lindex.html");
                if (str.name === "王五")
                    location.assign("windex.html");
            }
        }
    }
    if (temp1 === 1) {
        alert("该用户不存在");
        temp2 = 0;
    }
    if (temp2 === 1) {
        alert("密码错误");
    }
}
