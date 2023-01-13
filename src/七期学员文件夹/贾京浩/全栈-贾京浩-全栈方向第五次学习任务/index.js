var str_son = [];
var str_mother = [];
var n_mother,n_son,n=0,k=0,num=0;
str_mother = prompt("请输入母串");
str_son = prompt("请输入子串");
n_mother = str_mother.length;
n_son = str_son.length;
while (n_mother >= num) {
    for (let i = 0; i < n_son; i++) {
        if (str_mother[num + i] == str_son[i]) {
            n = n + 1;
        }
        if (i == n_son - 1) {
            if (n == n_son) {
                k = k + 1;
                num = n_son + num;
            }
            else {
                num = num + 1;
            }
            n = 0;
        }
    }
}
function result() {
    alert(k);
}
