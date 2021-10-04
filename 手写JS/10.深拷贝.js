// // 1.JSON.stringify() & JSON.parse()
// var a = {
//     name: "Tony", age: 23, get: function () {
//         console.log(111)
//     }
// }
// var b = {}
// // JSON.stringify() 将JS对象转为JSON字符串 
// // JSON.parse() 将JSON字符串转为JS对象
// b = JSON.parse(JSON.stringify(a))
// console.log(a, b)
// a.age = 20
// console.log(a, b)

// 2. 解构赋值

// var a = { name: "Tony", age: 23 }
// var b = { ...a }
// console.log(a, b)
// a.age=20
// console.log(a,b)

// 3. 递归调用
// function isObject(val) {
//     return typeof val === 'object' && val !== null
// }
// function deepClone(obj) {
//     // 如果不是对象，就直接返回
//     if (!isObject(obj)) return obj;
//     // 数组 or 对象
//     let target = Array.isArray(obj) ? [] : {};
//     Reflect.ownKeys(obj).forEach((item) => {
//         if (isObject(obj[item])) {
//             target[item] = deepClone(obj[item]);
//         } else {
//             target[item] = obj[item];
//         }
//     });

//     return target;
// }
// var obj1 = {
//     a: 1,
//     b: { a: 2 }
// };
// var obj2 = deepClone(obj1);
// obj1.b.a = 3
// console.log(obj1);
// console.log(obj2);

// 4.object.assign()

var a = { name: "Tony", age: 23 }
var b = Object.assign(a)
console.log(a, b)
a.age = 20
console.log(a, b)