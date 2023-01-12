
/*
主要思路：对登录的邮箱和密码检查，通过正则后去msg中找有没有相应的邮箱，若有，则将原页面所有的元素删除，创建登录成功的页面(这里原打算生成一个新页面，使用BOM中的location.assign方法跳转到新页面，在新页面给出登陆者的信息。关键的问题是需要拿到登录用户在msg中索引，在新页面中根据索引来拿到用户的信息。我尝试通过export，import从登录页面拿到索引给到新页面，但一直出现报错。该报错一直无法解决，于是采用了现在的思路)；若没有，则提醒邮箱未注册
*/ 

//sub登录按钮，inp1账号输入框，inp2密码框，suc最外层框
const sub = document.getElementById("sub");
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const suc = document.getElementById("suc");
//获取body标签
const body = document.getElementsByTagName("body")[0]
//创建登录成功的五个盒子，函数logIn()分别为其添加文本
const suc_login = document.createElement("div")
const img = document.createElement("img");
const suc_name = document.createElement("div")
const suc_age = document.createElement("div")
const suc_strength = document.createElement("div")


//验证账号的正则表达式
let reg1 = /^[0-9a-zA-Z]+@(qq|163).(com|cn)$/;

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
    }]
//将msg中的邮箱放入数组arr
let arr = [];
for (let i = 0; i < msg.length; i++)
{
    arr[i] = msg[i].email;
}    
//构造登录成功后的页面
function logIn(index) {
    body.appendChild(suc_login)
    suc_login.innerText = "登录成功";
    body.appendChild(img)
    img.src = `${msg[index].avatar}`
    img.classList.add("img")
    body.appendChild(suc_name)
    suc_name.textContent = `姓名：${msg[index].name}`
    body.appendChild(suc_age)
    suc_age.textContent = `年龄：${msg[index].age}`
    body.appendChild(suc_strength)
    suc_strength.textContent = `特长：${msg[index].strengths}`
}
//为提交按钮点击事件绑定响应函数
sub.addEventListener("click", () => {
    if (!reg1.test(inp1.value)) {                                    //调用正则的test方法检查账号是否输入正确，若不正确给出提示并重新加载
        alert("请输入正确的邮箱")
        return;
    }
    if (inp2.value === '' )
    {
        alert("请输入密码")
        return;
    }
    msg.forEach((element, num) => {                                  //调用数组的forEach()方法，匹配输入的账号是否属于给定对象中的账号，若是，则检查密码
        if (element.email === inp1.value) {
            if (element.password == inp2.value) {
                suc.remove()                                         //若密码正确，则移除原来的大盒子，并调用logIn函数创建登录成功的页面
                logIn(num);
                
            }
            else {
                alert("请输入正确的密码")
                return;
            }
        }
        
    })

    if (arr.indexOf(inp1.value) === -1)                                //将msg中所有人的邮箱放在arr数组中，若输入的账号不在数组中，则提示
    {
        alert("该邮箱未注册！");
    }
    
})
