
function compare(version1,version2){
    version1 = version1.split('.')
    version2 = version2.split(".")
    let max_len = Math.max(version2.length, version1.length)
    for (let i = 0; i < max_len; i ++) {
        let a = version1[i]===undefined?0:version1[i]-0
        let b = version2[i]===undefined?0:version2[i]-0
        if (a>b) console.log(1)
        else if (a<b) console.log(-1)
    }
    console.log(0)
}

let str1 = '1.012'
let str2 = '1.001'

compare(str1,str2)