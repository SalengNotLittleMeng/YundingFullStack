let con = document.getElementById("content"); //初始页面
let ema = document.getElementById("email").value;   //获取邮箱
let pas = document.getElementById("password").value;   //获取密码
let sub = document.getElementById("submit"); //登录按钮
let suc = document.getElementById("success"); //登录成功后的页面
suc.style.display = "none"; //一开始不显示登录成功后的页面

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
] //给定的对象数组

sub.addEventListener('click',checkEmail());//向指定元素sub添加监听事件,即点击登录按钮后的操作
function checkEmail(ema,pas){
    let reg = /^\w+ @(qq|163).(com|cn)$/;//验证邮箱是否合法的正则表达式
    let result = reg.test(ema);
    if(result === false){ //若邮箱格式不合法，则提示用户
        alert("请重新输入正确的邮箱！");
    } 
    for(let i = 0;i < msg.length;i++){ //遍历对象数组
        if(ema === msg[i].email){ //检查邮箱是否存在
            if(pas === msg[i].password){ //检查密码是否与邮箱匹配
                con.innerHTML = ""; //清除登录前的页面内容
                suc.style.display = "block"; //显示登录成功后的页面
                let img = document.getElementById("image"); //用户头像
                img.src = msg[i].avatar;
                let p1 = document.querySelector("p1"); //给三个文本标签添加内容
                let p2 = document.querySelector("p2");
                let p3 = document.querySelector("p3");
                p1.innerHTML ="姓名：${msg[i].name}";
                p2.innerHTML ="年龄：${msg[i].age}";
                p3.innerHTML ="特长：${msg[i].strengths}";
            }
            else{
                alert("邮箱与密码不匹配！");
            }
        }
        else if(i === msg.length){
            alert("不存在该用户！");
        }
    }
}


