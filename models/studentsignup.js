const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
username:String,
email:String,
password:String

  
});

const loginuser = mongoose.model("loginuser", studentSchema);
module.exports =loginuser