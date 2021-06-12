
function quickSort(arr, left, right) {
    // 递归终止条件
    if (left >= right) return
    let l = left, r = right
    let pivot = arr[l]
    while (l < r) {
        // 先整理右边，因为pivot保存了最左边的值
        while (l < r && arr[r] >= pivot) r--
        if (l < r) arr[l] = arr[r]
        while (l < r && arr[l] <= pivot) l++
        if (l < r) arr[r] = arr[l]
        if (l >= r) arr[l] = pivot
    }
    // 递归调用左边和右边
    quickSort(arr, left, r - 1)
    quickSort(arr, r + 1, right)
}

let nums = [2, 4, 5, 1, 6, 88, 11, 22, 14]
quickSort(nums,0,nums.length-1)
console.log(nums)