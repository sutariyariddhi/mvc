const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

const loginuser=mongoose.model("loginuser",userschema)

module.exports=loginuser