var sign = document.querySelector(".sign_up");
var success = document.querySelector(".success");
var pwd = document.getElementById("pwd");
var close = document.getElementById("close");
var ipt = document.getElementById("ipt");
var hint1 = document.getElementById("hint1");
var hint2 = document.getElementById("hint2");
var message1 = document.querySelector(".message1");
var message2 = document.querySelector(".message2");
var button = document.querySelector("button");
let flag = 0;
let judge = false;
close.onclick = function () {
  if (flag == 0) {
    pwd.type = "text";
    close.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E7%9C%BC%E7%9D%9B_%E6%98%BE%E7%A4%BA_o.png";
    flag = 1;
  } else {
    pwd.type = "password";
    close.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E7%9C%BC%E7%9D%9B_%E9%9A%90%E8%97%8F_o.png";
    flag = 0;
  }
};
ipt.onblur = function () {
  let reg = /^\w{1,}(@qq|@163)(.com|.cn)$/;
  if (reg.test(this.value)) {
    hint1.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E6%8F%90%E7%A4%BA%E6%88%90%E5%8A%9F.png";
    message1.innerHTML = "输入正确";
    judge = true;
  } else if (this.value !== "") {
    hint1.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E6%8F%90%E7%A4%BA.png";
    message1.innerHTML = "输入格式错误，请重新输入";
    judge = false;
  } else {
    hint1.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E6%8F%90%E7%A4%BA1.png";
    message1.innerHTML = "请输入邮箱";
    judge = false;
  }
};
pwd.onblur = function () {
  if (
    (this.value.length < 5 || this.value.length > 15) &&
    this.value !== ""
  ) {
    hint2.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E6%8F%90%E7%A4%BA.png";
    message2.innerHTML = "输入格式错误，请输入5~15位密码";
    judge = false;
  } else if (this.value !== "") {
    hint2.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E6%8F%90%E7%A4%BA%E6%88%90%E5%8A%9F.png";
    message2.innerHTML = "输入正确";
    judge = true;
  } else {
    hint2.src =
      "https://liangjia.oss-cn-beijing.aliyuncs.com/%E6%8F%90%E7%A4%BA1.png";
    message2.innerHTML = "请输入密码";
    judge = false;
  }
};
button.onclick = function () {
  if (judge === true) {
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
    var ipt1 = document.getElementById("ipt").value;
    var pwd1 = document.getElementById("pwd").value;
    let pass = 1;
    let count = 0;
    for (const { email, password } of msg) {
      if (email === ipt1) {
        if (password == pwd1) {
          pass = 1;
          break;
        } else {
          pass = 2;
          break;
        }
      } else {
        pass = 3;
      }
      count++;
    }
    if (pass == 1) {
      sign.style.display = "none";
      success.style.display = "block";
      if (ipt1 === msg[count].email) {
        //console.log(msg[count].name);
        var img = document.querySelector(".img");
        var name = document.querySelector(".name");
        var age = document.querySelector(".age");
        var strengths = document.querySelector(".strengths");
        img.style.backgroundImage = "url(" + `${msg[count].avatar}` + ")";
        //img.innerHTML = msg[count].avatar;
        name.innerHTML = "姓名：" + msg[count].name;
        age.innerHTML = "年龄：" + msg[count].age;
        strengths.innerHTML = "特长：" + msg[count].strengths;
      }
      //alert("输入正确");
    } else if (pass == 2) {
      alert("邮箱和密码不对应，请重新输入！");
    } else {
      alert("用户不存在，请重新输入！");
    }
  } else {
    alert("请完善信息！");
  }
};