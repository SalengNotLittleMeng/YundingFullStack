const rules = /^(\w+)*\w+@(qq|163){1,1}\.(com|cn){1,1}$/
const config = [
    {
        username: "yunding@qq.com",
        name: "张三",
        password: "33333",
        age: 20,
        exp: "JavaScript",
        avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1'
    }, {
        username: "12345678@163.com",
        name: "李四",
        password: "11111",
        age: 19,
        exp: "Python",
        avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1'
    }, {
        username: "yundingshuyuan@qq.cn",
        name: "王五",
        password: "222222",
        age: 18,
        exp: "Java",
        avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1'
    }
]

let submit = document.querySelector("input[type=submit]")
submit.addEventListener('click', event => {
    let user = null
    // 停止默认事件...
    event.preventDefault()
    // 获取账号密码...
    const username = document.querySelector('input[name=username]').value
    const password = document.querySelector('input[name=password]').value

    // 验证输入...
    if (username === '') {
        alert("请输入邮箱...")
        return
    }
    if (password === '') {
        alert("请输入密码...")
        return
    }
    // 判断你的邮箱是否OK哒
    if (!rules.test(username)) {
        alert("邮箱不正确...")
        return
    }
    // 看看有没有这个用户...
    for (const value of config) {
        if (value.username === username) {
            if (value.password === password) {
                user = value
                break
            } else {
                user = ''
                break
            }
        }
    }
    if (user === null) {
        alert("账号不存在...")
        return
    } else if (user === '') {
        // 密码不正确
        alert("密码不正确")
        return
    }
    // 登陆成功解构数据...
    showLogin(user)
})

const showLogin = (config) => {
    // 表单dom移除,显示我的数据
    let form = document.querySelector('form')
    form.remove()

    let show = document.createElement('div')
    show.setAttribute('id', 'app')
    show.innerHTML = html`
            <div class="row">
                <div class="cell flex">
                    <h3 >登陆成功</h3>
                </div>
            </div>

            <div class="row">
                <div class="cell flex">
                    <img src="${config['avatar']}" alt="">
                </div>
            </div>

            <div class="row">
                <div class="cell flex">
                    姓名: <h2 >${config['name']}</h2>
                </div>
            </div>

            <div class="row">
                <div class="cell flex">
                    年龄: <h2 >${config['age']}</h2>
                </div>
            </div>

            <div class="row">
                <div class="cell flex">
                    爱好: <h2 >${config['exp']}</h2>
                </div>
            </div>
        `
    document.querySelector('body').appendChild(show)

}

// 格式化...不让容易注入
const htmlspecialchars = (str) => {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#039;');
    return str
}

const html = (tpl, ...args) => {
    let index = 0
    const nodes = []
    while (true) {
        if (tpl[index] !== void 0) {
            nodes.push(tpl[index])
        } else {
            break
        }
        if (args[index] !== void 0) {
            nodes.push(typeof args[index] == 'string ' ? htmlspecialchars(args[index]) : args[index])
        }
        index++
    }
    return nodes.join("")
}