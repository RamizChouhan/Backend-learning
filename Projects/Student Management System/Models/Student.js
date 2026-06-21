const mongoose = require("mongoose");

const StudentDetails = mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        unique: true
    },

    Name: {
        type: String,
        required: true
    },

    Course: {
        type: String,
        required: true,
    },
    Standard: {
        type: String,
        required: true,
    },
    Result: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("student", StudentDetails);

module.exports = Student;