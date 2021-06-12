
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let vals = []
        let count = 1
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                val => {
                    vals.push(val)
                    count++
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