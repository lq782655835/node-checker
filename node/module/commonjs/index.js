let moduleA = require('./a')

console.log(moduleA.obj.count)
console.log(moduleA.add())
console.log(moduleA.add())
console.log(moduleA.add())
console.log(moduleA.obj.count)
console.log(require('./a').obj.count)
setTimeout(() => console.log(require('./a').obj.count), 1000)