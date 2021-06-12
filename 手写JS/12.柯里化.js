
function currying(fn, ...args) {
    const lens = fn.length
    let allArgs = [...args]
    const res = (...newArgs) => {
        allArgs = [...allArgs, ...newArgs]
        if (allArgs.length===lens){
            return fn(...allArgs)
        } else {
            return res
        }
    }
    return res
}
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))