function merge(arr1, arr2) {
    if (!arr1) return arr2
    if (!arr2) return arr1
    let res = []
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) res.push(arr1.shift())
        else res.push(arr2.shift())
    }
    while (arr1.length) res.push(arr1.shift())
    while (arr2.length) res.push(arr2.shift())
    return res
}

function mergeSort(arr) {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))

}


let nums = [2, 4, 5, 1, 6, 88, 11, 22, 14]
console.log(mergeSort(nums))