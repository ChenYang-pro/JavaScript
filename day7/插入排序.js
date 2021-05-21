num = []
for (let t = 0; t < 2000; t++) {
    num.push(Math.floor(Math.random() * 20000));
}

// 插入排序：扑克牌，把元素放到指定元素之间
function insertSort(nums){
    var beginTime = new Date();
    var preIndex, cur;
    for (let i = 1; i < nums.length; i++) {
        preIndex = i-1;
        cur = nums[i]
        while (preIndex>=0 && nums[preIndex] >cur) {
            nums[preIndex+1] = nums[preIndex]
            preIndex--;
        }
        nums[preIndex+1] = cur;
    }
    var endTime = +new Date();
    console.log("排序用时共计" + (endTime - beginTime) + "ms");
}

insertSort(num)
console.log(num)
