class MyArray {
  array;
  constructor(args) {
    if (!Array.isArray(args)) {
      throw "error: is not an array";
    }
    this.array = args;
  }
  checkArray = function (args) {
    for (var i = 0; i < args.length; i++) {
      if (isNaN(args[i])) {
        console.log(false);
        break;
      }
      console.log(true);
    }
  };
  addAll = function (args) {
    let sum = 0;
    for (var i = 0; i < args.length; i++) {
      sum = sum + args[i];
    }
    console.log(sum);
  };
  uniquel = function (args) {
    for (var i = 0; i < args.length; i++) {
      for (var j = i + 1; j < args.length; j++) {
        if (args[i] === args[j]) {
          args.splice(j, 1);
          j--;
        }
      }
    }
    return args;
  };
}

//传入的是数组
let args = [1, 2, 3, 4, 5, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray(args));
console.log(arr.addAll(args));
console.log(arr.uniquel(args));
//传入的不是数组
let arr0 = new MyArray("1234566");
