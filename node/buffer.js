let buf = new Buffer('hello world') // 初始化之后长度无法改变
console.log(buf.length, buf.toString()) // 11, hello world

buf.write('temp')
console.log(buf.length, buf.toString()) // 11, tempo world

buf.write('01234567891234567890')
console.log(buf.length, buf.toString()) // 11, 01234567891