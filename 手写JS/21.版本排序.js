

let version = ['0.4.1', '2.3.3', '0.3.2.1', '4.2', '4.3.5', '4.3.4.5']
version.sort((a, b) => {
    let version1 = a.split(".")
    let version2 = b.split(".")
    let lens = version1.length > version2.length ? version1.length : version2.length
    for (let i = 0; i < lens; i++) {
        const v1 = version1[i] ? version1[i] - 0 : 0
        const v2 = version2[i] ? version2[i] - 0 : 0
        if (v1 > v2) return 1
        else if (v1 < v2) return -1
    }
})
console.log(version)