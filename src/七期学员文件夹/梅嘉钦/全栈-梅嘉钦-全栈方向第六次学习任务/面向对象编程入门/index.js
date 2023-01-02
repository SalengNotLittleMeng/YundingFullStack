//第一个任务：Person类
class Person {
    constructor(name, gender, age, hobby, speciality) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.hobby = function (like) {
            console.log(like);
        }
        this.speciality = function (first) {
            console.log(first);
        }
    }
}
const my = new Person("梅嘉钦", "男", 20)
console.log(my.name);
console.log(my.gender);
console.log(my.age);
my.hobby("我的爱好是打羽毛球")
my.speciality("我的特长是乐于助人")

//第二个任务：MyArray类
class MyArray {
    constructor(args) {
        this.checkArray = function (checkin) {
            let flag = true;
            for (let i = 0; i < checkin.length; i++) {
                if (typeof checkin[i] !== 'number') {
                    flag = false;
                    console.log(flag + ' ' + '这个元素为：' + checkin[i]);
                } else {
                    flag = true;
                }
            }
        }
        this.addAll = function (args) {
            let sum = 0;
            for (let j = 0; j < args.length; j++) {
                sum += args[j];
            }
            console.log('该数组各个项元素之和为：' + sum);
        }
        this.uniquel = function (args) {
            let temp = [];
            for (let i = 0; i < args.length; i++) {
                if (temp.indexOf(args[i]) == -1) {
                    temp.push(args[i])
                }
            }
            console.log(temp);
        }
    }
}
let args = [1, 2, 3, 4, 6, 6]
let arr = new MyArray(args)
arr.checkArray([1, 1, 1, '2', 9])
arr.addAll(args)
arr.uniquel(args)
