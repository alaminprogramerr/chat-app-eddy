const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    activeStatus:Boolean
})



const userModel=mongoose.model('userModel',userSchema)
module.exports =userModel