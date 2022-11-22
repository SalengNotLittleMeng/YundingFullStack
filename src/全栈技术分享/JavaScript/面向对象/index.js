// let arr = []
//     // 完整写法
// let arr = new Array()
// let brr = new Array()

// arr.push('a')
// ['a']
// s = 'babab'
//     // s = new String('babab')
//     // s是String的实例化对象
// console.log(s.indexOf('a'))
// console.log(String.prototype)
// String.prototype.yan = function() {
//     console.log("只是我自己的方法")
// }
// s.yan()
// console.log(this)
// console.log(String.prototype.indexOf.call(s, 'a'))
// function Item() {
//     this.length = 2
// }
// let l = new Item();

// ES5
// function Action(val) {
//     this.length = 3, //静态属性
//         this.add = function() { //静态方法
//             console.log(this.length + val)
//         }
//     console.log('我被实例化了') //构造方法
// }
// let a = new Action(2);
// console.log(a.length)
// a.add()

// a.add()
// a.add.call(l)
// class Action {
//     // 编写构造函数，即执行new时执行的函数（初始化）
//     constructor(val) {
//         this.length = 3;
//         console.log(val)
//         console.log("我被实例化了");
//     }
//     add(val) {
//         console.log(this.length + val)
//     }
// }
// let a = new Action(2);
// a.add(3)


// class Mymath {
//     constructor(val) { //构造方法
//             console.log('对象已实例化值为：' + val)
//         }
//         // 静态方法
//     add(num1, num2) {
//         console.log(this)
//         return num1 + num2;
//     }
//     max(num1, num2) {
//         return num1 > num2 ? num1 : num2
//     }
// }
// let math = new Mymath(2)
// console.log(math.add(1, 2))


// class Son extends Mymath {
//     constructor(val, item) {
//         super(val)
//         console.log('这是子类特有的方法')
//     }
// }
// let son = new Son(3)
// console.log(son.add(3, 5))