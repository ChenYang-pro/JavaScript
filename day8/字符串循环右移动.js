
var loopRight = function(count,str) {
    if (count == str.length) {
        console.log(str)
        return 0
    }
    nums = str.split("")
    console.log(nums)
    for (let i = 0; i < count; i ++) {
        let cur = nums.pop()
        nums.unshift(cur)
    }
    console.log(nums.join(""))
}

str = 'bedfsg'
console.log(str)
loopRight(2,str)