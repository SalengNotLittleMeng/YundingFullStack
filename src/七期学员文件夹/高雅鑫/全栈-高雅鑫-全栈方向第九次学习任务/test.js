
axios.defaults.baseURL = 'http://api.reginvolver.cn'//接口的baseurl
//时间获取
const timebox = document.getElementById("timebox");
const time = document.getElementById("time");

const usn = document.getElementById("username");
const pwd = document.getElementById("password");

const rgs = document.getElementById("register");
const get = document.getElementById("get");

//时间获取
    document.getElementById("send").onclick = () => {
        setInterval(function getTime() {
            axios({
                url: '/common/time',
                method:'GET',
            })
                .then((res) => time.innerHTML=`${res.data}`);
        }, 1000);
    }
    
//注册
rgs.addEventListener("click", () => {
    axios({
         url: '/user/register',
        method: 'POST',
        data: {
            "username": `${usn}`,
            "password": `${pwd}`,
            }
        })
        .then((res) => {
                console.log("注册成功！！！",res);
        })
    })

//显示用户列表
get.addEventListener("click", () => {
    axios({
        url: '/user/list',
        method: 'GET',
    })
        .then((res) => {
            console.log("用户信息如下:", res);
            for (let i = 0; i < (res.deta.data.records.length - 1); i++) {
                const li = document.createElement("li");
                list.appendChild(li);
                list.lastElementChild.innerHTML = res.deta.data.records[i].username;
                }
            }
        )
    }
)
