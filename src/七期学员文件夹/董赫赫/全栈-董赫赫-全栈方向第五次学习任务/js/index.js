let str1 = prompt("请输入母串");
let str2 = prompt("请输入子串");
let count = 0;
function statistics (Str1, Str2)
{
    for (let num = 0; num < Str1.length; num++)
    {
        let float = true;
        let num1 = num;
        for (let num2 = 0; num2 < Str2.length; num1++, num2++)
        {
        //1.当str1[num1] ！= str2[num2]时，float=false，count不会自增
        /*2.当str1[num1] = str2[num2]时，num1++,num2++,循环继续
        直到num2=str2.length时，若float=true，则字串出现一次，跳出子循环，count++ */
        //一次子循环结束，父循环num++，继续自循环，直到num=str1.length，结束循环，输出count为字串出现次数
            if (Str1[num1] != Str2[num2])
            {
                float = false;
                break;
            }
        }
        if (float === true)
        {
            count++;
            num+=Str2.length-1;
        }
    }
    return count;
}
//调用函数
statistics(str1, str2);
console.log( `母串为:${str1}`);
console.log(`子串为:${str2}`);
console.log(`子串出现的次数为:${count}`);
