const submit = document.getElementById("submit")
const number = document.getElementById("number")
const main = document.getElementById("main")
const name1 = document.getElementById("name1")
const default1 = document.getElementById("default1")

const re = /\d{11}/
const re2 = /[^@$*]/

submit.onclick = function () {
    if (main.checked === true) {
        if (re.test(number.value)) {
            if (re2.test(name1.value)) {
                if (default1.selected === false) {
                                        alert("恭喜你，注册成功，欢迎来到我们这个大家族\^o^/")
                    location.replace("index.html")
                }
                else {
                    alert("总得说说你擅长的东西吧ヾ(≧へ≦)〃")
                }

            }
            else {
                alert("昵称内请不要包含`@#&`等特殊字符哦(⊙﹏⊙)")
            }
        }
    
        else {
        alert("请确认您输入了正确的手机号码ヾ(≧へ≦)〃")
        }
    }
    else {
        alert("请同意制定的规则。(╯▔皿▔)╯")
    }

}
