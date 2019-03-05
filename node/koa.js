// const Koa = require('koa');
// const app = new Koa();

// // logger

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);

const Koa = require('koa')
const getPort = require("get-port");
const open = require("open");
const router = require("koa-router")();
const serve = require("koa-static");
const path =require('path')

const sitePath = path.join(__dirname, "../public/");
router.get('/api/test', async ctx => {
  const query = ctx.query
  ctx.body = 'hello' + query.path
})

const app = new Koa()
app.use(router.routes());
app.use(serve(sitePath))
app.on("error", err => {
  console.error("Server error", err);
  console.error(
    "Let us know of the error at https://github.com/pomber/git-history/issues"
  );
});
app.use( async ( ctx ) => {
  let url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

const port = 3001
app.listen(port, () => {
  console.log(`[demo] request get is starting at port ${port}`)
  open(`http://localhost:${port}`);
})