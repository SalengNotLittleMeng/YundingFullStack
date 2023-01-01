class Person {
  constructor(name, gender, age, hobby, speciality) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  hobby() {
    console.log(this.name + "爱好唱跳rap");
  }
  speciality() {
    console.log(
      this.name +
        "性格外向、喜欢交朋友、善解人意、喜欢帮助人，都是个性特长的表现。体育特长。例如擅长长跑、打篮球、游泳等"
    );
  }
}
const my = new Person(
  "王烁杰",
  "男",
  19,
  "我的爱好唱跳rap",
  "性格外向、喜欢交朋友、善解人意、喜欢帮助人，都是个性特长的表现。体育特长。例如擅长长跑、打篮球、游泳等"
);
console.log(my.name);
console.log(my.gender);
console.log(my.age);
console.log(my.hobby());
console.log(my.speciality());