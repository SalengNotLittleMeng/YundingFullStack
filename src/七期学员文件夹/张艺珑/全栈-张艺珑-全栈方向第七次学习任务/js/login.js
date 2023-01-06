// 用户信息对象数组
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

//获取对象
let login = document.getElementById('login');
let email = document.getElementsByClassName("email")[0];
let password = document.getElementsByClassName('password')[0];
let show = document.getElementsByClassName('iconfont')[0];
let user = document.getElementById("userMessage");
let [h2, img, p1, p2, p3] = user.children;
// 绑定事件
let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', () => {
    check(email.value, password.value);
})
show.addEventListener('click', () => {
    if(show.className === 'iconfont icon-biyan') {
        show.classList.replace("icon-biyan", "icon-zhengyan");
        password.type = "text";
    } else {
        show.classList.replace("icon-zhengyan", "icon-biyan");
        password.type = "password";
    }
})

// 定义正则表达式以及检测函数
function check(email, password) {
    let reg = /^\w+(@qq|@163)(.com|.cn)$/;
    // 检查邮箱格式是否正确
    if (reg.test(email) === false) {
        alert('邮箱格式错误，请重新输入');
    } else {
        // 循环遍历
        for (var num = 0; num < msg.length; num++) {
            // 查看邮箱是否存在
            if (email === msg[num].email) {

                // 邮箱与密码是否匹配
                if (password == msg[num].password) {
                    // 所有都匹配则执行以下代码
                    login.style.display = "none";
                    user.style.display = "block";
                    img.src = msg[num].avatar;
                    p1.textContent = `姓名：${msg[num].name}`;
                    p2.textContent = `年龄：${msg[num].age}`;
                    p3.textContent = `特长：${msg[num].strengths}`;
                } else {
                    alert('邮箱与密码不匹配，请重新输入');
                }
                break;
            } 
        }
        if (num === msg.length) {
            alert('邮箱不存在，请重新输入');
        }

    }
}
