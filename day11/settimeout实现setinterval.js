
// settimeout 隔了规定的时间就执行 执行一次 setinterval 循环执行
function myinterval(fn,t) {
    let timer = null
    function interval() {
        fn()
        timer = setTimeout(interval,t)
    }
    interval()
    return {
        cancle:()=>{clearTimeout(timer)}
    }
}

myinterval(()=>console.log(1),1000)
