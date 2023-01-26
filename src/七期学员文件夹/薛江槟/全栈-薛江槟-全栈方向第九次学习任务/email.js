
    //获取元素：
    var email = document.getElementById('email');
    var passworde = document.getElementById('password');
    var signup = document.getElementById('signup');
    var show = document.getElementById('show');
    var time = document.getElementById('time');
    var hh = document.getElementById('hh');
    //获取时间：

    axios.defaults.baseURL = 'https://api.reginvolver.cn/';
    function getTime(){
        axios.get('/common/time').then((res) => { time.innerHTML = res.data});
   
    }
    setInterval(getTime, 1000);
    
    //注册
    signup.onclick = function signupp() {
        axios({
            method: 'post',
            url: '/user/register',
            data: {
                "username": email,
                "password": passworde,
            }
        }).then((res) => { console.log(res) })
    }
    //展示所有用户的信息：
    show.onclick = function showw() {
        email.innerHTML = 'none';
        passworde.innerHTML = 'none';
        axios({
            url: '/user/list',
            method: 'get',
            
        }).then((res) => {
            for (let i = 0; i < res.data.data.records.length; i++) {
                let hhh = document.createElement("li");
                hh.appendChild(hhh);
                hh.lastElementChild.innerHTML = res.data.data.records[i].username;
                
        
            }
            console.log(res);
        })
    }
