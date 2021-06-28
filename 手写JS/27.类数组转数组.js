// 类数组有length,可以通过下标访问,但是不能使用数组的方法 DOM操作.

// 类数组转数组 1.解构赋值 2.Array.form  3. Array.prototype.slice.call() 4.Array.apply(null,arrayLike)  5. Array.prototype.concat.apply([],arrayLike) 

[...arrayLike]
Array.from(arrayLike)
Array.prototype.slice.call(arrayLike)
Array.apply(null,arrayLike)
Array.prototype.concat.apply([],arrayLike)