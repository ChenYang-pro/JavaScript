// 你的任务是处理一段输入序列从而输出用户真正输入的内容。这段序列会显示每一秒用户按下的按键，如2表示按下2键，0表示按下0键，而空格表示这一秒用户没有输入。如果该用户2秒内无输入，或者按下与上一按键不同的按键的话那么整个键盘会被“刷新”，即忽略上一次的用户按键。如果该键仅含有3个字母，但是用户按下了4次该键，那么又会回到该键的第一个字母。例如，连续按4下6键，那么此时输入的字母为m，连续按5次7键则输入的字母为p。

//        接下来，给你一段长度为n的仅含有-和除1之外的阿拉伯数字组成的字符串，你需要输出用户真正输入的文本内容。保证输入的字符串合法。本题中用字符 - 来表示空格，详情请见样例。

// 5
// 4
// 2233
// 10
// 0202020202
// 15
// 2--2-2---222--2
// 12
// 400-820-8820
// 38
// 00002222333344445555666677777888899999

// be
// -a-a-a-a-a
// abca
// g--ta-ua-
// ----adgjmptw

let obj = {
    '0': '-',
    '2': 'abc',
    '3': 'edf',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

const getStr = (str, n) => {
    let cur = 0, res = '', zero = 0, temp = '',last=''
    for (let i = 0; i < n; i++) {
        let ch = str[i]
        last = temp
        temp = str[i] === '-' ? temp : obj[ch][cur % obj[ch].length]
        if (str[i] === '0') {
            res += temp
            zero = 0
        } else if (ch === '-') {
            zero++
            if (zero >= 2) {
                cur = 0
            }
        } else if (ch===last) {
            cur++
        } else if (ch !==last) {
            res += temp
            cur = 0
            zero = 0
        }
    }
    return res
}


const count = [15]
const strs = ['2--2-2---222--2']

for (let i = 0; i < 2; i++) {
    let n = count[i]
    let str = strs[i]
    console.log(getStr(str, n))
}