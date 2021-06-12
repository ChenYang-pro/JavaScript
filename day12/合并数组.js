const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

function merge(arr1, arr2) {
    let res = []
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) res.push(arr1.shift())
        else res.push(arr2.shift())
    }
    while (arr1.length) res.push(arr1.shift())
    while (arr2.length) res.push(arr2.shift())
    return res
}
console.log(merge(arr1,arr2))

