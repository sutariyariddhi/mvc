
const{Router}=require("express");
const{student_add ,StudentImage,}=require("../controllers/student.controller")
const{chek_data,checkCookies}=require("../middleware/student.middleware")
const multer = require("multer");
let router=Router();
let storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("profile");

router.patch("/images/:id", upload, StudentImage);
router.post("/images", upload, StudentImage);

router.get("/" , (req,res)=>{
    res.render("home")
})
router.get("/upload", (req, res) => {
  res.render("imgupload")
})
router.get("/form", (req, res) => {
    res.render("index");
  });
  
  router.get("/signup", (req, res) => {
    res.render("signup");
  });
  router.get("/login", (req, res) => {
    res.render("login");
  });
  // router.get("/data",studentdata )
  
  
  router.get("/signup", (req, res) => {
    res.render("signup")
  })
  
  router.post("/signup", async(req, res) => {
    res.send("welcome")
    console.log(req.body);
    
  })
  router.post("/login", async(req, res) => {
    res.send("welcome")
  
    
  })
  router.get("/setcookie", (req, res) => {
  res.cookie("cookie","array")
    res.send(" cookies ")
  })
  
 
  
  router.get("/session", (req, res) => {
    if(req.session.visit){
      req.session.visit++
      res.send(`session ${req.session.visit}`)
    }
    else{
      req.session.visit=1
      res.send(`session ${req.session.visit}`)
    }
  })
router.post("/add",chek_data,student_add)
module.exports=router;