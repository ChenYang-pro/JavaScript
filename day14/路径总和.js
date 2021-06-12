var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let cur = root.val
    let res = false
    function dfs(root, cur) {
        if (!root.left && !root.right) {
            if (cur === targetSum) res = true
            return
        }
        if (root.left) dfs(root.left, cur + root.left.val)
        if (root.right) dfs(root.right, cur + root.right.val)
    }
    dfs(root, cur)
    return res
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1, left, right)

console.log(hasPathSum(root, 4))