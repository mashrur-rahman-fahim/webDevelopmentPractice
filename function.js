
const { json } = require('express')
const data=require('./data')
const express = require('express')

const app = express()
app.use(express.json())

const readData=(req,res)=>{
   
    res.status(200).json({success:true,data:data})
}
const writeData=(req,res)=>{
    const newData=req.body
    const currData=[...data.data,newData]
    res.send(currData)
}
const deleteData=(req,res)=>{
    const {id}=req.params
    const currData=data.data.filter((d)=>d.id!=Number(id))
    res.send(currData)

}

const search=(req,res)=>{
    const {limit,srch}=req.query
    console.log(typeof limit)
    let newData=data.data.slice(0,Number(limit))
    newData=newData.filter((data)=>data.name.startsWith(srch))
    res.send(newData)

}
module.exports={readData,writeData,deleteData,search}