
function normalization(str) {
    if (!str) return null;
    var arr = str.replace(/]/g, "").split('[')
    console.log(arr)
    arr.splice(0, 1);
    //现将字符串处理成数组['abc','df','gh','mk']
    return Recursion(arr)
}
function Recursion(arr) {
    return arr.reverse().reduce((acc, cur) => {
        return { ...{ value: cur }, child: { value: acc } }
    })
}

let str = "[abc[df[gh[mk]]]]"
console.log(normalization(str))