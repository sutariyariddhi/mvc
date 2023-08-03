const mongoose=require("mongoose");
let studentSchema=new mongoose.Schema({
    name:String,
    number:Number,
    course:String,
    grid:Number,
    city:String
})
const student=mongoose.model("student",studentSchema)
module.exports=student