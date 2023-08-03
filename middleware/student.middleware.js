const chek_data=(req,res,next)=>{
    let{name,number,course}=req.body;
    if (name&&number&&course) {
        next()
    } else {
        res.send("enter a valid details")
    }
}
module.exports={chek_data}