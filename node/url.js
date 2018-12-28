// 老版API
const url = require('url');
const myURL =
  url.parse('https://example.org/foo?type=123#123');
console.log(myURL)

// 新版API，URL对象
// const { URL } = require('url');
// const myURL = new URL('https://example.org/foo');
// console.log(myURL.href);

// const url = require('url');
// let a = url.resolve('/one/two/three', 'four');         // '/one/two/four'
// let b = url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
// let c = url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
// let d = url.resolve('http://example.com/one/test', '/two'); // 'http://example.com/two'
// console.log(a, b,c, d)
