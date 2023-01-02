class Person{
    constructor(name,gender,age){
        this.name = name
        this.gender = gender
        this.age = age
    }
    hobby() {
        console.log("我的爱好是XXXX等等")
    }
    speciality() {
        console.log("我的特长是XXXX等等")
    }
}

let my = new Person('张三', '女', 12)
console.log(my.age)
console.log(my.name)
console.log(my.gender)
console.log(my.hobby())
console.log(my.speciality())