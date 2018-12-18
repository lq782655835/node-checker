var express = require('express')
var logger = require('morgan')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')


app.use(logger()) // 每次都记录日志
app.use(bodyParser.urlencoded({ extended: false })) // req.body can get value by post method
app.use(bodyParser.json())

app.use((req, res, next) => { // 中间件
    console.log(`req.query:${req.query}`, req.query)
    console.log(`req.params:${req.params}`, req.params)
    console.log(`req.path:${req.path}`)
    console.log(`req.route:${req.route}`)
    console.log(`req.body:${req.body}`, req.body) // usually in post method
    console.log(`req.cookies:${req.cookies}`) // need  cookie-parser middleware

    // http.IncomingMessage
    console.log(`req.url:${req.url}`)
    console.log(`req.headers:${req.headers}`, req.headers)
    console.log(`req.methods:${req.method}`)
    console.log('Time: %d', Date.now());
    next()
})

// base
app.get('/api', (req, res) => res.send('api router'))
app.get('/api/:id', (req, res) => {
    console.log(req.url, req.path, req.params, req.body)
    res.send('api detail')
})

// mulit route
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}
var cb2 = function (req, res) {
    res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);

// route
app.route('/example/d')
.get(function(req, res) {
    res.send('Get a random book');
})
.post(function(req, res) {
    res.send('Add a book');
})
.put(function(req, res) {
    res.send('Update the book');
});

// route微型路由文件
var birds = require('./routes/birds')
app.use('/birds', birds)

app.get('/file', function(req, res) {
    fs.readFile('./package.json', function(err, data) {
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        // res.end(data)
        // or
        fs.createReadStream('./package.json').pipe(res)
    })
})

app.use(express.static(__dirname+'/public'))
app.listen(3000, () => console.log('success 3000l'))