const vm = require('vm')

// node vm 虚拟机创造了一个隔离的沙箱环境，使得执行代码可以无副作用
// let a = 1;
// var result = vm.runInNewContext('var b = 2;  a + b;', {a});
// console.log(result);    // 3
// console.log(a);         // 1
// console.log(typeof b);  // undefined

let sandbox = { a: 1}
sandbox = vm.createContext(sandbox)

vm.runInContext('this.test = function (num){console.log(123);return num}', sandbox) // 给沙箱注入函数
let result = vm.runInContext('test(a * 2)', sandbox) // runInContent的sandbox一定需要通过vm.createContext进行创建才不会报错
console.log(result) // 2
