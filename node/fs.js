// const fs = require('fs')
// const path = require('path')

// console.log(__filename, __dirname)
// let dir = __dirname; // 等效于path.resolve(__filename, '..')
// fs.readdir(dir, (err, files) => {
//     console.log(files, err)
// })

const fs = require('fs')
const path = require('path')
let dir = './node/snapshot'
fs.readFile(path.join(dir, 'test1.png'), (err, data) => {
    console.log(err)
    console.log(data)
    console.log(Buffer.isBuffer(data))

    fs.writeFile(path.join(dir, 'test1_copy.png'), data, (error) => console.log(error ? error : 'success write'))
})
console.log(process.cwd(), __dirname, __filename)

// const fs = require('fs')
// const path = require('path')
// fs.readdir('./node', (err, data) => {
//     console.log(err)
//     console.log(data)
// })

