const koa=require('koa')
const path= require('path')
const views=require('koa-views')

const app=new koa()
app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}))
app.use(async (ctx,next)=>{
   await ctx.render('index',{title:'首页 index!'})
})
app.listen(3000,()=>{
    console.log('listen to 3000')
})