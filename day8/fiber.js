
// 斐波那契数列

function fiber(n) {
    if (n <= 2) {
        return 1
    }
    else {
        return fiber(n-1)+fiber(n-2)
    }
    
}

let res = fiber(5)
console.log(res)