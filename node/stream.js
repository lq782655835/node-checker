const fs = require('fs')

let readStream = fs.createReadStream('./node/snapshot/test1.png')
let writeStream = fs.createWriteStream('./node/snapshot/test1-copy.png')

readStream
    .on('data', (chunk) => {
        if (writeStream.write(chunk) === false)
            readStream.pause()
    })
    .on('end', () => writeStream.end())

writeStream.on('drain', () => readStream.resume())
