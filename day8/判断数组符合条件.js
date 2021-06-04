
arr = [5,6,7,2,4,6,2]

// 箭头函数有{}时 必须有return

// array.filter() 过滤，返回一个新数组 过滤出满足回调函数条件的数组
var res = arr.filter(num => num>3)
// array.map() 对数组中每个元素执行回调函数的操作来创建新数组
var res1 = arr.map(num => num*3)
// array.every() 判断数组中每个元素是否都满足条件 返回值 boolean
var res2 = arr.every(num => num>3)
// array.some() 判断数组中一些元素是否满足条件  返回值 boolean
var res3 = arr.some(num => num>3)
// array.find() 找到第一个满足回调函数条件的值  array.findIndex() 返回找到第一个满足回调函数条件的值得下标
var res4 = arr.find(num => num>3)
// array.indexOf() 在数组中搜索元素值并返回其位置。
var res5 = arr.indexOf(5)

console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)