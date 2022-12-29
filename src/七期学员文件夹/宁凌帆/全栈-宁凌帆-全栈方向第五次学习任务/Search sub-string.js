var arr = prompt('请输入一个字符串');
var subArr = prompt('请输入一个子串');
var count = 0;
var i = 0, j = 0;
if (subArr.length < arr.length) {
    while (i !== arr.length) {
        if (arr[i] === subArr[j]) {
            ++i;
            ++j;
            if (j === subArr.length) {
                ++count;
                j = 0;
            }
        }
        else {
            j = 0;
            if (arr[i] !== subArr[j]) {
                ++i;
            }
        }
    }
    console.log('子串个数为' + count);
}
else {
    console.log('抱歉，您输入的子串个数大于母串，请重新输入');
}