
class EventEmitter {
    constructor() {
        // 用对象来存储回调，因为同一个事件可能有多个回调
        this.callBack = {}
    }
    // 为事件名增加事件
    on(type, fn) {
        if (!this.callBack[type]) this.callBack[type] = [fn]
        else this.callBack[type].push(fn)
    }
    off(type, fn) {
        if (!this.callBack[type]) return
        else this.callBack[type] = this.callBack[type].filter(item => item !== fn)
    }
    once(type, fn) {
        function func() {
            fn()
            this.off(type, fn)
        }
        this.on(type, func)
    }
    emit(type, ...rest) {
        this.callBack[type] && this.callBack[type].forEach(fn => fn.apply(this, rest))
    }
}
const event = new EventEmitter();
const handle = (...rest) => {
    console.log(rest);
};
event.on("click", handle);
event.emit("click", 1, 2, 3, 4);
event.off("click", handle);
event.emit("click", 1, 2);
event.once("dbClick", () => {
    console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
