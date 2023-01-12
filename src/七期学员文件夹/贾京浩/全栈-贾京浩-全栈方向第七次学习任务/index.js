let account = document.getElementById('txt');
let judgment = /^[1-9][0-9]{4,}@163.com%|^[a-z]{7,}@qq.com$|^[a-z]{7,}@qq.cn$/;
let result = judgment.test(account);
let btn = document.getElementById('btn');
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
let flag = 0;
let psd = document.getElementById('psd');
let box_hello = document.querySelector('.box_hello');
let box_name = document.querySelector('.box_name');
let box_age = document.querySelector('.box_age');
let box_strengths = document.querySelector('.box_strengths');
let circle = document.querySelector('.circle');
btn.onclick = function () {
    if(result == flase) {
        alert('邮箱格式非法,正确格式为：'+'<br/>'+'1.结尾为.com或.`cn`'+'<br/>'+'2.仅包含一个小数点'+<br/>+'3.小数点前为@`qq`或@163')
    }
    else {
        for (let i = 0; i < 3; i++){
            if ((msg[i].email == account)||msg[i].password == psd) {
                box_hello.innerText = '登录成功';
                box_name.innerText = '姓名：' + msg[i].name;
                box_age.innerText = '年龄：' + msg[i].age;
                box_strengths.innerText = '特长：' + msg[i].strengths;
                circle.style.background = 'url("msg[i].avatar")';
                flag++;
            }
        }
        if (flag == 0) {
            alert('密码输入错误');
        }
    }
}