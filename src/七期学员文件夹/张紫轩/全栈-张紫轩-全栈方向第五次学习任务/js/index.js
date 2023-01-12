function context()
        {
            alert("欢迎来到字符统计");
            let mystr;
            mystr = prompt("请输入总字符串：");
            if(mystr == null){
                alert("好吧，记得再来哟");
            }
            else{
                var str = prompt("请输入子字符串：");
                if(str == null)
                {
                    alert("不想再坚持一下下么:("); 
                }
                else{
                    let n = (mystr.split(str).length - 1);
                    console.log(n);
                    alert(str + "在" + mystr + "中出现了" + n + "次");
                    alert("记得常回来看看:)");
                }
            }
        }