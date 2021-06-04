const PENDING = 'pending'
const RESLOVED = 'resolved'
const REJECTED = 'rejected'

function Promise(executor) {
    const _this = this
    _this.data = undefined
    _this.state = PENDING
    _this.callback = []

    function resolve(value) {
        if (_this.state != PENDING) return
        this.state = RESLOVED
        if (_this.callback.length > 0) {
            // 如果已经有回调了，直接调用
            setTimeout(() => {
                _this.callback.forEach(callbackObj => {
                    callbackObj.onResolved(value)
                })
            }, 0);
        }
    }

    function reject(value) {
        if (_this.state != PENDING) return
        this.state = REJECTED
        if (_this.callback.length > 0) {
            // 如果已经有回调了，直接调用
            setTimeout(() => {
                _this.callback.forEach(callbackObj => {
                    callbackObj.onRejected(value)
                })
            }, 0);
        }
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then(onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
    const _this = this
    return new Promise((resolve, reject) => {
        function handle(callback) {
            try {
                const result = callback(_this.data)
                if (result instanceof Promise) {
                    result.then(
                        value => resolve(value),
                        reason => reject(reason)
                    )
                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }
        if (_this.state === PENDING) {
            _this.callback.push({
                onResolved() { handle(onResolved) },
                onRejected() { handle(onRejected) }
            })
        } else if (_this.state === RESLOVED) {
            setTimeout(() => {
                handle(onResolved)
            }, 0);
        } else if (_this.state === REJECTED) {
            setTimeout(() => {
                handle(onRejected)
            }, 0);
        }
    })
}

Promise.all = function (promises) {
    const val = new Array(promises.length)
    let count = 0
    return new Promise((resolve,reject)=>{
        promises.forEach((p,index)=>{
            Promise.resolve(p).then{
                value=>{
                    count++
                    val[index] = value
                    if (count === promises.length) resolve(values)
                },
                reason => reject(reason)
            }
        })
    })
}