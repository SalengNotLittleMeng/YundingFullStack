let email = document.getElementById("email");
let password = document.getElementById("password");
let sub = document.getElementById("sub");
reg = /^\w*@(qq|163)\.(com|cn)$/
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

let arrEmail = [];
let arrPassword = [];
for (let i = 0; i < msg.length; i++) {
    arrEmail[i] = msg[i].email;
    arrPassword[i] = msg[i].password;
}

email.onblur = function () {
    let result = reg.test(email.value);
    if (result == false) {
        let reg1 = /.(com|cn)$/
        let reg2 = /(\.){1}/
        let reg3 = /@(qq|163)./
        if (reg1.test(email.value)==false) {
            alert("结尾应为.com或.cn");
        }
        if (reg2.test(email.value)==false) {
            alert("邮箱地址应仅包含一个小数点");
        }
        if (reg3.test(email.value)==false) {
            alert("小数点前应为@qq或@163");
        }
        return;
   }
}

sub.onclick = function () {
    let flag = false;
    for (let i = 0; i < msg.length; i++) {
        if (arrEmail[i] == email.value) {
            flag = true;
            if (arrPassword[i] == password.value) {
                location.assign(`${msg[i].name}.html`);
            } else {
                alert("密码输入错误");
            }
        } 
    }
    if(flag == false){
        alert("你不是本平台的用户哦~去看看是不是输入错误了"); 
    }
}