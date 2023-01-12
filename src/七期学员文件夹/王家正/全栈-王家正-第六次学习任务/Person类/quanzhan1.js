class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    hobby() {
        return "我的爱好是阅读，打游戏，听音乐等等"
    }
    speciality() {
        return"我的特长是睡觉，吃饭等等"
    }
}
let my = new Person(
    "王家正","男","19"
)
console.log(my.name)
console.log(my.gender)
console.log(my.age)
console.log(my.hobby())
console.log(my.speciality()) 