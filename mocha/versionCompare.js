
function versionCompare(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let lens = v1.length > v2.length ? v1.length : v2.length
    for (let i = 0; i < lens; i++) {
        const a = v1[i]?v1[i]-0:0
        const b = v2[i]?v2[i]-0:0
        if (a>b) {
            console.log("----------(1)-----------")
            return
        } else if (a<b) {
            console.log("----------(-1)-----------")
            return
        }
    }
    console.log("----------(0)-----------")
}
