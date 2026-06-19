const express = require("express");
const {ShowStudentDetail,GetStudentDetail} = require("../Controllers/Student");
const router = express.Router();

router.route("/")
.get(ShowStudentDetail)
.post(GetStudentDetail);

module.exports = router;