
function faltter(arr) {
    if (!arr.length) return
    return arr.reduce((pre, cur) => Array.isArray(cur) ? [...pre, ...faltter(cur)] : [...pre, cur], [])
}

// let arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]]
// console.log(faltter(arr))

function faltter_(arr) {
    if (!arr.length) return
    while (arr.some((item)=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
let arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]]
console.log(faltter_(arr))