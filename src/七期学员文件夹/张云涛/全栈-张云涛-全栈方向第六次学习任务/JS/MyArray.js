class MyArray {
    array;
    constructor(arr){
        if (!Array.isArray(arr)) {
            throw 'error: not array'
        }
        this.array = arr;
    }
    checkArray(arr) {
        for (let value of arr)
        {
            if (typeof value !== 'number')
            {
                return false;
            }    
        }
        return true;
    }
    addAll() {
        let sum = 0;
        for (let value of this.array)
        {
            sum += value;
        }
        return sum;
   }
    uniquel() {
        let newArray = [];
        let j = 0;
        for (let i = 0; i < this.array.length; i++)
        {
            
            if (this.array.indexOf(this.array[i], i + 1) === -1)
            {
                newArray[j] = this.array[i];
                j++;
            }
        }  
        return newArray;
    }
}
let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args)
console.log(arr.checkArray([1, 1, 1, '2', 9]));
console.log(arr.addAll());
console.log(arr.uniquel());
let arr0 = new MyArray('1234566')