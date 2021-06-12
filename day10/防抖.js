
// 防抖 类似于坐电梯，每规定时间才执行一次

function debounce(func, timeout) {
    let timer
    return function(){
        const args = arguments;
        console.log(args)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(func(), timeout);
    };
}

debounce(()=>console.log(111),100)