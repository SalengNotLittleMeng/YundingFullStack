let str1 = prompt("请输入一个字符串：")
let str2 = prompt("请输入要查询的子串：")
let count = 0, i, j
for(i = 0;i < str1.length; i++){
    for(j = 0;j < str2.length && i+j < str1.length && str1[i+j] == str2[j]; j++){
        if(j==(str2.length-1)){
        count++;
        }
    }
}
alert(`子串出现的次数为:${count}`)