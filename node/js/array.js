// reduce
// let arr = ['-s', 'aaaa', '-t', 'ccc']
// let obj = {
//     s: 'aaa',
//     t: 'ccc'
// };
// let params = Object.keys(obj).reduce((pre, current) => {
//     return pre.concat(current, obj[current])
// }, []);
// console.log(params); // [ 's', 'aaa', 't', 'ccc' ]
let l = console.log;
// console.log([0, 1, false, 2, '', 3].filter(Boolean))
// const flatten = [1, [2, [3, [4]], 5]].reduce( (a, b) => a.concat(b), [])

// [1, 2, 3].reduce((pre, cur, index) => {
//     l(pre,cur)
//     return pre + cur
// }, 0)

// slice
// var arr = [1, 2, 3, 4, 5]

// console.log(arr.slice()) // [1, 2, 3, 4, 5]
// console.log(arr.slice(2)) // [3, 4, 5]
// console.log(arr.slice(-2, 4)) // [4] 等于 arr.slice(-2+5, 4)

// let arrayLike = {
//     　'0':'a',
//     　'1':'b',
//     　'2':'c',
//   　  length: 3 // 长度不符合则超出的长度对象都是undefined
//   　　}
// console.log([].slice.call(arrayLike)) //[a,b,c]

// splice
var arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 10); // [ 1, 10, 2, 3, 4, 5 ]
arr.splice(1, 1, 10); // [ 1, 10, 3, 4, 5 ]
// arr.splice(100, 1, 10); // [ 1, 2, 3, 4, 5, 10 ]
// arr.splice(1) // [ 1 ]
// arr.splice(1, 100) // [ 1 ]
// arr.splice(1, 100, ['new1', 'new2']) // [ 1, [ 'new1', 'new2' ] ]
// arr.splice(1, 100, 'new1', 'new2') // [ 1, 'new1', 'new2' ]
console.log(arr)