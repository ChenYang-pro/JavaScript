//   题目描述：实现一个compose函数
//   ```
//   // 用法如下:
//   function fn1(x) {
//     return x + 1;
//   }
//   function fn2(x) {
//     return x + 2;
//   }
//   function fn3(x) {
//     return x + 3;
//   }
//   function fn4(x) {
//     return x + 4;
//   }
//   const a = compose(fn1, fn2, fn3, fn4);
//   console.log(a(1)); // 1+4+3+2+1=11
//   ```

function compose(...fn) {
  // 当fn数组的长度为0 输入什么就返回什么
  if (fn.length <= 0) return v => v
  if (fn.length == 1) return fn[0]
  // reduce,是将function逐个应作用在array的元素上，而且上一次的输出作为下一次的输入
  // 返回的是一个函数对象 ..args => prev(cur(...args)) 
  else return fn.reduce((prev, cur) => (...arguments) =>  prev(cur(...arguments)) )
}

function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 2;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3);

console.log(a(22))