'use strict'
// 输入字符串
let passStr = prompt('请输入母串', '');
let nowStr = prompt('请输入子串', '');
//为子串与母串声明两个数组
let str1 = [];
let str2 = [];
//j用于子串数组的索引，count用于记录子串出现的次数
let j = 0, count = 0;
//将母串与子串赋值给两个数组，利用数组的偏移量实现逐字母匹配
str1 = passStr;
str2 = nowStr;
/*
    由于没学到数组，对数组的知识了解不够，起初我打算用str1[i] === str2[j]逐个比较字母，但是这样的方法会报错，于是声明两个变量le1与le2
    分别来接收数组中的字母
*/
let le1, le2;
// len表示子串的长度  
let len = str2.length;
for (let i = 0; i < str1.length; i++) {
    le1 = str1[i];
    le2 = str2[j];
    if (le1 === le2) {
        j++;                        //如果le1与le2相等，那么j++，当j的值等于len（子串的长度）时，count++，j变为0
        if (j == len) {
            j = 0;
            count++;
        }
    }
    else if (j != 0) {
        j = 0;                        //只要有一个字母不同，那么j变为0从第一个字母开始比较，母串字母不动
        i--;
    }
}
console.log('母串：', str1);
console.log('子串：', str2);
console.log('子串出现的次数：', count);