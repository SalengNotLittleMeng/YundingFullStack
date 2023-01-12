class Person {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  hobby() {
    return "我的爱好是听歌";
  }
  speciality() {
    return "我的特长是弹琵琶";
  }
}
const my = new Person("王钰捷", "女", 18);
console.log(my);
console.log(my.name);
console.log(my.gender);
console.log(my.age);
console.log(my.hobby());
console.log(my.speciality());
