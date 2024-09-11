const express=require('express')
const app=express()
const data=require('./route')
app.use(express.json())
const logger=require('./middleware/middleware')
// app.use(express.static('./'))
app.use(logger)
app.use('/',data)
app.listen(4000,()=>{
    console.log("connected")
})

