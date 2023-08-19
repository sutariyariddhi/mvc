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

const studentdata=async(req, res) => {
  let data=await Student.find()
    res.send(data)
  }


  // passport
  const getadmin = (req, res) => {
    res.render("index");
  };
  const admin = (req, res) => {
    model.create(req.body);
    let user = model.findOne({ username: req.body.username });
    if (user) res.status(404).render("login");
  
    res.status(201).send("User added successfully");
  };

module.exports = { student_add, StudentImage ,studentdata,getadmin,admin};
