const sub = document.getElementById("sub");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const sni = document.getElementById("sni");
const body = document.getElementsByTagName("body")[0]
const sni_start = document.createElement("div")
const s3 = document.createElement("div")
const s4 = document.createElement("div")
const s5 = document.createElement("div")    

const reg = /^(\w+)*\w+@(qq|163){1,1}\.(com|cn){1,1}$/

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

let arr1 = [];
for (let i = 0; i < msg.length; i++)
{
    arr1[i] = msg[i].email;
} 
function ok(index) {
    body.appendChild(sni_start)
    sni_start.innerText = "登录成功";
    body.appendChild(s3)
    s3.textContent = `姓名：${msg[index].name}`
    body.appendChild(s4)
    s4.textContent = `年龄：${msg[index].age}`
    body.appendChild(s5)
    s5.textContent = `特长：${msg[index].strengths}`
}

sub.addEventListener("click", () => {
     msg.forEach((element) => {                                  
        if (element.email === s1.value) {
            if (element.password === s2.value) {                                       
                ok(num);                                  
            }
            else {
                alert("请输入正确的密码")
                return;
            }
        }   
    })
    result1 = reg.text(s1.value)
    if (result1 == false) {                                   
        alert("请输入正确的邮箱")
        return sub;
    }
    if(s2.value === '')
    {
        alert("请输入密码")
        return sub;
    }
    if (arr1.indexOf(s1.value) === -1)                                
    {
        alert("邮箱未注册");
    }   
})   