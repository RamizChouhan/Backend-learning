const Student = require("../Models/Student");

async function ShowStudentDetail(req, res) {
  console.log(req.user);
  const AllDetail = await Student.find({createdBy:req.user._id});
  console.log("show student detail alldetail :",AllDetail);
  return res.render('index', {
    AllDetail: AllDetail,
  });
}

async function GetStudentDetail(req, res) {
  
  console.log("get student detail fun : ",req.body);

  try {
    const body = req.body;

    if (!body.Name || !body.Id || !body.Course || !body.Standard || !body.Marks) {
      return res.status(400).json({
        msg: "All Fields Are Required",
      });
    }

    const data = await Student.create({
      Id: body.Id,
      Name: body.Name,
      Course: body.Course,
      Standard: body.Standard,
      Marks: body.Marks,
      createdBy:req.user._id
    });

    return res.redirect('/student'); 
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

async function handleUpdateStudentById(req, res) {
  const UpdateStudent = await Student.findOneAndUpdate({ Id: req.params.id }, req.body, { new: true });
  return res.status(200).send({ "msg": "SuccessFull", UpdateStudent });
}

async function handleDeleteStudentById(req, res) {
  await Student.findOneAndDelete({ Id: req.params.id });
  return res.status(200).send({
    "message": "SuccessFul Deleted",
  })
}

module.exports = {
  ShowStudentDetail,
  GetStudentDetail,
  handleUpdateStudentById,
  handleDeleteStudentById
}