var momStr = document.getElementById("momStr").value
var sonStr = document.getElementById("sonStr").value

// var scrstr,armstr;

function getStrCount(momStr, sonStr) { 
    //通过输入同时也能判断从html传参成功
    console.log("原字符串为：%s",momStr);
    console.log("子串为：%s",sonStr);
    
    var count = 0;
    var sonStr_in=sonStr;
    //通过indexOf函数进行匹配，当返回值不为-1，即匹配到是进入循环
    /*该循环存在问题，
        当indexOf函数参数（即sonStr）正确输入时，html文件无法在浏览器打开
        若将参数名改成错误的，文件可以打开。因为不输出循环下方的内容，猜测是程序终止才使得可以打开。
        对于该问题，猜测可能与变量作用域或闭包有关，经尝试与查询仍未解决，无思路*/
    while (momStr.indexOf(sonStr) != -1) {
        //通过replace函数对原字符串中的子串部分进行取代，第二个参数表示不更改
        momStr = momStr.replace(sonStr, "")
        count++;
    }
    return count;
}

console.log("子串出现次数为：")
console.log(getStrCount(momStr, sonStr));
console.log(momStr);