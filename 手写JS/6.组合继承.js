function Ball(name) {
    this.name = name
    this.play = () => {
        console.log("Ball is palying")
    }
}
Ball.prototype.get = () => {
    console.log("Ball is get!")
}

function Tennis(name) {
    Ball.call(this)
    this.name = name
}

let tens = new Tennis("Fedele")
tens.get()