var a = { name: "Tony", age: 23 }
// 1. JSON.parse(JSON.stringify) 不能拷贝函数
// var b = JSON.parse(JSON.stringify(a))
// a.name = "TT"
// console.log(a, b)

// 2. 解构赋值 不能拷贝多层的对象
// var b = {...a}
// a.name = "TT"
// console.log(a,b)

// 3.Object.assign() 不能拷贝多层对象 对象的属性值为简单类型(string，number)，为深拷贝；如果属性值为对象或其他引用类型，是浅拷贝的
// var a = { name: "Tony", age: 23 }
// var b = Object.assign({},a)
// console.log(a, b)
// a.age = 20
// console.log(a, b)

// 4. 遍历拷贝
function isObj(val) {
    return typeof val === 'object' && val !== null
}
function deepClone(obj) {
    if (!isObj(obj)) return obj
    let target = Array.isArray(obj) ? [] : {}
    Reflect.ownKeys(obj).forEach((item,index)=>{
        if (!isObj(obj)) target[item] = obj[item]
        else target[item] = deepClone(obj[item])
    })
    return target
}
var a = { name: "Tony", age: 23 }
var b = deepClone(a)
console.log(a, b)
a.age = 20
console.log(a, b)

