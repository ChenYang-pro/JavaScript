console.log(1)

new Promise(resolve=>{
    console.log(2)
    setTimeout(() => {
        console.log(3)
        resolve()
    }, 0);
}).then(val=> console.log(4))

console.log(5)