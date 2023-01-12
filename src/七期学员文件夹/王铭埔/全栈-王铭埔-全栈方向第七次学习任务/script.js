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
    },]
//点击登录按钮   后获取邮箱
    var btn = document.querySelector('.button');
    btn.onclick = function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var reg = /^\w{1,}@(qq)|(163).(com)|(.cn)$/;
    let flag = 0;
    if (reg.test(email)) {
        console.log("邮箱合法");
        flag = 1;
    }
    else {
        console.log("邮箱不合法,请输入正确的邮箱");
    }
    if(flag = 1){
        for(let i = 0;i < msg.length;i++){
            if(email = msg[i].email){
                for(let m = 0;m < msg.length;m++){
                    if(password = msg[m].password){
                        console.log("欢迎您的登录,正在登录中......");
                        document.getElementById('all').style.display='none';
                        document.getElementById('sign').style.display = 'block';
                        document.getElementById('photo').style.backgroundimage = 'url(msg[i].avatar)';
                        document.getElementById('name').innerText='姓名：'+msg[i].name;
                        document.getElementById('age').innerText = '年龄：' + msg[i].age;
                        document.getElementById('strengths').innerText='特长：'+msg[i].strengths;
                    }
                    else{
                        console.log("您输入的密码有误，请核对后再输入!");
                    }
                }
            }
            else{
                console.log("该用户不存在,请核对后再输入!");
            }
        }
    }

}
