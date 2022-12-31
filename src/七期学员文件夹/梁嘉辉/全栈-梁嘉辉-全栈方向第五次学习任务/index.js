let str = prompt("请输入一个字符串");
let str2 = prompt("请输入子串");
let count = 0;

function statistics(parentStr, childStr) {
    for (let num = 0; num < parentStr.length; num++) {
        let judge = true;
        for (let num2 = 0;num2+num<parentStr.length&& num2 < childStr.length; num2++) {
        if (parentStr[num+num2] !== childStr[num2]) {

            judge = false;
            break;
        }
        }
        if (judge === true) {
        count++;
        num=num+childStr.length;

        }
    }
    return count;
}
    statistics(str,str2);

    console.log(`母串为:${str}`);
    console.log(`子串为:${str2}`);
    console.log(`子串出现的个数为:${count}次`);