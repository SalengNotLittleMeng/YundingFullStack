function MyArray(arr){
    if(Array.isArray(arr) !== true){
        throw "Error:the input is not an array!";
    }
    this.checkArray = function(){ 
        let checkarr; 
        for(let x = 0;x < arr.length;x++){
            checkarr = (typeof (arr[x]) === 'number');
            if(checkarr == true){
                let newarr = [];      
                for(let i = 0;i < arr.length;i++){
                    newarr[i] = arr[i];
                }
                return newarr;
            }
            else{
                return false;
            }
        }
    }
    this.addAll = function(){
        let sum = 0;
        for(let n = 0;n < arr.length;n++){
            sum = sum + arr[n];
        }
        return sum;
    }
    this.uniquel = function(){
        let a = [],b = [];
        for(let m = 0;m < arr.length;m++){
            if(!b[arr[m]]){
                b[arr[m]] = 1;
                continue;
            }
            b[arr[m]]++;
        }
        for(let t = 0;t < b.length;t++){
            if(b[t] == 1){
                a.push(t);
            }
            else if(b[t] > 1){
                b[t] = 1;
                a.push(t);
            }
        }
        return a;
    }
}
let args = [1, 2, 3, 4, 6, 6];
let arr = new MyArray(args);
console.log(arr.checkArray([1, 1, 1, '2', 9]));
console.log(arr.addAll());
console.log(arr.uniquel());
let arr0 = new MyArray('1234566');