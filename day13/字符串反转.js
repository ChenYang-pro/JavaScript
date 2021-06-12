

String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}

let str = "helloo"
console.log(str.reverse())