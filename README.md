# koa2_pro
koa2学习
- 第一个知识点async await
  - await 只能存在于async中，并且他接收一个 promise对象或者一个普通函数
- 解析post表单数据
  - 可以理解为中间件 bodyparser
    ```
        function parsePostData(ctx){
            return new Promise((resolve,reject)=>{
                try{
                    let pastData=''
                    ctx.req.on('data',data=>{
                        pastData+=data
                    })
                    ctx.req.on('end',()=>{
                        resolve(pastData)
                    })
                }catch(error){
                    reject(error)
                }
            })
        }
        function parseQueryStr(data){
            const d=data.split('&')
            const parm ={}
            for(let item of d){
                const date= item.split('=')
                parm[date[0]]=decodeURIComponent(date[1])   
            }
            return parm
        }
    ```