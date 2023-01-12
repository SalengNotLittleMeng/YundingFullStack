class MyArray{
    array;
    constructor(args) {
        if (!Array.isArray(args)) {
            throw "error:这不是一个数组";
        }
        this.array = args;
}
    
    
    checkArray = function (args) {
    for (var i = 0; i < args.length; i++) {
        if (isNaN(args[i])) {
            console.log(false);
        }
        console.log(true);
    }
}

addAll = function (args) {
    let all = 0;
    for (let i = 0; i < args.length; i++){
        all = all + args[i]
    }
    console.log(all);
}

uniquel = function (args) {
    for (let i = 0; i < args.length; i++){
        for (let j = 0; j < args.length; j++){
            if (args[i] === args[j]) {
                args.splice(j, 1);
                j--;
            }
        }
    }
    return args;
    }
}
var array;
let args = [1, 2, 3, 4, 5, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray(args));
console.log(arr.addAll(args));
console.log(arr.uniquel(args));
let arr0 = new MyArray("1234566");

