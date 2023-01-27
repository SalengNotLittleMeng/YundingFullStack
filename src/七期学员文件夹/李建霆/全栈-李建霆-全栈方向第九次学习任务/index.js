const time = document.getElementById("time");
const reg = document.getElementById("reg");
const list = document.getElementById("list");
const userlist = document.getElementById("userlist");

setInterval(function () {
  axios({
    baseURL: "https://api.reginvolver.cn/",
    url: "/common/time",
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then((response) => {
    time.innerText = `${response.data}`;
  });
}, 1000);

reg.onclick = function () {
  var acn = document.getElementById("acn").value;
  var password = document.getElementById("password").value;
  if (!acn) {
    alert("请输入账号");
    return 0;
  }
  if (password <= 6) {
    alert("密码长度最小六位");
    return 0;
  }
  axios({
    url: "https://api.reginvolver.cn/user/register",
    method: "POST",
    data: {
      password: `${acn}`,
      username: `${password}`,
    },
  }).then(function (reglist) {
    console.log("注册报文", reglist);
  });
};

list.onclick = function () {
  axios({
    url: "https://api.reginvolver.cn/user/list",
    method: "GET",
    headers: { Content_Type: "application/x-www-form-urlencoded" },
  }).then(function (reglist) {
    console.log("用户信息列表报文", reglist);
    for (var i = 0; i < reglist.data.data.records.length; i++) {
      var li = document.createElement("li");
      userlist.appendChild(li);
      userlist.children[userlist.children.length - 1].innerHTML =
        reglist.data.data.records[i].username;
    }
  });
};
