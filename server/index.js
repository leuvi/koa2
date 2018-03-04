const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'hi lxh!!'
})

app.listen(1234)
