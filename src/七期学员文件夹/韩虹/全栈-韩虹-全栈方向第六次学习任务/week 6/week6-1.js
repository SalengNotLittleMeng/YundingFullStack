class Person {
    constructor(name,gender,age){
        this.name = name
        this.gender = gender
        this.age = age
    }
     hobby(){
        console.log("woshi")
        }
    speciality(){
        console.log("woshi")
        }
}
let my = new Person("韩虹","女",19)
console.log(my.name)
console.log(my.gender)
console.log(my.age)
my.hobby()
my.speciality()