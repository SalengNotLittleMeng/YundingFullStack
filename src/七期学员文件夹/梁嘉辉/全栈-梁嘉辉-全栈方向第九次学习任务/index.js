var time = document.querySelector(".time");
    setInterval(function () {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://api.reginvolver.cn/common/time");
      xhr.send();
      xhr.onload = function () {
        time.innerHTML = `${xhr.responseText}`;
      };
    }, 1000);

    var signUp = document.querySelector(".sign_up");
    signUp.onclick = function () {
      var account = document.querySelector(".account");
      var password = document.querySelector(".password");
      axios({
        url: "https:api.reginvolver.cn/user/register",
        method: "POST",
        data: {
          username: `${account.value}`,
          password: `${password.value}`,
        },
      }).then(function (res) {
        alert(res.data.msg);
        console.log("注册报文", res);
      });
    };

    var information = document.querySelector(".information");
    information.onclick = function () {
      axios({
        url: "https://api.reginvolver.cn/user/list",
        method: "GET",
      }).then(function (res) {
        var list = document.querySelector(".list");
        res.data.data.records.forEach((element) => {
          var div = document.createElement("div");
          list.appendChild(div);
          div.innerHTML = `${element.userId}
          ${element.username}`;
        });
        console.log("用户信息报文", res);
      });
    };