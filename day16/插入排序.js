function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let pre = i - 1
        let cur = arr[i]
        while (pre >= 0 && arr[pre] > cur) {
            arr[pre + 1] = arr[pre]
            pre--
        }

        arr[pre+1] = cur
    }
    return arr
}

let num = [1, 2, 3, 1, 2, 1, 1, 4, 5, 4, 4, 5, 0]
console.log(insertSort(num))