    //使用XMLHTTPRequest获取时间
    function getTime() {
        const time = document.getElementById('time');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.reginvolver.cn/common/time');
    xhr.send();
        setTimeout(() => {
        time.innerHTML = xhr.responseText;
        }, 1000)
    }
    setInterval(getTime, 1000);


    //将输入的数据返回服务器
    const regist = document.getElementById('regist');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    regist.onclick = function () {
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


    //点击返回用户列表
    const getUser = document.getElementById('getUser');
    getUser.addEventListener("click", () => {
        axios({
            url: 'https://api.reginvolver.cn/user/list',
            method: 'GET',
        })
            .then((res) => {
                const userMessage = document.createElement("div");
                // 创建列表显示用户信息
                const ul = document.createElement("ul")
                const body = document.getElementsByTagName("body")[0]
                body.appendChild(userMessage);
                userMessage.innerHTML = `<span>ID</span>;<span>userName</span >`
                userMessage.appendChild(ul)
                // res.data返回的是响应的所有数据，而服务器中data内的records为所需要的用户数据
                //forEach是一种数组方法，用于遍历数组
                res.data.data.records.forEach(element => {
                    const li = document.createElement("li");
                    ul.appendChild(li);
                    li.innerHTML = `${element.userId}
                                    ${element.username}`;
                });
                // 打印响应报文
                console.log(res);
            })
    })
