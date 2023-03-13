class MyArray {
  constructor(args) {
    if (!Array.isArray(args)) {
      throw "传入的不是一个数组";
    }
    this.args = args;
  }
  checkArray(args) {
    for (var value of args) {
      if (typeof value != "number") {
        return false;
      }
    }
    return true;
  }
  addAll() {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum = args[i] + sum;
    }
    return sum;
  }
  uniquel() {
    for (let i = 0; i < args.length; i++) {
      for (let j = i + 1; j < args.length; j++) {
        if (args[i] === args[j]) {
          args.splice(j, 1);
        }
      }
    }
    return args;
  }
}

let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray([1, 1, 1, "2", 9]));
console.log(arr.addAll());
console.log(arr.uniquel());
let arr0 = new MyArray("1234566");
