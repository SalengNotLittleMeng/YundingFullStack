const time = document.getElementById('time')
function getnowTime() {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.reginvolver.cn/common/time');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            console.log(xhr.response);
            time.textContent = xhr.response;
        }
    }    
}

const loggin = document.getElementById('loggin');
const username = document.getElementById('username');
const password = document.getElementById('password');
loggin.onclick = function () {
    axios({
        url: 'https://api.reginvolver.cn/user/register',
        method: 'POST',
        data: {
            username: `${username.value}`,
            password: `${password.value}`,
        },
        headers: { "Content-type": "application/json" },
    }).then(res => {
        alert(res.data.msg);
        console.log('报文信息' + res);
    })
}

const User = document.getElementById('User');
User.addEventListener("click", () => {
    axios({
        url: 'https://api.reginvolver.cn/user/list',
        method: 'GET',
    })
    .then((res) => {
        const userMessage = document.createElement("div");
        const ul = document.createElement("ul");
        const body = document.getElementsByTagName("body")[0]
        body.appendChild(userMessage);
        userMessage.appendChild(ul)
        res.data.data.records.forEach(element => {
            const li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = `${element.userId}
                            ${element.username}`;
        });
        console.log(res);
    })
})