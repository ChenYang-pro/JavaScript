
class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 实现订阅
    on(type, callBack) {
        if (!this.events[type]) this.events[type] = [callBack]
        else this.events[type].push(callBack)
    }
    off(type, callBack) {
        if (!this.events[type]) return
        this.events[type] = this.events[type].filter((item) => {
            return item !== callBack
        })
    }
    once(type, callBack) {
        function fn() {
            callBack()
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    emit(type, ...rest) {
        this.events[type] &&
            this.events[type].forEach((fn) => fn.apply(this, rest))
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
