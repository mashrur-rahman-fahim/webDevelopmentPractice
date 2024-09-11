const express=require('express')
const app=express()
const data=require('./route')
app.use(express.json())
// app.use(express.static('./'))
app.use('/',data)
app.listen(3000,()=>{
    console.log("connected")
})

