const express = require("express");
const { ShowStudentDetail, GetStudentDetail, handleUpdateStudentById, handleDeleteStudentById } = require("../Controllers/Student");
const router = express.Router();

router.route("/")
    .get(ShowStudentDetail)
    .post(GetStudentDetail);


router.route("/:id")
    .patch(handleUpdateStudentById)
    .delete(handleDeleteStudentById);

module.exports = router;