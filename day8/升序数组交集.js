
let arr1 = [1,2,3,4,5,6,7,8]
let arr2 = [2, 4, 6]

var findSame = function () {
    let sets = new Set(arr1)
    if (arr1.length == 0 || arr2.length == 0) {
        console.log("")
        return
    }
    let res = []
    for (let num of arr2) {
        if (sets.has(num)) res.push(num)
    }

    console.log(res)
}
findSame()