const chek_data=(req,res,next)=>{
    let{name,number,course}=req.body;
    if (name&&number&&course) {
        next()
    } else {
        res.send("enter a valid details")
    }
}
const checkCookies = (req, res, next) => {
    console.log(req.cookies);
  
    if(req.cookies.user){
  
      next();
    }
    else{
      res.redirect("/student/signup");
    }
  }


module.exports={checkCookies,chek_data}









 