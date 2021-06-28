
function mySetTimeOut(fn, delay = 300) {
    let timer
    function interval() {
        fn()
        timer = setTimeout(() => {
            interval()
        }, delay);
    }
    setTimeout(() => {
        interval()
    }, delay);
}

// mySetTimeOut(()=>console.log(111))

function myInterval(fn,delay) {
    const timer = setTimeout(() => {
        fn()
        clearTimeout(timer)
    }, delay);
}
myInterval(()=>console.log(2222))