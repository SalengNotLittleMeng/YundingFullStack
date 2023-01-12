let content01 = document.getElementById("content01");
let email = document.getElementsByClassName("email")[0];
let password = document.getElementsByClassName("password")[0];
let login = document.getElementsByClassName("login")[0];
let content02 = document.getElementById("content02");
let [p1, p2, p3, p4] = content02.children;
let msg = [
  {
    name: "张三",
    age: 20,
    strengths: "JavaScript",
    avatar:
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1",
    email: "yunding@qq.com",
    password: 33333,
  },
  {
    name: "李四",
    age: 19,
    strengths: "python",
    avatar:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1",
    email: "12345678@163.com",
    password: 11111,
  },
  {
    name: "王五",
    age: 18,
    strengths: "Java",
    avatar:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1",
    email: "yundingshuyuan@qq.cn",
    password: 222222,
  },
];
function check(email,password) {
  let reg = /^[a-zA-Z0-9_]+@(qq|163)\.(com|cn)$/g;
  if (reg.test(email) === false) {
    alert("邮箱格式不合法，请重新输入");
  } else {
    for (let index = 0; index < msg.length; index++) {
      if (email === msg[index].email) {
        if (password == msg[index].password) {
          content01.style.display = "none";
          content02.style.display = "block";
          p1.textContent = "登录成功";
          p2.textContent = `姓名：${msg[index].name}`;
          p3.textContent = `年龄：${msg[index].age}`;
          p4.textContent = `特长:${msg[index].strengths}`;
        } else {
          alert("密码错误，请重新输入");
        }
        break;
      } else {
        alert("该邮箱不存在，请重新输入");
      }
    }
  }
}
login.addEventListener("click", function () {
  check(email.value, password.value);
});
