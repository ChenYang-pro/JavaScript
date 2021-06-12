
function dataFormat(date) {
    let res = date.split(" ")
    res[0] = res[0].split("-")
    res = [...res[0], res[1]]
    return res.join("/")
}

const d1 = "2020-01-01 第一季度"
console.log(dataFormat(d1))