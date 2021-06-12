
function unique(arr) {
    return [...new Set(arr)]
}

let arr = [1, 2, 1, 4, 1, 6, 7]

console.log(unique(arr))