
num = []
for (let i = 0; i < 2000; i++) {
    num.push(Math.floor(Math.random() * 20000));
}

// 两两匹配，nums[j]>nums[j+1] 则交换 i从0-nums.length-1 j从0-nums.length-1-i

bubble_sort = function (nums) {
    var beginTime = new Date();
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    var endTime = +new Date();
    console.log("排序用时共计" + (endTime - beginTime) + "ms");
}
bubble_sort(num)
console.log(num)