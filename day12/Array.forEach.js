
// 第一个是必须要有的callBack回调函数，第二个是可选的一个对象参数。回调函数里面有三个参数，item，index，array。
Array.prototype.myForEach = function(callback) {
    var _arr = this
    var _len = _arr.length
    var _arg2 = arguments[1] || window
    for (let i = 0; i < _len; i++) callback.apply(_arg2,[_arr[i],i,_arr])
}
var arr = [
    {
        name:'张三',
        age:34
    },
    {
        name:'李四',
        age:25
    },
    {
        name:'王五',
        age:21
    },
    {
        name:'刘六',
        age:28
    }
];

var obj = {
    name:'Jacky',
    age:3
}
console.log('原生forEach');
arr.forEach(function(item,index,array){
    console.log(this);
    console.log(item,index,array);
    console.log('-----');
},obj);

console.log('自己重写的forEach');

arr.myForEach(function(item,index,array){
    console.log(this);
    console.log(item,index,array);
    console.log('-----');
},obj);