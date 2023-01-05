const pat=/^[a-zA-Z0-9_-]+@(qq|163)(\.com+$|\.cn+$)/;
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
];
function add(email,password){
    let temp=false;
    let cont=0;
    if(pat.test(email)){
        for(let i=0;i<msg.length;i++){
            if(email===msg[i].email&&password==msg[i].password){
                temp=true;
                cont=i;
                break;
            }
        }
        if(temp){
            document.getElementById('sig').style.display='none';
            document.getElementById('sign_in_success').style.display='block';
            document.getElementById('touxiang').setAttribute('src',msg[cont].avatar);
            document.getElementById('name').innerText='姓名：'+msg[cont].name;
            document.getElementById('age').innerText='年龄：'+msg[cont].age;
            document.getElementById('strength').innerText='特长：'+msg[cont].strengths;
        }else{
            alert('账号密码可能有误');
        }
    }else{
        alert('填写的邮箱可能有误哦');
    }
}
   