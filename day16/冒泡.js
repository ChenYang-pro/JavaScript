function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return arr
}

let nums = [2, 4, 5, 1, 6, 88, 11, 22, 14]
console.log(bubbleSort(nums))