class Person{
    constructor(name,gender,age){
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
    hobby(){
        console.log("我的爱好是打篮球、跑步、运动等等");

    }
    speciality(){
        console.log("我的特长是性格温和，待人友善，体育比较突出等等");
    }
}
let me=new Person('黄笑苒','男',19);
console.log(me.name);
console.log(me.gender);
console.log(me.age);
console.log(me.hobby);
console.log(me.speciality);
