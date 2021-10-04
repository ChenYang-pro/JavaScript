// 2、写一个订阅发布模式？

// 答案：

class EventEitter {
    constructor(){
        this.events = {}
    }
    // 开启订阅
    on(type,fn) {
        if (this.events[type]) {
            this.events[type].push(fn)
        } else {
            this.events[type] = [fn]
        }
    }
    // 取消订阅
    off(type, fn) {
        if (this.events[type]) {
            this.events[type].filter((item=> item!=fn))
        } else return
    }
    // 一次订阅
    once(type,fn) {
        const func = () =>{
            fn()
            this.off(type,fn)
        }
        this.on(type,func)
    }
}