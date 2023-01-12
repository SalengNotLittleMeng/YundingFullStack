const mails = document.getElementById("mails")
const passwords = document.getElementById("passwords")
const submit = document.getElementById("submit")
const register = document.getElementById("register")
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
    const arr = []
    const re = /\w*@q{2}.com$|\w*@163.com$|\w*@q{2}.cn$|\w*@163.cn$/
    var special = false

submit.onclick = function () {
    arr[0] = mails.value
    arr[1] = passwords.value
    if (re.test(arr[0])) {
        for (let vol of msg) {
            if (vol.email == arr[0]) {
                        special = true
                if (vol.password == arr[1]) {
                    if (vol.name == "张三") {
                    location.assign("index2z.html")
                }
                    if (vol.name == "李四") {
                    location.assign("index2l.html")
                }
                    if (vol.name == "王五") {
                    location.assign("index2w.html")
                }
            }
            
            else {
                alert("密码输入错误，再好好想想叭，干巴得(ง •_•)ง")
                location.reload(true)
            }
        }
        }
        if (special === false) {
            if (confirm("栀夏酱还没有存储有关您的信息，非常抱歉Σヾ(≧へ≦)〃   请注册一个吧。。")) {
                    location.replace("special-index.html")
                }
            }
        
    }

    else if (arr[0] === "") {
        alert("你好像还没有输入内容哦Σ(っ °Д °;)っ")
    }
        
    else {
            alert("邮箱格式输入有问题哦，再检查检查/(ㄒoㄒ)/~~")
            location.reload(true)
        }   
}

register.onclick = function () {
    location.assign("special-index.html")
}