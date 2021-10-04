const obj = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26,
}
let str = 'ADDA'
let last = 'a',res=10,count=2
let lens = 4
for (let i = 0; i < lens;i++){
    let curRes = 0
    for (let j = 0; j < lens;j++) {
        let ch = str[i].toLowerCase()
        if (j===i){
            curRes++
            for (let k=0;k<count;k++) {
               if(j<lens) {
                curRes+=2
                   j++
               }
            }
            if(j<lens) last = str[j-1].toLowerCase()
        }
        let left = Math.abs(obj[ch]-obj[last]), right= Math.abs(obj['z']-obj[ch]+obj[last])
        left <= right ? curRes+=left : curRes+=right
        curRes++
        last = ch
    }
    res = curRes<=res? curRes:res
}

console.log(res)