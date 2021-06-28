
function unique(arr) {
    return [...new Set(arr)]
}
let arr = [1, 2, 2, 3, 5, 5, 6]
console.log(unique(arr))

// 时间复杂度 O(n)
function unique_(arr) {
    let obj = {}
    let res = []
    arr.forEach((item, index) => {
        if (!obj[item]) {
            obj[item] = true
            res.push(item)
        }
    })
    return res
}
console.log(unique_(arr))
