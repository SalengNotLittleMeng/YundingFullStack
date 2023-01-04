let msg = [
    {
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
const form = document.getElementsByTagName("form")[0]
const login = document.getElementById("login")
login.onclick = function () {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const tips = document.getElementById("tips")
    tips.textContent = ""
    //检验邮箱及密码是否输入
    if (email.value == "") {
        tips.textContent = "你还没有输入邮箱！"
        setTimeout(() => {
            tips.textContent = ""
        }, 4000);
        throw ("no email")
    }
    if (email.value == "" || password.value == "") {
        tips.textContent = "你还没有输入密码！"
        setTimeout(() => {
            tips.textContent = ""
        }, 5000);
        throw ("no password")
    }
    //正则表达式检验邮箱是否合法
    const reg = /^\w{1,}@(qq|163).(com|cn)$/
    let result = reg.test(email.value)
    if (result == false) {
        tips.textContent = "你输入的邮箱账号不合法，请重新输入。"
        setTimeout(() => {
            tips.textContent = ""
        }, 5000);
        throw ("Error:Not a email")
    }
    console.log(email.value);
    let userFlag = false
    for (let user of msg) {
        if (user.email == email.value) {
            userFlag = true
            if (user.password != password.value) {
                tips.textContent = "你输入的密码不正确，请重新输入。"
                setTimeout(() => {
                    tips.textContent = ""
                }, 5000);
                throw ("password error")
            }
            else {
                const loginPage = document.getElementById("loginPage")
                const p=document.getElementsByTagName("p")
                form.style.display = "none"
                loginPage.style.display = "block"
                p[0].textContent = "姓名："+user.name
                p[1].textContent = "年龄："+user.age
                p[2].textContent = "特长: "+user.strengths
            }
        }
    }
    if (userFlag == false) {
        tips.textContent = "该用户不存在"
        setTimeout(() => {
            tips.textContent = ""
        }, 4000);
    }
}