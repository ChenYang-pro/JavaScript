
function isObject(val) {
    return typeof val === 'object' && val !== null
}
function flatten(obj) {
    if (!isObject(obj)) {
        return;
    }
    let res = {};
    function dfs(cur, attr) {
        if (isObject(cur)) {
            if (Array.isArray(cur)) cur.forEach((item, index) => dfs(item, `${attr}[${index}]`))
            else {
                for (let k in cur) dfs(cur[k], `${attr}${attr ? "." : ""}${k}`)
            }
        } else res[attr] = cur
    }
    dfs(obj, "")
    return res;
}
const obj = {
    a: {
        b: 1,
        c: 2,
        d: { e: 5 }
    },
    b: [1, 3, { a: 2, b: 3 }],
    c: 3
}
console.log(flatten(obj))