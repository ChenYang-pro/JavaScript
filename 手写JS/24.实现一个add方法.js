
function add(...args) {
    // 收集当前传入的参数
    let allArgs = [...args]
    // 收集多次传入的参数
    function fn(...newArgs) {
        allArgs = [...newArgs, ...allArgs]
        return fn
    }
    // .toString 会隐式调用，每次对象执行完毕后就会调用toString
    fn.toString = function () {
        return allArgs.reduce((pre, cur) => pre + cur)
    }
    return fn
}
console.log(add(1)(2)(3)())