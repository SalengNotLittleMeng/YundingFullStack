let string_m = prompt("请输入母串：")
let string_z = prompt("请输入子串：")
let count = 0
let len_m = string_m.length
let len_z = string_z.length
for (m = 0; m < len_m; m++) {
    //遍历母串，查找与子串首字母相同的字母
    if (string_m[m] === string_z[0]) {
        for (z = 0, m1 = m; z < len_z; z++, m1++) {
            //将子串遍历
            if (string_m[m1] !== string_z[z]) {
                break
            }//后续部分不同则跳出循环
            if (z = len_z) {
                count++
            }//子串遍历完毕则计数
        }
    }
}
console.log(`母串为${string_m}\n子串为${string_z}\n子串出现的次数为${count}`)

//下面是最初用字符串内置函数尝试实现



// var position = 0;
// while (string_m.indexOf(string_z, position) != -1) {
//     count++;
//     position = string_m.indexOf(string_z, position) + 1;
// }
// console.log(count);
