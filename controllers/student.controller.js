const student_add=async(req,res)=>{
    try {
        console.log(req.body);
        await student.create(req.body);
        res.send("student added");
    } catch (error) {
        res.send(error.message);
    }
};
module.exports={student_add}