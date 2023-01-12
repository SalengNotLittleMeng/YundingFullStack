var guize = /^\w+@(qq|163)(\.com+$|\.cn+$)/;
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
    var oDiv1 = document.getElementById('box1');
    var oDiv2 = document.getElementById('box2');
    var oDiv3 = document.getElementById('box3');
    oDiv3.onclick =(function () {
        var x = oDiv1.value;
        var y = oDiv2.value;
        function fn(email, password) {
            let temp = false;
            var time = 0;
            if (guize.test(email)) {
                for (let i = 0; i < email.length; i++) {
                    if (msg[i].email === email && msg[i].password === password) {
                        temp = true;
                        time = i;
                        break;
                    }
                }
                if (temp) {
                    document.getElementById('deng').style.display = 'none';
                    document.getElementById('yes').style.display = 'block';
                    document.getElementById('avatar').style.background = 'url(msg[time].avatar)'
                    document.getElementById('name').innerText = '姓名：' + msg[time].name;
                    document.getElementById('age').innerText = '年龄：' + msg[time].age;
                    document.getElementById('strengths').innerText = '特长' + msg[time].strengths;
                } else {
                    alert("您输入的密码有误，请重新填写！");
                }
            } else {
                alert("您输入的邮箱格式有误，请重新填写！");
            }
        }
        fn(x,y)
})