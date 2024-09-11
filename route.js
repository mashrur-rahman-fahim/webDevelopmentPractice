const express=require('express')

const router=express.Router()
const {readData,writeData,deleteData,search}=require('./function')


// router.route('/').get(readData)
router.route('/').get(readData).post(writeData)
router.route('/:id').delete(deleteData)
router.route('/query').get(search)



module.exports=router
