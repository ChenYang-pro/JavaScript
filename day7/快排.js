num = []
for (let t = 0; t < 2000; t++) {
    num.push(Math.floor(Math.random() * 20000));
}

function quickSort(nums, l, r) {

    if (l >= r) return

    let left = l, right = r;
    let pivot = nums[left]
    while (left < right) {
        while (left < right && nums[right] >= pivot) right--
        if (left < right) nums[left] = nums[right]
        while (left < right && nums[left] <= pivot) left++
        if (left < right) nums[right] = nums[left]
        if (left >= right) nums[left] = pivot
    }
    quickSort(nums, l, right - 1)
    quickSort(nums, right + 1, r)
}


var beginTime = new Date();
quickSort(num, 0, num.length - 1)
var endTime = new Date();
console.log("排序用时共计" + (endTime - beginTime) + "ms");
console.log(num)