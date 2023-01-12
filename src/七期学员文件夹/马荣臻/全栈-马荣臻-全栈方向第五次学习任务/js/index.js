let count = 0, flag = 1;
let str = prompt("请输入母字符串");
let strSon = prompt("请输入子字符串");
for (let i = 0; i <= str.length - strSon.length; i++) {
    if (str[i] == strSon[0]) {
        flag = 1;
        for (let j = i, m = 0; m < strSon.length; j++, m++) {
            if (str[j] != strSon[m]) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            i += strSon.length-1;
            count++;
        }
    }
}
console.log(count);