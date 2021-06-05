
// 1.题目：为字符串原型增加 reverse() 方法，调用后将自己倒序返回
String.prototype.reverse = function () {
    return this.split("").reverse().join("")
}

str = 'abbbcd'
console.log(str.reverse())

// 2. 题目：有一个数组，里面只存在 * 和 字母，如 ['*', 'd', 'c', '*', 'e']。
// 实现一个函数把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变
function changePlace(num) {
    let res = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] == '*') res.unshift(num[i])
        else res.push(num[i])
    }
    console.log(res)
}

let num = ['*', 'd', 'c', '*', 'e']
changePlace(num)

// ====================
// 3. 题目：将字符串转为驼峰格式 border-bottom-color -> borderBottomColor
// toUpperCase() 返回一个新的字符串，转大写
function camelCase(str) {
    let curStr = str.split('-')
    if (curStr.length <= 1) {
        console.log(str)
        return
    }
    let res = ''
    res += curStr[0]
    for (let i = 1; i < curStr.length; i++) {
        res += curStr[i][0].toUpperCase() + curStr[i].slice(1)
    }
    console.log(res)
}

str3 = 'border-Bottom-color'
camelCase(str3)

// 题目：实现一个函数，比较两个版本号的大小。返回 1（大于）/0（等于）/-1（小于）
// 1.0.20 < 1.1.0 返回 -1,  1.0.20 > 1.0.3 返回 1
function versionCompare(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let lens = v1.length > v2.length ? v1.length : v2.length
    for (let i = 0; i < lens; i++) {
        const a = v1[i]?v1[i]-0:0
        const b = v2[i]?v2[i]-0:0
        if (a>b) {
            console.log("----------(1)-----------")
            return
        } else if (a<b) {
            console.log("----------(-1)-----------")
            return
        }
    }
    console.log("----------(0)-----------")
}

versionCompare("1.0.20", "1.1.0")
versionCompare("1.0.20", "1.0.3")

// 大数相加 字符串相加