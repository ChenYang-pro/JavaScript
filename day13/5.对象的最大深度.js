
let objs = {
    left: {
        right: {},
    },
    right: {
        left: {
            right: {},
        },
    },
};

function BFS(obj) {
    if (typeof obj !== 'object') return
    let que = []
    let count = 0
    que.push(obj)
    while (que.length) {
        count++
        let lens = que.length
        for (let i = 0; i < lens; i++) {
            const node = que.shift()
            if (typeof node.left === 'object') que.push(node.left)
            if (typeof node.right === 'object') que.push(node.right)
        }
    }
    return count
}

// console.log(BFS(objs))

function DFS(obj) {
    let count = 0
    let temp = 0
    function dfs(obj, count_) {
        if (typeof obj !== 'object') return
        count = count_ > count ? count_ : count
        if (obj.left) dfs(obj.left, count_ + 1)
        if (obj.right) dfs(obj.right, count_ + 1)
    }
    dfs(obj, temp)
  return count
}

console.log(DFS(objs))