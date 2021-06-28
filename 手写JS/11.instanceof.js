// instanceof  通过原型链来判断是否是同一类型
// 原型链： 实例对象，函数对象。每个实例对象都有一个__proto__隐式原型链，指向他的构造函数的原型对象， Object.__proto__ =Function.prototype。 每个函数都有prototype和__proto__， prototype表示原型对象，可以把属性和方法写到prototype上被实例化对象继承，函数对象的__proto__指向Object.prototype。Object.prototype.__proto__ === null

// 递归
function myInstanceOf(obj1, obj2) {
    if (obj1 === null || obj2 === null) return false
    if (obj1.__proto__ === obj2.prototype) return true
    myInstanceOf(obj1.__proto__, obj2)
}
// 非递归
function myInstanceOf(obj1, obj2) {
    if (obj1 === null || obj2 === null) return false
    while (true) {
        if (obj1 === null) return false
        if (obj1.__proto__ === obj2.prototype) return true
        obj1 = obj1.__proto__
    }
}