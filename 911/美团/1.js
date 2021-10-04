// 2
// cabac
// a
// YES
// NO


//  cabac 有一个是组合不是回文，那么是true
let strs = ['cabac','aaaaaa'],count = 2

const isBeatiful = (str) => {
    let arr = [...new Set(str.split(''))]
    // console.log('arr',arr.length)
    if (arr.length<=1) return 'NO'
    return 'YES'
}

for (let i = 0; i < count; i++) {
    let str = strs[i]
    console.log(isBeatiful(str))
}