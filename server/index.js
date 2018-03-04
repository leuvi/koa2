const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')
const queryString = require('querystring')

app.use(static(path.resolve(__dirname, './assets')))

app.use(views(path.resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  if(ctx.path == '/favicon.ico') return
  console.log(queryString.parse(ctx.search.substr(1)))
  await ctx.render('index', {
    title: '苹果熊',
    name: '吖吖!!'
  })
})

app.listen(1234)
