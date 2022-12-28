var arr = [];
arr = prompt('请输入一个字符串');
var subArr = [];
subArr = prompt('请输入一个子串');
var count = 0;
var i = 0;
if (subArr.length < arr.length) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < subArr.length + 1; j++) {
            if (arr[j + i] == subArr[j]) {
                continue;
            }
            else {
                break;
            }
        }
        if (subArr[j] == undefined) {
            ++count;
        }
    }
    console.log('子串个数为' + count);
}
else {
    console.log('抱歉，您输入的子串个数大于母串，请重新输入');
}