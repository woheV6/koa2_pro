const Koa= require('koa')
const bodyparser=require('koa-bodyparser')
const fs= require('fs')
const app = new Koa()
app.use(bodyparser())
app.use(async (ctx)=>{
    const {request,url}=ctx
    const {query,querystring}=request
    const ctx_query=ctx.query
    const ctx_querystring=ctx.querystring
    const html=await route(url)
    ctx.body=html
})
async function route(url){
    let page=''
    switch(url){
        case '/':
            page='index.html'
            break
        default:
            page='404.html'
            break
    }
    const html=await readPage(page)
    return html
}
function readPage(page){
    return new Promise((resolve,reject)=>{
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}
app.listen(3000,()=>{
    console.log('[dome] start-quick is starting at port 3000')
})
