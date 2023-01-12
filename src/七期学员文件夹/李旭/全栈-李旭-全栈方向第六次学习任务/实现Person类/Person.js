class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    hobby() {
        return "我的爱好是学习，打篮球等等";
    }
    speciality() {
        return "我的特长是等等等等";
    }
}
let my = new Person("李旭", "男", 18);
console.log(my.name)
console.log(my.gender)
console.log(my.age)
console.log(my.hobby())
console.log(my.speciality())