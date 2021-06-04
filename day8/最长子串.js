
var longestSubstring = function (s) {
    let max = 0
    let repear = []
    for (let i = 0; i < s.length; i++) {
        if (repear.indexOf(s[i]) >= 0) {
            // 找到当前重复的位置
            let cur = repear.indexOf(s[i])
            repear.splice(0, cur + 1)
        }
        repear.push(s[i])
        let cur_length = repear.length
        max = Math.max(cur_length, max)
    }
    console.log(max)
}

var s = "abcabcbb"
longestSubstring(s)