class MyArray {
    constructor(arr) {
        if (Array.isArray(arr)) {
            this.arr = arr;
        } else {
            throw "Error! The parameters passed in are not arrays!";
        }
    }
    checkArray(array) {
        let sum = 0;
        // for-of 遍历数组    for-in 遍历对象
        for (let value of array) {
            if (typeof value !== "number") {
                sum++;
            }
        }
        if (sum === 0) {
            return true;
        } else {
            return false;
        }
    }
    addAll() {
        let result = this.arr.reduce((a, b) => a + b, 0);
        return result;
    }
    uniquel() {
        let str = [];
        for (let v of this.arr) {
            if (str.indexOf(v) === -1) {
                str.push(v);
            }
        }
        return str;
    }
}
let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray([1, 1, 1, '2', 9]));
console.log(arr.addAll());
console.log(arr.uniquel());
let arr0 = new MyArray('1234566');