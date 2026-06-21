const Student = require("../Models/Student");

async function ShowStudentDetail(req, res) {
  const AllStudent = await Student.find({});
  return res.render('index', {
    AllStudent: AllStudent,
  });
}

async function GetStudentDetail(req, res) {
  console.log("POST Route Hit");
  console.log(req.body);

  try {
    const body = req.body;

    if (!body.Name || !body.Id || !body.Course || !body.Standard || !body.Result) {
      return res.status(400).json({
        msg: "All Fields Are Required",
      });
    }

    const data = await Student.create({
      Id: body.Id,
      Name: body.Name,
      Course: body.Course,
      Standard: body.Standard,
      Result: body.Result,

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