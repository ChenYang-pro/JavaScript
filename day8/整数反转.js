var reverse = function (x) {
    let res = 0
    while (x!==0) {
        res = res * 10 + x % 10
        if (res < Math.pow(-2, 31) || res > Math.pow(2, 31)) return 0
        x = (x / 10)
        x = ~~x
    }
    return res
};

let a = -1234
console.log(reverse(a))