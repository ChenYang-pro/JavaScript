
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let lens = promises.length
        let count = 1
        let vals = []
        promises.forEach((val, index) => Promise.resolve(val).then(
            val => {
                if (count === lens) resolve(vals)
                vals.push(val)
                count++
            },
            reason => reject(reason)
        ))
    })
}

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) =>
            Promise.resolve(item).then(
                val => resolve(val),
                reason => reject(reason)
            )
        )
    })
}