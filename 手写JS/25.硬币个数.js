// 题目描述:给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

function coinChange(coins, amout) {
    coins.sort((a, b) => a - b)
    if (amount < coins[0]) return -1
    // dp[i] 表示 金额为 i时的最小硬币
    // dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
    let dp = []
    dp[0] = 0
    for (let i = 1; i <= amout; i++) {
        dp[i] = Infinity
        for (let coin of coins) {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

let coins = [2], amount = 3
console.log(coinChange(coins, amount))