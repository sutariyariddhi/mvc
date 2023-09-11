const {Router}=require("express");
// const isAuth = require("../middleware/isauth");
const blogrouter=Router();
blogrouter.get("/",(req,res)=>{
    res.render("blog")
})
blogrouter.post("/add",async(req,res)=>{
    req.body.userid=req.loginuser.id
    await Blogs.create(req.body)
    res.send("hello")
})
module.exports=blogrouter