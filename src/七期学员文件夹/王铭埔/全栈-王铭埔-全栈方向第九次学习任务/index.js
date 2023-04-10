const register = document.getElementById("register");
const whole = document.getElementById("whole");
const username = document.getElementById("username");
const password = document.getElementById("password");
const time = document.getElementById("time");
const ul = document.querySelector("ul");

axios.defaults.baseURL = "https://api.reginvolver.cn/";

axios({
    method: "get",
    url: "/common/time",
}).then((result) => {
    time.innerHTML = "当前时间 ：" + `${result.data}`;
});
register.onclick = function () {
    if (username.value === "") {
        alert("please set your username");
    }
    if (username.value.length >= 6) {
        password.value = String(password.value);
        if (password.value.length >= 6) {
            axios({
                method: "post",
                url: "/user/register",
                data: {
                    username: `${username.value}`,
                    password: `${password.value}`,
                }
            })
                .then((result) => {
                    console.log(result.data);
                })
                .catch((err) => {
                    console.log("error", err);
                });
            alert("success");
        }
    }
    else {
        alert("again");
    }
};
whole.onclick = function () {
    axios({
        method: "get",
        url:"/user/list",
    })
        .then((result) => {
            for (let i = 0; i < result.data.data.records.length; i++){
                var li = document.createElement("li");
                li.innerHTML = result.data.data.records[i].username;
                li.style.listStyle = "visible";
                ul.appendChild(li);
            }
            console.log(result);
        })
    .catch((err) => {
        console.log("出现错误", err);
    });
    alert("获取成功");
}
