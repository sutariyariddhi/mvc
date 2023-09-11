const getdir=require("../components");
const student=require("../models/student-schema")
const student_add = async (req, res) => {
  try {
    console.log(req.body);
    await student.create(req.body);
    res.send("student added");
  } catch (error) {
    res.send(error.message);
  }
 
};
const StudentImage = async (req, res) => {
  let path = getdir();
  await student.findByIdAndUpdate(req.params.id, {
    image: path + "/" + req.file.path,
  });
  res.send("image added successfully");
};



  // passport
  const getadmin = (req, res) => {
    res.render("index");
  };
  
  const studentdata=async(req, res) => {
    let data=await Student.find()
      res.send(data)
    }
  


module.exports = { student_add, StudentImage ,studentdata,getadmin};
