
function setIntervals(fn, delay) {
    let timer = { target: '' }
    function interval() {
        fn()
        timer.target = setTimeout(
            interval()
            , delay);
    }
    setTimeout(() => {
        interval()
    }, delay);
    return timer
}

function clears(timer) {
    clearTimeout(timer.target)
}

let timer = setIntervals(() => {
    console.log(111);
}, 300)

clears(timer)