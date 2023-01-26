const register = document.getElementById("register")
const all = document.getElementById("all")
const username = document.getElementById("username")
const password = document.getElementById("password")
const time = document.getElementById("time")
const ul = document.querySelector("ul")

axios.defaults.baseURL = "https://api.reginvolver.cn/"

axios({
    method: "get",
    url: "/common/time"
})
    .then((result) => {
        time.innerText = "当前时间：" + `${result.data}`
    })


register.onclick = function () {

    if (username.value === "") {
        alert("最起码起个帅气或可爱的名字吧(ˉ▽ˉ；)...")
    }

    if (username.value.length >= 4) {
        password.value = String(password.value)
        if (password.value.length >= 6) {
            axios({
                method: "post",
                url: "/user/register",
                data: {
                    username: `${username.value}`,
                    password: `${password.value}`
                }
            })
                .then((result) => {
                    console.log(result.data);
                })
                .catch((err) => {
                    console.log("出现错误", err);
                })
            confirm("注册成功")
        }

        else {
            alert("密码长度必须大于等于六位哟。－_－b")
            password.value = ""
        }
    }

    else {
        alert("昵称长度必须大于等于四位哟。－_－b")
        location.reload(true)
    }



}

all.onclick = function () {

    axios({
        method: "get",
        url: "/user/list",
    })
        .then((result) => {
            for (let vol = 0; vol < result.data.data.records.length; vol++) {
                var li = document.createElement("li")
                li.innerText = result.data.data.records[vol].username
                li.style.listStyle = "visible"
                ul.appendChild(li)
            }
            console.log(result);

        })
        .catch((err) => {
            console.log("出现错误", err);
        })
    confirm("获取成功")

}