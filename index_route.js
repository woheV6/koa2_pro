const Koa= require('koa')
const Router=require('koa-router')
const router=new Router(
    {
       // prefix:'/mesapi' // 为所有的路由加前缀
    }
)
const app = new Koa()
// 新建子路由home and page
const home=new Router()
home.get('/index',async (ctx,next)=>{
    ctx.body='home index page'
}).get('/order', async (ctx,next)=>{
    ctx.body='home order page'
})
const my=new Router()
my.get('/index',async (ctx,next)=>{
    ctx.body='my index page'
}).get('/order', async (ctx,next)=>{
    ctx.body='my order page'
})
router.get('/',async (ctx,next)=>{
      ctx.body=ctx.query
    }).get('/todo',async (ctx,next)=>{
        ctx.body='todo page'
    }).get('/home', async(ctx,next)=>{
        ctx.body='home page'
    }).get('/my', async(ctx,next)=>{
        ctx.body='my page'
    })

// 装载所有的子路由
router.use('/home',home.routes(),home.allowedMethods())
router.use('/my',my.routes(),my.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
    
app.listen(3000,()=>{
    console.log('[dome] start-quick is starting at port 3000')
})
