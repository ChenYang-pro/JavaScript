
function Interval (fn,delay){
    let timer = null
    function interval(){
        fn()
        timer = setTimeout(() => {
            interval()
        }, delay);
    }
    setTimeout(() => {
        interval()
    }, delay);
}

function clearsInterval (timer) {
    clearTimeout(timer)
}

let timers = Interval(()=>console.log(111),300)
clearsInterval(timers)