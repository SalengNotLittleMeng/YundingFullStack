var parentstr = prompt("请输入母串：");
var childstr = prompt("请输入子串：");
var arrps = parentstr.slice()
var arrcs = childstr.slice()
var num = 0, i = 0, j = 0, k = false;
var pslength = arrps.length;
var cslength = arrcs.length;
for (i = 0; i < pslength; i++) {
    for (j = 0; j < cslength; j++) {
        if (arrps[i] == arrcs[j]) {
            if ((j+1) === cslength) {
                k = true;
            } else {
                i++;
            }
        } else {
            k = false;
            break;
        }
    }
    if (k == true) {
        num++;
    }
}
console.log("母串为：", parentstr, "子串为：", childstr);
console.log("字串出现的个数为：", num);