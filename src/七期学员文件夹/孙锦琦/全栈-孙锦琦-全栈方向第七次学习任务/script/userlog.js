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
function star() {
    let num1 = document.getElementById("email").value;
    let num2 = document.getElementById("pwd").value;
    check(num1, num2)
}
function check(string1, string2) {
    let i, n = 0;
    for (i = 0; i < string1.length; i++) {
        if (string1[i] == '.')
            n++
    }
    if (n >= 2) {
        console.log('请使用有效邮箱');
        return
    }
    var assess1 = /(@qq|@163)(.com$|.cn$)/
    let a = assess1.test(string1)
    if (!a) {
        console.log('请使用有效邮箱');
    }
    else {
        logStar(string1, string2)
    }
}
function logStar(email, pwd) {
    let num
    let i = 0, j = 0
    for (; j < 3; j++) {
        if (msg[j].email == email) {
            i++
            num = j
        }
        if (msg[j].password == pwd) {
            i++
        }
    }
    if (i >= 2) {
        console.log('登陆成功');
        let wordone = ['姓名：', '年龄:', '特长:']
        let wordtwo = []
        console.log(num)
        let obj = msg[num]
        document.getElementById('img').src = obj.avatar
        document.getElementById('logone').style.visibility = 'visible'
        let x, m = 0
        for (x in obj) {
            wordtwo.push(obj[x])
        }
        wordtwo = wordtwo.slice(0, 3)
        let msgBox = document.getElementById('logtwo')
        for (; m < 3; m++) {
            const div = document.createElement('div')
            div.innerText = wordone[m] + wordtwo[m]
            msgBox.appendChild(div);
        }
    }
    else {
        console.log('邮箱或密码错误');
    }
}