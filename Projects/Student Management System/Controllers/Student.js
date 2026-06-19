const Student = require("../Models/Student");

async function ShowStudentDetail(req,res){
    const AllStudent = await Student.find({});
    return res.render('index',{
        AllStudent:AllStudent,
    });
}

async function GetStudentDetail(req, res) {
      console.log("POST Route Hit");
  console.log(req.body);

  try {
    const body = req.body;

    if (!body.name || !body.Id) {
      return res.status(400).json({
        msg: "All Fields Are Required",
      });
    }

    const data = await Student.create({
      name: body.name,
      Id: body.Id,
    });

    console.log("data:", data);

    return res.status(201).json({
      message: "Successful",
      student: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = {
    ShowStudentDetail,
    GetStudentDetail
}