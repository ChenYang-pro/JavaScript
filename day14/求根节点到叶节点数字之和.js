
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1, left, right)

var sumNumbers = function (root) {
    if (!root) return
    var sum = 0
    let cur_ = ''
    cur_ += root.val
    function dfs(root, cur) {
        if (root.left === null && root.right === null) {
            sum += parseInt(cur)
            return
        }
        if (root.left) dfs(root.left, cur + root.left.val)
        if (root.right) dfs(root.right, cur + root.right.val)
    }
    dfs(root, cur_)
    return sum
};

var sumNumbers_ = function (root) {
    // BFS
    if (!root) return
    let que = [{
        curSum: root.val + '',
        cur: root
    }]
    let sum = 0
    while (que.length) {
        let node = que.pop()
        if (node.cur.left == null && node.cur.right == null) {
            sum += parseInt(node.curSum)
        }
        if (node.cur.left) que.push({ curSum: node.curSum + node.cur.left.val, cur: node.cur.left })
        if (node.cur.right) que.push({ curSum: node.curSum + node.cur.right.val, cur: node.cur.right })
    }
    return sum
};

console.log(sumNumbers_(root))