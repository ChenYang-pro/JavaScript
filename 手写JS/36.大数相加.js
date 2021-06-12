let a = "900";
let b = "12345";

function add(arr1, arr2) {
    let i = a.length - 1, j = b.length - 1, sum = 0, flag = 0
    let res = []
    while (i >= 0 || j >= 0 || flag != 0) {
        let a = arr1[i] ? arr1[i] - 0 : 0
        let b = arr2[j] ? arr2[j] - 0 : 0
        sum = a + b + flag
        res.push(sum % 10)
        flag = Math.floor(sum / 10)
        i--
        j--
    }
    return res.reverse().join("")
}

console.log(add(a, b))