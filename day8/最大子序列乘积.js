var maxProduct = function (nums) {
    let lens = nums.length;
    let dp = new Array(lens)
    dp[0, 0] = nums[0]
    dp[0, 1] = nums[0]
    let res = nums[0]
    for (let i = 1; i < lens; i++) {
        if (nums[i] >= 0) {
            max_ = Math.max(nums[i], dp[i - 1, 0] * nums[i])
            min_ = Math.min(nums[i], dp[i - 1, 1] * nums[i])
        } else {
            max_ = Math.max(nums[i], dp[i - 1, 1] * nums[i])
            console.log(dp[i, 0])
            min_ = Math.min(nums[i], dp[i - 1, 0] * nums[i])
        }
        res = Math.max(res, max_)
        dp[i, 0] = max_
        dp[i, 1] = min_
    }
    console.log(res)
    console.log(dp)
};


let nums_ = [-4, -3, -2]
maxProduct(nums_)