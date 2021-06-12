
function debounce(fn, t) {
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, t);
    }
}

function throttle(fn, t) {
    let flag = true
    return function () {
        if (!flag) return
        flag = false
        setTimeout(() => {
            fn()
            flag = true
        }, t);
    }
}