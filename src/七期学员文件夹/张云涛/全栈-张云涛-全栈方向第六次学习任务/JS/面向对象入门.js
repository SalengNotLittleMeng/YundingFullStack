class Person{
    #name;
    #gender;
    #age;
    hobby() {
        return '我的爱好是编程'
    }
    speciality() {
        return '我的特长是吃饭睡觉'
    }
    constructor(name,gender,age) {
        this.#name = name;
        this.#gender = gender;
        this.#age = age;
    }
    get name() {
        return this.#name;
    }
    get gender() {
        return this.#gender;
    }
    get age() {
        return this.#age;
    }
}
let me = new Person('张云涛', '男', 18);
console.log(me.name);
console.log(me.gender);
console.log(me.age);
console.log(me.hobby());
console.log(me.speciality());
