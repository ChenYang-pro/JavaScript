// "use strict"

function a(){
    let b = 3
    a.prototype.sayname = function(){
        console.log(b)
    }
    a.prototype.sing = function(){
        console.log("hello sing!")
    }
}

let b = new a()

console.dir(a)




