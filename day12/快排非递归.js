
function quickSort(arr, left = 0, right = arr.length - 1) {
    let que = [[left, right]]
    while (que.length) {
        let cur = que.pop()
        if (cur[0]>cur[1]) return
        // console.log(cur)
        let l = cur[0], r = cur[1]
        let  pivot = arr[cur[0]]
        while (l < r) {
            while (l < r && arr[r] >= pivot) r--
            if (l < r) arr[l] = arr[r]
            while (l < r && arr[l] <= pivot) l++
            if (l < r) arr[r] = arr[l]
            if (l >= r) arr[l] = pivot
        }
        que.push([cur[0], r - 1])
        que.push([r + 1, cur[1]])
    }
}

let nums = [2, 4, 5, 1, 6, 88, 11, 22, 14]
quickSort(nums, 0, nums.length - 1)
console.log(nums)