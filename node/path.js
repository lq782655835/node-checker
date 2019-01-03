const path = require('path')

const filePath = false ? '/foo/bar/baz/asdf/quux.html' : './bar/baz/asdf/quux.html'
console.log(path.basename(filePath)) // quux.html
console.log(path.dirname(filePath)) // ./bar/baz/asdf
console.log(path.extname(filePath)) // .html
console.log(path.isAbsolute(filePath)) // false
