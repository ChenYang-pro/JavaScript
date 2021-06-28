// 手写Promise

function Promise(executor) {
    this.data = undefined
    this.callback = []
    this.state = 'PENDING'
    function resolve(val) {
        // 如果该Promise对象状态已经发生改变了，就无法再改变
        if (this.state !== 'PENDING') return
        this.state = 'RESOLVED'
        this.data = val
        if (this.callback.length > 0) setTimeout(() => {
            this.callback.forEach(callbackObj => callbackObj.onResolved(val))
        }, 0);
    }
    function reject(val) {
        // 如果该Promise对象状态已经发生改变了，就无法再改变
        if (this.state !== 'PENDING') return
        this.state = 'REJECTED'
        this.data = val
        if (this.callback.length > 0) setTimeout(() => {
            this.callback.forEach(callbackObj => callbackObj.onRejected(val))
        }, 0);
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
Promise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof (onResolved) === 'function' ? onResolved : value => value
    onRejected = typeof (onRejected) === 'function' ? onRejected : reason => { throw reason }
    const _this = this
    return new Promise((resolve, reject) => {
        function handle(callback) {
            try {
                const result = callback(_this.data)
                if (result instanceof Promise) {
                    result.then(
                        val => resolve(val),
                        reason => reject(reason)
                    )
                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }
        if (_this.state === 'RESOLVED') {
            setTimeout(() => {
                handle(onResolved)
            }, 0);
        } else if (_this.state === 'REJECTED') {
            setTimeout(() => {
                handle(onRejected)
            }, 0);
        } else {
            _this.callback.push({
                onResolved() { handle(onResolved) },
                onRejected() { handle(onRejected) }
            })
        }
    })
}
Promise.resolve = function (val) {
    return new Promise((resolve, reject) => {
        if (val instanceof Promise) {
            val.then(resolve, reject)
        } else resolve(val)
    })
}
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 1, vals = []
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                val => {
                    count++
                    vals[index] = val
                    if (count === promises.length) resolve(vals)
                },
                reason => reject(reason)
            )
        })
    })
}
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                val => resolve(val),
                reason => reject(reason)
            )
        })
    })
}
Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 1
        let vals = []
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                val => resolve(val),
                reason => {
                    count++
                    vals[index] = reason
                    if (count === promises.length) reject(vals)
                })
        })
    })
}
Promise.allSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 1
        let status = []
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                val => status[index] = { statu: 'fulfilled', value: val },
                reason => status[index] = { statu: 'rejected', reason: reason },
            ).finally(() => {
                if (count === promises.length) resolve(status)
            })
        })
    })
}

