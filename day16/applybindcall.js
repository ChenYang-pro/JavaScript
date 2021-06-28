function MyApply(context, args) {
    context = context !== null ? context : window
    let fn = Symbol()
    context[fn] = this
    context[fn](...args)
}
function myBind(context, args) {
    context = context !== null ? context : window
    let fn = Symbol()
    context[fn] = this
    const _this = this
    function result(...inerArgs) {
        // 如果bind的函数作为构造函数使用
        if (this instanceof _this) {
            this[fn] = _this
            this[fn](...[...args, ...innerArgs])
            delete (this[fn])
        } else {
            context[fn](...[...args, ...innerArgs])
            delete (context[fn])
        }
    }
    result.prototype = Object.create(this.prototype)
    return this

}

function MyCall(context, ...args) {
    context = context !== null ? context : window
    let fn = Symbol()
    context[fn] = this
    context[fn](...args)
}