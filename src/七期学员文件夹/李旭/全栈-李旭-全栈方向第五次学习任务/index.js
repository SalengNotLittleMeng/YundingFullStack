let a = prompt("please input a string:");
let b = prompt("please input a specified string:");
function countstr2(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[0]) {
            let check = true;
            for (let j = 1; j < str2.length; j++) {
                if (str1[i + j] !== str2[j]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                count++;
            }
        }
    }
    return count;
}
console.log(`the string is :${a}`, `the specified string is : ${b}`);// " "+a+" "  / `this is ${ str}`  ${±äÁ¿Ãû}
console.log("the number of time(s) of the specified string appears is(are) :", countstr2(a, b));