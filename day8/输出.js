// 当IIFE没有()。说明将IIFE赋值给变量
var test = (function(a) {
    this.a = a;
    return function(b) {
        return this.a + b;
    }
} 
// 当IIFE () 则表明执行调用了函数，返回结果
(function() {
    return 1
}())

); 

console.log(test(4))