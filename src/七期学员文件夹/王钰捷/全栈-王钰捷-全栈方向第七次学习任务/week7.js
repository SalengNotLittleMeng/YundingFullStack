// 待修正
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

let signup = document.querySelector(".signup");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let login = document.getElementById("login");
let su = document.getElementById("su");
let success = document.querySelector(".success");
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let strengths = document.querySelector(".strengths");
login.onclick = function () {
    let reg =/^\w{1,}@(qq|163).(com|cn)$/;
    let result = reg.test(email);
    console.log(result)
  if ((result == false)) {
      alert("邮箱的格式不合法！");
  } else {
    for (let i = 0; i < msg.length; i++) {
      if (email== msg[i].email) {
        if (password== msg[i].password) {
          signup.style.display = "none";
          success.style.display = "block";
          name.innerHTML = "姓名" + msg[i].name;
          age.innerHTML = "年龄" + msg[i].age;
          strengths.innerHTML = "特长" + msg[i].strengths;
        } else {
          alert("密码错误！");
        }
      } else {
        alert("用户不存在！");
      }
    }
  }
};
