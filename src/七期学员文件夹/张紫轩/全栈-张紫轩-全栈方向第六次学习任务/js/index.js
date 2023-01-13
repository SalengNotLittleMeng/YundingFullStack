class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    hobby() {
        return "我的爱好是打乒乓球，打游戏等等";
    }
    speciality() {
        return "我的特长是乐观";
    }
}
const my = new Person("张紫轩", 17, "男");
console.log(my.name);
console.log(my.gender);
console.log(my.age);
console.log(my.hobby());
console.log(my.speciality());
let MyArray = function (str) {
    this.back = () => {
        return str;
    }
    let check = Array.isArray(str);
    if (check !== true) {
        throw "这不是数组";
    }
    else {
        this.back();
    }
    console.log(str);
    this.checkArray = function (arr) {
        let temp = 0;
        for (let value of arr) {
            if (typeof (value) === "string") {
                temp = 1;
                return false;
            }
        }
        if (temp == 0) {
            return true;
        }
    }
    this.addAll = () => {
        let num = 0;
        for (let value of str) {
            num += value;
        }
        return num;
    }
    this.uniquel = function () {
        let newArr = [];
        for (let ele of str) {
            if (newArr.indexOf(ele) === -1) {
                newArr.push(ele);
            }
        }
        return newArr;
    }
}
let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray([1, 1, 1, '2', 9]))
console.log(arr.addAll())
console.log(arr.uniquel())
// let arr0 = new MyArray('1234566');
function show(a) {
    var a = document.getElementById(a);
    if (a.style.display == "block") {
        a.style.display = "none";
    }
    else {
        pa_passage1.style.display = "none";
        pa_passage2.style.display = "none";
        pa_passage3.style.display = "none";
        pa_passage4.style.display = "none";
        pa_passage5.style.display = "none";
        a.style.display = "block";
    }
}
