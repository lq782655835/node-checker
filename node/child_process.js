// // base
// const {exec} = require('child_process')

// exec('node ./node/mocha_module.js', function(error, stdout, stderr) {
//     console.log(`stdout:${stdout}`)
//     console.log(error, stderr)
// })

// spawn-stdio
const {spawn, exec} = require('child_process')
let p = spawn('npm', ['run', 'public'])
let p = spawn('node', ['./node/mocha_module.js', 'a', 'b'], {stdio: 'inherit'})
console.log('child pid:', p.pid);
console.log(p.stdout)
p.on('exit', code => {
    console.log('exit:', code);
});
// 等效于
// let p = exec('node ./node/mocha_module.js a b', (err, stdout, stderr) => console.log(err, stdout, stderr))

process.on('SIGTERM', () => p.kill('SIGTERM'))
process.on('SIGINT', () => p.kill('SIGINT'))
process.on('SIGBREAK', () => p.kill('SIGBREAK'))
process.on('SIGHUP', () => p.kill('SIGHUP'))
process.on('exit', () => console.log('exit'))

// pipe
// const {spawn} = require('child_process');
// const find = spawn('find', ['.', '-type', 'f']);
// const wc = spawn('wc', ['-l']);
// find.stdout.pipe(wc.stdin);
// wc.stdout.on('data', (data) => {
//     console.log(`Number of files ${data}`)
// });