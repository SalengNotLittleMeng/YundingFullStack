let judge = true;
      class MyArray {
        array;
        constructor(arr) {
          if (!Array.isArray(arr)) {
            throw "error:Not an array";
          }
          this.array = arr;
        }
        checkArray(arr) {
          for (let value of arr) {
            if (typeof value !== "number") {
              judge = false;
            }
          }
          return judge;
        }
        addAll() {
          let sum = 0;
          for (let value of this.array) {
            sum += value;
          }
          return sum;
        }
        uniquel() {
          for (let i = 0; i < this.array.length; i++) {
            const index = this.array.indexOf(this.array[i], i + 1);
            if (index !== -1) {
              this.array.splice(index, 1);
              i--;
            }
          }
          return this.array;
        }
      }
      let args = [1, 2, 3, 4, 6, 6];
      let arr = new MyArray(args);
      console.log(arr.checkArray([1, 1, 1, "2", 9]));
      console.log(arr.addAll());
      console.log(arr.uniquel());
      let arr0 = new MyArray("1234566");