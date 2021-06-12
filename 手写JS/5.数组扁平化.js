// 将高维数组降成1维数组
let arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]]
console.log([].concat(...arr))
function flatter(nums) {
    if (nums.length <= 0) return
    // Array.reduce(fn,初始值)
    return nums.reduce((prev, cur) => Array.isArray(cur) ? [...prev, ...flatter(cur)] : [...prev, cur], [])
}

// console.log(flatter(arr))

// 非递归版本
function flatter_(nums) {
    if (!nums.length) return
    while (nums.some((item) => Array.isArray(item))) {
        nums = [].concat(...nums)
    }
    return nums
}
// console.log(flatter_(arr))
