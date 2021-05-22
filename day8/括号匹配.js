

// 给定一个字符串，判断字符串是否合法。

function isIegal(str) {
    let map = new Map([
        ["(",")"],
        ["[","]"],
        ["{","}"]
    ])
    let res = []
    for (let s of str) {
        if (map.has(s)) res.push(map.get(s))
        else {
            if (res.pop()!==s) {console.log(false);return}
        }
    }
    console.log(res.length===0)
}

let strs = "((((()))))"
isIegal(strs)