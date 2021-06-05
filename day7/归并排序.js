// 归并排序也采用分治的思想，其主要难点在合并 时间复杂度 O(nlogn)
// 稳定的算法
let num = []
for (let t = 0; t < 2000; t++) {
    num.push(Math.floor(Math.random() * 20000));
}

function mergeSort(arr) {
    if (arr.length<2) return Array
    let lens = arr.length
    let mid = Math.floor(lens / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))

    function merge(arr1, arr2) {
        let res = []
        while (arr1.length && arr2.length) {
            if (arr1[0]<=arr2[0]) res.push(arr1.shift())
            else res.push(arr2.shift())
        }
        while (arr1.length) res.push(arr1.shift())
        while (arr2.length) res.push(arr2.shift())
        return res
    }
}

let result = mergeSort(num)
console.log(result)