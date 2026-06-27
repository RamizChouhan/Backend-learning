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
    Marks: {
        type: String,
        required: true,
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
}, { timestamps: true });

const Student = mongoose.model("student", StudentDetails);

module.exports = Student;