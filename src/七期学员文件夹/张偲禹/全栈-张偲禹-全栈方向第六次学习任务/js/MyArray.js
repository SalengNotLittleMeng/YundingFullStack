class MyArray{
    Array;
    constructor(args) {
        if (!Array.isArray(args)) {
            throw "Error"
        }
    }
    checkArray(args) {
        let len = args.length;
        for (let index = 0; index < len; index++){
            if (isNaN(args[index])) {
                return false;
            }
            else
                return true;
        }
    }
    addAll(args) {
        let len = args.length;
        let sum = 0;
        for (let index = 0; index < len; index++){
            sum += args[index];
        }
        return sum;
    }
    uniquel(args) {
        let len = args.length;
        for (let i = 0; i < len; i++){
            for (let j = i + 1; j < len; j++){
                if (args[i] === args[j]) {
                    args.splice(j, 1);
                    j --;
                }
            }
        }
        return args;
    }
}

let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray(args));
console.log(arr.addAll(args));
console.log(arr.uniquel(args));
let arr0 = new MyArray("1234566");
