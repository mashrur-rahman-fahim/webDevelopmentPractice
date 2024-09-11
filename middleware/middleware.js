const logger=(req,res,next)=>{
    const date=new Date().getFullYear()
    console.log(req.url,date)
    next()
}
module.exports=logger