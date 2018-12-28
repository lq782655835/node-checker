// Node 服务端
// const http = require('http')

// http
//     .createServer((req, res) => {
//         res.write('hello world')
//         res.end()
//     })
//     .listen(3001, () => console.log('3000 has opend'))

// // Node客户端
// const http = require('http')
// const querystring = require('querystring')

// const postData = querystring.stringify({
//     'msg': 'Hello World!'
//   });
//   const options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '/upload',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': Buffer.byteLength(postData)
//     }
//   };

//   const req = http.request(options, (res) => {
//     // 响应值res作为从目标接口中获取到的值，是个readable.Stream
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => console.log(`BODY: ${chunk}`));
//     res.on('end', () => console.log('No more data in response.'));
//   });
//   req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
//   });

//   // req作为客户端请求，是个writeable.Stream。添加上参数并请求出去
//   req.write(postData);
//   req.end();

// // axios库充当Node客户端
// const axios = require('axios');

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.log(error);
// });

// // superagent特色：链式调用
// const request = require('superagent');

// request
//   .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .end((err, res) => {
//     console.log(res.status)
//     console.log(res.body)
//   });

// request：老牌
// const request = require('request'); 

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => { 
//   console.log(body.url); 
//   console.log(body.explanation); 
// });

const http = require('http')
http.createServer(function(req,res){
  // req原生不带属性
  console.log(`req.Url:${req.Url}`)
  console.log(`req.query:${req.query}`, req.query)
  console.log(`req.params:${req.params}`, req.params)
  console.log(`req.path:${req.path}`)
  console.log(`req.route:${req.route}`)
  console.log(`req.body:${req.body}`, req.body) // usually in post method
  console.log(`req.cookies:${req.cookies}`) // need  cookie-parser middleware

  // req原生属性
  console.log(`req.url:${req.url}`)
  console.log(`req.headers:${req.headers}`, req.headers)
  console.log(req.headers.host)
  console.log(req.headers.cookie)
  console.log(`req.methods:${req.method}`)

  console.log('Time: %d', Date.now());

    // res.write('hello world')
    // res.end()
    // 可以在header设置任意属性
    console.log(res.setHeader('Set-Cookie', '123123'))
    console.log(res.setHeader('Set123', '123123'))
    console.log(res.getHeader('host'))
    res.end('hello')
}).listen(3002)