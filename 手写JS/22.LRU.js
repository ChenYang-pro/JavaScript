
// LRU: 最近最少使用算法 是一种常用的页面置换算法，选择内存中最近最久未使用的页面予以淘汰。
class LRU {
    constructor(max) {
        this.secretKey = new Map()
        this.capacity = max
    }

    get(key) {
        // Map中已经存在
        if (this.secretKey.has(key)) {
            let tempVal = this.secretKey.get(key)
            this.secretKey.delete(key)
            // 重新放入
            this.secretKey.set(key, tempVal)
            return tempVal
        } else return -1
    }

    put(key, val) {
        if (this.secretKey.has(key)) {
            this.secretKey.delete(key)
            this.secretKey.set(key, val)
        } else {
            if (this.secretKey.size >= this.capacity) {
                // 如果已经达到最大长度，则把最前面的删除
                this.secretKey.delete(this.secretKey.keys().next().value)
                this.secretKey.set(key, val)
            } else if (this.secretKey.size < this.capacity) this.secretKey.set(key, val)
        }
    }
}

let cache = new LRU(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("cache.get(1)", cache.get(1))// 返回  1
cache.put(3, 3);// 该操作会使得密钥 2 作废
console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
cache.put(4, 4);// 该操作会使得密钥 1 作废
console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
console.log("cache.get(3)", cache.get(3))// 返回  3
console.log("cache.get(4)", cache.get(4))// 返回  4
