
function repeat(num) {
    return [...new Set(num)]
}
let num = [1, 2, 4, 3, 4, 5, 1, 2, 6]
console.log(repeat(num))