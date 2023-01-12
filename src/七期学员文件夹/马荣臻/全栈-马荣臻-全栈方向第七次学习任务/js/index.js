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
var btn = document.querySelector('.btn');
var dialogEmail = document.getElementById('dialogEmail')
var dialogPwd = document.getElementById('dialogPwd')
var li = document.querySelectorAll('li')
var welcome = document.querySelector('.welcome')
var message = document.getElementById('message')
var img = document.querySelector('.img')
p = message.children;
let flag = 0;

btn.onclick = function () {
    /*以下为邮箱验证*/
    var email = document.getElementById('email').value
    var pwd = document.getElementById('pwd').value
    Verify = function (reg, email) {
        if (reg.test(email)) {
            li[flag].style.color = 'green'
            flag++;
            return true;
        }
        else {
            li[flag].style.color = 'red'
            flag++
            return false;
        }
    }
    if (email == '') {
        alert('输入为空！请检查输入！');
        return 0;
    }
    //用（flag=0）来给flag赋值，同时不影响判断。当三次Verify都正确时程序才会继续进行
    //由于刚开始想直接用正则表达式判断三个需求，但直接判断字符串是否只有一个小数点有点困难，这里从反面判断
    //第二个正则表达式是判断字符串有多个小数点的，再进行取反。
    if ((flag = 0) + Verify(/.com$|.cn$/, email) + !Verify(/^(\w|@){0,}\.((\w|@){0,}\.(\w|@){0,}){0,}$/, email) + Verify(/@qq\.|@163\./, email) != 3) {
        dialogEmail.style.display = 'block'
        //由于小数点的判断采取了取反操作，这里需要再反一次
        if (li[1].style.color == 'red') {
            li[1].style.color = 'green'
        }
        else {
            li[1].style.color = 'red'
        }
        return 0;
    }
    else {
        dialogEmail.style.display = 'none'
    }
    /*以上为邮箱验证*/

    /*以下为邮箱匹配及密码验证*/
    for (flag = 0; flag < 3; flag++) {
        if (msg[flag].email === email) {
            console.log('email匹配成功');
            break;
        }
    }
    //flag为3则未匹配到相同的邮箱
    if (flag == 3) {
        alert('无匹配邮箱，请检查输入是否有误')
    }
    //密码验证，密码正确则输出对应信息
    if (msg[flag].password == pwd) {
        dialogPwd.style.display = 'none'
        console.log('密码匹配成功');
        welcome.style.display = 'block'
        img.style.backgroundImage = 'url(' + `${msg[flag].avatar}` + ')'
        p[0].innerHTML = `姓名：${msg[flag].name}`
        p[1].innerHTML = `年龄：${msg[flag].age}`
        p[2].innerHTML = `爱好：${msg[flag].strengths}`
    }
    else {
        dialogPwd.style.display = 'block'
    }
    /*以上为邮箱匹配及密码验证*/
}
