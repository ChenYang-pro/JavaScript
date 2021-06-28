let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
 // 我是姓名，年龄18，性别undefined
 console.log(render(template, data))

function render(temp,data){
    //  /... / 表示字面量正则的声明, \w 预定义类表示单词字符（字母、数字、下划线） + 表示至少出现一次 g表示全局匹配
    let computed = temp.replace(/\{\{(\w+)\}\}/g,function(match,key) {
        return data[key]
    })
    return computed
}
