let n = 2
let strs = ['*#','#*']



let arr = new Array(n)

for (let i = 0; i < n; i++){
    let cur = strs[i].split('')
    arr[i] = cur
}
console.log(arr)