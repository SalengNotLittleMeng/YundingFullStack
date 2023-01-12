let str_m = prompt("请输入母串");
let str_s = prompt("请输入子串");
var num = 0;
var i = 0;
var j = 0;
// while (i < str_m.length) {
//   if (str_m[i] == str_s[j]) {
//     i++;
//     j++;
//     if (j == str_s.length) {
//       num = num + 1;
//       j == 0;
//     }
//   } else {
//     j = 0;
//     if (str_m[i] !== str_s[j]) {
//       i++;
//     }
//   }
// }
var index = str_m.indexOf(str_s);
while (index !== -1) {
  num++;
  index = str_m.indexOf(str_s, index + 1);
}
console.log(`母串为:${str_m} 子串为:${str_s}`);
console.log(`子串出现的个数为:${num}`);
