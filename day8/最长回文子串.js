

// 判断回文， str.split("").reverse().join("") == str

// 找出最长回文自创
let str = 'sssss'

// 1. 暴力法  双重遍历 i-j 每个子串是不是回文，保存最长  时间复杂度 O(n³)
var method1 = function () {
    if (str.length === 1) {
        console.log(str)
        return
    }
    let res = ''
    for (let i = 0; i < str.length; i++) {
        //  string.slice / number.slice 左闭右开
        for (let j = 0; j <= str.length; j++) {
            let cur = str.slice(i, j)
            if (cur.split("").reverse().join("") === cur) res = cur.length > res.length ? cur : res
        }
    }
    console.log(res)
}

// 2. 中心搜索， 从字符串每个字符开始往左右搜索找到回文，返回最长子串 时间复杂度 O(n²)
var method2 = function () {
    if (str.length === 1) {
        console.log(str)
        return
    }
    let res = ''


    for (let i = 1; i < str.length; i++) {
        let cur1 = findCycle(i, i)
        let cur2 = findCycle(i, i + 1)
        cur = cur1.length > cur2.length ? cur1 : cur2
        res = cur.length > res.length ? cur : res
    }
    console.log(res)
    function findCycle(left, right) {
        left--;
        right++
        let cur_res = ''
        while (left >= 0 && right < str.length) {
            if (str[left] == str[right]) {
                let cur = str.slice(left, right + 1)
                cur_res = cur.length > cur_res.length ? cur : cur_res
                left--
                right++
            } else {
                break
            }
        }
        return cur_res
    }
}

// 3. 动态方程 DP
var method3 = function() {
    
}

console.log("暴力法：")
method1()

console.log("中心搜索法：")
method2()