class Person {
    constructor(name, gender, age, myHobby, mySpeciality) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.myHobby = myHobby;
      this.mySpeciality = mySpeciality;
    }
    hobby() {
      return "我的爱好是" + this.myHobby + "等";
    }
    speciality() {
      return "我的特长是" + this.mySpeciality + "等";
    }
  }
  let my = new Person("梁嘉辉", "女", 18, "听音乐", "弹钢琴");
  console.log(my.name);
  console.log(my.gender);
  console.log(my.age);
  console.log(my.hobby());
  console.log(my.speciality());