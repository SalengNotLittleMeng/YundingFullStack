let once = function(fn, times = 1) {
    return function(...args) {
        if (times != 0) {
            times--;
            return fn.apply(this, args)
        } else {
            return 'error'
        }
    }
}

function add(a, b) {
    return a + b;
}

const add3 = once(add, 3);
console.log(add3(1, 2)); // 3
console.log(add3(2, 3)); // 5
console.log(add3(3, 4)); // 7
console.log(add3(4, 5)); // 次数用完，不执行
console.log(add3(5, 6)); // 次数用完，不执行