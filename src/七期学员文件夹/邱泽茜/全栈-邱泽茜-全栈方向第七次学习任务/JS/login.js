let login = document.getElementsByClassName('login');
let massage = document.getElementsByClassName('massage'); 
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementsByTagName('button');
let img = document.getElementsByTagName('img')
let theName = document.getElementsByClassName('box2');
let age = document.getElementsByClassName('box3'); 
let strengths = document.getElementsByClassName('box4');  
let flag = false;

button.onclick = function(){
    if(email.value == ''){
        alert('No email entered!')
    }
    if(password.value == ''){
        alert('Enter your password please!')
    }
    const reg = /^[a-zA-Z1-9]{1,}(@qq|@163).{1}(com|cn)$/;
    if(reg.test(email) === false){
        alert('Error!')
    }else{
        for(let i = 0; i <msg.length; i++){
            if(email === msg[i].email){
                if(password == msg.password){
                    flag = ture;
                    login.style.display = "none";
                    massage.style.display = "bock";
                    img.scr = msg[i].avatar;
                    theName.innerText = `name：${msg[num].name}`;
                    age.innerText = `age：${msg[num].age}`;
                    strengths.innerText = `strengths：${msg[num].strengths}`;
                }else{
                    alert('Password error!')
                }
            }
        }
        if(flag === false){
            alert('The user does not exist.')
        }
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