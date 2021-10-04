class Scheduler {
    constructor(limit) {
        this.queue = [];
        this.maxCount = limit
        this.runCounts = 0
    }
    add(time, val) {
        const promiseCreate = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                    console.log(val)
                }, time);
            })
        }
        this.queue.push(promiseCreate)
    }
    request() {
        if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) return
        this.runCounts++
        this, this.queue.shift()().then(() => {
            this.runCounts--
            this.request()
        })
    }
    start() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request() 
        }
    }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.start();