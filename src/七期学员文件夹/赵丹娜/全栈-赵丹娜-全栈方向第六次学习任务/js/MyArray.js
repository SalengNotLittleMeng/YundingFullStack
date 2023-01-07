class MyArray
{
    arr;
    constructor(arr)
    {
        if (!Array.isArray(arr))
        {
            throw "error:it is not an array";
        }
        this.arr = arr;
    }
    checkArray(array)
    {
        for (let value of array)
        {
            if (typeof value != "number")
            {
                return false;
            }
        }
        return true;
    }
    addAll()
    {
        let sum = 0;
        for (let value of this.arr)
        {
            sum += value;
        }
        return sum;
    }
    uniquel()
    {
        let i = 0;
        let newArr = [];
        for (let value1 of this.arr)
        {
            let flag = true;
            for (let value2 of newArr)
            {
                if (value1 === value2)
                {
                    flag = false;
                    break;
                }
            }
            if (flag == true)
            {
                newArr[i] = value1;
                i++;
            }
        }
        return newArr;
    }
}
let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray([1, 1, 1, '2', 9]));
console.log(arr.addAll());
console.log(arr.uniquel());
let arr0 = new MyArray('1234566');