// 定义对象
let arr = [box1, box2, box3, box4, box5, box6] = document.getElementsByClassName("passage");
let array = [smallbox1, smallbox2, smallbox3, smallbox4, smallbox5, smallbox6] = document.querySelectorAll("ul");

// 绑定事件
for (let i = 0; i < arr.length; i++) {

    arr[i].addEventListener("click", function () {
        console.log(array[i]);
        if (array[i].style.display == "block") {
            array[i].style.display = "none";
        } else {
            array[0].style.display = "none";
            array[1].style.display = "none";
            array[2].style.display = "none";
            array[3].style.display = "none";
            array[4].style.display = "none";
            array[5].style.display = "none";
            array[i].style.display = "block";
        }
    })

}

// Person类
class Person {
    constructor(name, gender, age, hobby, speciality) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.myHobby = hobby;
        this.mySpeciality = speciality;
    }

    hobby() {
        return '我的爱好是' + this.myHobby;
    }
    speciality() {
        return '我的特长是' + this.mySpeciality;
    }

}

let my = new Person('张艺珑', '男', 18, '跑步', '没有特长');

// Myarray 类
class Myarray {
    // 构造函数 参数是一个数组
    constructor(array) {
        if (Array.isArray(array) === false) {
            throw 'This parameter is not a array'
        }

        // 为了接收传入构造函数的参数下面两个函数定义在构造函数中
        // addAll方法
        this.addAll = () => {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            return sum;
        }

        // uniquel方法
        this.uniquel = () => {
            for (let i = 0; i < array.length; i++) {
                for (let j = array.length; j >= i + 1; j--) {
                    if (array[i] === array[j]) {
                        array.splice(j, 1);
                    }
                }
            }
            return array;
        }
    }

    // 原型中的checkArray方法
    checkArray(array) {
        let flags = true;
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) == 'number') {
                flags = false;
            }
        }
        return flags;
    }

}
