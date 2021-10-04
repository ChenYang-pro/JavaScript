let arr = '[1,3,3,5,2,2,2,1,2,3,3,5,5,5,6,6]'

let arr_ = JSON.parse(arr)
console.log(arr_)
let res = {}
let count = 1+1

for (let ch of arr_) {
    if (res[ch]) res[ch] += 1
    else res[ch] = 1
}

console.log(res)

const res_ = Reflect.ownKeys(res).sort((a, b) =>res[b]-res[a])

let rem = []
rem.push(res_[0])

if (count > res_.length) console.log(-1, -1)
for (let i = 1; i < res_.length;i++){
    if (res[res_[i]] !== res[res_[i-1]]) rem.push(res_[i-1])
}
console.log(rem)
console.log(res_[count], res[res_[count]])

