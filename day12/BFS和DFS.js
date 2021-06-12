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
  let que = [], count = 0
  que.push(obj)
  while (que.length) {
    count++
    let lens = que.length
    for (let i = 0; i < lens; i++) {
      let node = que.shift()
      if (typeof node.left == 'object') que.push(node.left)
      if (typeof node.right == 'object') que.push(node.right)

    }
  }
  return count

}

console.log(BFS(objs))

function DFS(obj) {
  let count = 0
  let temp_count = 1
  function dfs(obj, counts) {
    if (!obj) return
    count = counts > count ? counts : count
    if (obj.left) dfs(obj.left, counts + 1)
    if (obj.right) dfs(obj.right, counts + 1)
  }
  dfs(obj, temp_count)
  return count
}

console.log(DFS(objs))

