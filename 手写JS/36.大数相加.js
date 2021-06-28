
function add(arr1, arr2) {
    let i = a.length - 1, j = b.length - 1, add = 0, sum = 0, res = []
    while (i >= 0 || j >= 0 || add) {
        let x = arr1[i] ? arr1[i] - 0 : 0
        let y = arr2[j] ? arr2[j] - 0 : 0
        sum = x + y + add
        add = Math.floor(sum / 10)
        res.push(sum % 10)
        i--
        j--
    }
    return res.reverse().join("")
}
let a = "900";
let b = "12345";
console.log(add(a, b))