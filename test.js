async function test(){
    return 'hello world'
}
function test1(){
    return '普通funtion'
}
function takeLnagtime(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('我来自星球') 
        }, 2000);
    })
}
async function TextTra(){
    const v=await  test()
    const v1=await  test1()
    const v2=await takeLnagtime()
    console.log(v,v1,v2)
}
TextTra()