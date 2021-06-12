
function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[min]) min = j
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
let nums = [2, 4, 5, 1, 6, 88, 11, 22, 14]
console.log(selectSort(nums))