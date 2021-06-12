
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target === arr[mid]) return mid
        else if (target > arr[mid]) left = mid + 1
        else if (target < arr[mid]) right = mid - 1
    }
    return '目标不在数组中'
}

let nums = [1,3,5,6,7,9,11]
console.log(binarySearch(nums,13))