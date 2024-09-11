const os=require('os')
const fs=require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')
const http=require('http')
const { Server } = require('https')
fs.writeFileSync('./test.txt','this is my first app')

fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})
setTimeout(()=>{
    console.log('hi')
},2000)
// setInterval(()=>{
//     console.log('callling')
// },3000)
const func1=(msg)=>{
    return new Promise((resolve,rejects)=>{
        if(resolve){
          
            resolve(msg)
        }
        else
        {
          
            rejects("no msg")
        }
    })

}
const start=async(msg)=>{
    const test=await func1(msg);
    console.log(test)


}
start("done")
console.log(os.uptime())
console.log(os.userInfo())
const server=http.createServer((req,res)=>{
      
})
server.listen(4000,()=>{
    console.log('connected')
})