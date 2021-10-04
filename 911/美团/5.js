let input = 42

let res = 0
const findMin = (input) =>{
    if (input === 0) {
        return res
    }
    let x = Math.round(Math.log2(input))
    let cur = Math.abs(input - Math.pow(2,x))
    res++
    findMin(cur)
}

findMin(input)
console.log(res)