// var result = 'abc'.repeat(2)
// console.log(result)

console.log(undefined == null) // true
console.log(0 == null) // false
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call('')) // [object String]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call(1)) // [object Number]