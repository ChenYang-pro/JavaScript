
Array.prototype.myForEach = function (fn) {
    let arr = this
    let lens = arr.length
    let arg2 = arguments[1] || null
    for (let i = 0; i < lens; i++) {
        fn.apply(arg2, [arr[i], i, arr])
    }
}

let arr = [1, 2, 3, 5, 6]
arr.myForEach((item, index,arr) => console.log(item, index)
)