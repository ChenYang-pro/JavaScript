
function debounce(fn, delay = 300) {
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        setTimeout(() => {
            fn()
        }, delay);
    }
}

function throttle(fn,delay){
    let flag = true
    return function(){
        if (!flag) return 
        flag = false
        setTimeout(() => {
            fn()
            falg = true
        }, delay);
    }
}