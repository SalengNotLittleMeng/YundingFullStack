//面向对象

class Person{
    #name;
    #gender;
    #age;
    hobby() {
        return '我的爱好是打篮球，玩游戏，弹钢琴'
    }
    speciality() {
        return '我的特长是身高（自信）'
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
let me = new Person('任超毅', '男', 18);
console.log(me.name);
console.log(me.gender);
console.log(me.age);
console.log(me.hobby());
console.log(me.speciality());

//MyArray

let MyArray = function (str) {
  this.back=()=>{
    return str;
  };
  let check=Array.isArray(str);
  if (check!==true) {
    throw"这不是数组";
  } else{
    this.back();
  }
  console.log(str);
  this.checkArray=function(arr){
    let temp=0;
    for(let value of arr){
      if(typeof value==="string"){
        temp=1;
        return false;
      }
    }
    if(temp == 0){
      return true;
    }
  };
  this.addAll=()=>{
    let num = 0;
    for(let value of str){
      num += value;
    }
    return num;
  };
  this.uniquel=function(){
    let newArr=[];
    for(let ele of str){
      if (newArr.indexOf(ele)===-1){
        newArr.push(ele);
      }
    }
    return newArr;
  };
};
let args=[1, 2, 3, 4, 6, 6];
let arr=new MyArray(args);
console.log(arr.checkArray([1, 1, 1, "2", 9]));
console.log(arr.addAll());
console.log(arr.uniquel());
let arr0 = new MyArray('1234566')

//组件开发

var a=document.getElementById(a);
let box = [box1, box2, box3]
const box1 = document.getElementsByClassName("box1")[0]
const box2 = document.getElementsByClassName("box2")[0]
const box3 = document.getElementsByClassName("box3")[0]
function show(a) {
    var a=document.getElementById(a);
    if(a.style.display == "block")
    {
        a.style.display = "none";
    }
    else
    {
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";
        p5.style.display = "none";
        a.style.display = "block";
    }
}