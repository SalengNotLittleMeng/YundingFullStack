var e = document.getElementById('e');
var p = document.getElementById('p');
var b = document.querySelector('button')
var box = document.getElementsByClassName('box');
var img = document.querySelector('img') 
var suc = document.getElementsByClassName('success')[0]
var mation = document.getElementsByClassName('mation')
var f = document.getElementsByClassName('false')
var s = document.getElementsByClassName('shibai')[0]
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

var re = /^\w+@(qq|163)\.(com|cn)$/
let flag = 1
let result = 0
b.onclick =function(){
    console.log(re.test(e.value));
   if(re.test(e.value)==false)
   {
    box[0].className = 'false'
    e.value = '请输入正确邮箱'
    flag=0
   }
   if(p.value=='')
   {
       box[flag].className='false'
       p.type='text'
       p.value='请输入密码'
   }
   for(let i=0;i<msg.length;i++)
   {
        if(e.value==msg[i].email && p.value==msg[i].password)
        {
            suc.style.display='block'
            img.src=msg[i].avatar
            mation[0].innerHTML +=msg[i].name
            mation[1].innerHTML +=msg[i].age
            mation[2].innerHTML +=msg[i].strengths
            result=1;
        }
   }
   if(re.test(e.value)==true && result==0){
    s.style.display='block'
   }
}
e.onfocus = function(){
    e.value = ''
    s.style.display='none'
    suc.style.display='none'
    result=0
    f[0].className='box'
    f[1].className='box'
}
p.onfocus=function(){
    p.value=''
    s.style.display='none'
    suc.style.display='none'
    p.type='password'
    result=0
    f[0].className='box'
    f[1].className='box'
}
