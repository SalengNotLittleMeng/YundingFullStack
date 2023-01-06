"use strict"
class Person{
    constructor(name,gender,age,hobby_data,speciality_data){
        this.name=name
        this.gender=gender
        this.age=age
        this.hobby_data=hobby_data
        this.speciality_data=speciality_data
    }
    hobby(){
        console.log('我的爱好是'+this.hobby_data)
    }
    speciality(){
        console.log('我的特长是'+this.speciality_data)
    }
}
let my=new Person("贾京浩","男",20,'陈亚慧','腿')
console.log(my.name)
console.log(my.gender)
console.log(my.age)
my.hobby()
my.speciality()
let array=[]
let sum=0
let arr_temp = []
let ele=[]
class MyArray{
    constructor(array){
        this.array=array
        if(this.array instanceof Array ==0){
            throw new Error('这不是一个数组!');
        }
    }
    checkArray(arr_temp){
        for(let i=0;i<arr_temp.length;i++){
            if(isNaN(arr_temp[i])!=0){
                console.log('false,因为该数组中每一项不都是数字（'+arr_temp[i]+'不是数字）')
            }
        }
    }
    addAll(){
        for(let i=0;i<this.array.length;i++){
            sum +=this.array[i]
        }
        console.log(sum)
    }
    uniquel(){
        for(let i=0;i<this.array.length;i++){
            for (let j = i + 1; j < this.array.length; j++){
                if (this.array[i] == this.array[j]) {
                    this.array.splice(j, 1)
                    j--;
                }
            }
        }
        console.log(this.array)
    }
}
let args = [1, 2, 3, 4, 6, 6]
let arr = new MyArray(args)
arr.checkArray([1, 1, 1, 'A', 9])
arr.addAll()
arr.uniquel()
let arr0 = new MyArray('1234566')