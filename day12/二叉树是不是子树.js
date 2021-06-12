funciton hasChild(root1, root2){
    if (root1 == null || root2 == null) return false
    return isChild(root1, root2) || hasChild(root1.left, root2) || hasChild(root1.right, root2)
}

function isChild(root1, root2) {
    if (root1 == null || root2 == null) return false
    if (root1.val = root2.val) return isChild(root1.left, root2.left) && isChild(root1.right, root2.right)
    return false
}