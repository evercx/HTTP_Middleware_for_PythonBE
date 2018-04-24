const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'HTTP Server'
  })
})



module.exports = router;
