// 1、手写一个function，实现bind方法的功能

// 答案：
// function bind(context, fn) {
// // ... 请完善

// }

// const fn2 = bind({},func1)

function MyBind(context, fn) {
    if (!context) context = window
    return function (...args) {
        fn.apply(context, [...args])
    }
}


