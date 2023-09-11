const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    title:{type:mongoose.Schema.ObjectId=ref},
    img:String,
    
})

const Blogs=mongoose.model("loginuser",userschema)

module.exports=Blogs