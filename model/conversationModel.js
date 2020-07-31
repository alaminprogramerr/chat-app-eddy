const mongoose =require('mongoose')
const Schema=mongoose.Schema
const conversationSchema=new Schema({
    between:'',
    conversation:[]
})

const conversationModel=mongoose.model('conversationModel',conversationSchema)
module.exports=conversationModel