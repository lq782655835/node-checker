const fs = require('fs')

let readStream = fs.createReadStream('./node/snapshot/test1.png')
let writeStream = fs.createWriteStream('./node/snapshot/test1-copy.png')

// readStream
//     .on('data', (chunk) => {
//         // 当读取较大文件时，写入流的速度可能没有读入的速度快
//         // 所以这里做了一个处理，没写完暂停读入流
//         if (writeStream.write(chunk) === false)
//             readStream.pause()
//     })
//     .on('end', () => writeStream.end())

// // 这里配合上面pause，写完了继续读入流
// writeStream.on('drain', () => readStream.resume())

// 使用管道pipe方式，实现以上功能
writeStream.on('pipe', () => console.log(12323))
readStream.pipe(writeStream)

