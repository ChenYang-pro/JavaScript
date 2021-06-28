
// apply(obj,参数数组) call(obj,参数1,参数2...) apply()和call()都是只改变一次this指向
// bind(参数) 永久改变this指向 

Function.prototype.myApply = function (obj, args) {
    if (!obj || obj === null) obj = window
    let fn = Symbol()
    obj[fn] = this
    return obj[fn](...args)
}
Function.prototype.myCall = function (obj, ...args) {
    if (!obj || obj === null) obj = window
    let fn = Symbol()
    obj[fn] = this
    return obj[fn](...args)
}
Function.prototype.myBind = function (obj, ...args) {
    if (!obj || obj === null) obj = window
    let fn = Symbol()
    obj[fn] = this
    let _this = this
    // 1. 当bind后的函数作为构造函数使用，this执行对象自身
    const result = function (...innerArgs) {
        if (this instanceof _this === true) {
            this[fn] = _this
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            obj[fn](...[...args, ...innerArgs])
            delete obj[fn]
        }
    }
    result.prototype = Object.create(this.prototype)
    return result
}
function Person(name, age) {
    console.log(name); //'我是参数传进来的name'
    console.log(age); //'我是参数传进来的age'
    console.log(this); //构造函数this指向实例对象
}
// 构造函数原型的方法
Person.prototype.say = function () {
    console.log(123);
}
let obj = {
    objName: '我是obj传进来的name',
    objAge: '我是obj传进来的age'
}
// 普通函数
function normalFun(name, age) {
    console.log(name);   //'我是参数传进来的name'
    console.log(age);   //'我是参数传进来的age'
    console.log(this); //普通函数this指向绑定bind的第一个参数 也就是例子中的obj
    console.log(this.objName); //'我是obj传进来的name'
    console.log(this.objAge); //'我是obj传进来的age'
}
// 先测试作为构造函数调用
let bindFun = Person.myBind(obj, '我是参数传进来的name')
let a = new bindFun('我是参数传进来的age')
a.say() //123
// 再测试作为普通函数调用
let bindFuns = normalFun.myBind(obj, '我是参数传进来的name')
bindFuns('我是参数传进来的age')