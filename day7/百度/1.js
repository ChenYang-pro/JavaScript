
// let num = 81

// let num_ = Number(num.toString().split('').reverse().join(''))

// console.log(typeof num_)


// let arr = [0,2,3,4]

// // let res = arr.reduce((prev,cur)=> prev+= cur,0)

// let res = arr.join(' ')

// console.log(res)

let res = '10011'

res = res.split('').sort((a,b)=>a-b).join('')

let res_ = '11001'

res_ = res_.split('').sort((a,b)=>a-b).join('')

console.log(res,res_)
console.log(res==res_)
