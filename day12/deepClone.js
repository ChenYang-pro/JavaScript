
function deepClone(obj) {
    if (!isObj(obj)) return
    let target = Array.isArray(obj) ? [] : {}

    Reflect.ownKeys(obj).forEach((item) => {
        if (isObj(item)) {
            target[item] = deepClone(item)
        } else {
            target[item] = obj[item]
        }
    })
    return target
}
function isObj(val) {
    return typeof val === 'object' && val !== null
}

const obj = {
    name: 'demo',
    count: 10,
    args: [{
        title: 'test1'
    }, 123, false],
    params: {
        arg1: 234,
        arg2: 'xxx'
    }
}

var newObj = deepClone(obj)
console.log(newObj, obj)