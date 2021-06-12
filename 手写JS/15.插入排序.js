
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // 将要查找的队列
        let prev = i - 1
        // 记录当前要插入的值
        let cur = arr[i]
        // 当前要插入的值小于比较的值
        while (prev >= 0 && arr[prev] > cur){
            // prev往前
            arr[prev+1] = arr[prev]
            prev--
        }
        arr[prev+1] = cur
    }
    return arr
}
let num = [1,2,3,1,2,1,1,4,5,4,4,5,0]
console.log(insertSort(num))