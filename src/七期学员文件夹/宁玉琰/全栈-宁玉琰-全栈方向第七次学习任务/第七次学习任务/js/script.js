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
},]
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!check(email)) {
        alert('email格式错误');
        return;
    }
    for (let i = 0; i < msg.length; i++) {
        if (msg[i].email == email) {
            if (msg[i].password == password) {
                show(i);
               
                return;
                
            }
            else {
                alert("密码错误");
                return;
            }
        }
    }
    alert('账号不存在');

}
function check(str) {
    let reg = /^[A-Za-z0-9_]+@(qq|163)\.(com|cn)$/g;
    return reg.test(str)
}
function show(index) {
  
    let obj = msg[index];
    document.getElementById('success-box').style.visibility = 'visible';
    document.getElementById('img').src = obj.avatar;
     
    document.querySelector(".name").innerText="姓名："+obj.name;
    document.querySelector(".age").innerText="年龄："+obj.age;
    document.querySelector(".strengths").innerText="特长："+obj.strengths;
    /*let key = ['name', 'age', 'strengths'];
    let value = [];
    for (val in obj) {
        value.push(obj[val]);
    }
    value = value.slice(0, key.length);
    let msgbox = document.getElementById('msg-box');
    for (let i = 0; i < key.length; i++) {
        const div = document.createElement('div');
        div.innerText = `${key[i]}` + `${value[i]}`;
        msgbox.appendChild(div);*/
    }
