
function debounce(fn,delay) {
    let timer 
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay);
    }
}