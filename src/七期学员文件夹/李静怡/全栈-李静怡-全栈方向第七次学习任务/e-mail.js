let box=document.getElementsByClassName('box')
let login=document.getElementsByClassName('login')
let email = document.querySelector('#email')
let pwd=document.querySelector('#password')
let btn = document.querySelector('button')
let img=document.getElementById("img")
let perName=document.querySelector(".name")
let age=document.querySelector(".age")
let specialty=document.querySelector(".specialty")

btn.onclick = function(){
    check(email.value,pwd.value);
}

function check(email, pwd){
    let reg=/@(qq)|(163).(com)|(cn)$/
    if (reg.test(email) === false){
        alert('输入格式有误，请重新输入')
    }else{
        for(let i=0;i<msg.length;++i){
            if(email==msg[i].email){
                if(pwd == msg[i].password){
                    // box.style.display="none";
                    // login.style.display="block";
                    //报错：Uncaught TypeError: Cannot set properties of undefined (setting 'display')
                    //经查，错误原因为：
                        //这个方法得到的是一个由class="xxx"的所有元素组成的集合，而不是单个元素；
                        // 集合是没有display属性的，集合中的元素才有display属性。当你试图做 集合.style.display的时候，自然会报错。
                        // 所以你这个问题的解决方案应该是：遍历集合中所有的元素，然后给每个元素都加上display="none"的属性。
                    for (let i = 0; i<box.length;i++) {
                        box[i].style.display="none";
                    };
                    for (let i = 0; i<login.length;i++) {
                        login[i].style.display="block";
                    };
                    img.style.backgroundImage = 'url('+msg[i].avatar+')';
                    perName.innerHTML='姓名：'+msg[i].name+'';
                    age.innerHTML='年龄：'+msg[i].age+'';
                    specialty.innerHTML='特长：'+msg[i].strengths+'';
                    return;
                }
            }
            
        } 
        alert('未找到该邮箱')
    }
}


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