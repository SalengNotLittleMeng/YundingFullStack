
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

var btn = document.querySelectorAll('button')[0]
var info = document.querySelectorAll('p')
var img = document.querySelector('img')
let pattern = /@163.com$|@163.cn$|@qq.com$|@qq.cn$/g
let pattern2 = /\./g
btn.onclick = function(){
   var container = document.querySelector('.container')
   var signup = document.querySelector('.sign-up') 
   console.log(container);
    var email = document.getElementById('email').value
    var pwd = document.getElementById('pwd').value
    var labelemail = document.getElementById('E')
    var labelpwd = document.getElementById('P')
    //  console.log(typeof email);
    if(pattern.test(email)){
        if(pattern2.test(email)){
            //遍历msg数组寻找是否是已存在email
            for(let i = 0;i < msg.length;i++){
                //如果是则判断pwd是否正确
                if(msg[i].email === email){
                    pwd = Number(pwd)
                    if(msg[i].password === pwd){
                        container.style.display = 'block'
                        signup.style.display = 'none'
                        img.src = msg[i].avatar
                        info[0].textContent = `name:${msg[i].name}`
                        info[1].textContent = `age:${msg[i].age}`
                        info[2].textContent = `strengths:${msg[i].strengths}`
                    }
                    else{
                        labelpwd.textContent = `密码错误`
                        labelpwd.style.color = 'red' 
                    }
                }
                else{
                    labelemail.innerText = `email格式错误\n请输入仅含有一个"."的邮箱`
                    labelemail.style.color = 'red' 
                }
            }

        }
       
    }
    else{
        labelemail.innerText = `email格式错误\n请输入以结尾为.com/.cn的邮箱\n并在小数点前为@qq或@163`
        labelemail.style.color = 'red' 
    }
}
