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


function denglu() {
    let youxiang = document.getElementById("email").value;
    let mima = document.getElementById("massage").value;

    let reg = /^[A-Za-z0-9]+@(qq|163)\.(com|cn)$/g;
    let result = reg.test(youxiang);
    if (result == false) {
        alert("邮箱格式错误")
        return
    }

    for (let i = 0; i < msg.length; i++){
        if (msg[i].email == youxiang) {
            if (msg[i].password == mima) {
                chenggong(i)
                return;
            } else {
                alert("密码错误")
                return
            }
        }
    }

}
function chenggong(index) {
    let obj = msg[index]
    document.getElementById("success").style.visibility = "visible"
    document.querySelector("img").src = obj.avatar
    document.querySelector(".name").innerHTML = "姓名：" + obj.name;
    document.querySelector(".age").innerHTML = "年龄" + obj.age;
    document.querySelector(".strengths").innerHTML= "特长" + obj.strengths;
    return
    }