class MyArray{
    constructor(args) {
        this.args = args
        let value=Array.isArray(args)
    if (value === false)
    throw new Error('it is not an arr!')
    }
    checkArray(arra) {
        for (let i = 0; i < arra.length; i++){
            if (typeof arra[i] !== Number || BigInt) {
                return false
            } else {
                return ture
            }
        }
    }
    addAll() {
        let num = 0
    for (let n = 0; n < args.length; n++){
        
        num+=args[n]
        }
        return num
    }
    uniquel() {
        for (let j = 0; j < args.length; j++){
            const index = args.indexOf(args[j], j + 1)
            if (index !== -1) {
                args.splice(index,1)
            }
            j--
        }
        return args
    }

}
let args = [1, 2, 3, 4, 7, 8, 1]
console.log(args)
let arr = new MyArray(args)
console.log(arr.checkArray([1, "2", 3]))
console.log(arr.addAll())
console.log(arr.uniquel())