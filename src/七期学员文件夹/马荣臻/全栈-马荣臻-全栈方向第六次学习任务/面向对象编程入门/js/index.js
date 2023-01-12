"use strict"

class Person {
    constructor(name, gender, age, appetite, strength) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.appetite = appetite;
        this.strength = strength;
    }
    hobby() {
        return "我的爱好是" + this.appetite + "等等"
    }
    speciality() {
        return "我的特长是" + this.strength + "等等"
    }
}
let my = new Person("马荣臻", "男", 18, "科幻", "唱跳rap篮球");
console.log(my.name)
console.log(my.gender)
console.log(my.age)
console.log(my.hobby())
console.log(my.speciality())



let flag = true, result = 0;
class MyArray {
    constructor(args) {
        try {
            if (!Array.isArray(args)) {
                throw "Error"
            }
        }
        catch (error) {
            console.log("Error:The argument is not an array")
            return 0;
        }
        this.args = args;
    }
    checkArray(arr) {
        for (let value of arr) {
            if (typeof (value) !== "number")
                flag = false;
        }
        return flag;
    }
    addAll() {
        for (let value of this.args) {
            result += value;
        }
        return result;
    }
    uniquel() {
        for (let i = args.length - 1; i >= 0; i--) {
            let index = args.indexOf(args[i], i + 1)
            if (index != -1) {
                args.splice(index - 1, 1);
                i++
            }
        }
        return args;
    }
}
let args = [1, 2, 3, 4, 6, 6]
let arr = new MyArray(args)
console.log(arr.checkArray([1, 1, 1, '2', 9]))
console.log(arr.addAll())
console.log(arr.uniquel())
let arr0 = new MyArray('1234566')