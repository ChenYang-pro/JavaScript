
console.log(NaN === NaN)
console.log(+0 === -0)

console.log(Object.is(NaN, NaN))
console.log(Object.is(+0, -0))

Object.prototype.myIs = function (x, y) {
    if (x === y) return x !== 0 || 1 / x === 1 / y
    // 当 x 与 y 不等时, 只有x 和y 都为 NaN 才会返回 true  NaN!==NaN
    return x !== x && y !== y
}