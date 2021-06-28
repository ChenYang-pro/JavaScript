
// new一个对象：1.在内存中开辟一个新空间，创建一个空对象 2. this指向刚创建的空对象 4.执行构造函数，给空对象添加属性和方法 4.返回这个对象

function myNew(fn, ...args){
    // Object.create()创建一个新的对象, 使用现有对象提供新对象的__proto__
    let obj = Object.create(fn.prototype)
    let res = fn.call(obj,...args)
    if (res && (typeof res === "object" || typeof res === "function")) {
        return res
    }
    return obj
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
