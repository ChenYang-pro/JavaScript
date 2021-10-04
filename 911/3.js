// 3、获取最长回文子串
// 示例1：输入 s = 'babad'
// 结果：返回: `aba` 或 `bab`
// 示例2：输入 s = 'cbbd'
// 结果： 返回： 'bb'
// 示例3：输入 s = 'a'
// 结果： 返回： 'a'
// 示例4：输入 s = 'ac'
// 结果： 返回： 'a'
// 答案：
// function longestPalindrome(s) {
// // ... 请完善
// }

function isPalind(str) {
    let lens = str.length
    for (let i = 0; i < lens / 2; i++) {
        if (str[i] != str[lens - i - 1]) return false
    }
    return true
}

function longestPalindrome(s) {
    let res = ''
    if (s.length===1) return s
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let curStr = s.slice(i, j)
            if (isPalind(curStr)) {
                res = res.length > curStr.length ? res : curStr
            }
        }
    }
    return res
}

console.log(longestPalindrome('a'))