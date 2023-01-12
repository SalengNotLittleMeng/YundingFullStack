function Person(name,gender,age,hobby,speciality){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.Hobby = function(){
        console.log('我的爱好是' + hobby + '等等');
    }
    this.Speciality = function(){
        console.log('我的特长是' + speciality + '等等');
    }
}
let my = new Person('李艳芳','女',18,'跳舞','熬夜');
console.log(my.name);
console.log(my.gender);
console.log(my.age);
my.Hobby();
my.Speciality();