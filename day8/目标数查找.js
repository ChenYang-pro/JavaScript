
// 给定一个数组和一个目标值，返回数组种合为目标值的下标

function findIndex(nums, target) {
    // 1.暴力法
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let cur = target - nums[i];
        if (cur < 0) continue
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === cur) {
                res.push([i, j]);
                break
            }
        }
    }
    console.log("findIndex",res)
}

function findIndex_Map(nums,target) {
    let map = new Map()
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target-nums[i])) res.push([i,map.get(target-nums[i])])
        else map.set(nums[i],i)
    }
    console.log("findIndex_Map",res)
}


let num = [1, 3, 5, 6, 7, 7, 8, 9]
findIndex_Map(num, 9)

