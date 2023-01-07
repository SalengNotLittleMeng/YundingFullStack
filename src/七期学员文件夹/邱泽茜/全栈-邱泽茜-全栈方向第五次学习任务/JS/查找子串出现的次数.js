let str1 = prompt("请输入一个字符串：")
let str2 = prompt("请输入要查询的子串：")
let len1 = str1.length
let len2 = str2.length
let count = 0, i, j
for(i = 0;i < len1; i++){
    for(j = 0;j < len2 && i+j < len1 && str1[i+j] == str2[j]; j++){
        if(j==(len2-1)){
        count++;
        }
    }
}
alert(`子串出现的次数为:${count}`)