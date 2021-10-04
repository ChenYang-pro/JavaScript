function jsonp ({url,params,callback}){
    return new Promise((resolve,_reject)=>{
        let script = document.createElement("script")
        window[callback] = function(data) {
            resolve(data)
            document.removeChild(script)
        }
        params = {...params, callback}
        let arr = []
        for (let key of params){
            arr.push(`${key}=${params[key]}`)
        }
        script.src = `${url}?${arr.join("&")}`
        document.body.appendChild(script)
    })
}