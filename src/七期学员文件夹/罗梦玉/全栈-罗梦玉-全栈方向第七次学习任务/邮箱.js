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

    let email = document.getElementById("email")
    let password = document.getElementById("password")
function login() {
    let judge = /^[a-zA-Z0-9_]+@(qq|163)\.(com|cn)$/g;
    let result = judge.test(email.value)
    if (result == false) {
        alert("请输入正确的邮箱账号")
        return
    }
        
    for (let i = 0; i < msg.length; i++) {
        if (msg[i].email == email.value) {
            if (msg[i].password == password.value) {
                document.getElementById('show').style.visibility = 'visible';
                document.getElementById('image').src = msg[i].avatar
                document.querySelector('.name').innerHTML = "姓名：" + msg[i].name
                document.querySelector('.age').innerHTML = "年龄：" + msg[i].age
                document.querySelector('.speciality').innerHTML = "特长：" + msg[i].strengths
                return
            }
            else {
                alert("密码错误，请再试一次")
                return
            }
        }    
    }
    alert("该邮箱不存在，请重新输入")
}
