num = []
for (let t = 0; t < 2000; t++) {
    num.push(Math.floor(Math.random() * 20000));
}

// 找到最大/最小，放到末尾/开头

function selectSort(nums) {
    var beginTime = new Date();
    for (var i = 0; i < nums.length - 1; i++) {
        let minIndex = i
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) minIndex = j
        }
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    var endTime = +new Date();
    console.log("排序用时共计" + (endTime - beginTime) + "ms");
}

selectSort(num)
console.log(num)