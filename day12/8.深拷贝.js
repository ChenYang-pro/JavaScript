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

// const obj1 = JSON.parse(JSON.stringify(obj))
// console.log(obj,obj1)
// obj.name='ccc'
// console.log(obj,obj1)
function isObject(val) {
    return typeof val === "object" && val !== null;
}

function deepClone(obj) {
    if (!isObject(obj)) return obj;
    let target = Array.isArray(obj) ? [] : {};
    // Reflect.ownKeys(target)返回一个包含所有自身属性（不包含继承属性）的数组
    Reflect.ownKeys(obj).forEach((item) => {
        if (isObject(obj[item])) {
            target[item] = deepClone(obj[item]);
        } else {
            target[item] = obj[item];
        }
    });
    return target;
}
// var obj1 = {
// a:1,
// b:{a:2}
// };
// var obj2 = deepClone(obj1);
// console.log(obj1);


var newObj = deepClone(obj)
console.log(newObj, obj)