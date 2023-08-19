const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

const loginuser=mongoose.model("customer",userschema)

module.exports=loginuser