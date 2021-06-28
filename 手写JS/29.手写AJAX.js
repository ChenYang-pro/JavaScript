// Ajax 本身是用 XMLHttpRequest 实现的

function myAjax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url, false)
        // 表示客户端提交给服务器文本内容的编码方式 是URL编码
        xhr.setRequestHeader("Content-Type", "application/json")
        // onreadystatechange() 只要readyState属性变化,就会调用对应的处理函数
        xhr.onreadystatechange = function () {
            // xhr.readyState 表示操作已经完成
            if (xhr.readyState!==4) return
            if (xhr.status === 200 || xhr.status===304) resolve(xhr.responseText)
            else reject(xhr.responseText)
        }
        xhr.send()
    })
}