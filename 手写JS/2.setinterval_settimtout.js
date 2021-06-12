
// settimeout 实现 setinterval

function myInterval(fn, t) {
    function interval() {
        fn()
        setTimeout(() => {
            interval()
        }, t);
    }
    setTimeout(() => {
        interval()
    }, t);
}

let a = myInterval(() => {
    console.log(111);
}, 1000)
// let b=myInterval(() => {
//   console.log(222)
// }, 1000)


// setinterval 实现 settimeout
// function myTimeout(fn, t) {
//     const timer = setInterval(() => {
//         fn()
//         clearInterval(timer)
//     }, t);
// }
// let b = myTimeout(() => console.log(111), 1000)