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
    }]
console.log(msg[0].age);
function myFunction() {
    var loginname = document.getElementById("username").value;
    var password = document.getElementById("password").value;  
    function check(loginname,password) {
        let a = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.(com|cn)$)/;
        let b = a.test(loginname);
        if (b !=false) {
            alert("您输入的邮箱：" + loginname + "符合规范！");
            function login(loginname, password) {
                for (let i = 0; i < msg.length ; i++){
                    if (loginname== msg[i].email&&password==msg[i].password) {
                        document.getElementById("information").innerHTML = "登陆成功！" + "</br>" + "<img src = msg[0].avatar>" + "</br>" + "姓名：" + msg[0].name + "</br>" + "年龄：" + msg[0].age + "</br>" + "特长：" + msg[0].strengths;
                    }
                    else if (loginname == msg[i].email && password != msg[i].password) {
                        document.getElementById("information").innerHTML = "您输入的密码不正确！";
                    }
                    else if(loginname != msg[i].email) {
                        document.getElementById("information").innerHTML = "您输入的用户不存在！";
                    }
                }
            }
            login(loginname, password);
        }
        else {
            alert("您输入的邮箱不符合规范！请重新输入！");
        }
    }
    check(loginname, password);
}